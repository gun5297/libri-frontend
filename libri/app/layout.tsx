import ReactQueryProvider from '@/providers/ReactQueryProvider';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='ko'>
            <body>
                <ReactQueryProvider>{children}</ReactQueryProvider>
            </body>
        </html>
    );
}
