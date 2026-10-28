'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CodiciNonPesatiPage() {
  const [digitInput, setDigitInput] = useState<string>('5');

  const digitNum = parseInt(digitInput, 10);
  const isValidDigit = !isNaN(digitNum) && digitNum >= 0 && digitNum <= 9;

  // Tabelle per Eccesso 3, Gray (4 bit), 1 su 10
  const eccesso3Table = ['0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100'];
  const grayTable = ['0000', '0001', '0011', '0010', '0110', '0111', '0101', '0100', '1100', '1101'];

  // Mappatura per Display a 7 Segmenti [a, b, c, d, e, f, g]
  const sevenSegmentMap: { [key: number]: boolean[] } = {
    0: [true, true, true, true, true, true, false],
    1: [false, true, true, false, false, false, false],
    2: [true, true, false, true, true, false, true],
    3: [true, true, true, true, false, false, true],
    4: [false, true, true, false, false, true, true],
    5: [true, false, true, true, false, true, true],
    6: [true, false, true, true, true, true, true],
    7: [true, true, true, false, false, false, false],
    8: [true, true, true, true, true, true, true],
    9: [true, true, true, true, false, true, true],
  };

  const currentSegments = isValidDigit ? sevenSegmentMap[digitNum] : sevenSegmentMap[0];

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
            Codici Digitali Non Pesati e Speciali
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Eccesso 3, Codifica di Gray (Encoder), Codice 1 su N, Display a 7 Segmenti e Matrice di Punti.
          </p>
        </header>

        {/* 1. CONCETTI GENERALI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. Caratteristiche dei Codici Non Posizionali
          </h2>
          <p className="text-sm leading-relaxed">
            I <strong>codici non pesati (o non posizionali)</strong> sono caratterizzati dal fatto che non esiste un valore di peso associato alle singole posizioni dei bit nella stringa. Vengono progettati per soddisfare specifiche esigenze industriali e circuitali: minimizzare gli errori di lettura dei sensori, semplificare gli orologi o pilotare dispositivi di visualizzazione (display a 7 segmenti e matrici di LED).
          </p>
        </section>

        {/* 2. CODICE ECCESSO 3 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Il Codice Eccesso 3 (XS-3)
          </h2>
          <p className="text-sm leading-relaxed">
            Si ottiene a partire dalla codifica BCD sommando il valore binario <strong>3 (0011)</strong> a ciascuna cifra decimale. La quantità 0 viene rappresentata come 3 (<code>0011</code>), fino alla quantità 9 che viene codificata come 12 (<code>1100</code>).
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-900">Proprietà Autocomplementante</h3>
              <p className="text-xs text-gray-700">
                Come il codice Aiken, invertendo i singoli bit di una parola si ottiene il <strong>complemento a 9</strong> del numero originario (es. 0 = <code>0011</code> → NOT → <code>1100</code> = 9).
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 space-y-2">
              <h3 className="font-bold text-amber-900">Operazioni Algebriche (Somma)</h3>
              <p className="text-xs text-gray-700">
                Se la somma BCD tra due cifre non produce riporto (carry), occorre sottrarre <code>0011</code> (3). Se invece genera riporto, occorre sommare <code>0011</code> al risultato di entrambe le cifre.
              </p>
            </div>
          </div>
        </section>

        {/* 3. CODICE GRAY ED ENCODER */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. La Codifica di Gray e gli Encoder Industriali
          </h2>
          <p className="text-sm leading-relaxed">
            Sviluppato da Frank Gray nei Bell Labs nel 1953, il <strong>Codice di Gray</strong> è un codice ciclico a <strong>distanza unitaria</strong>: due configurazioni adiacenti differiscono sempre e solo per <strong>1 singolo bit</strong>.
          </p>

          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded-r-lg text-sm space-y-2">
            <h3 className="font-bold text-indigo-900">Perché si usa negli Encoder Angolari (Resolver)?</h3>
            <p className="text-xs text-gray-700">
              Negli encoder ottici o meccanici a disco rotante, per via delle tolleranze fisiche è impossibile che più bit commutino esattamente allo stesso microsecondo. Nel binario puro, passare da 3 (<code>011</code>) a 4 (<code>100</code>) richiede il cambio simultaneo di tutti e 3 i bit: se uno ritarda, la macchina legge temporaneamente stati errati. Usando il Codice di Gray commuta un solo circuito alla volta, eliminando i valori equivoci.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-xs font-mono space-y-1">
            <p className="font-bold font-sans text-sm text-gray-800 mb-1">Regola della Specularità per la costruzione a N bit:</p>
            <p>1. Si parte dal codice a 1 bit: 0 e 1.</p>
            <p>2. Si traccia una linea speculare in basso e si riflettono le combinazioni (1 e 0).</p>
            <p>3. Si aggiunge <code>0</code> a sinistra dei codici sopra la linea e <code>1</code> a quelli sotto la linea.</p>
          </div>
        </section>

        {/* 4. CODICE 1 SU N, DISPLAY A 7 SEGMENTI E MATRICE DI PUNTI */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            4. Codici Speciali di Interfaccia (1 su N, 7 Segmenti e Matrice)
          </h2>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-gray-900 mb-1">Codice 1 su N</h3>
              <p className="text-xs text-gray-700">
                Stringhe di $N$ bit contenenti un unico bit a 1. Utilizzato nelle tastiere numeriche, nelle calcolatrici e nei pannelli degli ascensori per evidenziare il piano selezionato.
              </p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-gray-900 mb-1">Display a 7 Segmenti</h3>
              <p className="text-xs text-gray-700">
                Utilizza 7 bit (indicati con le lettere da <code>a</code> a <code>g</code>) per accendere/spegnere i LED dei singoli segmenti e visualizzare le cifre 0-9 ed Hex (A-F).
              </p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-gray-900 mb-1">Matrice di Punti</h3>
              <p className="text-xs text-gray-700">
                Rappresenta caratteri e grafiche su griglie di bit $M \times N$ (es. $8 \times 8$), utilizzata nei display di smartphone, monitor e stampanti.
              </p>
            </div>
          </div>
        </section>

        {/* 5. SIMULATORE E VISUALIZZATORE INTERATTIVO */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            5. Simulatore Interattivo
          </h2>

          <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 space-y-6">
            <div>
              <label className="block text-sm font-bold text-purple-900 mb-2">
                Inserisci una cifra decimale (0 - 9):
              </label>
              <input 
                type="number" 
                min="0" 
                max="9"
                value={digitInput}
                onChange={(e) => setDigitInput(e.target.value)}
                className="p-2.5 border rounded-lg w-32 font-mono text-lg focus:ring-2 focus:ring-purple-500 bg-white"
              />
            </div>

            {isValidDigit ? (
              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Valori di codifica */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="bg-white p-3 rounded-lg border border-purple-200">
                    <span className="text-gray-500 text-xs block">Eccesso 3 (XS-3):</span>
                    <span className="text-lg font-bold text-blue-600">{eccesso3Table[digitNum]}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-purple-200">
                    <span className="text-gray-500 text-xs block">Codice di Gray (4 bit):</span>
                    <span className="text-lg font-bold text-purple-600">{grayTable[digitNum]}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-purple-200">
                    <span className="text-gray-500 text-xs block">Codice 1 su 10:</span>
                    <span className="text-xs font-bold text-emerald-600 break-all">
                      {Array.from({ length: 10 }, (_, i) => (i === digitNum ? '1' : '0')).join('')}
                    </span>
                  </div>
                </div>

                {/* Simulatore visivo Display a 7 Segmenti */}
                <div className="bg-gray-900 p-6 rounded-lg text-center flex flex-col items-center justify-center space-y-2">
                  <span className="text-xs text-gray-400 font-sans block mb-2">
                    Simulazione Display 7 Segmenti:
                  </span>
                  
                  <div className="relative w-20 h-32 font-mono">
                    {/* Segmento a (Alto) */}
                    <div className={`absolute top-0 left-3 right-3 h-2 rounded ${currentSegments[0] ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-gray-800'}`} />
                    {/* Segmento b (Alto Dx) */}
                    <div className={`absolute top-3 right-0 w-2 h-11 rounded ${currentSegments[1] ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-gray-800'}`} />
                    {/* Segmento c (Basso Dx) */}
                    <div className={`absolute bottom-3 right-0 w-2 h-11 rounded ${currentSegments[2] ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-gray-800'}`} />
                    {/* Segmento d (Basso) */}
                    <div className={`absolute bottom-0 left-3 right-3 h-2 rounded ${currentSegments[3] ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-gray-800'}`} />
                    {/* Segmento e (Basso Sx) */}
                    <div className={`absolute bottom-3 left-0 w-2 h-11 rounded ${currentSegments[4] ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-gray-800'}`} />
                    {/* Segmento f (Alto Sx) */}
                    <div className={`absolute top-3 left-0 w-2 h-11 rounded ${currentSegments[5] ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-gray-800'}`} />
                    {/* Segmento g (Centro) */}
                    <div className={`absolute top-15 left-3 right-3 h-2 rounded ${currentSegments[6] ? 'bg-red-500 shadow-lg shadow-red-500/50' : 'bg-gray-800'}`} />
                  </div>

                  <p className="text-xs text-gray-400 pt-2 font-mono">
                    [a,b,c,d,e,f,g] = {currentSegments.map(s => (s ? '1' : '0')).join('')}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-red-500 text-xs">Inserisci una cifra compresa tra 0 e 9.</p>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}