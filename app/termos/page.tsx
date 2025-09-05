import Link from 'next/link'

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 bg-white shadow-sm">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-green-700">
            Arnaldo
          </Link>
          <div className="space-x-6">
            <Link href="/" className="text-gray-600 hover:text-green-700">
              Início
            </Link>
            <Link href="/privacidade" className="text-gray-600 hover:text-green-700">
              Privacidade
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Termos e Condições de Uso</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700">
          <section>
            <p className="text-sm text-gray-500 mb-6">Última atualização: Janeiro de 2024</p>
            
            <p className="mb-6">
              Bem-vindo ao Arnaldo. Estes Termos e Condições (&ldquo;Termos&rdquo;) regem o uso de nossos 
              serviços de gestão financeira através do WhatsApp. Ao utilizar nossos serviços, 
              você concorda com estes Termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar os serviços do Arnaldo, você aceita e concorda em cumprir 
              estes Termos e Condições de Uso. Se você não concordar com algum destes termos, 
              não utilize nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Descrição dos Serviços</h2>
            <p className="mb-4">O Arnaldo oferece:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Assistência financeira personalizada via WhatsApp</li>
              <li>Ferramentas de gestão de poupança e reserva de emergência</li>
              <li>Análise de crédito e recomendações personalizadas</li>
              <li>Educação financeira através de inteligência artificial</li>
              <li>Acompanhamento de metas financeiras</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Elegibilidade</h2>
            <p>
              Para usar nossos serviços, você deve ter pelo menos 18 anos de idade e ser 
              residente no Brasil. Ao usar o Arnaldo, você declara que possui capacidade 
              legal para celebrar contratos vinculantes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Cadastro e Conta</h2>
            <p className="mb-4">Para utilizar nossos serviços, você deve:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer informações verdadeiras, precisas e completas</li>
              <li>Manter suas informações atualizadas</li>
              <li>Proteger suas credenciais de acesso</li>
              <li>Notificar-nos imediatamente sobre uso não autorizado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Uso Permitido</h2>
            <p className="mb-4">Você concorda em usar o Arnaldo apenas para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fins legais e de acordo com estes Termos</li>
              <li>Gerenciar suas próprias finanças pessoais</li>
              <li>Acessar conteúdo educacional financeiro</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Uso Proibido</h2>
            <p className="mb-4">É expressamente proibido:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Usar o serviço para atividades ilegais ou fraudulentas</li>
              <li>Fornecer informações falsas ou enganosas</li>
              <li>Tentar acessar contas de outros usuários</li>
              <li>Interferir ou prejudicar o funcionamento do serviço</li>
              <li>Usar bots ou sistemas automatizados sem autorização</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Privacidade e Proteção de Dados</h2>
            <p>
              A coleta e uso de suas informações pessoais são regidos por nossa 
              <Link href="/privacidade" className="text-green-600 hover:underline ml-1">
                Política de Privacidade
              </Link>
              . Ao usar nossos serviços, você concorda com o processamento de suas 
              informações conforme descrito em nossa Política de Privacidade.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo, marcas, logos e propriedade intelectual do Arnaldo são 
              protegidos por direitos autorais e outras leis de propriedade intelectual. 
              Você não pode copiar, modificar, distribuir ou usar comercialmente nosso 
              conteúdo sem autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Limitação de Responsabilidade</h2>
            <p>
              O Arnaldo fornece informações e ferramentas financeiras educacionais. 
              Não somos uma instituição financeira regulamentada e não fornecemos 
              consultoria de investimentos. Você é responsável por suas decisões financeiras.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Indenização</h2>
            <p>
              Você concorda em indenizar e isentar o Arnaldo de qualquer reclamação, 
              dano ou despesa decorrente do seu uso dos serviços ou violação destes Termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Modificações dos Termos</h2>
            <p>
              Podemos modificar estes Termos a qualquer momento. As modificações entram 
              em vigor quando publicadas. Seu uso continuado dos serviços constitui 
              aceitação dos Termos modificados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Rescisão</h2>
            <p>
              Podemos suspender ou encerrar seu acesso aos serviços a qualquer momento, 
              por qualquer motivo, incluindo violação destes Termos. Você pode encerrar 
              sua conta a qualquer momento entrando em contato conosco.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Lei Aplicável</h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do Brasil. 
              Qualquer disputa será resolvida nos tribunais competentes do Brasil.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">14. Contato</h2>
            <p className="mb-4">Para questões sobre estes Termos, entre em contato:</p>
            <ul className="space-y-2">
              <li>Email: legal@arnaldo.ai</li>
              <li>WhatsApp: (11) 99999-9999</li>
              <li>Website: www.arnaldo.ai</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">
              Ao usar o Arnaldo, você confirma que leu, entendeu e concorda com estes 
              Termos e Condições.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Arnaldo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  )
}