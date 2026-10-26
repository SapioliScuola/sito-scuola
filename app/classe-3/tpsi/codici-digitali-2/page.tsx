'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CodiciDigitali2Page() {
  const [digitInput, setDigitInput] = useState<string>('5');

  const digitNum = parseInt(digitInput, 10);
  const isValidDigit = !isNaN(digitNum) && digitNum >= 0 && digitNum <= 9;

  // Tabelle di codifica per cifra 0-9
  const quinarioTable = ['0000', '0001', '0010', '0011', '0100', '1000', '1001', '1010', '1011', '1100'];
  const biquinarioTable = [
    '01 00001', '01 00010', '01 00100', '01 01000', '01 10000',
    '10 00001', '10 00010', '10 00100', '10 01000', '10 10000'
  ];
  const dueSuCinqueTable = ['01100', '10001', '10010', '10100', '10001', '01010', '01100', '01001', '00110', '00101'];
  
  // Per la grafica del codice a barre 2/5 (1 = barra larga, 0 = barra stretta)
  const dueSuCinqueBarPattern = ['11000', '10001', '10010', '10100', '01100', '01010', '01001', '00110', '00101', '00011'];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Navigation link */}
      <Link 
        href="/classe-3/tpsi" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a TPSI Classe 3ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-12 text-gray-800">
        
        {/* Header Principale */}
        <header className="border-b-4 border-blue-600 pb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            Codici Storici e Rilevazione d'Errore
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Codice Quinario, Biquinario (IBM 650) e Codice 2/5 (Codici a Barre).
          </p>
        </header>

        {/* 1. CODICE QUINARIO */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. Il Codice Quinario (Pesi 5-4-2-1)
          </h2>
          
          <p className="text-sm leading-relaxed">
            Il <strong>Codice Quinario</strong> è un codice a lunghezza fissa di 4 bit basato sui pesi <strong>5-4-2-1</strong>. Può rappresentare fino a 13 configurazioni (5 + 4 + 2 + 1 + 1 = 13), rendendolo un codice <strong>pesato e ridondante</strong> (poiché con 4 bit si hanno 16 combinazioni totali).
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-900">Proprietà della componente Quinaria</h3>
              <p className="text-xs text-gray-700">
                A parte il bit di peso 5 (MSB), le prime 5 configurazioni (da 0 a 4) sono identiche alle 5 successive (da 5 a 9). Nelle cifre ≥ 5 cambia unicamente il MSB che passa da <code>0</code> a <code>1</code>.
              </p>
              <p className="text-xs text-gray-600 italic">
                Uso storico: Utilizzato nell'UNIVAC Solid State con l'aggiunta di un bit di parità dispari.
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 space-y-2">
              <h3 className="font-bold text-amber-900">Variante Remington Rand 409</h3>
              <p className="text-xs text-gray-700">
                Usato nei computer UNIVAC 60 e 120. Utilizzava 5 bit dove 4 bit rappresentavano i pesi 1, 3, 5, 7 e il 5° bit serviva ad aggiungere 1 o codificare il 9.
              </p>
            </div>
          </div>
        </section>

        {/* 2. CODICE BIQUINARIO (IBM 650) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Il Codice Biquinario (Autoverifica e Conteggio Fisso)
          </h2>

          <p className="text-sm leading-relaxed">
            Utilizzato nell'<strong>IBM 650</strong> e negli abachi, il codice biquinario utilizza <strong>7 bit</strong> suddivisi in due gruppi distinti:
          </p>

          <ul className="list-disc pl-6 text-sm space-y-1">
            <li><strong>Gruppo Bi (2 bit):</strong> Pesi (0, 5) → Indica se la cifra è minore di 5 o ≥ 5.</li>
            <li><strong>Gruppo Quinario (5 bit):</strong> Pesi (0, 1, 2, 3, 4) → Indica le unità residue.</li>
          </ul>

          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r-lg text-sm space-y-2">
            <h3 className="font-bold text-emerald-900">Meccanismo di Rilevazione d'Errore (2-out-of-7)</h3>
            <p className="text-xs text-gray-700">
              Ogni cifra valida deve contenere <strong>esattamente due bit impostati a 1</strong>: uno nel gruppo Bi e uno nel gruppo Quinario. Se durante la trasmissione un disturbo modifica un bit (es. un relè bruciato o una valvola guasta), il numero di "1" cambia e la macchina rileva immediatamente l'errore hardware.
            </p>
          </div>
        </section>

        {/* 3. CODICE 2/5 ED ESEMPIO CODICE A BARRE */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Il Codice 2/5 e i Codici a Barre
          </h2>

          <p className="text-sm leading-relaxed">
            Il codice <strong>2/5</strong> è un codice a lunghezza fissa di 5 bit con pesi <strong>6-3-2-1-0</strong>. Come il biquinario, mantiene la regola del conteggio fisso: <strong>esattamente due bit a 1 per ogni stringa</strong>.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 space-y-3">
            <h3 className="font-semibold text-gray-900 text-sm">Codice a Barre 2/5 (Identicon 1968):</h3>
            <ul className="list-disc pl-6 text-xs text-gray-700 space-y-1">
              <li><strong>Codice discreto:</strong> Solo le barre scure trasportano informazioni, gli spazi bianchi tra le barre servono solo da separatori.</li>
              <li><strong>Struttura 2/5:</strong> Ogni cifra decimale è formata da 5 barre, di cui <strong>2 larghe</strong> (rappresentano i bit a 1) e <strong>3 strette</strong> (rappresentano i bit a 0).</li>
            </ul>
          </div>
        </section>

        {/* 4. TABELLA COMPARATIVA DELLE CODIFICHE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            4. Tabella Comparativa (Cifre 0 - 9)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-center text-sm">
              <thead>
                <tr className="bg-blue-100 text-blue-900">
                  <th className="border p-2">Cifra</th>
                  <th className="border p-2">Quinario (5-4-2-1)</th>
                  <th className="border p-2">Biquinario (IBM 650 - 7 bit)</th>
                  <th className="border p-2">Codice 2/5 (6-3-2-1-0)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-mono text-xs">
                {[0,1,2,3,4,5,6,7,8,9].map((num) => (
                  <tr key={num} className={num % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="border p-2 font-bold font-sans">{num}</td>
                    <td className="border p-2 text-blue-700">{quinarioTable[num]}</td>
                    <td className="border p-2 text-emerald-700 font-bold">{biquinarioTable[num]}</td>
                    <td className="border p-2 text-purple-700">{dueSuCinqueTable[num]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5. SIMULATORE INTERATTIVO E CODICE A BARRE */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            5. Simulatore Interattivo e Generatore Codice a Barre 2/5
          </h2>

          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 space-y-6">
            <div>
              <label className="block text-sm font-bold text-indigo-900 mb-2">
                Seleziona una cifra decimale (0 - 9):
              </label>
              <input 
                type="number" 
                min="0" 
                max="9"
                value={digitInput}
                onChange={(e) => setDigitInput(e.target.value)}
                className="p-2.5 border rounded-lg w-32 font-mono text-lg focus:ring-2 focus:ring-indigo-500 bg-white"
              />
            </div>

            {isValidDigit ? (
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4 font-mono text-sm">
                  <div className="bg-white p-3 rounded-lg border border-blue-200">
                    <span className="text-gray-500 text-xs block">Quinario (4 bit):</span>
                    <span className="text-lg font-bold text-blue-600">{quinarioTable[digitNum]}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-emerald-200">
                    <span className="text-gray-500 text-xs block">Biquinario (7 bit):</span>
                    <span className="text-lg font-bold text-emerald-600">{biquinarioTable[digitNum]}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-purple-200">
                    <span className="text-gray-500 text-xs block">Codice 2/5 (5 bit):</span>
                    <span className="text-lg font-bold text-purple-600">{dueSuCinqueTable[digitNum]}</span>
                  </div>
                </div>

                {/* Grafica Codice a Barre 2/5 */}
                <div className="bg-white p-5 rounded-lg border border-gray-300 text-center space-y-2">
                  <span className="text-xs font-bold text-gray-600 block">
                    Rappresentazione Codice a Barre 2/5 (2 barre larghe, 3 strette):
                  </span>
                  <div className="flex justify-center items-center gap-2 h-16 bg-gray-100 p-2 rounded">
                    {dueSuCinqueBarPattern[digitNum].split('').map((bit, idx) => (
                      <div 
                        key={idx} 
                        className={`h-full bg-black ${bit === '1' ? 'w-4' : 'w-1'}`}
                        title={bit === '1' ? 'Barra Larga (1)' : 'Barra Stretta (0)'}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-mono text-gray-500">
                    Pattern bit: {dueSuCinqueBarPattern[digitNum]} (1 = Larga, 0 = Stretta)
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-red-500 text-xs">Inserisci un numero compreso tra 0 e 9.</p>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}