import Link from 'next/link';

export default function Classe2Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">Classe 2ª</h1>
      <p className="text-gray-600 mb-8">Seleziona una materia per accedere ai relativi contenuti:</p>

      {/* Griglia Materie */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Link a SCITA */}
        <Link 
          href="/classe-2/scita"
          className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all block"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-1">🔬 SCITA</h2>
          <p className="text-sm text-gray-600">Scienze e Tecnologie Applicate</p>
        </Link>
      </div>
    </div>
  );
}