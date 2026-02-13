import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
    title: "Official Online Store - Teckell",
    description: "Welcome to Teckell Store, your gateway to luxury. Explore our premium collection of billiards, foosball tables, and opulent furnishings.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <ClientBody>{children}</ClientBody>
        </html>
    );
}
