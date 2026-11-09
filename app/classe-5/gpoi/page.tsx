import Link from 'next/link';

export default function GpoiClasse5Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Tasto per tornare indietro */}
      <Link 
        href="/classe-5" 
        className="text-sm text-blue-600 hover:underline mb-4 inline-block"
      >
        &larr; Torna alla Classe 5ª
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        GPOI (Gestione Progetto e Organizzazione d'Impresa) - Classe 5ª
      </h1>
      
      <p className="text-gray-600 mb-6">
        Sezione dedicata a GPOI per la classe quinta. Qui troverai materiale su Project Management, sviluppo Agile/Scrum, costi e pianificazione d'azienda.
      </p>

      {/* Spazio per i contenuti/materiali */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Materiale didattico</h2>
        <Link 
  href="/classe-5/gpoi/economia"
  className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-500 transition-all block group"
>
  <div className="flex items-center justify-between mb-2">
    <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2.5 py-0.5 rounded">GPOI</span>
    <span className="text-xs text-gray-400">Teoria & Simulatori</span>
  </div>
  <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 mb-1">
    📊 Economia e Organizzazione d'Impresa
  </h2>
  <p className="text-sm text-gray-600">
    Dispensa completa e simulatore interattivo con 50 domande d'esame estratte casualmente.
  </p>
</Link>
      </div>
    </div>
  );
}