'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function DiagrammiDiFlussoPage() {
  // Stato per la simulazione dello Swapping (Scambio di variabili)
  const [valA, setValA] = useState<number>(10);
  const [valB, setValB] = useState<number>(20);
  const [valZ, setValZ] = useState<number | string>('-');
  const [stepSwap, setStepSwap] = useState<number>(0);

  const generaStepSwap = () => {
    switch (stepSwap) {
      case 0:
        return 'Stato iniziale: A contiene il primo valore, B contiene il secondo valore, Z è vuota.';
      case 1:
        return `Passo 1 (Z ⬅️ A): Copiamo il valore di A (${valA}) nella variabile temporanea Z per non perderlo.`;
      case 2:
        return `Passo 2 (A ⬅️ B): Sovrascriviamo A con il valore di B (${valB}).`;
      case 3:
        return `Passo 3 (B ⬅️ Z): Copiamo in B il valore salvato in Z (${valA}). Scambio completato!`;
      default:
        return '';
    }
  };

  const avanzaSwap = () => {
    if (stepSwap === 0) {
      setValZ(valA);
      setStepSwap(1);
    } else if (stepSwap === 1) {
      setValA(valB);
      setStepSwap(2);
    } else if (stepSwap === 2) {
      setValB(Number(valZ));
      setStepSwap(3);
    }
  };

  const resetSwap = () => {
    setValA(10);
    setValB(20);
    setValZ('-');
    setStepSwap(0);
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
            📐 Diagrammi di Flusso, Variabili e Programmazione Strutturata
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Rappresentazione grafica degli algoritmi, Teorema di Böhm-Jacopini, allocazione di memoria e l'algoritmo di scambio (Swapping).
          </p>
        </header>

        {/* 1. I DIAGRAMMI DI FLUSSO (FLOWCHART) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. I Diagrammi di Flusso (Flowchart)
          </h2>
          <p className="text-sm leading-relaxed">
            Un <strong>diagramma di flusso</strong> (o flowchart) è la rappresentazione grafica di un algoritmo mediante blocchi geometrici sagomati uniti da frecce direzionali che indicano la sequenza delle istruzioni.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50 flex items-start gap-3">
              <span className="bg-amber-500 text-white font-bold px-2.5 py-1 rounded-full text-xs">Ovale</span>
              <div>
                <h3 className="font-bold text-gray-900">Inizio / Fine</h3>
                <p className="text-xs text-gray-600">Rappresenta il punto di partenza (INIZIO) o di conclusione (FINE) dell'algoritmo.</p>
              </div>
            </div>

            <div className="border p-4 rounded-lg bg-gray-50 flex items-start gap-3">
              <span className="bg-blue-500 text-white font-bold px-2 py-1 rounded text-xs">Parallelogramma</span>
              <div>
                <h3 className="font-bold text-gray-900">Input / Output</h3>
                <p className="text-xs text-gray-600">Istruzioni di <strong>Lettura</strong> (ingresso dati da tastiera) e <strong>Scrittura</strong> (uscita dati a schermo/stampa).</p>
              </div>
            </div>

            <div className="border p-4 rounded-lg bg-gray-50 flex items-start gap-3">
              <span className="bg-emerald-500 text-white font-bold px-2 py-1 rounded text-xs">Rettangolo</span>
              <div>
                <h3 className="font-bold text-gray-900">Elaborazione / Assegnazione</h3>
                <p className="text-xs text-gray-600">Operazioni matematiche, calcoli ed esecuzione di istruzioni di assegnazione valori.</p>
              </div>
            </div>

            <div className="border p-4 rounded-lg bg-gray-50 flex items-start gap-3">
              <span className="bg-purple-500 text-white font-bold px-2.5 py-1 rounded-lg text-xs">Rombo</span>
              <div>
                <h3 className="font-bold text-gray-900">Test / Selezione</h3>
                <p className="text-xs text-gray-600">Valuta una condizione logica proponendo due vie d'uscita distinte (VERO / FALSO).</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. TEOREMA DI BÖHM-JACOPINI & PROGRAMMAZIONE STRUTTURATA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Il Teorema di Böhm-Jacopini e le 3 Strutture di Controllo
          </h2>
          <p className="text-sm leading-relaxed">
            Formulato dagli informatici italiani Corrado Böhm e Giuseppe Jacopini, il celebre <strong>Teorema di Böhm-Jacopini</strong> dimostra che qualsiasi algoritmo può essere espresso utilizzando esclusivamente **tre strutture di controllo fondamentali**:
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-indigo-50 border-indigo-200 space-y-1">
              <h3 className="font-bold text-indigo-900">1. Sequenza</h3>
              <p className="text-xs text-gray-700">
                Elenco ordinato di istruzioni che vengono eseguite una dopo l'altra, nell'ordine esatto in cui sono scritte.
              </p>
            </div>

            <div className="border p-4 rounded-lg bg-purple-50 border-purple-200 space-y-1">
              <h3 className="font-bold text-purple-900">2. Selezione (Condizione)</h3>
              <p className="text-xs text-gray-700">
                Permette di scegliere tra due percorsi alternativi in base al valore VERO o FALSO di una condizione.
              </p>
            </div>

            <div className="border p-4 rounded-lg bg-amber-50 border-amber-200 space-y-1">
              <h3 className="font-bold text-amber-900">3. Ciclo (Iterazione)</h3>
              <p className="text-xs text-gray-700">
                Consente di ripetere un blocco di istruzioni più volte finché una determinata condizione rimane verificata.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-2 text-xs md:text-sm">
            <h4 className="font-bold text-gray-900">Tipi di istruzioni della struttura sequenziale:</h4>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li><strong>Lettura (Input):</strong> Legge un dato da un dispositivo di ingresso (tastiera) e lo trasferisce nella memoria RAM.</li>
              <li><strong>Scrittura (Output):</strong> Preleva un valore dalla RAM e lo mostra sullo schermo o su carta.</li>
              <li><strong>Assegnazione:</strong> Sovrascrive lo spazio di memoria di una variabile con un nuovo valore calcolato.</li>
            </ul>
          </div>
        </section>

        {/* 3. VARIABILI E COSTANTI IN MEMORIA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Variabili, Costanti ed Allocazione in Memoria RAM
          </h2>
          <p className="text-sm">
            Gli algoritmi risolvono classi generali di problemi usando simboli che rappresentano dati non noti a priori.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-blue-50 border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-900 text-base">📦 La Variabile</h3>
              <p className="text-xs text-gray-700">
                È uno spazio di memoria RAM allocato (riservato) a cui è associato un <strong>NOME</strong> univoco e il cui <strong>VALORE</strong> contenuto può variare nel corso dell'esecuzione dell'algoritmo.
              </p>
              <div className="bg-white p-2 rounded border border-blue-200 text-xs text-gray-600">
                <em>Analogia:</em> Una variabile è come una scatola con sopra un etichetta (il Nome) ed un contenuto interno (il Valore attuale).
              </div>
            </div>

            <div className="border p-4 rounded-lg bg-purple-50 border-purple-200 space-y-2">
              <h3 className="font-bold text-purple-900 text-base">🔒 La Costante Simbolica</h3>
              <p className="text-xs text-gray-700">
                È uno spazio di memoria il cui valore, una volta inizializzato all'inizio, <strong>non cambia mai</strong> durante tutta l'esecuzione dell'algoritmo.
              </p>
              <div className="bg-white p-2 rounded border border-purple-200 text-xs font-mono text-purple-900">
                Esempio: PIGRECO = 3.14159
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg space-y-2 text-xs md:text-sm">
            <h4 className="font-bold text-amber-900">Simbolo e Significato dell'Assegnazione (⬅️ / =):</h4>
            <p className="text-gray-800">
              Negli algoritmi formali si usa il simbolo <code>A ⬅️ B</code> per indicare che il valore contenuto in B viene copiato sopra la variabile A (sovrascrivendo il valore precedente di A).
            </p>
            <p className="text-gray-800">
              Nei linguaggi di programmazione si usa l'uguale (<code>A = A + 1</code>). Questo <strong>non è un uguaglianza algebrica</strong>, ma un operazione che significa: <em>"Prendi il valore attuale di A, sommaci 1 e salva il nuovo risultato dentro A"</em>.
            </p>
          </div>
        </section>

        {/* 4. L'ALGORITMO DI SCAMBIO (SWAPPING) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            4. L'Algoritmo di Scambio del Contenuto di due Variabili (Swapping)
          </h2>
          <p className="text-sm leading-relaxed">
            Supponiamo di voler scambiare i valori di due variabili <code>X</code> e <code>Y</code>. Non possiamo scrivere direttamente <code>Y ⬅️ X</code>, perché perderemmo definitivamente il vecchio valore originale di <code>Y</code>!
          </p>
          <p className="text-xs text-gray-600 bg-gray-50 p-3 rounded border border-gray-200">
            <strong>L'Analogia delle Bottiglie:</strong> È come voler scambiare il contenuto di due bottiglie (una di acqua e una di vino): è indispensabile utilizzare una <strong>terza bottiglia vuota temporanea</strong> per effettuare i travasi senza rovesciare nulla.
          </p>

          <div className="bg-gray-900 text-white p-5 rounded-lg font-mono text-xs space-y-1">
            <p className="text-emerald-400 font-sans font-bold text-sm mb-2">Sequenza Corretta di Assegnazione:</p>
            <p>1. Z ⬅️ X   <span className="text-gray-400 font-sans">(Copia il valore di X nella variabile temporanea Z)</span></p>
            <p>2. X ⬅️ Y   <span className="text-gray-400 font-sans">(Sposta il valore di Y dentro X)</span></p>
            <p>3. Y ⬅️ Z   <span className="text-gray-400 font-sans">(Sposta il valore originario salvato in Z dentro Y)</span></p>
          </div>
        </section>

        {/* 5. SIMULATORE INTERATTIVO SWAPPING */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            5. Simulatore Interattivo di Scambio (Swapping)
          </h2>

          <div className="bg-slate-900 text-white p-6 rounded-xl space-y-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              {/* Variabile A */}
              <div className="bg-slate-800 p-4 rounded-lg border-2 border-blue-500 space-y-1">
                <span className="text-xs text-blue-400 font-mono font-bold block">Variabile A</span>
                <p className="text-2xl font-bold font-mono text-blue-300">{valA}</p>
              </div>

              {/* Variabile B */}
              <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500 space-y-1">
                <span className="text-xs text-purple-400 font-mono font-bold block">Variabile B</span>
                <p className="text-2xl font-bold font-mono text-purple-300">{valB}</p>
              </div>

              {/* Variabile Z (Temporanea) */}
              <div className="bg-slate-800 p-4 rounded-lg border-2 border-amber-500 space-y-1">
                <span className="text-xs text-amber-400 font-mono font-bold block">Variabile Temp Z</span>
                <p className="text-2xl font-bold font-mono text-amber-300">{valZ}</p>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg text-xs font-mono text-slate-300">
              {generaStepSwap()}
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={resetSwap}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded text-xs font-bold"
              >
                Reset
              </button>
              <button
                onClick={avanzaSwap}
                disabled={stepSwap === 3}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 rounded text-xs font-bold"
              >
                {stepSwap === 3 ? 'Scambio Completato' : 'Passo Successivo ➡️'}
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}