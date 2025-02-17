import type { Metadata } from 'next';
import './globals.css';
import App from './app';
import { PublicEnvScript } from 'next-runtime-env';

export const metadata: Metadata = {
  title: 'WFO - CRM Portal',
  description: 'World Federation of Orthodontists CRM Portal',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <PublicEnvScript />
        <meta name='apple-mobile-web-app-title' content='WFO-CRM' />
      </head>
      <body className={`antialiased`}>
        <App>{children}</App>
      </body>
    </html>
  );
}
