import Link from 'next/link';

export default function TpsiClasse3Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Tasto per tornare indietro */}
      <Link 
        href="/classe-3" 
        className="text-sm text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Torna alla Classe 3ª
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        TPSI (Tecnologie e Progettazione di Sistemi Informatici) - Classe 3ª
      </h1>
      
      <p className="text-gray-600 mb-6">
        Sezione dedicata a TPSI per la classe terza. Qui troverai le dispense di teoria, laboratori e materiale di studio.
      </p>

      {/* Spazio per i contenuti/materiali */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Materiale didattico</h2>
        <p className="text-gray-500 text-sm">Nessun file caricato al momento.</p>
      </div>
    </div>
  );
}