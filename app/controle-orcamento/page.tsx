'use client'

import { useState } from 'react'
import BeachheadLayout from '@/components/BeachheadLayout'

export default function ControleOrcamentoPage() {
  const [phone, setPhone] = useState('')

  return (
    <BeachheadLayout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🎯</span>
            <span>Orçamento Inteligente</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Crie seu orçamento e receba
            <span className="block text-green-600">lembretes diários no WhatsApp</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Defina metas de gastos personalizadas e receba alertas quando estiver 
            próximo do limite. Nunca mais estoure seu orçamento.
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
              href={`https://wa.me/5511999999999?text=Quero%20controlar%20meu%20orçamento`}
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Criar Orçamento
            </a>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Seu assistente de orçamento pessoal</h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">📊 Orçamento de Janeiro</h3>
                  
                  <div className="space-y-4">
                    <div className="border rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">🛒 Alimentação</span>
                        <span className="text-sm text-gray-500">R$ 420 / R$ 600</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '70%'}}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">R$ 180 restantes • 10 dias</p>
                    </div>

                    <div className="border rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">🎬 Entretenimento</span>
                        <span className="text-sm text-gray-500">R$ 180 / R$ 200</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                      <p className="text-xs text-yellow-600 mt-1">⚠️ R$ 20 restantes • Cuidado!</p>
                    </div>

                    <div className="border rounded-lg p-3 bg-red-50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">🚗 Transporte</span>
                        <span className="text-sm text-gray-500">R$ 320 / R$ 280</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                      <p className="text-xs text-red-600 mt-1">🚨 R$ 40 acima do orçamento!</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4">💬 Alertas do Arnaldo</h3>
                  
                  <div className="space-y-3">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-sm">
                        <strong>Hoje 09:30</strong><br/>
                        ⚠️ Atenção! Você já gastou 90% do orçamento de entretenimento este mês. 
                        Restam apenas R$ 20,00.
                      </p>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-sm">
                        <strong>Ontem 18:45</strong><br/>
                        🚨 Orçamento de transporte estourou! Você gastou R$ 40 a mais que o planejado. 
                        Quer ajustar para o próximo mês?
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-sm">
                        <strong>15/01 14:20</strong><br/>
                        🎉 Parabéns! Você está 30% abaixo do orçamento de alimentação. 
                        Continue assim!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Como funciona o acompanhamento</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold mb-2">Defina suas metas</h3>
                <p className="text-gray-600 text-sm">
                  Estabeleça limites realistas para cada categoria de gasto
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-bold mb-2">Receba alertas</h3>
                <p className="text-gray-600 text-sm">
                  Notificações automáticas quando chegar a 75%, 90% e 100%
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">📊</div>
                <h3 className="font-bold mb-2">Acompanhe o progresso</h3>
                <p className="text-gray-600 text-sm">
                  Relatórios semanais com dicas personalizadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Nunca mais estoure seu orçamento
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Controle automático e inteligente dos seus gastos mensais
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Quero%20controlar%20meu%20orçamento"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Criar Meu Orçamento
          </a>
        </div>
      </section>
    </BeachheadLayout>
  )
}