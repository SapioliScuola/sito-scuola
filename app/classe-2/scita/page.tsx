import Link from 'next/link';

export default function ScitaClasse2Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Tasto per tornare indietro */}
      <Link 
        href="/classe-2" 
        className="text-sm text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Torna alla Classe 2ª
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Scienze e Tecnologie Applicate (SCITA) - Classe 2ª
      </h1>
      
      <p className="text-gray-600 mb-6">
        Benvenuti nella sezione dedicata a SCITA per la classe seconda. Qui troverai dispense, esercitazioni e programmi.
      </p>

      {/* Spazio per i contenuti/materiali */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Materiale didattico</h2>
        <p className="text-gray-500 text-sm">Nessun file caricato al momento.</p>
      </div>
    </div>
  );
}