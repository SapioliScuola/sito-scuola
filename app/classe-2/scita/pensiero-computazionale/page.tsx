'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PensieroComputazionaleScitaPage() {
  // Stato per la simulazione dell'algoritmo MCD
  const [numA, setNumA] = useState<number>(12);
  const [numB, setNumB] = useState<number>(8);

  const calcolaMCD = (a: number, b: number) => {
    let x = Math.abs(a);
    let y = Math.abs(b);
    const passaggi: string[] = [];

    if (x === 0 || y === 0) return { mcd: x || y, passaggi: ['Inserisci due numeri maggiori di zero.'] };

    while (y !== 0) {
      const resto = x % y;
      passaggi.push(`Divisione: ${x} ÷ ${y} = ${Math.floor(x / y)} con resto ${resto}`);
      x = y;
      y = resto;
    }
    passaggi.push(`Risultato finale: MCD = ${x}`);
    return { mcd: x, passaggi };
  };

  const risultato = calcolaMCD(numA, numB);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Link di navigazione alla classe seconda */}
      <Link 
        href="/classe-2/scita" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a SCITA Classe 2ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-10 text-gray-800">
        
        {/* Intestazione */}
        <header className="border-b-4 border-indigo-600 pb-4">
          <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Materia: SCITA • Classe 2ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            🧠 Dati, Informazioni e Pensiero Computazionale
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Analisi dei problemi, astrazione, scomposizione, formulazione di algoritmi e loro proprietà.
          </p>
        </header>

        {/* 1. DATI E INFORMAZIONI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. Dati e Informazioni
          </h2>
          <p className="text-sm leading-relaxed">
            In informatica e nelle scienze applicate occorre distinguere chiaramente due concetti fondamentali:
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-blue-50 border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-900 text-base">📊 Il Dato</h3>
              <p className="text-xs text-gray-700">
                Elemento grezzo, simbolo o valore privo di un contesto immediato (es. numeri, caratteri, date).
              </p>
              <div className="bg-white p-2 rounded border border-blue-200 text-xs font-mono text-blue-900">
                Esempio: 38.5
              </div>
            </div>

            <div className="border p-4 rounded-lg bg-emerald-50 border-emerald-200 space-y-2">
              <h3 className="font-bold text-emerald-900 text-base">💡 L'Informazione</h3>
              <p className="text-xs text-gray-700">
                Dato elaborato e contestualizzato che fornisce un significato o una conoscenza utile.
              </p>
              <div className="bg-white p-2 rounded border border-emerald-200 text-xs font-mono text-emerald-900">
                Esempio: "La temperatura corporea misurata è 38.5 °C (febbre)."
              </div>
            </div>
          </div>
        </section>

        {/* 2. PENSIERO COMPUTAZIONALE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Il Pensiero Computazionale (o Algoritmico)
          </h2>
          <p className="text-sm leading-relaxed">
            Il <strong>pensiero computazionale</strong> è la capacità mentale di affrontare e risolvere problemi formulando procedure che possano essere lette ed eseguite da un elaboratore. Si articola in 4 fasi principali:
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm pt-2">
            <div className="border p-4 rounded-lg bg-gray-50 border-gray-200 space-y-1">
              <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">1. Pattern</span>
              <h3 className="font-bold text-indigo-900 text-base">🔍 Riconoscimento delle Regolarità</h3>
              <p className="text-xs text-gray-700">
                Analizzare il problema per individuare schemi ricorrenti (pattern) o analogie con problemi già noti.
              </p>
            </div>

            <div className="border p-4 rounded-lg bg-gray-50 border-gray-200 space-y-1">
              <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">2. Astrazione</span>
              <h3 className="font-bold text-indigo-900 text-base">🎨 Astrazione</h3>
              <p className="text-xs text-gray-700">
                Isolare gli aspetti fondamentali del problema, tralasciando i dettagli non essenziali per la soluzione.
              </p>
            </div>

            <div className="border p-4 rounded-lg bg-gray-50 border-gray-200 space-y-1">
              <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">3. Scomposizione</span>
              <h3 className="font-bold text-indigo-900 text-base">🧩 Scomposizione</h3>
              <p className="text-xs text-gray-700">
                Dividere un problema complesso in sottoproblemi più piccoli e più semplici da risolvere.
              </p>
            </div>

            <div className="border p-4 rounded-lg bg-gray-50 border-gray-200 space-y-1">
              <span className="bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">4. Algoritmo</span>
              <h3 className="font-bold text-indigo-900 text-base">⚙️ Formulazione dell'Algoritmo</h3>
              <p className="text-xs text-gray-700">
                Progettare la sequenza precisa di passi elementari per pervenire alla soluzione.
              </p>
            </div>
          </div>
        </section>

        {/* 3. DALL'ALGORITMO AL PROGRAMMA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Dal Pensiero alla Programmazione
          </h2>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg space-y-2 text-sm text-gray-800">
            <p className="text-xs md:text-sm">
              1. Formulato l'algoritmo, si identificano le variabili principali e le si rappresenta come <strong>dati da elaborare</strong>.
            </p>
            <p className="text-xs md:text-sm">
              2. Successivamente si <strong>codifica l'algoritmo</strong> in un linguaggio di programmazione comprensibile dall'elaboratore.
            </p>
            <p className="text-xs md:text-sm">
              3. Si esegue infine il programma e si verifica che il risultato fornisca effettivamente la soluzione al problema (testing & problem solving).
            </p>
          </div>
        </section>

        {/* 4. DEFINIZIONE E PROPRIETÀ DI UN ALGORITMO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            4. Che cos'è un Algoritmo e le sue Proprietà
          </h2>
          <p className="text-sm leading-relaxed">
            Un <strong>algoritmo</strong> è un procedimento sequenziale che indica come risolvere un problema attraverso una serie di passi elementari.
          </p>

          <div className="grid md:grid-cols-2 gap-3 text-xs">
            <div className="p-3 border rounded-lg bg-gray-50 border-gray-200">
              <span className="font-bold text-blue-900 block text-sm mb-0.5">✅ Correttezza</span>
              Produce la soluzione esatta per qualsiasi dato di ingresso valido.
            </div>

            <div className="p-3 border rounded-lg bg-gray-50 border-gray-200">
              <span className="font-bold text-purple-900 block text-sm mb-0.5">🌐 Generalità</span>
              Risolve una famiglia o classe generica di problemi simili, non un singolo caso isolato.
            </div>

            <div className="p-3 border rounded-lg bg-gray-50 border-gray-200">
              <span className="font-bold text-emerald-900 block text-sm mb-0.5">📦 Completezza</span>
              Prevede e gestisce tutti i casi possibili che si possono verificare.
            </div>

            <div className="p-3 border rounded-lg bg-gray-50 border-gray-200">
              <span className="font-bold text-amber-900 block text-sm mb-0.5">🎯 Non Ambiguità</span>
              Ogni istruzione deve essere chiara, univoca e senza dubbi per l'esecutore.
            </div>

            <div className="p-3 border rounded-lg bg-gray-50 border-gray-200">
              <span className="font-bold text-red-900 block text-sm mb-0.5">⏱️ Finitezza</span>
              Composto da un numero finito di passi ed eseguito in un tempo finito.
            </div>

            <div className="p-3 border rounded-lg bg-gray-50 border-gray-200">
              <span className="font-bold text-indigo-900 block text-sm mb-0.5">⚡ Efficienza</span>
              Risolve il problema ottimizzando l'uso delle risorse (tempo di esecuzione e memoria).
            </div>
          </div>
        </section>

        {/* 5. SIMULATORE INTERATTIVO ALGORITMO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            5. Esempio Pratico: Algoritmo di Euclide per l'MCD
          </h2>
          <div className="bg-slate-900 text-white p-6 rounded-xl space-y-4 text-xs md:text-sm">
            <div className="grid grid-cols-2 gap-4 max-w-xs">
              <div>
                <label className="block text-gray-400 mb-1">Numero A:</label>
                <input
                  type="number"
                  value={numA}
                  onChange={(e) => setNumA(Number(e.target.value))}
                  className="w-full p-2 bg-slate-800 text-green-400 font-mono rounded border border-slate-700 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1">Numero B:</label>
                <input
                  type="number"
                  value={numB}
                  onChange={(e) => setNumB(Number(e.target.value))}
                  className="w-full p-2 bg-slate-800 text-green-400 font-mono rounded border border-slate-700 outline-none"
                />
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg font-mono space-y-1">
              <p className="text-gray-400 font-sans font-bold text-xs mb-2">Esecuzione passo-passo dell'Algoritmo:</p>
              {risultato.passaggi.map((p, idx) => (
                <p key={idx} className={idx === risultato.passaggi.length - 1 ? 'text-emerald-400 font-bold pt-2' : 'text-slate-300'}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}