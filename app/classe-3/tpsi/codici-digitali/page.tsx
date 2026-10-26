'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CodiciDigitaliPage() {
  const [digitInput, setDigitInput] = useState<string>('7');

  const digitNum = parseInt(digitInput, 10);
  const isValidDigit = !isNaN(digitNum) && digitNum >= 0 && digitNum <= 9;

  const bcdTable = ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001'];
  const aikenTable = ['0000', '0001', '0010', '0011', '0100', '1011', '1100', '1101', '1110', '1111'];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link 
        href="/classe-3/tpsi" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a TPSI Classe 3ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-12 text-gray-800">
        
        <header className="border-b-4 border-blue-600 pb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            I Codici Digitali
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Concetti di base, ridondanza, endianness e codifiche pesate: BCD e Codice Aiken (2421).
          </p>
        </header>

        {/* 1. CONCETTI FONDAMENTALI */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. Codice, Alfabeto e Stringa
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-1">Codice</h3>
              <p className="text-sm">Una regola che consente di rappresentare un insieme di simboli mediante un altro insieme di simboli.</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="font-bold text-indigo-900 mb-1">Alfabeto (Σ)</h3>
              <p className="text-sm">Un insieme finito di simboli (caratteri) distinti.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-bold text-purple-900 mb-1">Parola / Stringa</h3>
              <p className="text-sm">Una sequenza finita di simboli (anche ripetuti) appartenenti a un determinato alfabeto.</p>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Esempi di Alfabeti:</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
              <li><strong>Unario (U):</strong> U = [1]</li>
              <li><strong>Binario (B):</strong> B = [0, 1]</li>
              <li><strong>Inglese (I):</strong> I = [A, B, C, ..., Z]</li>
              <li><strong>Alfanumerico (AB):</strong> AB = [A, B, ..., Z, 0, 1, ..., 9]</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900">Sistema di Codifica</h3>
            <p className="text-sm leading-relaxed">
              Dato un alfabeto sorgente (o esterno) <strong>A</strong> di <em>a</em> simboli, un sistema di codifica stabilisce una corrispondenza biunivoca per rappresentare tali simboli mediante gli elementi di un alfabeto codice (o interno) <strong>B</strong>.
            </p>
            
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg text-sm space-y-2">
              <p className="font-bold text-amber-900">Esempio Pratico:</p>
              <p>Alfabeto A = [R, V, G, B] (4 simboli) → Alfabeto B = [0, 1] (2 simboli binari)</p>
              <p className="font-mono text-xs">
                R = 00 | V = 01 | G = 10 | B = 11
              </p>
              <p>Codifica della stringa <strong>BRRVG</strong> → <code className="bg-amber-100 px-1 py-0.5 rounded font-bold">1100000110</code></p>
            </div>
          </div>
        </section>

        {/* 2. CODICI NELLA VITA QUOTIDIANA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Codici nella Vita di Ogni Giorno
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-left text-sm">
              <thead>
                <tr className="bg-blue-100 text-blue-900">
                  <th className="border p-3">Tipo di Codice</th>
                  <th className="border p-3">Modalità di Costruzione</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="border p-2.5 font-semibold">Codice Fiscale</td><td className="border p-2.5">Algoritmo sui dati anagrafici</td></tr>
                <tr className="bg-gray-50"><td className="border p-2.5 font-semibold">Codice di Avviamento Postale (CAP)</td><td className="border p-2.5">In base alla zona geografica</td></tr>
                <tr><td className="border p-2.5 font-semibold">Numero di Matricola / Targa</td><td className="border p-2.5">Progressivo generale</td></tr>
                <tr className="bg-gray-50"><td className="border p-2.5 font-semibold">Partita IVA / Numero di Telefono</td><td className="border p-2.5">In base alla provincia/zona e progressivo</td></tr>
                <tr><td className="border p-2.5 font-semibold">Codice Tessera Sanitaria</td><td className="border p-2.5">Basato su algoritmo di controllo</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. LUNGHEZZA E RIDONDANZA */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Lunghezza del Codice e Ridondanza
          </h2>
          <p className="text-sm">
            Se <strong>C</strong> è la cardinalità dell'alfabeto da codificare, il numero minimo <em>m</em> di bit necessari deve soddisfare la relazione:
          </p>
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-center font-mono text-base">
            C ≤ 2<sup>n</sup>  &implies;  n ≥ log2(C) = m
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-green-50 border-green-200">
              <h3 className="font-bold text-green-900">Codice Non Ridondante (n = m)</h3>
              <p className="mt-1">Utilizza esattamente il numero minimo di bit necessari.</p>
              <p className="text-xs font-mono mt-2 text-green-800">
                Esempio: Alfabeto [N, E, S, W] → C = 4, n = 2 bit (2^2 = 4)
              </p>
            </div>
            <div className="border p-4 rounded-lg bg-orange-50 border-orange-200">
              <h3 className="font-bold text-orange-900">Codice Ridondante (n &gt; m)</h3>
              <p className="mt-1">Utilizza più bit del necessario. Utile per il controllo e la correzione degli errori di trasmissione.</p>
              <p className="text-xs font-mono mt-2 text-orange-800">
                Esempio: Cifre decimali (C = 10) su 4 bit → 2^4 = 16 combinazioni (6 inutilizzate)
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 space-y-2">
            <h3 className="font-bold text-blue-900">Memorizzazione dei Byte: Big-Endian vs Little-Endian</h3>
            <p className="text-sm">
              Quando una parola occupa più byte in RAM (es. 32 o 64 bit):
            </p>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li><strong>Big-Endian (BE):</strong> Il byte più significativo viene memorizzato nell'indirizzo di memoria più basso.</li>
              <li><strong>Little-Endian (LE):</strong> Il byte meno significativo viene memorizzato nell'indirizzo di memoria più basso.</li>
            </ul>
          </div>
        </section>

        {/* 4. IL CODICE BCD */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            4. Il Codice BCD (Binary Coded Decimal)
          </h2>
          <p className="text-sm">
            Il codice BCD rappresenta esclusivamente le 10 cifre decimali (0...9) usando <strong>4 bit per ciascuna cifra</strong> (pesi <strong>8-4-2-1</strong>). Le combinazioni da <code>1010</code> a <code>1111</code> sono non valide (codice ridondante).
          </p>

          <div className="bg-gray-50 p-4 rounded-lg border font-mono text-sm space-y-2">
            <p className="font-bold text-gray-800">Confronto tra Binario Puro e BCD:</p>
            <p>(27)10 = (11011)2 = <span className="text-blue-600 font-bold">(0010 0111) BCD</span></p>
            <p>(127)10 = (111111)2 = <span className="text-blue-600 font-bold">(0001 0010 0111) BCD</span></p>
            <p>(379)10 = (101111011)2 = <span className="text-blue-600 font-bold">(0011 0111 1001) BCD</span></p>
          </div>
        </section>

        {/* 5. IL CODICE AIKEN */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            5. Il Codice Aiken (Codice 2421)
          </h2>
          <p className="text-sm">
            Il codice Aiken è un codice pesato con pesi <strong>2-4-2-1</strong>. È un codice <strong>autocomplementante a 9</strong>: invertendo i bit di una cifra si ottiene direttamente la codifica del suo complemento a 9 (ossia 9 - x).
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-center text-sm">
              <thead>
                <tr className="bg-purple-100 text-purple-900">
                  <th className="border p-2">Cifra Decimale</th>
                  <th className="border p-2">BCD (8421)</th>
                  <th className="border p-2">Aiken (2421)</th>
                  <th className="border p-2">Complemento a 9 (Dec)</th>
                  <th className="border p-2">Inversione Bit Aiken (NOT)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-mono text-xs">
                {[0,1,2,3,4,5,6,7,8,9].map((num) => (
                  <tr key={num} className={num % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="border p-2 font-bold font-sans">{num}</td>
                    <td className="border p-2 text-blue-700">{bcdTable[num]}</td>
                    <td className="border p-2 text-purple-700 font-bold">{aikenTable[num]}</td>
                    <td className="border p-2 font-sans">{9 - num}</td>
                    <td className="border p-2 text-gray-600">{aikenTable[9 - num]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. PROVA INTERATTIVA */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            6. Simulatore Interattivo Cifra per Cifra
          </h2>
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 space-y-4">
            <label className="block text-sm font-bold text-indigo-900">
              Inserisci una singola cifra decimale (0 - 9):
            </label>
            <input 
              type="number" 
              min="0" 
              max="9"
              value={digitInput}
              onChange={(e) => setDigitInput(e.target.value)}
              className="p-2.5 border rounded-lg w-32 font-mono text-lg focus:ring-2 focus:ring-indigo-500 bg-white"
            />

            {isValidDigit ? (
              <div className="grid md:grid-cols-2 gap-4 pt-2 font-mono text-sm">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <span className="text-gray-500 text-xs block">Codifica BCD (8421):</span>
                  <span className="text-xl font-bold text-blue-600">{bcdTable[digitNum]}</span>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <span className="text-gray-500 text-xs block">Codifica Aiken (2421):</span>
                  <span className="text-xl font-bold text-purple-600">{aikenTable[digitNum]}</span>
                </div>
              </div>
            ) : (
              <p className="text-red-500 text-xs">Inserisci un numero valido compreso tra 0 e 9.</p>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}