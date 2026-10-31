'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CondizionaliPythonPage() {
  // Stato per il simulatore interattivo di voto e giudizio (if / elif / else)
  const [votoInput, setVotoInput] = useState<number>(7);
  const [lode, setLode] = useState<boolean>(false);

  // Stato per il simulatore interattivo del match-case (Giorni della settimana)
  const [giornoNum, setGiornoNum] = useState<number>(1);

  // Snippet di codice isolati in stringhe JS per prevenire errori JSX
  const snippetIfElse = `voto = ${votoInput}\n\nif voto >= 6:\n    print("Promosso!")\nelse:\n    print("Bocciato!")`;

  const snippetElif = `voto = ${votoInput}\n\nif voto < 6:\n    print("Insufficiente")\nelif voto < 8:\n    print("Buono")\nelif voto < 10:\n    print("Ottimo")\nelse:\n    print("Eccellente / 10 e Lode")`;

  const snippetMatchCase = `giorno = ${giornoNum}\n\nmatch giorno:\n    case 1:\n        print("Lunedì")\n    case 2:\n        print("Martedì")\n    case 3:\n        print("Mercoledì")\n    case 4 | 5:\n        print("Giovedì o Venerdì")\n    case 6 | 7:\n        print("Fine settimana! 🎉")\n    case _:\n        print("Giorno non valido")`;

  const snippetDifference = `# CASO A: Serie di IF indipendenti (vengono testati TUTTI)\nx = 7\nif x > 5:\n    print("Maggiore di 5")  # Eseguito!\nif x > 3:\n    print("Maggiore di 3")  # Eseguito anche questo!\n\n# CASO B: Struttura IF-ELIF-ELSE (mutuamente esclusiva)\nif x > 5:\n    print("Maggiore di 5")  # Eseguito!\nelif x > 3:\n    print("Maggiore di 3")  # Saltato perché il primo era vero!`;

  const snippetIndentError = `# ERRORE SINTATTICO: IndentationError\nif voto >= 6:\nprint("Promosso")  # Errore! Mancano i 4 spazi di rientro`;

  const snippetNested = `voto = ${votoInput}\nlode = ${lode ? 'True' : 'False'}\n\nif voto >= 6:\n    print("Promosso")\n    if voto == 10 and lode:\n        print("Con Lode e Menzione!")\nelse:\n    print("Bocciato")`;

  const snippetOperators = `# Modulo % (resto della divisione intera)\nresto = 15 % 4    # Risultato: 3\n\n# Divisione Intera // (tronca i decimali)\nquoziente = 15 // 4  # Risultato: 3\n\n# Incrementare una variabile di 1 (Operatore Composto +=)\ncontatore = 0\ncontatore += 1    # Equivalente a: contatore = contatore + 1`;

  // Funzioni per le valutazioni dei simulatori
  const valutaVoto = (v: number, l: boolean) => {
    if (v < 6) return { testo: 'Insufficiente', colore: 'text-red-400' };
    if (v < 8) return { testo: 'Buono (Sufficiente)', colore: 'text-amber-400' };
    if (v < 10) return { testo: 'Ottimo', colore: 'text-blue-400' };
    if (v === 10 && l) return { testo: 'Eccellente con 10 e Lode! 🌟', colore: 'text-emerald-400 font-bold' };
    return { testo: 'Eccellente (10/10)', colore: 'text-emerald-400' };
  };

  const valutaMatchGiorno = (g: number) => {
    switch (g) {
      case 1:
        return 'Lunedì';
      case 2:
        return 'Martedì';
      case 3:
        return 'Mercoledì';
      case 4:
        return 'Giovedì';
      case 5:
        return 'Venerdì';
      case 6:
        return 'Sabato (Fine settimana! 🎉)';
      case 7:
        return 'Domenica (Fine settimana! 🎉)';
      default:
        return 'Giorno non valido (Valore di default _)';
    }
  };

  const risultatoSimulazione = valutaVoto(votoInput, lode);
  const risultatoMatch = valutaMatchGiorno(giornoNum);

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
        <header className="border-b-4 border-indigo-600 pb-4">
          <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Materia: SCITA • Classe 2ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            🔀 Selezioni e Controllo del Flusso in Python
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Sintassi di <code>if</code>, <code>else</code>, <code>elif</code> e <code>match-case</code>, indentazione, nidificazione, operatori ed esempi pratici.
          </p>
        </header>

        {/* 1. SINTASSI IF, ELSE ED ELIF CON INDENTAZIONE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. Le Istruzioni if, else, elif e l'Indentazione
          </h2>
          <p className="text-sm leading-relaxed">
            In Python i blocchi condizionali sono definiti dall'<strong>indentazione</strong> (rientro obbligatorio di 4 spazi). Ogni riga condizionale deve terminare con i due punti (<code>:</code>).
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-blue-50 border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-900 text-sm">Sintassi Base (if / else)</h3>
              <p className="text-xs text-gray-700">
                Se la condizione dopo <code>if</code> è vera viene eseguito il blocco indentato, altrimenti si passa ad <code>else</code>.
              </p>
              <pre className="bg-gray-900 text-green-400 p-2.5 rounded font-mono text-[11px] overflow-x-auto leading-relaxed">
                <code>{snippetIfElse}</code>
              </pre>
            </div>

            <div className="border p-4 rounded-lg bg-indigo-50 border-indigo-200 space-y-2">
              <h3 className="font-bold text-indigo-900 text-sm">Selezione Multipla con elif</h3>
              <p className="text-xs text-gray-700">
                La clausola <code>elif</code> (else-if) permette di valutare più alternative in cascata.
              </p>
              <pre className="bg-gray-900 text-green-400 p-2.5 rounded font-mono text-[11px] overflow-x-auto leading-relaxed">
                <code>{snippetElif}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 2. LA STRUTTURA MATCH ... CASE (PATTERN MATCHING) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. La Struttura match ... case (Selezione Multipla Puntuale)
          </h2>
          <p className="text-sm leading-relaxed">
            Introdotta in Python 3.10, la struttura <code>match ... case</code> (equivalente allo <em>switch-case</em> di altri linguaggi) è l'ideale quando si vuole confrontare una variabile con **valori costanti esatti**, rendendo il codice più pulito e leggibile rispetto a una lunga sequenza di <code>elif</code>.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-purple-50 border-purple-200 space-y-2">
              <h3 className="font-bold text-purple-900 text-sm">Sintassi e Caratteristiche di match-case</h3>
              <ul className="list-disc pl-5 text-xs text-gray-700 space-y-1">
                <li><code>match espressione:</code> avvia il confronto del valore.</li>
                <li><code>case valore:</code> definisce il blocco da eseguire se il valore corrisponde.</li>
                <li><code>case _:</code> il carattere trattino basso (wildcard) cattura tutti i casi rimanenti (corrisponde all'<code>else</code> di default).</li>
                <li>Si possono unire più valori nello stesso caso usando la barra verticale <code>|</code> (es. <code>case 4 | 5:</code>).</li>
              </ul>
            </div>

            <div className="border p-4 rounded-lg bg-gray-50 border-gray-200 space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">Esempio di Codice Python match-case</h3>
              <pre className="bg-gray-900 text-green-400 p-2.5 rounded font-mono text-[11px] overflow-x-auto leading-relaxed">
                <code>{snippetMatchCase}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 3. DIFFERENZA TRA ELIF E IF MULTIPLI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Differenza Sostanziale tra elif e if Multipli
          </h2>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg space-y-3 text-xs md:text-sm text-gray-800">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Serie di <code>if</code> separati:</strong> Ogni test viene valutato **indipendentemente** dagli altri.
              </li>
              <li>
                <strong>Catena <code>if ... elif ... else</code>:</strong> Le condizioni sono **mutuamente esclusive**. Non appena una è vera, le successive vengono saltate.
              </li>
            </ul>
            <pre className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto leading-relaxed">
              <code>{snippetDifference}</code>
            </pre>
          </div>
        </section>

        {/* 4. ERRORI COMUNI ED ANNIDAMENTO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            4. Errori Comuni e Strutture Nidificate (Annidamento)
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {/* Errori Comuni */}
            <div className="border p-4 rounded-lg bg-red-50 border-red-200 space-y-2">
              <h3 className="font-bold text-red-900 text-sm">⚠️ Errori Comuni da Evitare</h3>
              <ul className="list-disc pl-5 text-xs text-red-800 space-y-1.5">
                <li>Dimenticare i due punti <code>:</code> alla fine delle righe di test.</li>
                <li>Mancanza di indentazione (→ <code>IndentationError</code>).</li>
                <li>Confondere l'assegnazione (<code>=</code>) con il confronto di uguaglianza (<code>==</code>).</li>
              </ul>
              <pre className="bg-gray-900 text-red-300 p-2 rounded font-mono text-[11px] overflow-x-auto">
                <code>{snippetIndentError}</code>
              </pre>
            </div>

            {/* Nidificazione */}
            <div className="border p-4 rounded-lg bg-purple-50 border-purple-200 space-y-2">
              <h3 className="font-bold text-purple-900 text-sm">🧱 Selezioni Nidificate</h3>
              <p className="text-xs text-gray-700">
                Inserire un <code>if</code> dentro un altro richiede un ulteriore livello di rientro (8 spazi):
              </p>
              <pre className="bg-gray-900 text-green-400 p-2.5 rounded font-mono text-[11px] overflow-x-auto leading-relaxed">
                <code>{snippetNested}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 5. OPERATORI ARITMETICI AVANZATI E INCREMENTO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            5. Modulo (%), Divisione Intera (//) e Incremento (+= 1)
          </h2>

          <div className="grid md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 border rounded-lg bg-gray-50 border-gray-200 space-y-1">
              <span className="font-bold text-indigo-900 text-sm block">Modulo %</span>
              <p className="text-gray-700">
                Restituisce il resto della divisione (es. <code>x % 2 == 0</code> verifica se x è pari).
              </p>
            </div>

            <div className="p-3 border rounded-lg bg-gray-50 border-gray-200 space-y-1">
              <span className="font-bold text-indigo-900 text-sm block">Divisione Intera //</span>
              <p className="text-gray-700">
                Tronca i decimali calcolando solo il quoziente intero (es. <code>7 // 2</code> → <code>3</code>).
              </p>
            </div>

            <div className="p-3 border rounded-lg bg-gray-50 border-gray-200 space-y-1">
              <span className="font-bold text-indigo-900 text-sm block">Incremento += 1</span>
              <p className="text-gray-700">
                In Python non esiste <code>x++</code>, si usa l'operatore composto <code>x += 1</code>.
              </p>
            </div>
          </div>

          <pre className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed">
            <code>{snippetOperators}</code>
          </pre>
        </section>

        {/* 6. SIMULATORE INTERATTIVO MATCH-CASE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            6. Simulatore Interattivo: Struttura match ... case
          </h2>
          <p className="text-sm text-gray-600">
            Seleziona il numero del giorno (da 1 a 8) per vedere come la struttura <code>match ... case</code> individua l'esito corrispondente:
          </p>

          <div className="bg-slate-900 text-white p-6 rounded-xl space-y-4 text-xs md:text-sm">
            <div className="flex items-center gap-4 max-w-xs">
              <label className="text-gray-300 font-bold">Giorno (1-8):</label>
              <input
                type="number"
                min="1"
                max="8"
                value={giornoNum}
                onChange={(e) => setGiornoNum(Number(e.target.value))}
                className="w-20 p-2 bg-slate-800 text-green-400 font-mono rounded border border-slate-700 outline-none text-center font-bold"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div>
                <span className="text-xs text-gray-400 block mb-1 font-mono">Codice match-case:</span>
                <pre className="bg-slate-800 p-3 rounded font-mono text-emerald-400 text-xs overflow-x-auto border border-slate-700 leading-relaxed">
                  <code>{snippetMatchCase}</code>
                </pre>
              </div>

              <div>
                <span className="text-xs text-gray-400 block mb-1 font-mono">Output Risultato:</span>
                <div className="bg-black p-4 rounded font-mono text-xs border border-slate-700 h-[190px] flex items-center justify-center text-center">
                  <div>
                    <span className="text-gray-500 block text-[10px] uppercase tracking-wider mb-2">Esito Match</span>
                    <p className="text-base text-emerald-400 font-bold">
                      {risultatoMatch}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}