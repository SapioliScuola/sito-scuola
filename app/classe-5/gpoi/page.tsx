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
        <p className="text-gray-500 text-sm">Nessun file caricato al momento.</p>
      </div>
    </div>
  );
}