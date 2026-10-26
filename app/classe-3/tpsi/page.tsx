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
        TPSI - Classe 3ª[cite: 1]
      </h1>
      <p className="text-gray-600 mb-8">
        Seleziona un argomento per consultare gli appunti e il materiale didattico:
      </p>

      {/* Lista Argomenti TPSI */}
      <div className="grid md:grid-cols-2 gap-4">
        <Link 
          href="/classe-3/tpsi/codifica-informazioni"
          className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all block group"
        >
          <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 mb-1">
            📄 Codici e Codifiche dell'Informazione[cite: 1]
          </h2>
          <p className="text-sm text-gray-600">
            Concetti fondamentali, BCD, Codice Aiken, Algoritmo di Huffman ed esercizi.[cite: 1]
          </p>
        </Link>
      </div>
    </div>
  );
}