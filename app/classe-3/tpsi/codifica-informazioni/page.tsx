'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CodificaInformazioniPage() {
  // Stato per i convertitori interattivi
  const [decInput, setDecInput] = useState<string>('45');
  const [binInput, setBinInput] = useState<string>('101101');
  const [hexInput, setHexInput] = useState<string>('2D');

  const decValue = parseInt(decInput, 10);
  const isDecValid = !isNaN(decValue);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Link di navigazione */}
      <Link 
        href="/classe-3/tpsi" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a TPSI Classe 3ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-12 text-gray-800">
        {/* Intestazione Principale */}
        <header className="border-b-4 border-blue-600 pb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            Codifica e Rappresentazione dell'Informazione
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Guida teorica, convertitori interattivi ed esercizi pratici per la classe 3ª TPSI (Carta ed Excel).
          </p>
        </header>

        {/* ------------------------------------------------------------- */}
        {/* 1. SPIEGAZIONE TEORICA */}
        {/* ------------------------------------------------------------- */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. Spiegazione Teorica
          </h2>

          {/* 1.1 Conversioni */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">1.1 Conversioni di Base</h3>
            <p>
              I calcolatori utilizzano il sistema numerico <strong>binario (Base 2)</strong>, composto unicamente dai bit <code>0</code> e <code>1</code>. Per semplificare la lettura da parte degli operatori umani, si ricorre spesso alla notazione <strong>esadecimale (Base 16)</strong>, in cui i simboli vanno da <code>0</code> a <code>F</code> (dove A=10, B=11, C=12, D=13, E=14, F=15). Ciascuna cifra esadecimale corrisponde esattamente a un quartetto (4 bit) binario.
            </p>
          </div>

          {/* 1.2 Interi con Segno */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">1.2 Rappresentazione dei Numeri Interi con Segno</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Modulo e Segno:</strong> Il bit più significativo (MSB) indica il segno (<code>0</code> per positivo, <code>1</code> per negativo), mentre i restanti bit codificano il valore assoluto. <em>Svantaggio:</em> doppio zero (+0 e -0) e operazioni algebriche complesse.
              </li>
              <li>
                <strong>Complemento a 2 (C2):</strong> Per rappresentare un numero negativo a N bit, si inverte ciascun bit del numero positivo corrispondente (NOT algebrico) e si addiziona <code>1</code> al LSB. Risolve il problema del doppio zero e permette di eseguire le sottrazioni tramite semplici addizioni.
              </li>
              <li>
                <strong>Eccesso a N (Traslazione / Biased):</strong> I valori vengono traslati sommando una costante fissa (offset K). Consente di confrontare numeri con segno tramite semplici confronti tra interi positivi.
              </li>
            </ul>
          </div>

          {/* 1.3 Virgola Mobile IEEE 754 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">1.3 Virgola Mobile (Standard IEEE 754)</h3>
            <p>
              Consente la codifica dei numeri reali secondo la struttura normalized: Segno, Esponente con offset (Bias) e Mantissa.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-2">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-900 mb-1">Singola Precisione (32 bit)</h4>
                <p className="text-sm">1 bit per il Segno (S), 8 bit per l'Esponente (Bias 127), 23 bit per la Mantissa (M).</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-900 mb-1">Doppia Precisione (64 bit)</h4>
                <p className="text-sm">1 bit per il Segno (S), 11 bit per l'Esponente (Bias 1023), 52 bit per la Mantissa (M).</p>
              </div>
            </div>
          </div>

          {/* 1.4 Testo */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">1.4 Codifica del Testo</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>ASCII:</strong> Codifica a 7 bit (128 caratteri base). L'ASCII esteso usa 8 bit (256 caratteri).</li>
              <li><strong>Unicode:</strong> Standard universale che assegna un codice univoco (Code Point) a ogni carattere di tutti i linguaggi umani.</li>
              <li><strong>UTF-8:</strong> Codifica a lunghezza variabile (da 1 a 4 byte). Compatibile al 100% con ASCII per i primi 128 caratteri; ampiamente utilizzata nel Web.</li>
              <li><strong>UTF-16 & UTF-32:</strong> UTF-16 usa unità a 16 bit (2 o 4 byte); UTF-32 usa una dimensione fissa a 32 bit per ciascun carattere.</li>
            </ul>
          </div>

          {/* 1.5 Immagini, Audio e Video */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">1.5 Codifica Grafica e Multimediale</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Immagini Raster (Bitmap):</strong> Griglia ordinata di pixel. In un modello <strong>RGB a 24 bit</strong> (True Color), ogni pixel richiede 8 bit per il Rosso, 8 bit per il Verde e 8 bit per il Blu (16.7 milioni di colori).
              </li>
              <li>
                <strong>Audio Digitale:</strong> Digitalizzato mediante <em>Campionamento</em> (frequenza di campionamento, es. 44.1 kHz per la qualità CD) e <em>Quantizzazione</em> (risoluzione in bit per campione, es. 16 bit).
              </li>
              <li>
                <strong>Video Digitale:</strong> Sequenza temporale di fotogrammi bitmap a frequenza fissa (FPS, es. 30 o 60 fps) integrata con tracce audio sincronizzate.
              </li>
              <li>
                <strong>Compressione:</strong> Si divide in <em>Lossless</em> (senza perdita di informazione, es. PNG, ZIP) e <em>Lossy</em> (con perdita controllata di dettagli impercettibili per ridurre il peso, es. JPEG, MP3, MP4).
              </li>
            </ul>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 2. ESEMPI INTERATTIVI (JAVASCRIPT) */}
        {/* ------------------------------------------------------------- */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Convertitore Interattivo in Tempo Reale
          </h2>
          <p className="text-gray-600">
            Inserisci un valore numerico in uno dei campi per visualizzare la conversione simultanea nelle varie basi e codifiche.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Input Decimale */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Decimale (Base 10)</label>
                <input 
                  type="number"
                  value={decInput}
                  onChange={(e) => {
                    const val = e.target.value;
                    setDecInput(val);
                    const n = parseInt(val, 10);
                    if (!isNaN(n)) {
                      setBinInput((n >>> 0).toString(2));
                      setHexInput(n.toString(16).toUpperCase());
                    }
                  }}
                  className="w-full p-2.5 border rounded-lg font-mono focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

              {/* Input Binario */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Binario (Base 2)</label>
                <input 
                  type="text"
                  value={binInput}
                  onChange={(e) => {
                    const val = e.target.value;
                    setBinInput(val);
                    const n = parseInt(val, 2);
                    if (!isNaN(n)) {
                      setDecInput(n.toString(10));
                      setHexInput(n.toString(16).toUpperCase());
                    }
                  }}
                  className="w-full p-2.5 border rounded-lg font-mono focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>

              {/* Input Esadecimale */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Esadecimale (Base 16)</label>
                <input 
                  type="text"
                  value={hexInput}
                  onChange={(e) => {
                    const val = e.target.value;
                    setHexInput(val);
                    const n = parseInt(val, 16);
                    if (!isNaN(n)) {
                      setDecInput(n.toString(10));
                      setBinInput((n >>> 0).toString(2));
                    }
                  }}
                  className="w-full p-2.5 border rounded-lg font-mono focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
            </div>

            {/* Scheda Risultati avanzati */}
            {isDecValid && (
              <div className="bg-white p-4 rounded-lg border border-gray-200 grid md:grid-cols-2 gap-4 text-sm font-mono">
                <div>
                  <span className="text-gray-500 block">Complemento a 2 (8 bit):</span>
                  <span className="font-bold text-blue-700">
                    {decValue >= -128 && decValue <= 127 
                      ? (decValue < 0 ? (256 + decValue).toString(2).padStart(8, '0') : decValue.toString(2).padStart(8, '0'))
                      : 'Fuori intervallo (-128..127)'}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">Carattere ASCII / Unicode:</span>
                  <span className="font-bold text-purple-700">
                    {decValue >= 32 && decValue <= 126 ? String.fromCharCode(decValue) : 'Non stampabile / Fuori range ASCII'}
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* 3. ESERCIZI GUIDATI (CARTA ED EXCEL) */}
        {/* ------------------------------------------------------------- */}
        <section className="space-y-10">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Schede Esercizi (Su Carta ed Excel)
          </h2>

          {/* Esercizio 1: Conversioni */}
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg space-y-4">
            <h3 className="text-xl font-bold text-purple-900">
              Esercizio 1: Conversioni Binario, Decimale ed Esadecimale
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="bg-white p-4 rounded border border-purple-200 space-y-2">
                <h4 className="font-bold text-purple-800">📝 Svolgimento su Carta</h4>
                <p>Convertire il numero intero <strong>75 (Base 10)</strong> in binario e successivamente in esadecimale.</p>
                <hr className="my-2" />
                <p className="font-semibold text-gray-700">Guida per passaggi:</p>
                <ol className="list-decimal pl-5 space-y-1 font-mono text-xs">
                  <li>75 / 2 = 37 con resto <strong>1</strong> (LSB)</li>
                  <li>37 / 2 = 18 con resto <strong>1</strong></li>
                  <li>18 / 2 = 9 con resto <strong>0</strong></li>
                  <li>9 / 2 = 4 con resto <strong>1</strong></li>
                  <li>4 / 2 = 2 con resto <strong>0</strong></li>
                  <li>2 / 2 = 1 con resto <strong>0</strong></li>
                  <li>1 / 2 = 0 con resto <strong>1</strong> (MSB)</li>
                </ol>
                <p className="text-xs pt-1">Risultato Binario: <strong>1001011</strong></p>
                <p className="text-xs">Raggruppamento quartetti per esadecimale: <code>0100</code> (4) e <code>1011</code> (B) → <strong>4B</strong></p>
              </div>

              <div className="bg-white p-4 rounded border border-purple-200 space-y-2">
                <h4 className="font-bold text-purple-800">📊 Svolgimento su Excel</h4>
                <p className="font-semibold text-gray-700">A) Utilizzo Funzioni Native:</p>
                <ul className="list-disc pl-5 font-mono text-xs text-gray-800 space-y-1">
                  <li>Cella <code>A1</code>: <code>75</code></li>
                  <li>Da Dec ad Bin: <code>=DEC.BIN(A1)</code> → <code>1001011</code></li>
                  <li>Da Dec ad Hex: <code>=DEC.EX(A1)</code> → <code>4B</code></li>
                </ul>

                <p className="font-semibold text-gray-700 pt-2">B) Controprova Algoritmica per Passaggi (Divisioni):</p>
                <ul className="list-disc pl-5 font-mono text-xs text-gray-800 space-y-1">
                  <li>In <code>A4</code> inserisci <code>75</code>.</li>
                  <li>Resto LSB in <code>B4</code>: <code>=RESTO(A4; 2)</code></li>
                  <li>Nuovo quoziente in <code>A5</code>: <code>=INT(A4 / 2)</code></li>
                  <li>Trascina le formule verso il basso fino a ottenere quoziente 0. Leggi i resti in colonna B dal basso verso l'alto.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Esercizio 2: Interi con segno e IEEE 754 */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg space-y-4">
            <h3 className="text-xl font-bold text-blue-900">
              Esercizio 2: Complemento a 2 e Standard IEEE 754
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="bg-white p-4 rounded border border-blue-200 space-y-2">
                <h4 className="font-bold text-blue-800">📝 Svolgimento su Carta</h4>
                <p>1. Rappresentare <strong>-42</strong> su 8 bit in Complemento a 2.</p>
                <ul className="list-disc pl-5 text-xs font-mono space-y-1">
                  <li>+42 in binario su 8 bit: <code>00101010</code></li>
                  <li>Inversione dei bit (NOT): <code>11010101</code></li>
                  <li>Aggiunta di 1: <code>11010101 + 1 = 11010110</code></li>
                </ul>
                <p className="pt-2">2. Ricavare il Bias per l'esponente IEEE 754 in singola precisione (8 bit).</p>
                <p className="text-xs font-mono">Bias K = 2^(8-1) - 1 = 127.</p>
              </div>

              <div className="bg-white p-4 rounded border border-blue-200 space-y-2">
                <h4 className="font-bold text-blue-800">📊 Svolgimento su Excel</h4>
                <p className="font-semibold text-gray-700">Complemento a 2 con Excel:</p>
                <ul className="list-disc pl-5 font-mono text-xs text-gray-800 space-y-1">
                  <li>Cella <code>A1</code>: <code>-42</code></li>
                  <li>Formula nativa a 8 bit: <code>=DEC.BIN(A1; 8)</code> → <code>11010110</code></li>
                </ul>
                <p className="font-semibold text-gray-700 pt-2">Controprova algebrica:</p>
                <ul className="list-disc pl-5 font-mono text-xs text-gray-800 space-y-1">
                  <li>Per il valore negativo usa: <code>=DEC.BIN(256 + A1; 8)</code></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Esercizio 3: Codifica Testo e Codifica Immagini Raster */}
          <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg space-y-4">
            <h3 className="text-xl font-bold text-emerald-900">
              Esercizio 3: Calcolo dell'Occupazione di Memoria (Testo e Immagini)
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="bg-white p-4 rounded border border-emerald-200 space-y-2">
                <h4 className="font-bold text-emerald-800">📝 Svolgimento su Carta</h4>
                <p>Calcolare la dimensione in Byte e MByte di un'immagine non compressa con risoluzione <strong>1920 x 1080 pixel</strong> a colori <strong>RGB True Color (24 bit)</strong>.</p>
                <hr className="my-2" />
                <ol className="list-decimal pl-5 space-y-1 text-xs font-mono">
                  <li>Numero totale di pixel = 1920 x 1080 = 2.073.600 pixel.</li>
                  <li>Bit totali = 2.073.600 x 24 bit = 49.766.400 bit.</li>
                  <li>Byte totali = 49.766.400 / 8 = 6.220.800 Byte.</li>
                  <li>MegaByte (MB) = 6.220.800 / (1024 x 1024) = 5,93 MB.</li>
                </ol>
              </div>

              <div className="bg-white p-4 rounded border border-emerald-200 space-y-2">
                <h4 className="font-bold text-emerald-800">📊 Svolgimento su Excel</h4>
                <p className="font-semibold text-gray-700">Impostazione Tabella di Calcolo:</p>
                <ul className="list-disc pl-5 font-mono text-xs text-gray-800 space-y-1">
                  <li><code>A1</code> (Larghezza): <code>1920</code></li>
                  <li><code>A2</code> (Altezza): <code>1080</code></li>
                  <li><code>A3</code> (Profondità colore in bit): <code>24</code></li>
                  <li><code>A4</code> (Byte totali): <code>=(A1 * A2 * A3) / 8</code></li>
                  <li><code>A5</code> (Dimensione in MB): <code>=A4 / (1024^2)</code></li>
                </ul>
                <p className="font-semibold text-gray-700 pt-2">Testo UTF-8 vs UTF-16:</p>
                <p className="text-xs">
                  Usa <code>=CODICE.CARATT(cella)</code> per ottenere il codice decimale ASCII del carattere selezionato.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}