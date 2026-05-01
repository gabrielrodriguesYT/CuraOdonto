import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CuraOdonto | Excelência em Saúde Bucal',
  description: 'Clínica odontológica moderna com atendimento humanizado, tecnologia de ponta e os melhores profissionais em São Paulo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased text-foreground">
        {children}
      </body>
    </html>
  );
}