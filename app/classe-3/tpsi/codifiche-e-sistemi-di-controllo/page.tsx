'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CodificheSistemiControlloPage() {
  // --- STATI E LOGICA SIMULATORE CODICE FISCALE ---
  const [cf15, setCf15] = useState<string>('RSSMRA80A01H501');
  const [cfResult, setCfResult] = useState<{ controlLetter: string; isValid: boolean; message: string } | null>(null);

  const calcolaControlloCF = (code: string) => {
    const clean = code.toUpperCase().trim();
    if (clean.length !== 15) {
      return { controlLetter: '', isValid: false, message: 'Inserisci esattamente 15 caratteri alfanumerici.' };
    }

    // Mappa valori per posizioni dispari (1-based index: 1, 3, 5, 7, ...)
    const oddMap: { [key: string]: number } = {
      'A': 1, 'B': 0, 'C': 5, 'D': 7, 'E': 9, 'F': 13, 'G': 15, 'H': 17, 'I': 19, 'J': 21,
      'K': 2, 'L': 4, 'M': 18, 'N': 20, 'O': 11, 'P': 3, 'Q': 6, 'R': 8, 'S': 12, 'T': 14,
      'U': 16, 'V': 10, 'W': 22, 'X': 25, 'Y': 24, 'Z': 23,
      '0': 1, '1': 0, '2': 5, '3': 7, '4': 9, '5': 13, '6': 15, '7': 17, '8': 19, '9': 21
    };

    // Mappa valori per posizioni pari (1-based index: 2, 4, 6, 8, ...)
    const evenMap: { [key: string]: number } = {
      'A': 0, 'B': 1, 'C': 2, 'D': 3, 'E': 4, 'F': 5, 'G': 6, 'H': 7, 'I': 8, 'J': 9,
      'K': 10, 'L': 11, 'M': 12, 'N': 13, 'O': 14, 'P': 15, 'Q': 16, 'R': 17, 'S': 18, 'T': 19,
      'U': 20, 'V': 21, 'W': 22, 'X': 23, 'Y': 24, 'Z': 25,
      '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9
    };

    let totalSum = 0;
    for (let i = 0; i < 15; i++) {
      const char = clean[i];
      const isOddPos = (i + 1) % 2 !== 0; // Posizione 1, 3, 5...

      if (isOddPos) {
        if (oddMap[char] === undefined) return { controlLetter: '', isValid: false, message: `Carattere non valido: ${char}` };
        totalSum += oddMap[char];
      } else {
        if (evenMap[char] === undefined) return { controlLetter: '', isValid: false, message: `Carattere non valido: ${char}` };
        totalSum += evenMap[char];
      }
    }

    const remainder = totalSum % 26;
    const controlLetter = String.fromCharCode(65 + remainder); // 0=A, 1=B, ..., 25=Z

    return {
      controlLetter,
      isValid: true,
      message: `Somma totale = ${totalSum} | Somma Mod 26 = ${remainder} → Carattere di Controllo: '${controlLetter}'`
    };
  };

  // --- STATI E LOGICA SIMULATORE PARTITA IVA (LUHN) ---
  const [piva10, setPiva10] = useState<string>('0123456789');
  const [pivaResult, setPivaResult] = useState<{ checkDigit: number; isValid: boolean; message: string } | null>(null);

  const calcolaControlloPIVA = (code: string) => {
    const clean = code.trim();
    if (clean.length !== 10 || !/^\d+$/.test(clean)) {
      return { checkDigit: -1, isValid: false, message: 'Inserisci esattamente 10 cifre numeriche.' };
    }

    let X = 0; // Somma posizioni dispari (1ª, 3ª, 5ª, 7ª, 9ª -> indici 0, 2, 4, 6, 8)
    let Y = 0; // Somma posizioni pari x 2 (2ª, 4ª, 6ª, 8ª, 10ª -> indici 1, 3, 5, 7, 9)
    let Z = 0; // Conteggio posizioni pari il cui valore è >= 5

    for (let i = 0; i < 10; i++) {
      const digit = parseInt(clean[i], 10);
      if ((i + 1) % 2 !== 0) {
        X += digit;
      } else {
        Y += digit * 2;
        if (digit >= 5) Z++;
      }
    }

    // Algoritmo di Luhn / P.IVA Italiana: T = X + Y (oppure X + Y con correzione a doppia cifra)
    // Formula standard P.IVA: T = X + somma_cifre(2 * pari)
    // Equivalentemente: T = X + Y - 9*Z
    let T = 0;
    for (let i = 0; i < 10; i++) {
      const digit = parseInt(clean[i], 10);
      if ((i + 1) % 2 !== 0) {
        T += digit;
      } else {
        const doubled = digit * 2;
        T += (doubled > 9 ? doubled - 9 : doubled);
      }
    }

    const checkDigit = (10 - (T % 10)) % 10;

    return {
      checkDigit,
      isValid: true,
      message: `Somma pesata T = ${T} | Check Digit (11ª cifra): ${checkDigit}`
    };
  };

  // --- STATI E LOGICA SIMULATORE IBAN MODULO 97 ---
  const [ibanInput, setIbanInput] = useState<string>('IT60X0538511101000000123456');
  const [ibanResult, setIbanResult] = useState<{ isCorrect: boolean; remainder: number; message: string } | null>(null);

  const verificaIBANMod97 = (ibanStr: string) => {
    const clean = ibanStr.replace(/\s+/g, '').toUpperCase();
    if (clean.length < 15) {
      return { isCorrect: false, remainder: -1, message: 'IBAN troppo corto. Inserire una stringa valida (es. 27 caratteri per IT).' };
    }

    // Sposta i primi 4 caratteri in coda
    const rearranged = clean.slice(4) + clean.slice(0, 4);

    // Converte lettere in numeri (A=10, B=11, ..., Z=35)
    let numericStr = '';
    for (let i = 0; i < rearranged.length; i++) {
      const ch = rearranged[i];
      if (/[A-Z]/.test(ch)) {
        numericStr += (ch.charCodeAt(0) - 55).toString();
      } else if (/[0-9]/.test(ch)) {
        numericStr += ch;
      } else {
        return { isCorrect: false, remainder: -1, message: `Carattere non valido trovato: ${ch}` };
      }
    }

    // Calcolo modulo 97 per stringhe numeriche molto lunghe (BigInt o a blocchi)
    let remainder = 0;
    for (let i = 0; i < numericStr.length; i += 7) {
      const block = remainder.toString() + numericStr.slice(i, i + 7);
      remainder = parseInt(block, 10) % 97;
    }

    const isCorrect = remainder === 1;

    return {
      isCorrect,
      remainder,
      message: isCorrect
        ? `✅ IBAN Valido! (Modulo 97 = ${remainder})`
        : `❌ IBAN Errato o Non Conforme (Modulo 97 = ${remainder}, atteso 1)`
    };
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Link di navigazione */}
      <Link 
        href="/classe-3/tpsi" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a TPSI Classe 3ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-10 text-gray-800">
        
        {/* Header Principale */}
        <header className="border-b-4 border-indigo-600 pb-4">
          <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Materia: TPSI • Classe 3ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            🔍 Le Codifiche e i Sistemi di Controllo
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Ridondanza, Checksum, Check Digit, Codice Fiscale, Partita IVA (Formula di Luhn), IBAN (Modulo 97 / ISO 7064) e Codice LEI.
          </p>
        </header>

        {/* 1. INTRODUZIONE ALLA RIDONDANZA E AI CODICI DI CONTROLLO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            1. Introduzione alla Ridondanza e ai Codici di Controllo
          </h2>
          <p className="text-sm leading-relaxed">
            Nessun sistema informatico o di inserimento dati è immune da errori. Durante la digitazione o la scansione ottica, gli errori umani più frequenti sono due:
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 border rounded-lg bg-red-50 border-red-200 space-y-1">
              <span className="font-bold text-red-900 text-sm block">1. Errata digitazione di un carattere</span>
              <p className="text-red-800">Trascrizione errata di un singolo numero o lettera (es. digitare 7 al posto di 1).</p>
            </div>
            <div className="p-4 border rounded-lg bg-amber-50 border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 text-sm block">2. Permutazione / Trasposizione</span>
              <p className="text-amber-800">Inversione dell'ordine di due caratteri consecutivi (es. digitare <strong>45</strong> al posto di <strong>54</strong>).</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed">
            Per rilevare automaticamente queste incongruenze, si introduce la <strong>ridondanza</strong> aggiungendo uno o più caratteri matematicamente calcolati detti <strong>Check Digit</strong> (cifra di controllo) o <strong>Checksum</strong>. Il sistema ricalcola l'algoritmo sui dati ricevuti: se il risultato non coincide con il carattere di controllo, l'input viene respinto.
          </p>
        </section>

        {/* 2. CODICI IDENTIFICATIVI DEI CONTRIBUENTI */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            2. Codici Identificativi dei Contribuenti
          </h2>

          {/* 2.1 IL CODICE FISCALE */}
          <div className="space-y-4 border-l-4 border-blue-500 pl-4 py-1">
            <h3 className="text-xl font-bold text-blue-900">2.1 Il Codice Fiscale Italiano</h3>
            <p className="text-sm leading-relaxed">
              Introdotto dal DPR n. 605/1973, è composto da <strong>16 caratteri alfanumerici</strong> suddivisi secondo regole ben precise:
            </p>

            <div className="bg-slate-900 text-white p-4 rounded-xl font-mono text-xs overflow-x-auto space-y-2">
              <div className="text-amber-400 font-bold border-b border-slate-700 pb-1">
                Struttura: [COGNOME: 3] [NOME: 3] [ANNO: 2] [MESE: 1] [GIORNO/SESSO: 2] [COMUNE: 4] [CIN: 1]
              </div>
              <div className="text-gray-300">
                Esempio: ROSSI MARIO, Nato il 15/01/1980 a Roma (H501) → <span className="text-emerald-400 font-bold">RSS MRA 80 A 15 H501 Z</span>
              </div>
            </div>

            <ul className="list-disc list-inside text-xs space-y-1.5 text-gray-700">
              <li><strong>Cognome (1-3):</strong> 1ª, 2ª e 3ª consonante. Se insufficienti, si aggiungono le vocali. Se mancano, si usa 'X'.</li>
              <li><strong>Nome (4-6):</strong> Se ci sono 4 o più consonanti, si scelgono la 1ª, 3ª e 4ª. Altrimenti le prime 3 consonanti o vocali.</li>
              <li><strong>Anno e Mese (7-9):</strong> Ultime 2 cifre dell'anno e lettera del mese (A=Gen, B=Feb, C=Mar, D=Apr, E=Mag, H=Giu, L=Lug, M=Ago, P=Set, R=Ott, S=Nov, T=Dic).</li>
              <li><strong>Giorno e Sesso (10-11):</strong> Per gli uomini il giorno (01-31). Per le donne si somma <strong>40</strong> al giorno (41-71), includendo sia data che sesso in 2 cifre!</li>
              <li><strong>Comune / Stato Estero (12-15):</strong> Codice catastale (es. <code>H501</code> per Roma, <code>F205</code> per Milano).</li>
              <li><strong>Carattere di Controllo CIN (16°):</strong> Calcolato separando i primi 15 caratteri in posizioni pari e dispari.</li>
            </ul>

            {/* Simulatore Codice Fiscale */}
            <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-700 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                🧪 Simulatore Calcolo Carattere di Controllo Codice Fiscale (16° Carattere)
              </span>
              <div className="flex flex-col md:flex-row gap-3 items-center text-xs font-mono">
                <input 
                  type="text"
                  maxLength={15}
                  value={cf15}
                  onChange={(e) => setCf15(e.target.value.toUpperCase())}
                  placeholder="Inserisci i primi 15 caratteri"
                  className="w-full md:w-2/3 p-2 bg-slate-800 text-emerald-400 border border-slate-700 rounded uppercase font-bold tracking-widest"
                />
                <button
                  onClick={() => setCfResult(calcolaControlloCF(cf15))}
                  className="w-full md:w-1/3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 rounded transition-all"
                >
                  Calcola CIN (16° Lettera)
                </button>
              </div>

              {cfResult && (
                <div className={`p-3 rounded text-xs font-mono border ${cfResult.isValid ? 'bg-emerald-950 border-emerald-700 text-emerald-200' : 'bg-red-950 border-red-700 text-red-200'}`}>
                  {cfResult.message}
                </div>
              )}
            </div>
          </div>

          {/* 2.2 LA PARTITA IVA */}
          <div className="space-y-4 border-l-4 border-purple-500 pl-4 py-1">
            <h3 className="text-xl font-bold text-purple-900">2.2 La Partita IVA e l'Algoritmo di Luhn</h3>
            <p className="text-sm leading-relaxed">
              La Partita IVA italiana è composta da <strong>11 cifre numeriche</strong>:
            </p>

            <div className="grid md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 border rounded bg-gray-50 font-mono">
                <span className="font-bold text-purple-900 block mb-1">Cifre 1 - 7</span>
                Matricola progressiva assegnata dall'Ufficio Provinciale.
              </div>
              <div className="p-3 border rounded bg-gray-50 font-mono">
                <span className="font-bold text-purple-900 block mb-1">Cifre 8 - 10</span>
                Codice dell'Ufficio provinciale del fisco (Codice ISTAT).
              </div>
              <div className="p-3 border rounded bg-gray-50 font-mono">
                <span className="font-bold text-purple-900 block mb-1">Cifra 11</span>
                Check Digit (Cifra di controllo calcolata con Formula di Luhn).
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg text-xs space-y-2">
              <h4 className="font-bold text-purple-900 text-sm">Algoritmo di Calcolo (Formula di Luhn per P.IVA):</h4>
              <ol className="list-decimal list-inside space-y-1 text-purple-800 font-mono">
                <li>Somma X delle cifre in posizione dispari (1ª, 3ª, 5ª, 7ª, 9ª).</li>
                <li>Raddoppia le cifre in posizione pari (2ª, 4ª, 6ª, 8ª, 10ª). Se il risultato supera 9, sottrai 9 (es. 6 x 2 = 12 → 1+2 = 3). Somma tutti i valori ottenuti.</li>
                <li>Somma Totale T = (Somma Dispari) + (Somma Pari Modificata).</li>
                <li>Check Digit = <code>(10 - (T Mod 10)) Mod 10</code>.</li>
              </ol>
            </div>

            {/* Simulatore Partita IVA */}
            <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-700 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                🧪 Simulatore Calcolo Check Digit Partita IVA (Prime 10 Cifre)
              </span>
              <div className="flex flex-col md:flex-row gap-3 items-center text-xs font-mono">
                <input 
                  type="text"
                  maxLength={10}
                  value={piva10}
                  onChange={(e) => setPiva10(e.target.value)}
                  placeholder="Inserisci 10 cifre"
                  className="w-full md:w-2/3 p-2 bg-slate-800 text-emerald-400 border border-slate-700 rounded font-bold tracking-widest"
                />
                <button
                  onClick={() => setPivaResult(calcolaControlloPIVA(piva10))}
                  className="w-full md:w-1/3 bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 rounded transition-all"
                >
                  Calcola 11ª Cifra
                </button>
              </div>

              {pivaResult && (
                <div className={`p-3 rounded text-xs font-mono border ${pivaResult.isValid ? 'bg-emerald-950 border-emerald-700 text-emerald-200' : 'bg-red-950 border-red-700 text-red-200'}`}>
                  {pivaResult.message}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 3. CODICI BANCARI E FINANZIARI */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            3. Codici Bancari e Finanziari
          </h2>

          {/* 3.1 IBAN */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-emerald-900">3.1 Il Codice IBAN (International Bank Account Number)</h3>
            <p className="text-sm leading-relaxed">
              In Italia l'IBAN è composto da <strong>27 caratteri alfanumerici</strong> ed integra due livelli indipendenti di controllo:
            </p>

            {/* Schemino IBAN */}
            <div className="bg-slate-900 text-white p-4 rounded-xl font-mono text-xs overflow-x-auto space-y-2">
              <div className="text-emerald-400 font-bold border-b border-slate-700 pb-1">
                Struttura IBAN Italia (27 Caratteri):
              </div>
              <div className="flex gap-2 text-center pt-2">
                <div className="bg-slate-800 p-2 rounded border border-blue-400 flex-1">
                  <span className="text-blue-300 font-bold block">IT</span>
                  <span className="text-[10px] text-gray-400">Paese (2)</span>
                </div>
                <div className="bg-slate-800 p-2 rounded border border-amber-400 flex-1">
                  <span className="text-amber-300 font-bold block">60</span>
                  <span className="text-[10px] text-gray-400">Check (2)</span>
                </div>
                <div className="bg-slate-800 p-2 rounded border border-purple-400 flex-1">
                  <span className="text-purple-300 font-bold block">X</span>
                  <span className="text-[10px] text-gray-400">CIN (1)</span>
                </div>
                <div className="bg-slate-800 p-2 rounded border border-emerald-400 flex-1">
                  <span className="text-emerald-300 font-bold block">05385</span>
                  <span className="text-[10px] text-gray-400">ABI (5)</span>
                </div>
                <div className="bg-slate-800 p-2 rounded border border-indigo-400 flex-1">
                  <span className="text-indigo-300 font-bold block">11101</span>
                  <span className="text-[10px] text-gray-400">CAB (5)</span>
                </div>
                <div className="bg-slate-800 p-2 rounded border border-rose-400 flex-2">
                  <span className="text-rose-300 font-bold block">000000123456</span>
                  <span className="text-[10px] text-gray-400">Conto Corrente (12)</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 border rounded-lg bg-gray-50 border-gray-200 space-y-2">
                <h4 className="font-bold text-gray-900 text-sm">1. CIN Italiano (1 Carattere)</h4>
                <p className="text-gray-700">
                  Calcolato sulla componente BBAN (ABI + CAB + Conto, 23 caratteri) usando tabelle a pesi alternati (posizioni pari e dispari) e convertendo la somma totale con <code>Mod 26</code>.
                </p>
              </div>

              <div className="p-4 border rounded-lg bg-emerald-50 border-emerald-200 space-y-2">
                <h4 className="font-bold text-emerald-900 text-sm">2. Check Digits Europei (ISO 7064 / Mod 97)</h4>
                <p className="text-gray-700">
                  Sposta i primi 4 caratteri in coda, converte le lettere in numeri (A=10, B=11... Z=35). Un IBAN valido, sottoposto alla divisione <strong>Modulo 97</strong>, restituisce sempre <strong>RESTO = 1</strong>!
                </p>
              </div>
            </div>

            {/* Simulatore IBAN Modulo 97 */}
            <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-700 space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                🧪 Verificatore IBAN Interattivo (Algoritmo ISO 7064 - Modulo 97)
              </span>
              <div className="flex flex-col md:flex-row gap-3 items-center text-xs font-mono">
                <input 
                  type="text"
                  value={ibanInput}
                  onChange={(e) => setIbanInput(e.target.value.toUpperCase())}
                  placeholder="Inserisci IBAN completo"
                  className="w-full md:w-2/3 p-2 bg-slate-800 text-emerald-400 border border-slate-700 rounded uppercase font-bold tracking-widest"
                />
                <button
                  onClick={() => setIbanResult(verificaIBANMod97(ibanInput))}
                  className="w-full md:w-1/3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded transition-all"
                >
                  Verifica Modulo 97
                </button>
              </div>

              {ibanResult && (
                <div className={`p-3 rounded text-xs font-mono border ${ibanResult.isCorrect ? 'bg-emerald-950 border-emerald-700 text-emerald-200' : 'bg-red-950 border-red-700 text-red-200'}`}>
                  {ibanResult.message}
                </div>
              )}
            </div>
          </div>

          {/* 3.2 BIC E LEI */}
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 border rounded-lg bg-gray-50 border-gray-200 space-y-2">
              <h3 className="font-bold text-blue-900 text-sm">3.2 Codice BIC / SWIFT</h3>
              <p className="text-gray-700">
                Codice alfanumerico di 8 o 11 caratteri per transazioni internazionali. Composto da: Codice Banca (4 lettere), Paese (2 lettere, es. IT), Località (2 caratteri), Filiale (3 caratteri opzionali). Validato da registro centralizzato SWIFT.
              </p>
            </div>

            <div className="p-4 border rounded-lg bg-gray-50 border-gray-200 space-y-2">
              <h3 className="font-bold text-purple-900 text-sm">3.3 Codice LEI (Legal Entity Identifier - ISO 17442)</h3>
              <p className="text-gray-700">
                Codice alfanumerico di 20 caratteri per identificare gli enti giuridici in operazioni finanziarie: 4 caratteri LOU, 2 riservati (00), 12 alfanumerici ed ultime <strong>2 cifre di controllo</strong> (calcolate con Modulo 97).
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}