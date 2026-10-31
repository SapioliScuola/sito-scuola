import Link from 'next/link';

export default function ScitaClasse2Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link 
        href="/" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna alla Home
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-8 text-gray-800">
        
        <header className="border-b-4 border-indigo-600 pb-4">
          <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            SCITA • Classe 2ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            💻 Scienze e Tecnologie Applicate (SCITA)
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Percorso didattico su algoritmi, pensiero computazionale, diagrammi di flusso e programmazione in Python.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-4">
          
          {/* Modulo 1 */}
          <Link 
            href="/classe-2/scita/pensiero-computazionale"
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-500 transition-all block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2.5 py-0.5 rounded">Modulo 1</span>
              <span className="text-xs text-gray-400">Teoria & Simulatore</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 mb-1">
              🧠 Dati, Informazioni e Pensiero Computazionale
            </h2>
            <p className="text-sm text-gray-600">
              Pattern, astrazione, scomposizione, algoritmo di Euclide e proprietà degli algoritmi.
            </p>
          </Link>

          {/* Modulo 2 */}
          <Link 
            href="/classe-2/scita/diagrammi-di-flusso"
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded">Modulo 2</span>
              <span className="text-xs text-gray-400">Teoria & Swapping</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 mb-1">
              📐 Diagrammi di Flusso e Programmazione Strutturata
            </h2>
            <p className="text-sm text-gray-600">
              Flowchart, Teorema di Böhm-Jacopini, allocazione RAM e algoritmo di scambio.
            </p>
          </Link>

          {/* Modulo 3 */}
          <Link 
            href="/classe-2/scita/strutture-condizionali-e-cicli"
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-500 transition-all block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-0.5 rounded">Modulo 3</span>
              <span className="text-xs text-gray-400">Teoria & Trace Table</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 mb-1">
              🔀 Selezioni Condizionali, Cicli e Tabella di Traccia
            </h2>
            <p className="text-sm text-gray-600">
              Struttura if-else, annidamento, cicli for/while/do-while e simulatore tabella di traccia.
            </p>
          </Link>

          {/* Modulo 4 */}
          <Link 
            href="/classe-2/scita/linguaggi-di-programmazione"
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded">Modulo 4</span>
              <span className="text-xs text-gray-400">Teoria & Python</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 mb-1">
              💻 Linguaggi di Programmazione e Python
            </h2>
            <p className="text-sm text-gray-600">
              Compilatori vs interpreti, sintassi, bachi (bug) e librerie con Python.
            </p>
          </Link>

          {/* Modulo 5 */}
          <Link 
            href="/classe-2/scita/variabili-e-operatori-python"
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-amber-500 transition-all block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded">Modulo 5</span>
              <span className="text-xs text-gray-400">Pratica & Casting</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 mb-1">
              🐍 Variabili, Tipi di Dato e Operatori in Python
            </h2>
            <p className="text-sm text-gray-600">
              Tipizzazione dinamica, I/O con input() e float(), formattazione delle stringhe e parole-chiave.
            </p>
          </Link>

          {/* Modulo 6 */}
          <Link 
            href="/classe-2/scita/condizionali-python"
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-500 transition-all block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2.5 py-0.5 rounded">Modulo 6</span>
              <span className="text-xs text-gray-400">Pratica & Match-Case</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 mb-1">
              🔀 Selezioni in Python: if, else, elif e match-case
            </h2>
            <p className="text-sm text-gray-600">
              Indentazione obbligatoria, differenza tra elif ed if multipli, annidamento, match-case e modulo (%).
            </p>
          </Link>

          {/* Modulo 7 */}
          <Link 
            href="/classe-2/scita/cicli-python"
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded">Modulo 7</span>
              <span className="text-xs text-gray-400">Pratica & Simulatori</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 mb-1">
              🔁 Strutture Iterative in Python (Cicli for e while)
            </h2>
            <p className="text-sm text-gray-600">
              Cicli for e while, funzione range(), tabella ASCII, stringhe, fattoriale e pattern triangolari.
            </p>
          </Link>

          {/* Modulo 8 */}
          <Link 
            href="/classe-2/scita/esercizi-python"
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-amber-500 transition-all block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5 rounded">Modulo 8</span>
              <span className="text-xs text-gray-400">Palestra di Codice</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 mb-1">
              🏋️ Palestra di Programmazione: 10 Esercizi Progressivi
            </h2>
            <p className="text-sm text-gray-600">
              Raccolta di 10 problemi di programmazione a difficoltà crescente (Senza soluzioni visibili) per la verifica delle competenze.
            </p>
          </Link>

        </div>
      </div>
    </div>
  );
}