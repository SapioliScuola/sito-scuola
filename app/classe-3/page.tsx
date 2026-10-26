import Link from 'next/link';

export default function Classe3Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-green-600 mb-2">Classe 3ª</h1>
      <p className="text-gray-600 mb-8">Seleziona una materia per accedere ai relativi contenuti:</p>

      {/* Griglia Materie */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Link a TPSI */}
        <Link 
          href="/classe-3/tpsi"
          className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-green-500 transition-all block"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-1">💻 TPSI</h2>
          <p className="text-sm text-gray-600">Tecnologie e Progettazione di Sistemi Informatici e di Telecomunicazioni</p>
        </Link>
      </div>
    </div>
  );
}