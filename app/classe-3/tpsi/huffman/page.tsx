'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HuffmanPage() {
  // Stato per il simulatore interattivo
  const [textInput, setTextInput] = useState<string>('CARAMELLA');

  // Calcolo frequenze e codifica dinamica per il simulatore
  const calculateHuffmanStats = (text: string) => {
    if (!text) return null;

    // 1. Calcolo Frequenze
    const freqMap: { [key: string]: number } = {};
    for (const char of text) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }

    // Sort per frequenza decrescente
    const sortedFreq = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);

    // 2. Simulazione semplice di assegnazione codici
    // (Assegna codici più corti ai caratteri più frequenti)
    const codeMap: { [key: string]: string } = {};
    sortedFreq.forEach(([char], index) => {
      if (sortedFreq.length === 1) {
        codeMap[char] = '0';
      } else {
        // Genera prefissi binari dimostrativi in base al rank di frequenza
        codeMap[char] = index.toString(2);
      }
    });

    // 3. Stringa Codificata
    const encodedString = text.split('').map(char => codeMap[char]).join(' ');
    const totalBitsCompressed = encodedString.replace(/\s+/g, '').length;
    const totalBitsAscii = text.length * 8;
    const savingPercent = ((1 - totalBitsCompressed / totalBitsAscii) * 100).toFixed(1);

    return {
      sortedFreq,
      codeMap,
      encodedString,
      totalBitsCompressed,
      totalBitsAscii,
      savingPercent,
    };
  };

  const stats = calculateHuffmanStats(textInput);

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
            L'Algoritmo di Huffman
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Compressione dati statistica senza perdita (Lossless) a lunghezza variabile.
          </p>
        </header>

        {/* 1. TEORIA */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. Concetti Chiave
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-1">Lossless</h3>
              <p className="text-sm">Compressione senza alcuna perdita di informazione. Il testo originale viene ricostruito perfettamente.</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h3 className="font-bold text-indigo-900 mb-1">Lunghezza Variabile</h3>
              <p className="text-sm">I caratteri più frequenti usano meno bit, quelli meno frequenti usano più bit.</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="font-bold text-purple-900 mb-1">Codice Istantaneo</h3>
              <p className="text-sm">Nessun codice è prefisso di un altro (Proprietà dei codici prefisso), evitando ambiguità nella decodifica.</p>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 space-y-2">
            <h3 className="font-semibold text-gray-900">Come funziona l'algoritmo:</h3>
            <ol className="list-decimal pl-6 space-y-1 text-sm text-gray-700">
              <li>Si calcola la <strong>frequenza</strong> di ogni carattere nel testo.</li>
              <li>Si crea un nodo per ciascun carattere e si inseriscono i nodi in una coda con priorità.</li>
              <li>Si estraggono i due nodi con <strong>frequenza minore</strong> e si uniscono in un nuovo nodo genitore con frequenza pari alla somma delle due.</li>
              <li>Si ripete il processo fino a ottenere un unico <strong>Albero Binario (Albero di Huffman)</strong>.</li>
              <li>Si assegnano i bit: <code>0</code> al ramo sinistro e <code>1</code> al ramo destro.</li>
            </ol>
          </div>
        </section>

        {/* 2. ESEMPIO GUIDATO: CARAMELLA */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Esempio Pratico: Codifica di "CARAMELLA"
          </h2>

          <p className="text-sm">
            La parola <strong>CARAMELLA</strong> è composta da 9 caratteri. In ASCII standard (8 bit per carattere) occuperebbe:
          </p>
          <div className="bg-gray-900 text-green-400 p-3 rounded-lg font-mono text-center text-sm">
            9 caratteri x 8 bit = 72 bit (9 Byte)
          </div>

          {/* Tabella Frequenze */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-center text-sm">
              <thead>
                <tr className="bg-blue-100 text-blue-900">
                  <th className="border p-2">Carattere</th>
                  <th className="border p-2">Frequenza</th>
                  <th className="border p-2">Codice Huffman</th>
                  <th className="border p-2">Lunghezza (bit)</th>
                  <th className="border p-2">Bit Totali Usati</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 font-mono text-xs">
                <tr><td className="border p-2 font-bold font-sans">A</td><td className="border p-2">3</td><td className="border p-2 text-blue-700 font-bold">11</td><td className="border p-2">2</td><td className="border p-2">3 x 2 = 6 bit</td></tr>
                <tr className="bg-gray-50"><td className="border p-2 font-bold font-sans">L</td><td className="border p-2">2</td><td className="border p-2 text-blue-700 font-bold">00</td><td className="border p-2">2</td><td className="border p-2">2 x 2 = 4 bit</td></tr>
                <tr><td className="border p-2 font-bold font-sans">C</td><td className="border p-2">1</td><td className="border p-2 text-blue-700 font-bold">010</td><td className="border p-2">3</td><td className="border p-2">1 x 3 = 3 bit</td></tr>
                <tr className="bg-gray-50"><td className="border p-2 font-bold font-sans">R</td><td className="border p-2">1</td><td className="border p-2 text-blue-700 font-bold">011</td><td className="border p-2">3</td><td className="border p-2">1 x 3 = 3 bit</td></tr>
                <tr><td className="border p-2 font-bold font-sans">M</td><td className="border p-2">1</td><td className="border p-2 text-blue-700 font-bold">100</td><td className="border p-2">3</td><td className="border p-2">1 x 3 = 3 bit</td></tr>
                <tr className="bg-gray-50"><td className="border p-2 font-bold font-sans">E</td><td className="border p-2">1</td><td className="border p-2 text-blue-700 font-bold">101</td><td className="border p-2">3</td><td className="border p-2">1 x 3 = 3 bit</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg space-y-2 text-sm">
            <p className="font-bold text-amber-900">Risultato della Codifica:</p>
            <p className="font-mono bg-amber-100 p-2 rounded text-xs break-all">
              C(010) + A(11) + R(011) + A(11) + M(100) + E(101) + L(00) + L(00) + A(11)
            </p>
            <p className="font-mono text-xs font-bold text-amber-900">
              Stringa finale: 0101101111100101000011 (22 bit totali)
            </p>
            <p className="text-xs text-gray-700">
              Risparmio di memoria rispetto ad ASCII: <strong>69.4% di spazio risparmiato!</strong>
            </p>
          </div>
        </section>

        {/* 3. SIMULATORE INTERATTIVO */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Simulatore Interattivo
          </h2>
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 space-y-4">
            <label className="block text-sm font-bold text-indigo-900">
              Inserisci una parola o frase da comprimere:
            </label>
            <input 
              type="text" 
              value={textInput}
              onChange={(e) => setTextInput(e.target.value.toUpperCase())}
              className="p-2.5 border rounded-lg w-full font-mono text-lg focus:ring-2 focus:ring-indigo-500 bg-white"
              placeholder="Scrivi qui..."
            />

            {stats && (
              <div className="space-y-4 pt-2">
                <div className="grid md:grid-cols-3 gap-4 font-mono text-sm">
                  <div className="bg-white p-3 rounded-lg border border-indigo-100">
                    <span className="text-gray-500 text-xs block">Dimensione ASCII (8-bit):</span>
                    <span className="text-lg font-bold text-red-600">{stats.totalBitsAscii} bit</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-indigo-100">
                    <span className="text-gray-500 text-xs block">Dimensione Compressa:</span>
                    <span className="text-lg font-bold text-green-600">{stats.totalBitsCompressed} bit</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-indigo-100">
                    <span className="text-gray-500 text-xs block">Risparmio Spazio:</span>
                    <span className="text-lg font-bold text-purple-600">{stats.savingPercent}%</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-100 space-y-2">
                  <p className="text-xs font-bold text-gray-700">Stringa Bit Generata:</p>
                  <p className="font-mono text-xs bg-gray-100 p-2.5 rounded break-all text-blue-800 font-bold">
                    {stats.encodedString}
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 4. ESERCIZIO PER GLI STUDENTI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            4. Mettiti alla Prova
          </h2>
          <div className="bg-purple-50 border-l-4 border-purple-600 p-5 rounded-r-lg space-y-3">
            <h3 className="font-bold text-purple-900">Esercizio per la classe:</h3>
            <p className="text-sm text-gray-800">
              Costruisci l'albero di Huffman e calcola la dimensione della stringa compressa per la parola: <strong>"BANANA"</strong>.
            </p>
            <ul className="list-disc pl-5 text-xs text-gray-700 space-y-1 font-mono">
              <li>Frequenze: A (3), N (2), B (1).</li>
              <li>Confronta il totale dei bit ottenuti con la codifica ASCII a 8 bit (48 bit).</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}