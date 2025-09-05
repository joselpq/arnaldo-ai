'use client'

import { useState } from 'react'
import BeachheadLayout from '@/components/BeachheadLayout'

export default function MonitorarEstornosPage() {
  const [phone, setPhone] = useState('')

  return (
    <BeachheadLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🔄</span>
            <span>Acompanhamento de Estornos</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Pediu cancelamento e estorno?
            <span className="block text-green-600">Nós garantimos que aconteça</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Monitore automaticamente se cancelamentos foram processados e 
            estornos realizados. Chega de ser cobrado após cancelar!
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
              href={`https://wa.me/5511999999999?text=Quero%20monitorar%20meus%20estornos`}
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Começar Monitoramento
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              O problema dos estornos não realizados
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">Situações comuns:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    Cancelou a academia mas continuou sendo cobrado
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    Devolveu produto mas não recebeu estorno
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    Cancelou viagem e ficou sem reembolso
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">❌</span>
                    Cobrança dupla nunca foi estornada
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3">Por que acontece:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    Esquecemos de acompanhar o processo
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    Estorno demora até 2 faturas
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    Empresas &ldquo;esquecem&rdquo; de processar
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    Falta de comprovantes organizados
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Como o Arnaldo monitora seus estornos
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📝</span>
                  </div>
                  <h4 className="font-bold mb-2">1. Registre</h4>
                  <p className="text-sm text-gray-600">
                    Informe qual cancelamento ou estorno está aguardando
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👀</span>
                  </div>
                  <h4 className="font-bold mb-2">2. Monitoramos</h4>
                  <p className="text-sm text-gray-600">
                    Verificamos suas faturas automaticamente todo mês
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🔔</span>
                  </div>
                  <h4 className="font-bold mb-2">3. Alertamos</h4>
                  <p className="text-sm text-gray-600">
                    Notificamos se o estorno não acontecer no prazo
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 rounded-xl p-6">
                <p className="text-sm text-gray-500 mb-2">Exemplo de monitoramento:</p>
                <div className="space-y-2">
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-semibold">🔄 Netflix - Cancelado em 15/01</p>
                    <p className="text-sm text-gray-600">Status: Aguardando estorno (R$ 55,90)</p>
                    <div className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded mt-2 inline-block">
                      ⏰ Prazo: 5 dias restantes
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="font-semibold">✅ Gym Pass - Cancelado em 01/01</p>
                    <p className="text-sm text-green-600">Estorno confirmado: R$ 89,90</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">
              Benefícios do monitoramento
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-bold mb-2">Recupere seu dinheiro</h3>
                <p className="text-gray-600 text-sm">
                  Média de R$ 200/mês em estornos não realizados
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">⏱️</div>
                <h3 className="font-bold mb-2">Economize tempo</h3>
                <p className="text-gray-600 text-sm">
                  Não precisa verificar fatura por fatura manualmente
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">📋</div>
                <h3 className="font-bold mb-2">Histórico completo</h3>
                <p className="text-gray-600 text-sm">
                  Todos os seus cancelamentos e estornos organizados
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Nunca mais perca um estorno
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Monitoramento gratuito de todos os seus cancelamentos e reembolsos
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Quero%20monitorar%20meus%20estornos"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Ativar Monitoramento Grátis
          </a>
        </div>
      </section>
    </BeachheadLayout>
  )
}