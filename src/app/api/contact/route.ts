// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, company, message } = body;

        // Создаем транспорт для отправки почты через Gmail
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true для 465, false для других портов
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Формируем красивое HTML-письмо
        const mailOptions = {
            from: `"Сайт контакты" <${process.env.SMTP_USER}>`,
            to: 'tsp.odett@gmail.com', // Ваша почта для заказов
            subject: `Новое сообщение с сайта от ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background-color: #3c3937; color: white; padding: 20px; text-align: center; }
                        .header h1 { margin: 0; font-size: 24px; }
                        .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
                        .field { margin-bottom: 20px; }
                        .field-label { font-weight: bold; color: #DEC560; margin-bottom: 5px; }
                        .field-value { background-color: white; padding: 10px; border-radius: 4px; border: 1px solid #eee; }
                        .message-box { background-color: white; padding: 15px; border-radius: 4px; border: 1px solid #eee; white-space: pre-wrap; }
                        .footer { text-align: center; margin-top: 20px; color: #777; font-size: 12px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Новое сообщение с сайта</h1>
                        </div>
                        <div class="content">
                            <div class="field">
                                <div class="field-label">👤 Имя:</div>
                                <div class="field-value">${name}</div>
                            </div>
                            
                            <div class="field">
                                <div class="field-label">📧 Email:</div>
                                <div class="field-value">${email}</div>
                            </div>
                            
                            <div class="field">
                                <div class="field-label">📞 Телефон:</div>
                                <div class="field-value">${phone}</div>
                            </div>
                            
                            <div class="field">
                                <div class="field-label">🏢 Компания:</div>
                                <div class="field-value">${company}</div>
                            </div>
                            
                            <div class="field">
                                <div class="field-label">💬 Сообщение:</div>
                                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                            </div>
                        </div>
                        <div class="footer">
                            <p>Это письмо отправлено с формы контактов вашего сайта.</p>
                            <p>© ${new Date().getFullYear()} Ваша компания</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
            // Текстовая версия для почтовых клиентов без HTML
            text: `
                Новое сообщение с сайта
                
                Имя: ${name}
                Email: ${email}
                Телефон: ${phone}
                Компания: ${company}
                
                Сообщение:
                ${message}
            `,
        };

        // Отправляем письмо
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: 'Сообщение успешно отправлено'
        });

    } catch (error) {
        console.error('Ошибка отправки письма:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Не удалось отправить сообщение'
            },
            { status: 500 }
        );
    }
}