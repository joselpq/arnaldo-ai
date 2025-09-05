import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arnaldo - Seu Assistente Financeiro no WhatsApp',
  description: 'O primeiro assistente financeiro gratuito do Brasil no WhatsApp, ajudando você a poupar mais e gastar melhor para realizar seus sonhos.',
  keywords: 'fintech, whatsapp, poupança, crédito, finanças pessoais, brasil, gratuito, assistente financeiro',
  openGraph: {
    title: 'Arnaldo - Seu Assistente Financeiro no WhatsApp',
    description: 'Transformando a vida financeira de milhões de brasileiros através do WhatsApp.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://arnaldo.ai',
    siteName: 'Arnaldo',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}