'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LinguaggiProgrammazionePage() {
  // Stato per la simulazione dell'interpretazione Python della funzione sqrt
  const [valoreX, setValoreX] = useState<number>(16);

  // Snippet di codice isolati per prevenire errori JSX
  const snippetAssembly = `MOV EAX, [EBX]`;
  const snippetPython = `import math\n\nX = ${valoreX}\nY = math.sqrt(X)\nprint("La radice quadrata è:", Y)`;

  const calcolaRadice = (x: number) => {
    if (x < 0) return 'Errore: Impossibile calcolare la radice di un numero negativo';
    return Math.sqrt(x);
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
        <header className="border-b-4 border-emerald-600 pb-4">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Materia: SCITA • Classe 2ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            💻 I Linguaggi di Programmazione e l'Ambiente Python
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Dal linguaggio macchina ai linguaggi di alto livello, compilatori vs interpreti, sintassi/semantica, gestione degli errori e librerie.
          </p>
        </header>

        {/* 1. EVOLUZIONE DEI LINGUAGGI: DAL LINGUAGGIO MACCHINA ALL'ALTO LIVELLO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. Evoluzione dei Linguaggi di Programmazione
          </h2>
          <p className="text-sm leading-relaxed">
            Un <strong>programma</strong> è la traduzione di un algoritmo in un linguaggio formale. L'hardware del computer comprende esclusivamente il <strong>linguaggio macchina</strong> (sequenze binarie di 0 e 1). Per facilitare il lavoro dei programmatori sono stati creati linguaggi progressivamente più vicini al linguaggio umano.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50 border-gray-200 space-y-1">
              <span className="bg-gray-700 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Basso Livello</span>
              <h3 className="font-bold text-gray-900">Linguaggio Macchina</h3>
              <p className="text-xs text-gray-600">
                Sequenze binarie (es. <code>000000 00001 00010</code>). Dipende strettamente dall'architettura del singolo processore.
              </p>
            </div>

            <div className="border p-4 rounded-lg bg-blue-50 border-blue-200 space-y-1">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Basso Livello</span>
              <h3 className="font-bold text-blue-900">Linguaggio Assembly</h3>
              <p className="text-xs text-gray-600">
                Usa codici mnemonici in inglese (es. <code>{snippetAssembly}</code>). Viene tradotto in macchina dall'<em>Assembler</em>.
              </p>
            </div>

            <div className="border p-4 rounded-lg bg-emerald-50 border-emerald-200 space-y-1">
              <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Alto Livello</span>
              <h3 className="font-bold text-emerald-900">Linguaggi di Alto Livello</h3>
              <p className="text-xs text-gray-600">
                Indipendenti dall'hardware, con sintassi astratta ed intuitiva (es. C, C++, Java, Python, Pascal).
              </p>
            </div>
          </div>
        </section>

        {/* 2. PARADIGMI E CLASSIFICAZIONE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Classificazione e Paradigmi di Programmazione
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50 space-y-2">
              <h3 className="font-bold text-gray-900">Classificazione per Ambito d'Uso</h3>
              <ul className="list-disc pl-5 text-xs text-gray-700 space-y-1">
                <li><strong>Generale (General-purpose):</strong> C, C++, Java, Python, Pascal.</li>
                <li><strong>Specializzati (Calcolo scientifico):</strong> Fortran, MATLAB.</li>
                <li><strong>Settoriali (Sviluppo Web):</strong> JavaScript, PHP.</li>
              </ul>
            </div>

            <div className="border p-4 rounded-lg bg-indigo-50 border-indigo-200 space-y-2">
              <h3 className="font-bold text-indigo-900">Paradigmi Imperativi Principali</h3>
              <ul className="list-disc pl-5 text-xs text-gray-800 space-y-1">
                <li>
                  <strong>Programmazione Procedurale:</strong> Approccio <em>top-down</em> basato su funzioni e subroutine (es. C, Pascal).
                </li>
                <li>
                  <strong>Orientata agli Oggetti (OOP):</strong> Approccio <em>bottom-up</em> basato su oggetti contenenti dati e metodi (es. C++, Java, Python).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. TRADUZIONE: COMPILATORI VS INTERPRETI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Traduzione del Codice: Compilatori e Interpreti
          </h2>
          <p className="text-sm">
            Il codice scritto dal programmatore è detto <strong>codice sorgente</strong>. Per essere eseguito dal computer deve essere tradotto tramite appositi software:
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-amber-50 border-amber-200 space-y-2">
              <h3 className="font-bold text-amber-900 text-base">⚙️ Compilatore</h3>
              <p className="text-xs text-gray-800">
                Traduce l'<strong>intero codice sorgente</strong> in un unico passaggio, producendo un file oggetto (<code>.o</code>) che il <em>Linker</em> trasforma in un file eseguibile indipendente (<code>.exe</code>).
              </p>
              <p className="text-[11px] text-amber-800">
                <strong>Vantaggio:</strong> Esecuzione estremamente veloce. (Es. C, C++).
              </p>
            </div>

            <div className="border p-4 rounded-lg bg-purple-50 border-purple-200 space-y-2">
              <h3 className="font-bold text-purple-900 text-base">⚡ Interprete</h3>
              <p className="text-xs text-gray-800">
                Legge, traduce ed esegue il codice sorgente <strong>istruzione per istruzione</strong> in tempo reale, senza generare un file eseguibile su disco.
              </p>
              <p className="text-[11px] text-purple-800">
                <strong>Vantaggio:</strong> Verifica immediata del codice e portabilità multi-piattaforma. (Es. Python).
              </p>
            </div>
          </div>
        </section>

        {/* 4. SINTASSI, SEMANTICA ED ERRORE (BUG) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            4. Sintassi, Semantica e Tipologie di Errore (Bug)
          </h2>
          <p className="text-sm">
            La <strong>sintassi</strong> definisce le regole grammaticali del linguaggio, mentre la <strong>semantica</strong> stabilisce il significato delle istruzioni.
          </p>

          <div className="grid md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 border rounded-lg bg-gray-50 border-gray-200 space-y-1">
              <span className="font-bold text-red-900 text-sm block">1. Errori di Sintassi</span>
              <p className="text-gray-700">
                Errori grammaticali o di scrittura dei comandi. Vengono individuati immediatamente dall'editor di sviluppo (IDE).
              </p>
            </div>

            <div className="p-3 border rounded-lg bg-gray-50 border-gray-200 space-y-1">
              <span className="font-bold text-amber-900 text-sm block">2. Errori di Logica/Semantica</span>
              <p className="text-gray-700">
                Il programma è sintatticamente corretto ed eseguibile, ma produce risultati errati rispetto a quelli attesi.
              </p>
            </div>

            <div className="p-3 border rounded-lg bg-gray-50 border-gray-200 space-y-1">
              <span className="font-bold text-purple-900 text-sm block">3. Errori Runtime</span>
              <p className="text-gray-700">
                Malfunzionamenti che si verificano durante l'esecuzione (es. divisione per zero o memoria esaurita).
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg text-xs text-gray-700 space-y-1">
            <p><strong>Testing:</strong> Procedura di collaudo e prova del software (fasi Alfa e Beta).</p>
            <p><strong>Debugging:</strong> Attività di ricerca, tracciamento e correzione dei bachi (bug) nel codice.</p>
          </div>
        </section>

        {/* 5. PYTHON E LE LIBRERIE (BLACK BOX) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            5. Il Linguaggio Python e il Concetto di Libreria (Black Box)
          </h2>
          <p className="text-sm leading-relaxed">
            Creato nel 1989 da <strong>Guido van Rossum</strong>, Python è un linguaggio di scripting interpretato, semplice, intuitivo, open source e multi-piattaforma.
          </p>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg space-y-2 text-xs md:text-sm text-gray-800">
            <h4 className="font-bold text-emerald-900">Librerie e Funzioni Built-in (Black Box)</h4>
            <p>
              Una <strong>libreria</strong> è una raccolta di funzioni già pronte all'uso. Ogni funzione può essere considerata una <strong>scatola nera (black box)</strong>: è sufficiente conoscerne gli <em>input</em> e gli <em>output</em>, senza dover riprogrammare da capo l'algoritmo interno.
            </p>
            <p className="font-mono text-xs bg-white p-2 rounded border border-emerald-200 text-emerald-900">
              In Python si usa l'istruzione <code>import math</code> per accedere alla funzione <code>math.sqrt(X)</code>.
            </p>
          </div>
        </section>

        {/* 6. SIMULATORE INTERATTIVO PYTHON */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            6. Simulatore Interattivo: Esecuzione Script Python
          </h2>
          <p className="text-sm text-gray-600">
            Modifica il valore dell'input X per osservare la simulazione dell'interpretazione in tempo reale della libreria <code>math</code>:
          </p>

          <div className="bg-slate-900 text-white p-6 rounded-xl space-y-4 text-xs md:text-sm">
            <div className="flex items-center gap-4 max-w-xs">
              <label className="text-gray-300 font-bold">Valore di X:</label>
              <input
                type="number"
                value={valoreX}
                onChange={(e) => setValoreX(Number(e.target.value))}
                className="w-24 p-2 bg-slate-800 text-green-400 font-mono rounded border border-slate-700 outline-none text-center font-bold"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div>
                <span className="text-xs text-gray-400 block mb-1 font-mono">Script Python (.py):</span>
                <pre className="bg-slate-800 p-3 rounded font-mono text-emerald-400 text-xs overflow-x-auto leading-relaxed border border-slate-700">
                  <code>{snippetPython}</code>
                </pre>
              </div>

              <div>
                <span className="text-xs text-gray-400 block mb-1 font-mono">Output dell'Interprete:</span>
                <div className="bg-black p-3 rounded font-mono text-xs text-gray-200 border border-slate-700 h-[105px] flex items-center justify-center text-center">
                  <div>
                    <span className="text-gray-500 block text-[10px] uppercase tracking-wider mb-1">Risultato Esecuzione</span>
                    <p className="text-emerald-400 font-bold text-sm">
                      {calcolaRadice(valoreX)}
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