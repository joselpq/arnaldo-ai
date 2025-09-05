'use client'

import { useState } from 'react'
import BeachheadLayout from '@/components/BeachheadLayout'

export default function GastosRecorrentesPage() {
  const [phone, setPhone] = useState('')

  return (
    <BeachheadLayout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🔄</span>
            <span>Gastos Fixos Mapeados</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Saiba exatamente quanto
            <span className="block text-green-600">sobra para você gastar</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Mapeie todos os seus gastos fixos e descubra sua renda disponível real 
            para decisões financeiras mais inteligentes.
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
              href={`https://wa.me/5511999999999?text=Quero%20mapear%20meus%20gastos%20fixos`}
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Mapear Gastos
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Seu mapa financeiro completo</h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 text-indigo-600">Gastos Essenciais</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>🏠 Aluguel/Financiamento</span>
                      <span className="font-semibold">R$ 1.800</span>
                    </div>
                    <div className="flex justify-between">
                      <span>⚡ Contas (luz, água, gás)</span>
                      <span className="font-semibold">R$ 320</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🛒 Mercado/Alimentação</span>
                      <span className="font-semibold">R$ 650</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🚗 Transporte</span>
                      <span className="font-semibold">R$ 280</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold">
                      <span>Subtotal Essencial</span>
                      <span>R$ 3.050</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-4 text-purple-600">Gastos Opcionais</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>📺 Streamings</span>
                      <span className="font-semibold">R$ 120</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🏋️ Academia</span>
                      <span className="font-semibold">R$ 89</span>
                    </div>
                    <div className="flex justify-between">
                      <span>☕ Cafés e lanches</span>
                      <span className="font-semibold">R$ 180</span>
                    </div>
                    <div className="flex justify-between">
                      <span>🎮 Outros</span>
                      <span className="font-semibold">R$ 95</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold">
                      <span>Subtotal Opcional</span>
                      <span>R$ 484</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-600">Renda Líquida</p>
                    <p className="text-2xl font-bold text-green-600">R$ 4.500</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Gastos Fixos</p>
                    <p className="text-2xl font-bold text-red-600">R$ 3.534</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Disponível</p>
                    <p className="text-2xl font-bold text-blue-600">R$ 966</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Descubra sua renda disponível real
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Mapeamento completo e gratuito de todos os seus gastos recorrentes
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Quero%20mapear%20meus%20gastos%20fixos"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Começar Mapeamento
          </a>
        </div>
      </section>
    </BeachheadLayout>
  )
}