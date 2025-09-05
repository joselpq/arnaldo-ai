'use client'

import { useState } from 'react'
import BeachheadLayout from '@/components/BeachheadLayout'

export default function GerenciarAssinaturasPage() {
  const [phone, setPhone] = useState('')

  return (
    <BeachheadLayout>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>📺</span>
            <span>Controle Total de Assinaturas</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Quantas assinaturas você paga
            <span className="block text-green-600">e nem lembra que tem?</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Descubra todas as suas assinaturas ativas, quanto está gastando 
            e cancele as que não usa mais - tudo pelo WhatsApp.
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
              href={`https://wa.me/5511999999999?text=Quero%20descobrir%20minhas%20assinaturas`}
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Descobrir Assinaturas
            </a>
          </div>
        </div>
      </section>

      {/* Eye-opening Stats */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              A verdade sobre suas assinaturas
            </h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">7-12</div>
                <p className="text-sm text-gray-600">
                  Assinaturas médias por pessoa
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">R$ 380</div>
                <p className="text-sm text-gray-600">
                  Gasto médio mensal
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">42%</div>
                <p className="text-sm text-gray-600">
                  Não são usadas regularmente
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-purple-600 mb-2">R$ 1.9k</div>
                <p className="text-sm text-gray-600">
                  Economia potencial/ano
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              O que o Arnaldo descobre para você
            </h2>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6">
                <h3 className="text-xl font-bold">Suas assinaturas encontradas:</h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📺</span>
                      <div>
                        <p className="font-semibold">Netflix</p>
                        <p className="text-sm text-gray-500">Último uso: hoje</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">R$ 55,90</p>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Ativa</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🎵</span>
                      <div>
                        <p className="font-semibold">Spotify Family</p>
                        <p className="text-sm text-gray-500">Último uso: 3 dias atrás</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">R$ 34,90</p>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Ativa</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b bg-red-50 p-3 rounded">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🏋️</span>
                      <div>
                        <p className="font-semibold">GymPass</p>
                        <p className="text-sm text-red-600">Não usado há 45 dias!</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-red-600">R$ 89,90</p>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Cancelar?</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b bg-red-50 p-3 rounded">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📰</span>
                      <div>
                        <p className="font-semibold">Folha Digital</p>
                        <p className="text-sm text-red-600">Nunca acessado!</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-red-600">R$ 29,90</p>
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Cancelar?</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total mensal:</span>
                    <span className="text-2xl font-bold">R$ 210,60</span>
                  </div>
                  <div className="flex justify-between items-center text-red-600 mt-2">
                    <span>Economia potencial:</span>
                    <span className="font-bold">R$ 119,80/mês</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Funcionalidades completas
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="font-bold mb-2">Descoberta automática</h3>
                <p className="text-sm text-gray-600">
                  Identificamos todas as assinaturas nos seus cartões
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-bold mb-2">Análise de uso</h3>
                <p className="text-sm text-gray-600">
                  Mostramos quais você realmente usa
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">❌</div>
                <h3 className="font-bold mb-2">Cancelamento fácil</h3>
                <p className="text-sm text-gray-600">
                  Links e instruções para cancelar cada uma
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
            Pare de pagar o que não usa
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Descubra agora todas as suas assinaturas e economize centenas de reais por mês
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Quero%20descobrir%20minhas%20assinaturas"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Fazer Auditoria Grátis
          </a>
        </div>
      </section>
    </BeachheadLayout>
  )
}