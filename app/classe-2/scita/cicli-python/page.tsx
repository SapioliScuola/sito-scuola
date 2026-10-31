'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CicliPythonPage() {
  // Stati per i simulatori
  const [numFattoriale, setNumFattoriale] = useState<number>(5);
  const [righeTriangolo, setRigheTriangolo] = useState<number>(5);
  const [mcmA, setMcmA] = useState<number>(12);
  const [mcmB, setMcmB] = useState<number>(15);

  // Snippet di codice isolati in stringhe JS
  const snippetForRange = `# Ciclo for con range(start, stop, step)\nfor i in range(1, 6):\n    print("Iterazione numero:", i)`;

  const snippetAscii = `# Stampa di una porzione della tabella ASCII\nprint("DEC | CHAR")\nprint("---------")\nfor i in range(65, 71):\n    print(f"{i} | {chr(i)}")`;

  const snippetStrings = `# Ciclo for applicato a una stringa\ntesto = "PYTHON"\nfor carattere in testo:\n    print(carattere.lower())`;

  const snippetFattoriale = `n = ${numFattoriale}\nfattoriale = 1\n\nfor i in range(1, n + 1):\n    fattoriale *= i\n\nprint(f"Il fattoriale di {n} è: {fattoriale}")`;

  const snippetNestedTriangolo = `# Output triangolare con cicli annidati\nrighe = ${righeTriangolo}\n\nfor i in range(1, righe + 1):\n    riga_testo = ""\n    for j in range(i):\n        riga_testo += "* "\n    print(riga_testo)`;

  const snippetBreakContinue = `# Uso di break e continue\nfor i in range(1, 10):\n    if i == 3:\n        continue  # Salta l'iterazione 3\n    if i == 7:\n        break     # Interrompe definitivamente il ciclo\n    print(i)`;

  const snippetWhileMedia = `# Calcolo della media dei voti con ciclo while\nsomma = 0\nconteggio = 0\n\nwhile True:\n    voto = float(input("Inserisci voto (-1 per terminare): "))\n    if voto == -1:\n        break\n    somma += voto\n    conteggio += 1\n\nif conteggio > 0:\n    media = somma / conteggio\n    print(f"Media voti: {media:.2f}")`;

  const snippetMcm = `# Minimo Comune Multiplo (mcm)\na = ${mcmA}\nb = ${mcmB}\n\n# Troviamo il massimo tra i due numeri\nmaggiore = max(a, b)\n\nwhile True:\n    if maggiore % a == 0 and maggiore % b == 0:\n        mcm = maggiore\n        break\n    maggiore += 1\n\nprint(f"Il mcm tra {a} e {b} è: {mcm}")`;

  // Funzioni per i calcoli dei simulatori
  const calcolaFattoriale = (n: number) => {
    if (n < 0) return 'Non definito per numeri negativi';
    let f = 1;
    for (let i = 1; i <= n; i++) {
      f *= i;
    }
    return f;
  };

  const generaTriangolo = (n: number) => {
    const righe = [];
    for (let i = 1; i <= n; i++) {
      righe.push('* '.repeat(i));
    }
    return righe;
  };

  const calcolaMcm = (a: number, b: number) => {
    if (a <= 0 || b <= 0) return 'Inserire due numeri interi positivi';
    let maggiore = Math.max(a, b);
    while (true) {
      if (maggiore % a === 0 && maggiore % b === 0) {
        return maggiore;
      }
      maggiore++;
    }
  };

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
            🔁 Le Strutture Iterative in Python (Cicli)
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Cicli <code>for</code> e <code>while</code>, la funzione <code>range()</code>, iterazione su stringhe, annidamento, istruzioni <code>break</code> e <code>continue</code> e calcoli algoritmici.
          </p>
        </header>

        {/* 1. COS'È UN CICLO E LA FUNZIONE RANGE() */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. Che cos'è un Ciclo e la Funzione range()
          </h2>
          <p className="text-sm leading-relaxed">
            Un <strong>ciclo</strong> (o struttura iterativa) è una sequenza di istruzioni che viene eseguita ripetutamente finché una determinata condizione rimane vera o per un numero predefinito di volte.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-blue-50 border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-900 text-sm">Il Ciclo for e range()</h3>
              <p className="text-xs text-gray-700">
                La funzione <code>range(start, stop, step)</code> genera una sequenza numerica. Nota bene: il valore di <code>stop</code> è **escluso**.
              </p>
              <pre className="bg-gray-900 text-green-400 p-2.5 rounded font-mono text-[11px] overflow-x-auto leading-relaxed">
                <code>{snippetForRange}</code>
              </pre>
            </div>

            <div className="border p-4 rounded-lg bg-indigo-50 border-indigo-200 space-y-2">
              <h3 className="font-bold text-indigo-900 text-sm">Esempio: Tabella ASCII con chr()</h3>
              <p className="text-xs text-gray-700">
                Usando <code>chr(codice)</code> possiamo convertire il valore numerico intero nel rispettivo carattere ASCII:
              </p>
              <pre className="bg-gray-900 text-green-400 p-2.5 rounded font-mono text-[11px] overflow-x-auto leading-relaxed">
                <code>{snippetAscii}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 2. CICLO FOR SU STRINGHE E FATTORIALE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Iterare sulle Stringhe e Calcolare il Fattoriale
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50 border-gray-200 space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">Iterare su una Stringa</h3>
              <p className="text-xs text-gray-700">
                In Python una stringa è una sequenza di caratteri. Il ciclo <code>for</code> scorre ciascun carattere uno alla volta:
              </p>
              <pre className="bg-gray-900 text-green-400 p-2.5 rounded font-mono text-[11px] overflow-x-auto leading-relaxed">
                <code>{snippetStrings}</code>
              </pre>
            </div>

            <div className="border p-4 rounded-lg bg-purple-50 border-purple-200 space-y-2">
              <h3 className="font-bold text-purple-900 text-sm">Calcolo del Fattoriale (n!)</h3>
              <p className="text-xs text-gray-700">
                Il fattoriale di N ($n!$) è il prodotto di tutti gli interi da 1 a N. Si calcola accumulando il prodotto ad ogni iterazione:
              </p>
              <pre className="bg-gray-900 text-green-400 p-2.5 rounded font-mono text-[11px] overflow-x-auto leading-relaxed">
                <code>{snippetFattoriale}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 3. CICLI ANNIDATI ED OUTPUT TRIANGOLARE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Strutture Iterative Annidate e Output Triangolare
          </h2>
          <p className="text-sm leading-relaxed">
            Un ciclo **annidato** (o nidificato) è un ciclo inserito all'interno del corpo di un altro ciclo. Per ogni singola iterazione del ciclo esterno, il ciclo interno viene eseguito completamente.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg space-y-2 text-xs md:text-sm text-gray-800">
            <h4 className="font-bold text-amber-900">Esempio: Generazione di un Pattern Triangolare</h4>
            <pre className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto leading-relaxed">
              <code>{snippetNestedTriangolo}</code>
            </pre>
          </div>
        </section>

        {/* 4. BREAK E CONTINUE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            4. Istruzioni di Controllo del Ciclo: break e continue
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-red-50 border-red-200 space-y-2">
              <h3 className="font-bold text-red-900 text-sm">🛑 break</h3>
              <p className="text-xs text-gray-700">
                Interrompe **immediatamente** l'esecuzione del ciclo e passa alla prima istruzione al di fuori di esso.
              </p>
            </div>

            <div className="border p-4 rounded-lg bg-amber-50 border-amber-200 space-y-2">
              <h3 className="font-bold text-amber-900 text-sm">⏭️ continue</h3>
              <p className="text-xs text-gray-700">
                Salta la parte rimanente dell'iterazione corrente e passa immediatamente alla **successiva**.
              </p>
            </div>
          </div>

          <pre className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed">
            <code>{snippetBreakContinue}</code>
          </pre>
        </section>

        {/* 5. CICLO WHILE ED ESEMPI PRATICI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            5. Il Ciclo while: Media Voti e Minimo Comune Multiplo (mcm)
          </h2>
          <p className="text-sm">
            Il ciclo <code>while</code> continua ad eseguire il suo blocco finché la condizione logica rimane vera. Si usa quando il **numero di iterazioni non è noto a priori**.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-emerald-50 border-emerald-200 space-y-2">
              <h3 className="font-bold text-emerald-900 text-sm">Calcolo Media Voti (Sentinella -1)</h3>
              <pre className="bg-gray-900 text-green-400 p-2.5 rounded font-mono text-[11px] overflow-x-auto leading-relaxed">
                <code>{snippetWhileMedia}</code>
              </pre>
            </div>

            <div className="border p-4 rounded-lg bg-blue-50 border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-900 text-sm">Ricerca Minimo Comune Multiplo (mcm)</h3>
              <pre className="bg-gray-900 text-green-400 p-2.5 rounded font-mono text-[11px] overflow-x-auto leading-relaxed">
                <code>{snippetMcm}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 6. SIMULATORI INTERATTIVI */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            6. Simulatori Interattivi degli Algoritmi
          </h2>

          {/* Simulatore 1: Fattoriale e Triangolo */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 text-white p-5 rounded-xl space-y-3">
              <h3 className="text-sm font-bold text-emerald-400 border-b border-slate-700 pb-2">
                🧮 Calcolo del Fattoriale
              </h3>
              <div className="flex items-center gap-3">
                <label className="text-xs text-gray-300 font-bold">Numero N:</label>
                <input
                  type="number"
                  min="0"
                  max="12"
                  value={numFattoriale}
                  onChange={(e) => setNumFattoriale(Number(e.target.value))}
                  className="w-20 p-1.5 bg-slate-800 text-green-400 font-mono rounded border border-slate-700 outline-none text-center text-xs font-bold"
                />
              </div>
              <div className="bg-slate-800 p-3 rounded font-mono text-xs text-center border border-slate-700">
                <span className="text-gray-400 block text-[10px] uppercase mb-1">Risultato Fattoriale</span>
                <span className="text-emerald-400 font-bold text-base">{numFattoriale}! = {calcolaFattoriale(numFattoriale)}</span>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-5 rounded-xl space-y-3">
              <h3 className="text-sm font-bold text-indigo-400 border-b border-slate-700 pb-2">
                📐 Pattern Triangolare
              </h3>
              <div className="flex items-center gap-3">
                <label className="text-xs text-gray-300 font-bold">Numero Righe:</label>
                <input
                  type="number"
                  min="1"
                  max="8"
                  value={righeTriangolo}
                  onChange={(e) => setRigheTriangolo(Number(e.target.value))}
                  className="w-20 p-1.5 bg-slate-800 text-indigo-400 font-mono rounded border border-slate-700 outline-none text-center text-xs font-bold"
                />
              </div>
              <div className="bg-slate-800 p-3 rounded font-mono text-xs border border-slate-700 h-[100px] overflow-y-auto text-amber-300">
                {generaTriangolo(righeTriangolo).map((riga, idx) => (
                  <p key={idx}>{riga}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Simulatore 2: MCM */}
          <div className="bg-slate-900 text-white p-5 rounded-xl space-y-4">
            <h3 className="text-sm font-bold text-blue-400 border-b border-slate-700 pb-2">
              🔍 Ricerca Minimo Comune Multiplo (mcm)
            </h3>
            <div className="flex items-center gap-4 max-w-sm">
              <div>
                <label className="text-xs text-gray-300 font-bold block mb-1">Numero A:</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={mcmA}
                  onChange={(e) => setMcmA(Number(e.target.value))}
                  className="w-24 p-1.5 bg-slate-800 text-blue-400 font-mono rounded border border-slate-700 outline-none text-center text-xs font-bold"
                />
              </div>
              <div>
                <label className="text-xs text-gray-300 font-bold block mb-1">Numero B:</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={mcmB}
                  onChange={(e) => setMcmB(Number(e.target.value))}
                  className="w-24 p-1.5 bg-slate-800 text-blue-400 font-mono rounded border border-slate-700 outline-none text-center text-xs font-bold"
                />
              </div>
            </div>

            <div className="bg-slate-800 p-3 rounded font-mono text-xs border border-slate-700 text-center">
              <span className="text-gray-400 block text-[10px] uppercase mb-1">Risultato Calcolo MCM</span>
              <span className="text-emerald-400 font-bold text-base">mcm({mcmA}, {mcmB}) = {calcolaMcm(mcmA, mcmB)}</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}