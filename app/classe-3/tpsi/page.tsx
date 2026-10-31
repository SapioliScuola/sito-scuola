import Link from 'next/link';

export default function TpsiClasse3Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link 
        href="/classe-3" 
        className="text-sm text-blue-600 hover:underline mb-4 inline-block font-medium"
      >
        ← Torna alla Classe 3ª
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        TPSI - Classe 3ª
      </h1>
      <p className="text-gray-600 mb-8">
        Seleziona un argomento per consultare gli appunti, le lezioni e i laboratori pratici:
      </p>

      {/* Griglia Materie/Argomenti */}
      <div className="grid md:grid-cols-2 gap-4">
        
        {/* SCHEDA LAB - Posizionata in cima a tutte */}
        <Link 
          href="/classe-3/tpsi/lab"
          className="p-5 bg-emerald-50 border-2 border-emerald-500 rounded-lg shadow-sm hover:shadow-md transition-all block group md:col-span-2"
        >
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-xl font-bold text-emerald-900 group-hover:text-emerald-700">
              🧪 Laboratorio TPSI
            </h2>
            <span className="bg-emerald-600 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase">
              Sezione Pratica
            </span>
          </div>
          <p className="text-sm text-emerald-800">
            Punto di accesso per le schede di laboratorio, simulazioni ed esercitazioni pratiche.
          </p>
        </Link>

        {/* Lezioni teoriche successive */}
        <Link 
          href="/classe-3/tpsi/codifica-informazioni"
          className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all block group"
        >
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 mb-1">
            📄 Codifica e Rappresentazione dell'Informazione
          </h2>
          <p className="text-sm text-gray-600">
            Conversioni di base, complemento a 2, IEEE 754 ed esercizi guidati per Carta ed Excel.
          </p>
        </Link>

        <Link 
          href="/classe-3/tpsi/codici-digitali"
          className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-500 transition-all block group"
        >
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 mb-1">
            🔢 I Codici Digitali (BCD e Aiken)
          </h2>
          <p className="text-sm text-gray-600">
            Alfabeti, ridondanza, endianness, codici pesati BCD, Aiken e convertitore interattivo.
          </p>
        </Link>

        <Link 
          href="/classe-3/tpsi/codici-digitali-2"
          className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all block group"
        >
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 mb-1">
            📼 Codici Storici (Quinario, Biquinario e 2/5)
          </h2>
          <p className="text-sm text-gray-600">
            IBM 650, rilevazione d'errore ad autoverifica e simulatore codice a barre 2/5.
          </p>
        </Link>

        <Link 
          href="/classe-3/tpsi/codici-non-pesati"
          className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-500 transition-all block group"
        >
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 mb-1">
            🎛️ Codici Non Pesati e Speciali
          </h2>
          <p className="text-sm text-gray-600">
            Eccesso 3, Codice di Gray (Encoder), 1 su N, Display a 7 segmenti e Matrice di punti.
          </p>
        </Link>

        <Link 
          href="/classe-3/tpsi/huffman"
          className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-amber-500 transition-all block group"
        >
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 mb-1">
            🌳 Algoritmo di Huffman
          </h2>
          <p className="text-sm text-gray-600">
            Compressione dati lossless, albero binario, esempio su CARAMELLA e simulatore.
          </p>
        </Link>

      </div>
    </div>
  );
}