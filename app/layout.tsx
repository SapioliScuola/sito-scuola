import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css'; // Mantiene i tuoi stili CSS o Tailwind

export const metadata: Metadata = {
  title: 'Sito Scuola',
  description: 'Materiale e risorse per le classi',
};

const classi = [
  { id: '2', nome: 'Classe 2ª' },
  { id: '3', nome: 'Classe 3ª' },
  { id: '5', nome: 'Classe 5ª' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
        {/* MENU DI NAVIGAZIONE (HEADER) */}
        <header className="bg-white shadow-md border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600 hover:opacity-80">
              🏫 Sito Scuola
            </Link>
            
            <nav className="flex space-x-6">
              {classi.map((c) => (
                <Link
                  key={c.id}
                  href={`/classe-${c.id}`}
                  className="font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {c.nome}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* CONTENUTO DINAMICO DELLE PAGINE */}
        <main className="flex-grow">{children}</main>

        {/* FOOTER DI ESEMPIO */}
        <footer className="bg-white border-t border-gray-100 py-4 text-center text-sm text-gray-500">
          © 2026 Sito Scuola - Tutti i diritti riservati
        </footer>
      </body>
    </html>
  );
}