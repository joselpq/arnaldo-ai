'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [email, setEmail] = useState('')

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-green-700">
            Arnaldo
          </div>
          <div className="space-x-6">
            <Link href="/termos" className="text-gray-600 hover:text-green-700">
              Termos
            </Link>
            <Link href="/privacidade" className="text-gray-600 hover:text-green-700">
              Privacidade
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <span className="animate-pulse">🟢</span>
          <span>Mais de 100 mil brasileiros já poupando</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Poupe, invista e pague tudo
          <span className="block text-green-600">direto no WhatsApp</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Faça PIX por foto ou áudio, pague contas, acompanhe seus gastos e veja seu 
          dinheiro render 100% do CDI todos os dias. Tudo isso conversando com o Arnaldo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5511999999999"
            className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition"
          >
            Começar Grátis no WhatsApp
          </a>
          <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition">
            Saiba Mais
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Por que escolher o Arnaldo?
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              100% no WhatsApp
            </h3>
            <p className="text-gray-600">
              Gerencie suas finanças onde você já está. Sem apps adicionais, 
              sem complicações. Simples como mandar mensagem.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Disponível 24/7
            </h3>
            <p className="text-gray-600">
              Sempre pronto para ajudar, a qualquer hora do dia ou da noite. 
              Seu assistente financeiro nunca dorme.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Personalizado para você
            </h3>
            <p className="text-gray-600">
              Dicas e estratégias adaptadas ao seu perfil, objetivos 
              e situação financeira única.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              100% Gratuito
            </h3>
            <p className="text-gray-600">
              Sem mensalidades, sem taxas escondidas. Nosso serviço básico 
              é totalmente grátis para você começar a poupar hoje.
            </p>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Sua segurança é nossa prioridade
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="font-semibold mb-2">Criptografia de ponta</h3>
                <p className="text-gray-600 text-sm">
                  Todos os dados são protegidos com criptografia bancária
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-3">🏦</div>
                <h3 className="font-semibold mb-2">Open Finance</h3>
                <p className="text-gray-600 text-sm">
                  Regulado pelo Banco Central do Brasil
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="font-semibold mb-2">Autenticação dupla</h3>
                <p className="text-gray-600 text-sm">
                  Senha e biometria para todas as transações
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Como Funciona
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-105 transition-transform">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.18-.31.08-1.26.33.33-1.22.09-.35-.21-.32a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.43.06-.66.31-.22.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.12.17 1.76 2.67 4.25 3.73.59.27 1.05.42 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.27-.25-.14-1.47-.74-1.69-.82-.23-.08-.37-.12-.56.12-.16.25-.64.81-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.12-.24-.01-.39.11-.5.11-.11.27-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.35-.77-1.84-.2-.48-.4-.42-.56-.43-.14 0-.3-.01-.47-.01Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Adicione o Arnaldo</h3>
              <p className="text-gray-600">
                Salve nosso número e comece a conversa no WhatsApp
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-105 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Conecte suas contas</h3>
              <p className="text-gray-600">
                Integre seus bancos de forma segura via Open Finance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform hover:scale-105 transition-transform">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Comece a poupar</h3>
              <p className="text-gray-600">
                Receba dicas personalizadas e veja seu dinheiro crescer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Nosso Impacto
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">
            Estamos transformando a vida financeira de milhões de brasileiros, 
            tornando o hábito de poupar simples e acessível para todos.
          </p>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">100K+</div>
              <p className="text-lg">usuários ativos</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">R$ 50M+</div>
              <p className="text-lg">poupados</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.9⭐</div>
              <p className="text-lg">avaliação média</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-lg">seguro via Open Finance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            O que nossos usuários dizem
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex mb-4">
                {"⭐⭐⭐⭐⭐"}
              </div>
              <p className="text-gray-700 mb-4">
                &ldquo;Finalmente consegui criar o hábito de poupar! O Arnaldo me ajuda 
                todos os dias com dicas personalizadas. Já tenho 3 meses de reserva!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center text-green-700 font-bold">
                  MC
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Maria Clara</p>
                  <p className="text-sm text-gray-500">São Paulo, SP</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex mb-4">
                {"⭐⭐⭐⭐⭐"}
              </div>
              <p className="text-gray-700 mb-4">
                &ldquo;Fazer PIX por áudio mudou minha vida! Uso o Arnaldo para tudo: 
                pagar contas, transferir dinheiro, controlar gastos. É muito prático!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center text-green-700 font-bold">
                  JS
                </div>
                <div className="ml-3">
                  <p className="font-semibold">João Silva</p>
                  <p className="text-sm text-gray-500">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex mb-4">
                {"⭐⭐⭐⭐⭐"}
              </div>
              <p className="text-gray-700 mb-4">
                &ldquo;Sempre tive medo de investir, mas o Arnaldo tornou tudo simples. 
                Hoje meu dinheiro rende 100% do CDI e posso sacar quando quiser!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="bg-green-100 w-10 h-10 rounded-full flex items-center justify-center text-green-700 font-bold">
                  AS
                </div>
                <div className="ml-3">
                  <p className="font-semibold">Ana Santos</p>
                  <p className="text-sm text-gray-500">Belo Horizonte, MG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Comece sua jornada financeira hoje
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se aos milhares de brasileiros que já estão transformando suas vidas financeiras
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 rounded-full border-2 border-gray-300 focus:border-green-600 focus:outline-none"
              />
              <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition">
                Quero Participar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Arnaldo</h3>
              <p className="text-gray-400">
                Transformando o futuro financeiro do Brasil
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Como funciona</a></li>
                <li><a href="#" className="hover:text-white">Recursos</a></li>
                <li><a href="#" className="hover:text-white">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Sobre</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/termos" className="hover:text-white">Termos de Uso</Link></li>
                <li><Link href="/privacidade" className="hover:text-white">Política de Privacidade</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Arnaldo. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}