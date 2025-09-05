import Link from 'next/link'

interface BeachheadLayoutProps {
  children: React.ReactNode
}

export default function BeachheadLayout({ children }: BeachheadLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <header className="container mx-auto px-4 py-6">
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
            <Link href="/privacidade" className="text-gray-600 hover:text-green-700">
              Privacidade
            </Link>
          </div>
        </nav>
      </header>
      
      {children}

      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Arnaldo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  )
}