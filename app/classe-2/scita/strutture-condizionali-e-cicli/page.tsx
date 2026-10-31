'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StruttureCondizionaliECicliPage() {
  // Stato per la simulazione della Tabella di Traccia
  const [inputN, setInputN] = useState<number>(3);

  // Stringhe di codice isolate per evitare qualsiasi errore di parsing JSX
  const snippetIf = `if (condizione) {\n  // istruzioni da eseguire se vera\n}`;

  const snippetIfElse = `if (condizione) {\n  // istruzioni se vera\n} else {\n  // istruzioni se falsa\n}`;

  const snippetFor = `for (i = 1; i <= N; i++) {\n  // istruzioni da ripetere\n}`;

  const snippetWhile = `while (condizione) {\n  // istruzioni da ripetere\n}`;

  const snippetDoWhile = `do {\n  // istruzioni da ripetere\n} while (condizione);`;

  // Calcolo passo-passo per la tabella di traccia
  const generaTraccia = (n: number) => {
    const righe = [];
    let somma = 0;
    let i = 1;

    if (n < 1) {
      return [{ passo: 0, n, i: 1, cond: 'FALSO (i <= n)', sommaCalcolo: '0', somma: 0, azione: 'Il ciclo non viene eseguito' }];
    }

    while (i <= n) {
      const vecchiaSomma = somma;
      somma = somma + i;
      righe.push({
        passo: i,
        n,
        i,
        cond: `${i} <= ${n} (VERO)`,
        sommaCalcolo: `${vecchiaSomma} + ${i} = ${somma}`,
        somma,
        azione: `Esegue iterazione ${i}`
      });
      i++;
    }

    // Ultimo passo di uscita dal ciclo
    righe.push({
      passo: i,
      n,
      i,
      cond: `${i} <= ${n} (FALSO)`,
      sommaCalcolo: `${somma} (Invariata)`,
      somma,
      azione: 'Uscita dal ciclo e stampa del risultato'
    });

    return righe;
  };

  const tracciaRisultati = generaTraccia(inputN);

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
            🔀 Selezioni, Cicli Iterativi e Tabella di Traccia
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Strutture condizionali (if-else), selezioni annidate, cicli (for, while, do-while), operatori relazionali e simulazione della trace table.
          </p>
        </header>

        {/* 1. LA STRUTTURA CONDIZIONALE O SELEZIONE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. La Selezione (Struttura Condizionale)
          </h2>
          <p className="text-sm leading-relaxed">
            La <strong>selezione</strong> (o struttura condizionale) permette di deviare il flusso di esecuzione di un algoritmo ed eseguire determinati blocchi di istruzioni a seconda che una condizione (predicato) risulti <strong>VERA</strong> o <strong>FALSA</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-blue-50 border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-900 text-base">➡️ Selezione a una via (if)</h3>
              <p className="text-xs text-gray-700">
                Esegue un blocco di istruzioni <em>solo se</em> la condizione è vera. Se è falsa, il blocco viene saltato.
              </p>
              <pre className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed">
                <code>{snippetIf}</code>
              </pre>
            </div>

            <div className="border p-4 rounded-lg bg-indigo-50 border-indigo-200 space-y-2">
              <h3 className="font-bold text-indigo-900 text-base">🔀 Selezione a due vie (if ... else)</h3>
              <p className="text-xs text-gray-700">
                Prevede due strade alternative: esegue il primo blocco se la condizione è vera, oppure il blocco alternativo (else) se è falsa.
              </p>
              <pre className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed">
                <code>{snippetIfElse}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 2. STRUTTURE NIDIFICATE ED OPERATORI RELAZIONALI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Selezioni Nidificate e Operatori Relazionali
          </h2>
          <p className="text-sm">
            Quando un blocco condizionato contiene al suo interno un'ulteriore selezione, le strutture si dicono <strong>nidificate (o annidate)</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {/* Tabella Operatori Relazionali con simboli scappati in stringhe JS */}
            <div className="border p-4 rounded-lg bg-gray-50 border-gray-200 space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">Operatori Relazionali (Confronto)</h3>
              <ul className="space-y-1 text-xs font-mono text-gray-800">
                <li><code>{"="}</code> oppure <code>{"=="}</code> : Uguale a</li>
                <li><code>{"!="}</code> oppure <code>{"<>"}</code> : Diverso da</li>
                <li><code>{">"}</code> : Maggiore di</li>
                <li><code>{"<"}</code> : Minore di</li>
                <li><code>{">="}</code> : Maggiore o uguale a</li>
                <li><code>{"<="}</code> : Minore o uguale a</li>
              </ul>
            </div>

            {/* Regola Nidificazione */}
            <div className="border p-4 rounded-lg bg-amber-50 border-amber-200 space-y-2 text-xs">
              <h3 className="font-bold text-amber-900 text-sm font-sans">⚠️ Regola delle Selezioni Nidificate</h3>
              <p className="text-gray-800">
                Ogni blocco condizionale interno deve essere completamente chiuso all'interno del blocco padre prima che quest'ultimo venga chiuso.
              </p>
              <p className="text-gray-700">
                L'intreccio scorretto di blocchi condizionali causa errori di sintassi o programmi non eseguibili.
              </p>
            </div>
          </div>
        </section>

        {/* 3. LE STRUTTURE ITERATIVE (I CICLI) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Le Strutture Iterative: Cicli for, while e do-while
          </h2>
          <p className="text-sm">
            Si usa un <strong>ciclo</strong> (o struttura iterativa) quando un gruppo di istruzioni deve essere eseguito ripetutamente.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {/* Ciclo FOR */}
            <div className="border p-4 rounded-lg bg-blue-50 border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-900 font-mono text-sm">Ciclo FOR</h3>
              <p className="text-xs text-gray-700">
                Si usa quando il <strong>numero di iterazioni è noto a priori</strong>.
              </p>
              <pre className="bg-gray-900 text-green-400 p-2.5 rounded-lg font-mono text-[11px] overflow-x-auto leading-relaxed">
                <code>{snippetFor}</code>
              </pre>
            </div>

            {/* Ciclo WHILE */}
            <div className="border p-4 rounded-lg bg-purple-50 border-purple-200 space-y-2">
              <h3 className="font-bold text-purple-900 font-mono text-sm">Ciclo WHILE</h3>
              <p className="text-xs text-gray-700">
                Test in <strong>testa</strong>: se la condizione è subito falsa, le istruzioni non vengono mai eseguite.
              </p>
              <pre className="bg-gray-900 text-green-400 p-2.5 rounded-lg font-mono text-[11px] overflow-x-auto leading-relaxed">
                <code>{snippetWhile}</code>
              </pre>
            </div>

            {/* Ciclo DO-WHILE */}
            <div className="border p-4 rounded-lg bg-emerald-50 border-emerald-200 space-y-2">
              <h3 className="font-bold text-emerald-900 font-mono text-sm">Ciclo DO ... WHILE</h3>
              <p className="text-xs text-gray-700">
                Test in <strong>coda</strong>: le istruzioni vengono eseguite <strong>almeno una volta</strong>.
              </p>
              <pre className="bg-gray-900 text-green-400 p-2.5 rounded-lg font-mono text-[11px] overflow-x-auto leading-relaxed">
                <code>{snippetDoWhile}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 4. LA TABELLA DI TRACCIA (TRACE TABLE) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            4. La Tabella di Traccia (Trace Table)
          </h2>
          <p className="text-sm leading-relaxed">
            La <strong>tabella di traccia</strong> è una tecnica fondamentale di verifica puntuale che permette di simulare passo-passo l'esecuzione di un algoritmo, tracciando l'evoluzione dei valori delle variabili ad ogni ciclo.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg space-y-2 text-xs md:text-sm">
            <h4 className="font-bold text-amber-900 font-sans">Esempio: Calcolo della somma dei primi N numeri interi</h4>
            <p className="text-gray-800">
              Dato un valore di input <code>N</code>, l'algoritmo inizializza <code>somma = 0</code> ed <code>i = 1</code>, incrementando <code>i</code> ad ogni iterazione fino a raggiungere <code>N</code>.
            </p>
          </div>
        </section>

        {/* 5. SIMULATORE INTERATTIVO TABELLA DI TRACCIA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            5. Simulatore Interattivo: Generatore della Tabella di Traccia
          </h2>
          <p className="text-sm text-gray-600">
            Inserisci un numero intero N per osservare come si aggiornano le variabili ad ogni iterazione del ciclo:
          </p>

          <div className="bg-slate-900 text-white p-6 rounded-xl space-y-4 text-xs md:text-sm">
            <div className="flex items-center gap-4 max-w-xs">
              <label className="text-gray-300 font-bold">Valore di N (input):</label>
              <input
                type="number"
                min="1"
                max="10"
                value={inputN}
                onChange={(e) => setInputN(Number(e.target.value))}
                className="w-20 p-2 bg-slate-800 text-green-400 font-mono rounded border border-slate-700 outline-none text-center font-bold"
              />
            </div>

            {/* Tabella di traccia renderizzata */}
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-800 text-emerald-400 border-b border-slate-700">
                    <th className="p-2.5">Passo</th>
                    <th className="p-2.5">n</th>
                    <th className="p-2.5">i</th>
                    <th className="p-2.5">Test (i {"<="} n)</th>
                    <th className="p-2.5">Calcolo somma</th>
                    <th className="p-2.5 font-bold">Valore somma</th>
                    <th className="p-2.5 font-sans">Azione</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {tracciaRisultati.map((riga, idx) => (
                    <tr key={idx} className={idx === tracciaRisultati.length - 1 ? 'bg-red-950/40 text-red-300' : 'hover:bg-slate-800/50'}>
                      <td className="p-2.5 font-bold text-gray-400">{riga.passo}</td>
                      <td className="p-2.5">{riga.n}</td>
                      <td className="p-2.5 text-blue-400 font-bold">{riga.i}</td>
                      <td className="p-2.5">{riga.cond}</td>
                      <td className="p-2.5 text-amber-300">{riga.sommaCalcolo}</td>
                      <td className="p-2.5 font-bold text-emerald-400">{riga.somma}</td>
                      <td className="p-2.5 font-sans text-gray-300">{riga.azione}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}