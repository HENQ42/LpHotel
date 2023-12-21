import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hotel Vitória',
  description: 'Serviço de hospedagem online.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Playfair+Display:wght@500&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" type="imagex/png" href="/images/Hotel-Vitoria.png"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
