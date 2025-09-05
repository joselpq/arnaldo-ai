'use client'

import { useState } from 'react'
import BeachheadLayout from '@/components/BeachheadLayout'

export default function RemessasPage() {
  const [phone, setPhone] = useState('')

  return (
    <BeachheadLayout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🌍</span>
            <span>Câmbio e Remessas</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Envie dinheiro para o exterior
            <span className="block text-green-600">direto pelo WhatsApp</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            As melhores taxas de câmbio e remessas internacionais com total 
            transparência e sem pegadinhas. Tudo na palma da sua mão.
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
              href={`https://wa.me/5511999999999?text=Quero%20fazer%20remessa%20internacional`}
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Começar Remessa
            </a>
          </div>
        </div>
      </section>

      <section className="bg-yellow-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Compare e economize</h2>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-lg">Enviando <strong>USD 1.000</strong> para os EUA:</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">Banco Tradicional</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Taxa de câmbio</span>
                        <span>R$ 5.95</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxa fixa</span>
                        <span>R$ 85.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>IOF</span>
                        <span>R$ 11.30</span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-bold text-red-600">
                        <span>Total pago</span>
                        <span>R$ 6.046.30</span>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-bold mb-2">Concorrente</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Taxa de câmbio</span>
                        <span>R$ 5.80</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxa fixa</span>
                        <span>R$ 25.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>IOF</span>
                        <span>R$ 11.30</span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-bold text-yellow-600">
                        <span>Total pago</span>
                        <span>R$ 5.836.30</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-2 border-green-500 rounded-lg p-4 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">MELHOR</span>
                    </div>
                    <h3 className="font-bold mb-2 text-green-600">Arnaldo</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Taxa de câmbio</span>
                        <span>R$ 5.68</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Taxa fixa</span>
                        <span>R$ 8.90</span>
                      </div>
                      <div className="flex justify-between">
                        <span>IOF</span>
                        <span>R$ 11.30</span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-bold text-green-600">
                        <span>Total pago</span>
                        <span>R$ 5.700.20</span>
                      </div>
                    </div>
                    <div className="text-center mt-3">
                      <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                        Economize R$ 346!
                      </span>
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
            <h2 className="text-3xl font-bold text-center mb-12">Como funciona</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-bold mb-2">1. Solicite no WhatsApp</h3>
                <p className="text-gray-600 text-sm">
                  Informe valor, moeda e destino da remessa
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-bold mb-2">2. Receba cotação</h3>
                <p className="text-gray-600 text-sm">
                  Taxa competitiva e transparente em segundos
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="font-bold mb-2">3. Dinheiro enviado</h3>
                <p className="text-gray-600 text-sm">
                  Confirmação e comprovante direto no WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Remessas mais baratas e rápidas
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Economia de até 70% comparado aos bancos tradicionais
          </p>
          <a 
            href="https://wa.me/5511999999999?text=Quero%20fazer%20remessa%20internacional"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Fazer Cotação Grátis
          </a>
        </div>
      </section>
    </BeachheadLayout>
  )
}