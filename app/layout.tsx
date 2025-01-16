import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Stock Chef',
    description: 'Supply management app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='pl' suppressHydrationWarning>
            <body className={`${montserrat.className} antialiased`}>{children}</body>
        </html>
    );
}
