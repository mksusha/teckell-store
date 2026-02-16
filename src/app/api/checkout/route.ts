// app/api/checkout/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { customer, order } = body;

        // Создаем транспорт для отправки почты через Gmail
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Формируем красивое HTML-письмо с заказом
        const mailOptions = {
            from: `"Магазин заказы" <${process.env.SMTP_USER}>`,
            to: 'tsp.odett@gmail.com', // Ваша почта для заказов
            subject: `🛒 Новый заказ от ${customer.name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(135deg, #3c3937, #c9b037); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
                        .header h1 { margin: 0; font-size: 28px; }
                        .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
                        .section { background-color: white; padding: 20px; margin-bottom: 20px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                        .section h2 { color: #c9b037; margin-top: 0; border-bottom: 2px solid #c9b037; padding-bottom: 10px; }
                        .info-grid { display: grid; grid-template-columns: 120px 1fr; gap: 10px; margin-bottom: 15px; }
                        .info-label { font-weight: bold; color: #666; }
                        .info-value { color: #333; }
                        table { width: 100%; border-collapse: collapse; margin-top: 15px; }
                        th { background-color: #f0f0f0; padding: 12px; text-align: left; font-weight: bold; color: #3c3937; }
                        td { padding: 12px; border-bottom: 1px solid #eee; }
                        .total-row { font-weight: bold; background-color: #f9f0c0; }
                        .total-row td { border-bottom: none; }
                        .grand-total { font-size: 18px; color: #c9b037; font-weight: bold; }
                        .footer { text-align: center; margin-top: 20px; color: #999; font-size: 12px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🛍️ Новый заказ в магазине</h1>
                        </div>
                        <div class="content">
                            <!-- Информация о клиенте -->
                            <div class="section">
                                <h2>👤 Информация о покупателе</h2>
                                <div class="info-grid">
                                    <div class="info-label">Имя:</div>
                                    <div class="info-value">${customer.name}</div>
                                    <div class="info-label">Email:</div>
                                    <div class="info-value">${customer.email}</div>
                                    <div class="info-label">Телефон:</div>
                                    <div class="info-value">${customer.phone}</div>
                                </div>
                            </div>

                            <!-- Детали заказа -->
                            <div class="section">
                                <h2>📦 Детали заказа</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Товар</th>
                                            <th>Кол-во</th>
                                            <th>Цена</th>
                                            <th>Сумма</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        ${order.items.map((item: any) => `
                                            <tr>
                                                <td>${item.name}</td>
                                                <td>${item.quantity}</td>
                                                <td>${item.price} €</td>
                                                <td>${item.total} €</td>
                                            </tr>
                                        `).join('')}
                                    </tbody>
                                </table>
                            </div>

                            <!-- Итоги -->
                            <div class="section">
                                <h2>💰 Итоговая сумма</h2>
                                <table>
                                    <tr>
                                        <td><strong>Подытог:</strong></td>
                                        <td align="right">${order.subtotal} €</td>
                                    </tr>
                                    <tr>
                                        <td><strong>НДС (22%):</strong></td>
                                        <td align="right">${order.vat} €</td>
                                    </tr>
                                    <tr class="total-row">
                                        <td><strong>ВСЕГО К ОПЛАТЕ:</strong></td>
                                        <td align="right" class="grand-total">${order.total} €</td>
                                    </tr>
                                </table>
                            </div>

                            <p style="text-align: center; margin-top: 20px; color: #666;">
                                ⏰ Время заказа: ${new Date().toLocaleString('ru-RU')}
                            </p>
                        </div>
                        <div class="footer">
                            <p>Это письмо отправлено автоматически с формы заказа вашего сайта.</p>
                            <p>© ${new Date().getFullYear()} Ваш магазин</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
            // Текстовая версия
            text: `
                НОВЫЙ ЗАКАЗ
                
                Информация о покупателе:
                Имя: ${customer.name}
                Email: ${customer.email}
                Телефон: ${customer.phone}
                
                Детали заказа:
                ${order.items.map((item: any) =>
                `${item.name} - ${item.quantity} x ${item.price} € = ${item.total} €`
            ).join('\n')}
                
                Итого:
                Подытог: ${order.subtotal} €
                НДС (22%): ${order.vat} €
                ВСЕГО: ${order.total} €
                
                Время заказа: ${new Date().toLocaleString('ru-RU')}
            `,
        };

        // Отправляем письмо
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: 'Заказ успешно оформлен'
        });

    } catch (error) {
        console.error('Ошибка оформления заказа:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Не удалось оформить заказ'
            },
            { status: 500 }
        );
    }
}