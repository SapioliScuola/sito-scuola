'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function VariabiliEOperatoriPythonPage() {
  // Stati per la simulazione dell'input/output
  const [inputBase, setInputBase] = useState<string>('10.5');
  const [inputAltezza, setInputAltezza] = useState<string>('4');

  // Calcoli per la simulazione
  const baseNum = parseFloat(inputBase) || 0;
  const altezzaNum = parseFloat(inputAltezza) || 0;
  const area = (baseNum * altezzaNum) / 2;

  // Snippet di codice isolati in stringhe JS
  const snippetVariables = `nome = "Mario"      # Stringa (str)\neta = 16            # Intero (int)\nprint("Ciao", nome, "hai", eta, "anni")`;

  const snippetDynamicType = `miaVar = 10         # Tipo int\nprint(type(miaVar)) # <class 'int'>\n\nmiaVar = "Ciao"     # Tipizzazione dinamica: ora è str\nprint(type(miaVar)) # <class 'str'>`;

  const snippetInput = `base_str = input("Inserisci la base: ")\nbase = float(base_str)  # Conversione da str a float\n\naltezza = float(input("Inserisci l'altezza: ")) # Conversione diretta\narea = (base * altezza) / 2\nprint(f"L'area del triangolo è: {area:.2f}")`;

  const snippetFormatting = `# Tripli apici per testo multi-riga\nprint('''Linea 1\nLinea 2''')\n\n# Caratteri di escape\nprint("Nome:\\tMario\\nCognome:\\tRossi")\n\n# Formattazione con format()\npercentuale = 0.856\nprint("Risultato: {:.2f}".format(area))\nprint("Percentuale: {:.1%}".format(percentuale))`;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Link di navigazione */}
      <Link 
        href="/classe-2/scita" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a SCITA Classe 2ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-10 text-gray-800">
        
        {/* Header Principale */}
        <header className="border-b-4 border-emerald-600 pb-4">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Materia: SCITA • Classe 2ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            🐍 Variabili, Tipi di Dato e Operatori in Python
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Tipizzazione dinamica, I/O con input() e print(), formattazione delle stringhe, operatori aritmetici, relazionali e parole-chiave riservate.
          </p>
        </header>

        {/* 1. LE VARIABILI E LA TIPIZZAZIONE DINAMICA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. Le Variabili e la Tipizzazione Dinamica
          </h2>
          <p className="text-sm leading-relaxed">
            In Python, una <strong>variabile</strong> è uno spazio di memoria a cui è associato un nome identificativo. A differenza di altri linguaggi (come C o C++), <strong>non occorre dichiarare il tipo di dato</strong>: l'interprete riconosce automaticamente il tipo a runtime.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50 border-gray-200 space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">Regole per i Nomi delle Variabili</h3>
              <ul className="list-disc pl-5 text-xs text-gray-700 space-y-1">
                <li>Python è <strong>case-sensitive</strong> (es. <code>miaVar</code> è diversa da <code>MiaVar</code>).</li>
                <li>Si usano lettere, numeri e l'underscore (<code>_</code>).</li>
                <li><strong>Non</strong> può iniziare con un numero o contenere spazi.</li>
                <li>Convenzione snake_case per variabili (es. <code>voto_informatica</code>).</li>
                <li>Convenzione per pseudo-costanti in MAIUSCOLO (es. <code>PI_GRECO = 3.14159</code>).</li>
              </ul>
            </div>

            <div className="border p-4 rounded-lg bg-emerald-50 border-emerald-200 space-y-2">
              <h3 className="font-bold text-emerald-900 text-sm">Tipizzazione Dinamica</h3>
              <p className="text-xs text-gray-700">
                La stessa variabile può cambiare tipo di dato nel corso del programma senza generare errori di compilazione:
              </p>
              <pre className="bg-gray-900 text-green-400 p-2.5 rounded font-mono text-[11px] overflow-x-auto leading-relaxed">
                <code>{snippetDynamicType}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 2. TIPI DI DATO E CONVERSIONI CON INPUT() */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Tipi di Dato Principali e Conversione (Casting)
          </h2>
          <p className="text-sm">
            I tipi di dato primitivi di Python sono: <code>int</code> (interi), <code>float</code> (decimali), <code>str</code> (stringhe) e <code>bool</code> (True/False).
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg space-y-2 text-xs md:text-sm text-gray-800">
            <h4 className="font-bold text-amber-900">⚠️ La funzione input() e la necessità del Casting</h4>
            <p>
              La funzione <code>input()</code> legge sempre i dati inseriti dall'utente come <strong>stringhe (str)</strong>. Se vogliamo eseguire calcoli matematici, dobbiamo convertire esplicitamente il dato usandone la funzione di conversione (casting): <code>int()</code> o <code>float()</code>.
            </p>
            <pre className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto leading-relaxed">
              <code>{snippetInput}</code>
            </pre>
          </div>
        </section>

        {/* 3. FORMATTAZIONE DELL'OUTPUT */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Formattazione dell'Output con print()
          </h2>
          <p className="text-sm">
            Python offre diverse tecniche per strutturare e formattare i messaggi a schermo:
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50 border-gray-200 space-y-1">
              <h3 className="font-bold text-gray-900">Tripli Apici (''' o """)</h3>
              <p className="text-xs text-gray-600">
                Permettono di stampare testi distribuiti su più righe mantenendo l'andata a capo esattamente come scritta nel codice.
              </p>
            </div>

            <div className="border p-4 rounded-lg bg-gray-50 border-gray-200 space-y-1">
              <h3 className="font-bold text-gray-900">Caratteri di Escape</h3>
              <p className="text-xs text-gray-600">
                <code>\n</code> per andare a capo e <code>\t</code> per inserire una tabulazione all'interno di una stringa.
              </p>
            </div>

            <div className="border p-4 rounded-lg bg-gray-50 border-gray-200 space-y-1">
              <h3 className="font-bold text-gray-900">Metodo format() e f-string</h3>
              <p className="text-xs text-gray-600">
                Permettono di specificare il numero di decimali (es. <code>':.2f'</code> per 2 cifre decimali) o la percentuale (<code>':.1%'</code>).
              </p>
            </div>
          </div>
        </section>

        {/* 4. OPERATORI ARITMETICI, RELAZIONALI E LOGICI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            4. Operatori di Python
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {/* Operatori Aritmetici */}
            <div className="border p-4 rounded-lg bg-blue-50 border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-900">Operatori Aritmetici</h3>
              <ul className="text-xs font-mono space-y-1 text-gray-800">
                <li><code>+</code> , <code>-</code> , <code>*</code> : Somma, Sottrazione, Moltiplicazione</li>
                <li><code>/</code> : Divisione reale (restituisce sempre un float)</li>
                <li><code>//</code> : Divisione intera (es. <code>15 // 4</code> → <code>3</code>)</li>
                <li><code>%</code> : Modulo / Resto (es. <code>15 % 4</code> → <code>3</code>)</li>
                <li><code>**</code> : Potenza (es. <code>2 ** 3</code> → <code>8</code>)</li>
              </ul>
            </div>

            {/* Operatori Relazionali e Logici */}
            <div className="border p-4 rounded-lg bg-indigo-50 border-indigo-200 space-y-2">
              <h3 className="font-bold text-indigo-900">Operatori Logici e Relazionali</h3>
              <ul className="text-xs font-mono space-y-1 text-gray-800">
                <li><code>{"=="}</code> , <code>{"!="}</code> : Uguale a, Diverso da</li>
                <li><code>{">"}</code> , <code>{"<"}</code> , <code>{">="}</code> , <code>{"<="}</code> : Confronti</li>
                <li><code>and</code> : VERO solo se entrambe le condizioni sono vere</li>
                <li><code>or</code> : VERO se almeno una condizione è vera</li>
                <li><code>not</code> : Inverte il valore di verità</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. SIMULATORE INTERATTIVO CALCOLO AREA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            5. Simulatore Interattivo: Calcolo Area con Casting float()
          </h2>
          <p className="text-sm text-gray-600">
            Inserisci i valori di base e altezza (anche decimali) per simulare l'esecuzione dello script Python con conversione da stringa a float:
          </p>

          <div className="bg-slate-900 text-white p-6 rounded-xl space-y-4 text-xs md:text-sm">
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <div>
                <label className="text-gray-300 font-bold block mb-1">Base (input str):</label>
                <input
                  type="text"
                  value={inputBase}
                  onChange={(e) => setInputBase(e.target.value)}
                  className="w-full p-2 bg-slate-800 text-green-400 font-mono rounded border border-slate-700 outline-none text-center font-bold"
                />
              </div>
              <div>
                <label className="text-gray-300 font-bold block mb-1">Altezza (input str):</label>
                <input
                  type="text"
                  value={inputAltezza}
                  onChange={(e) => setInputAltezza(e.target.value)}
                  className="w-full p-2 bg-slate-800 text-green-400 font-mono rounded border border-slate-700 outline-none text-center font-bold"
                />
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded font-mono space-y-2 text-xs border border-slate-700">
              <p className="text-gray-400 font-sans font-bold mb-1">Esecuzione dello Script:</p>
              <p className="text-slate-300">base = float("{inputBase}") → <span className="text-amber-400">{baseNum}</span> (float)</p>
              <p className="text-slate-300">altezza = float("{inputAltezza}") → <span className="text-amber-400">{altezzaNum}</span> (float)</p>
              <p className="text-slate-300">area = ({baseNum} * {altezzaNum}) / 2 → <span className="text-emerald-400 font-bold">{area.toFixed(2)}</span></p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}