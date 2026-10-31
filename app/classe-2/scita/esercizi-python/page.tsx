'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EserciziPythonPage() {
  // Stati per le simulazioni degli esercizi
  const [ex1Ore, setEx1Ore] = useState<number>(3);
  const [ex2Num, setEx2Num] = useState<number>(10);
  const [ex3Giorno, setEx3Giorno] = useState<number>(6);
  const [ex7Prezzo1, setEx7Prezzo1] = useState<number>(12.5);
  const [ex7Prezzo2, setEx7Prezzo2] = useState<number>(7.5);
  const [ex9A, setEx9A] = useState<number>(12);
  const [ex9B, setEx9B] = useState<number>(15);

  // Calcoli automatici per le simulazioni
  const calcolaCostoParcheggio = (o: number) => {
    if (o <= 0) return '0.00 €';
    if (o <= 1) return '2.50 €';
    return `${(2.5 + (o - 1) * 1.5).toFixed(2)} €`;
  };

  const verificaPariMultiplo = (n: number) => {
    if (n % 2 === 0 && n % 5 === 0) return 'PARI e MULTIPLO DI 5';
    if (n % 2 === 0) return 'PARI';
    return 'DISPARI';
  };

  const verificaGiornoMatch = (g: number) => {
    switch (g) {
      case 1: return 'Lunedì';
      case 2: return 'Martedì';
      case 3: return 'Mercoledì';
      case 4: return 'Giovedì';
      case 5: return 'Venerdì';
      case 6: case 7: return 'Fine Settimana 🎉';
      default: return 'Errore: Numero non valido (default _)';
    }
  };

  const calcolaMcm = (a: number, b: number) => {
    if (a <= 0 || b <= 0) return 'Inserisci due numeri positivi';
    let m = Math.max(a, b);
    while (true) {
      if (m % a === 0 && m % b === 0) return m;
      m++;
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
        <header className="border-b-4 border-amber-500 pb-4">
          <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Materia: SCITA • Classe 2ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            🏋️ Palestra di Programmazione: 10 Esercizi in Python
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Metti alla prova le tue competenze! Risolvi gli esercizi nel tuo ambiente IDLE/VS Code e verifica i risultati attesi con i simulatori interattivi.
          </p>
        </header>

        {/* SEZIONE 1: LIVELLO BASE */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-emerald-800 border-b border-emerald-200 pb-2 flex items-center gap-2">
            🟢 Livello Base: Input/Output, Casting e Selezione
          </h2>

          {/* Esercizio 1 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-3">
            <span className="bg-emerald-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 1</span>
            <h3 className="font-bold text-gray-900 text-base">Il Parcheggio Intelligente</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Scrivi un programma in Python che chieda all'utente il numero di ore di sosta (può essere un numero decimale). La prima ora costa **2.50 €**, mentre ogni ora successiva alla prima costa **1.50 €**. Calcola e stampa il totale formattato con 2 cifre decimali.
            </p>
            
            {/* Box per Testare l'Output */}
            <div className="bg-slate-900 text-white p-3.5 rounded-md text-xs font-mono space-y-2">
              <span className="text-amber-400 font-bold block">Verifica Risultato Atteso:</span>
              <div className="flex items-center gap-3">
                <span>Ore sosta:</span>
                <input 
                  type="number" 
                  value={ex1Ore} 
                  onChange={(e) => setEx1Ore(Number(e.target.value))}
                  className="w-16 p-1 bg-slate-800 text-green-400 rounded border border-slate-700 text-center font-bold"
                />
                <span className="text-gray-400">→ Totale da pagare:</span>
                <span className="text-emerald-400 font-bold">{calcolaCostoParcheggio(ex1Ore)}</span>
              </div>
            </div>
          </div>

          {/* Esercizio 2 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-3">
            <span className="bg-emerald-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 2</span>
            <h3 className="font-bold text-gray-900 text-base">Pari, Dispari o Multiplo di 5?</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Chiedi un numero intero. Utilizzando l'operatore modulo <code>%</code> e le istruzioni <code>if-elif-else</code>, stampa se il numero è contemporaneamente Pari e Multiplo di 5, oppure solo Pari, oppure Dispari.
            </p>

            <div className="bg-slate-900 text-white p-3.5 rounded-md text-xs font-mono space-y-2">
              <span className="text-amber-400 font-bold block">Verifica Risultato Atteso:</span>
              <div className="flex items-center gap-3">
                <span>Numero:</span>
                <input 
                  type="number" 
                  value={ex2Num} 
                  onChange={(e) => setEx2Num(Number(e.target.value))}
                  className="w-16 p-1 bg-slate-800 text-green-400 rounded border border-slate-700 text-center font-bold"
                />
                <span className="text-gray-400">→ Esito:</span>
                <span className="text-emerald-400 font-bold">{verificaPariMultiplo(ex2Num)}</span>
              </div>
            </div>
          </div>

          {/* Esercizio 3 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-3">
            <span className="bg-emerald-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 3</span>
            <h3 className="font-bold text-gray-900 text-base">Convertitore di Giorni con match-case</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Scrivi un programma che legga un numero da 1 a 7 e, usando il costrutto <code>match ... case</code>, stampi il giorno della settimana corrispondente. Gestisci eventuali input errati con il caso di default <code>case _</code>.
            </p>

            <div className="bg-slate-900 text-white p-3.5 rounded-md text-xs font-mono space-y-2">
              <span className="text-amber-400 font-bold block">Verifica Risultato Atteso:</span>
              <div className="flex items-center gap-3">
                <span>Giorno (1-7):</span>
                <input 
                  type="number" 
                  value={ex3Giorno} 
                  onChange={(e) => setEx3Giorno(Number(e.target.value))}
                  className="w-16 p-1 bg-slate-800 text-green-400 rounded border border-slate-700 text-center font-bold"
                />
                <span className="text-gray-400">→ Output:</span>
                <span className="text-emerald-400 font-bold">{verificaGiornoMatch(ex3Giorno)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* SEZIONE 2: LIVELLO INTERMEDIO */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-amber-800 border-b border-amber-200 pb-2 flex items-center gap-2">
            🟡 Livello Intermedio: Cicli for, range(), Stringhe e Annidamento
          </h2>

          {/* Esercizio 4 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-2">
            <span className="bg-amber-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 4</span>
            <h3 className="font-bold text-gray-900 text-base">Tabellina Personalizzata</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Chiedi un numero intero N all'utente e stampa la sua tabellina moltiplicativa da 1 a 10 usando un ciclo <code>for</code> e la funzione <code>range()</code>.
            </p>
          </div>

          {/* Esercizio 5 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-2">
            <span className="bg-amber-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 5</span>
            <h3 className="font-bold text-gray-900 text-base">Contatore di Vocali in una Stringa</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Scrivi un programma che legga una parola o una frase ed utilizzi un ciclo <code>for</code> su stringa per contare e stampare il numero totale di vocali presenti.
            </p>
          </div>

          {/* Esercizio 6 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-2">
            <span className="bg-amber-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 6</span>
            <h3 className="font-bold text-gray-900 text-base">Rettangolo di Asterischi (Cicli Annidati)</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Chiedi all'utente il numero di **righe** e di **colonne** desiderate. Usa due cicli <code>for</code> annidati per stampare a schermo una griglia rettangolare composta da asterischi <code>*</code>.
            </p>
          </div>
        </section>

        {/* SEZIONE 3: LIVELLO AVANZATO */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-red-800 border-b border-red-200 pb-2 flex items-center gap-2">
            🔴 Livello Avanzato: Cicli while, break/continue ed Algoritmi
          </h2>

          {/* Esercizio 7 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-3">
            <span className="bg-red-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 7</span>
            <h3 className="font-bold text-gray-900 text-base">Registratore di Cassa con Valore Sentinella</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Crea un programma che simuli la cassa di un negozio. Continua a chiedere il prezzo dei prodotti finché l'utente non inserisce <code>0</code> per terminare. Se l'utente inserisce un valore negativo, usa <code>continue</code> per ignorarlo. Al termine stampa il totale della spesa.
            </p>

            <div className="bg-slate-900 text-white p-3.5 rounded-md text-xs font-mono space-y-2">
              <span className="text-amber-400 font-bold block">Verifica Risultato Atteso:</span>
              <div className="flex flex-wrap items-center gap-3">
                <span>Articolo 1 (€):</span>
                <input 
                  type="number" 
                  value={ex7Prezzo1} 
                  onChange={(e) => setEx7Prezzo1(Number(e.target.value))}
                  className="w-16 p-1 bg-slate-800 text-green-400 rounded border border-slate-700 text-center font-bold"
                />
                <span>Articolo 2 (€):</span>
                <input 
                  type="number" 
                  value={ex7Prezzo2} 
                  onChange={(e) => setEx7Prezzo2(Number(e.target.value))}
                  className="w-16 p-1 bg-slate-800 text-green-400 rounded border border-slate-700 text-center font-bold"
                />
                <span className="text-gray-400">→ Totale:</span>
                <span className="text-emerald-400 font-bold">{(ex7Prezzo1 + ex7Prezzo2).toFixed(2)} €</span>
              </div>
            </div>
          </div>

          {/* Esercizio 8 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-2">
            <span className="bg-red-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 8</span>
            <h3 className="font-bold text-gray-900 text-base">Gioco "Indovina il Numero Segreto"</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Genera un numero casuale tra 1 e 50 usando la libreria <code>random</code>. Con un ciclo <code>while</code>, chiedi all'utente di indovinarlo fornendo suggerimenti ("Troppo Alto" o "Troppo Basso") fino a quando non trova il valore corretto, contando il numero di tentativi impiegati.
            </p>
          </div>

          {/* Esercizio 9 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-3">
            <span className="bg-red-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 9</span>
            <h3 className="font-bold text-gray-900 text-base">Minimo Comune Multiplo (mcm)</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Scrivi un programma che riceva in input due numeri interi A e B e trovi il loro Minimo Comune Multiplo (mcm) mediante un ciclo <code>while</code>.
            </p>

            <div className="bg-slate-900 text-white p-3.5 rounded-md text-xs font-mono space-y-2">
              <span className="text-amber-400 font-bold block">Verifica Risultato Atteso:</span>
              <div className="flex items-center gap-3">
                <span>A:</span>
                <input 
                  type="number" 
                  value={ex9A} 
                  onChange={(e) => setEx9A(Number(e.target.value))}
                  className="w-16 p-1 bg-slate-800 text-green-400 rounded border border-slate-700 text-center font-bold"
                />
                <span>B:</span>
                <input 
                  type="number" 
                  value={ex9B} 
                  onChange={(e) => setEx9B(Number(e.target.value))}
                  className="w-16 p-1 bg-slate-800 text-green-400 rounded border border-slate-700 text-center font-bold"
                />
                <span className="text-gray-400">→ mcm:</span>
                <span className="text-emerald-400 font-bold">{calcolaMcm(ex9A, ex9B)}</span>
              </div>
            </div>
          </div>

          {/* Esercizio 10 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-2">
            <span className="bg-red-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 10</span>
            <h3 className="font-bold text-gray-900 text-base">Somma delle Cifre di un Numero</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Dato un numero intero positivo lungo a piacere (es. <code>354</code>), utilizza un ciclo <code>while</code> assieme agli operatori modulo <code>% 10</code> e divisione intera <code>// 10</code> per estrarre e sommare tra loro tutte le sue cifre (es. $3 + 5 + 4 = 12$).
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}