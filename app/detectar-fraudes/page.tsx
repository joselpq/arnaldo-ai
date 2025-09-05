'use client'

import { useState } from 'react'
import BeachheadLayout from '@/components/BeachheadLayout'

export default function DetectarFraudesPage() {
  const [phone, setPhone] = useState('')

  return (
    <BeachheadLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🚨</span>
            <span>Proteção Contra Fraudes 24/7</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cobranças suspeitas no seu cartão?
            <span className="block text-green-600">Nós detectamos para você</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            O Arnaldo monitora todas as transações dos seus cartões e te avisa 
            imediatamente sobre qualquer cobrança suspeita ou duplicada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="tel"
              placeholder="(11) 99999-9999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-green-600 focus:outline-none text-center"
            />
            <a 
              href={`https://wa.me/5511999999999?text=Quero%20monitorar%20fraudes%20no%20meu%20cartão`}
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Ativar Proteção
            </a>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              A realidade das fraudes no Brasil
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl font-bold text-red-600 mb-2">R$ 2.5 bi</div>
                <p className="text-gray-600">
                  Perdidos em fraudes de cartão por ano
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl font-bold text-red-600 mb-2">45 dias</div>
                <p className="text-gray-600">
                  Tempo médio para perceber uma fraude
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl font-bold text-red-600 mb-2">73%</div>
                <p className="text-gray-600">
                  Das pessoas já sofreram alguma fraude
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Proteção inteligente em tempo real
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-3">Detecção Automática</h3>
                <p className="text-gray-600 mb-4">
                  Identifica padrões suspeitos como:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cobranças duplicadas</li>
                  <li>• Valores fora do padrão</li>
                  <li>• Transações em horários incomuns</li>
                  <li>• Compras em locais suspeitos</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-3">Alerta Instantâneo</h3>
                <p className="text-gray-600 mb-4">
                  Você recebe no WhatsApp:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Notificação imediata de transações suspeitas</li>
                  <li>• Detalhes completos da cobrança</li>
                  <li>• Instruções para contestar</li>
                  <li>• Histórico de cobranças similares</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 mt-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Exemplo de alerta</h3>
                  <p className="text-gray-700">
                    🚨 <strong>Alerta de Fraude!</strong><br/>
                    Detectamos uma cobrança suspeita:<br/>
                    NETFLIX.COM - R$ 55,90<br/>
                    (Você já pagou Netflix esse mês)<br/>
                    <span className="text-green-600">→ Digite 1 para contestar</span>
                  </p>
                </div>
                <div className="text-6xl">📱</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Proteja seu dinheiro agora
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Monitoramento gratuito. Setup em 2 minutos. Paz de espírito garantida.
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Quero%20proteção%20contra%20fraudes"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Ativar Monitoramento Grátis
          </a>
        </div>
      </section>
    </BeachheadLayout>
  )
}