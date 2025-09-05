'use client'

import { useState } from 'react'
import BeachheadLayout from '@/components/BeachheadLayout'

export default function GastosSemanaisPage() {
  const [phone, setPhone] = useState('')

  return (
    <BeachheadLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>📊</span>
            <span>Controle Total dos Seus Gastos</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Descubra para onde seu dinheiro
            <span className="block text-green-600">está indo toda semana</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Receba um relatório semanal detalhado no WhatsApp mostrando exatamente 
            quanto e onde você gastou. Identifique padrões e tome decisões mais inteligentes.
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
              href={`https://wa.me/5511999999999?text=Quero%20controlar%20meus%20gastos%20semanais`}
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Começar Grátis
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              O problema que todos enfrentamos
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4">😰</div>
                <h3 className="font-bold mb-2">Fim do mês surpresa</h3>
                <p className="text-gray-600">
                  O dinheiro acaba e você não sabe onde gastou
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-bold mb-2">Apps complicados</h3>
                <p className="text-gray-600">
                  Precisa lançar cada gasto manualmente
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="font-bold mb-2">Gastos invisíveis</h3>
                <p className="text-gray-600">
                  Pequenas compras que somam grandes valores
                </p>
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
              Como o Arnaldo resolve isso
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Relatório Semanal Automático</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>Total gasto na semana com comparativo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>Top 5 categorias de gastos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>Alertas de gastos acima da média</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3">✓</span>
                      <span>Dicas personalizadas de economia</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 rounded-xl p-6">
                  <div className="bg-white rounded-lg p-4 shadow-sm mb-2">
                    <p className="text-sm text-gray-500">Arnaldo</p>
                    <p className="text-gray-800">
                      📊 Seu relatório semanal:<br/>
                      Total: R$ 847,32 (↑12% vs semana passada)<br/>
                      Alimentação: R$ 320,50<br/>
                      Transporte: R$ 185,00<br/>
                      💡 Dica: Seus gastos com delivery aumentaram 30%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Comece a controlar seus gastos hoje
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            100% gratuito. Sem cartão de crédito. Cancele quando quiser.
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Quero%20controlar%20meus%20gastos%20semanais"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Receber Relatórios no WhatsApp
          </a>
        </div>
      </section>
    </BeachheadLayout>
  )
}