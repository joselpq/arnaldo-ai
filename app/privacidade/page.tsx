import Link from 'next/link'

export default function PrivacidadePage() {
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
            <Link href="/termos" className="text-gray-600 hover:text-green-700">
              Termos
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Política de Privacidade</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 text-gray-700">
          <section>
            <p className="text-sm text-gray-500 mb-6">Última atualização: Janeiro de 2024</p>
            
            <p className="mb-6">
              A Arnaldo (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo; ou &ldquo;nos&rdquo;) opera o serviço de gestão financeira 
              através do WhatsApp. Esta Política de Privacidade informa sobre nossas políticas 
              e procedimentos sobre coleta, uso e divulgação de informações quando você usa 
              nosso Serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Informações que Coletamos</h2>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-800">1.1 Informações Pessoais</h3>
            <p className="mb-4">Coletamos informações que você nos fornece diretamente:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Nome completo</li>
              <li>CPF</li>
              <li>Número de telefone (WhatsApp)</li>
              <li>Endereço de e-mail</li>
              <li>Data de nascimento</li>
              <li>Informações financeiras básicas (renda, despesas)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">1.2 Informações de Uso</h3>
            <p className="mb-4">Coletamos automaticamente:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Logs de conversação no WhatsApp</li>
              <li>Horários de acesso e uso</li>
              <li>Interações com nossa IA</li>
              <li>Preferências e configurações</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 text-gray-800">1.3 Informações do Dispositivo</h3>
            <p className="mb-4">Podemos coletar:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Tipo de dispositivo</li>
              <li>Sistema operacional</li>
              <li>Versão do WhatsApp</li>
              <li>Identificadores únicos do dispositivo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">2. Como Usamos suas Informações</h2>
            <p className="mb-4">Utilizamos as informações coletadas para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer e manter nosso Serviço</li>
              <li>Personalizar sua experiência financeira</li>
              <li>Processar suas solicitações e transações</li>
              <li>Enviar notificações importantes sobre suas finanças</li>
              <li>Melhorar nossa IA e serviços</li>
              <li>Detectar e prevenir fraudes</li>
              <li>Cumprir obrigações legais e regulatórias</li>
              <li>Desenvolver novos recursos e serviços</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">3. Compartilhamento de Informações</h2>
            <p className="mb-4">Não vendemos suas informações pessoais. Podemos compartilhar suas informações apenas:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Com seu consentimento expresso</li>
              <li>Para cumprir obrigações legais</li>
              <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
              <li>Para proteger direitos, propriedade ou segurança</li>
              <li>Em caso de fusão, aquisição ou venda de ativos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">4. Segurança dos Dados</h2>
            <p className="mb-4">Implementamos medidas de segurança para proteger suas informações:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Criptografia de dados em trânsito e em repouso</li>
              <li>Controles de acesso rigorosos</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Auditorias regulares de segurança</li>
              <li>Treinamento de equipe em proteção de dados</li>
            </ul>
            <p className="mt-4">
              Apesar de nossos esforços, nenhum método de transmissão pela Internet ou 
              armazenamento eletrônico é 100% seguro.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">5. Retenção de Dados</h2>
            <p>
              Retemos suas informações pessoais apenas pelo tempo necessário para os 
              propósitos descritos nesta Política, exceto quando exigido por lei. 
              Quando você encerra sua conta, excluímos ou anonimizamos suas informações, 
              salvo obrigação legal de retenção.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">6. Seus Direitos (LGPD)</h2>
            <p className="mb-4">Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
              <li>Solicitar portabilidade dos dados</li>
              <li>Obter informações sobre compartilhamento de dados</li>
              <li>Revogar consentimento</li>
              <li>Opor-se ao tratamento de dados</li>
            </ul>
            <p className="mt-4">
              Para exercer seus direitos, entre em contato: privacidade@arnaldo.ai
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">7. Bases Legais para Processamento</h2>
            <p className="mb-4">Processamos seus dados com base em:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Seu consentimento</li>
              <li>Execução de contrato</li>
              <li>Cumprimento de obrigação legal ou regulatória</li>
              <li>Exercício regular de direitos</li>
              <li>Proteção do crédito</li>
              <li>Legítimo interesse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">8. Cookies e Tecnologias Similares</h2>
            <p>
              Como operamos principalmente via WhatsApp, não utilizamos cookies tradicionais. 
              Podemos usar tecnologias similares para melhorar a experiência do usuário e 
              analisar o uso do serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">9. Menores de Idade</h2>
            <p>
              Nosso Serviço não é direcionado a menores de 18 anos. Não coletamos 
              intencionalmente informações de menores. Se descobrirmos que coletamos 
              informações de um menor, tomaremos medidas para excluir essas informações.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">10. Transferência Internacional de Dados</h2>
            <p>
              Suas informações podem ser transferidas e mantidas em servidores localizados 
              fora do Brasil. Garantimos que qualquer transferência internacional seguirá 
              as proteções adequadas conforme a LGPD.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">11. Alterações nesta Política</h2>
            <p>
              Podemos atualizar nossa Política de Privacidade periodicamente. 
              Notificaremos você sobre alterações significativas por e-mail ou WhatsApp. 
              Recomendamos revisar esta Política periodicamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">12. Encarregado de Proteção de Dados (DPO)</h2>
            <p className="mb-4">Nosso Encarregado de Proteção de Dados pode ser contatado:</p>
            <ul className="space-y-2">
              <li>Email: dpo@arnaldo.ai</li>
              <li>Telefone: (11) 99999-9999</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">13. Autoridade Nacional de Proteção de Dados</h2>
            <p>
              Você tem o direito de fazer uma reclamação à Autoridade Nacional de 
              Proteção de Dados (ANPD) se acreditar que violamos seus direitos de 
              privacidade. Site: www.gov.br/anpd
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">14. Contato</h2>
            <p className="mb-4">Para questões sobre esta Política de Privacidade:</p>
            <ul className="space-y-2">
              <li>Email: privacidade@arnaldo.ai</li>
              <li>WhatsApp: (11) 99999-9999</li>
              <li>Website: www.arnaldo.ai/privacidade</li>
              <li>Endereço: São Paulo, SP, Brasil</li>
            </ul>
          </section>

          <section className="pt-8 border-t border-gray-200">
            <p className="text-center text-gray-600">
              Ao usar o Arnaldo, você concorda com a coleta e uso de informações 
              de acordo com esta Política de Privacidade.
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