'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CodificaOtticaTpsiPage() {
  // Stato per simulatore Check Digit EAN-13 / ISBN
  const [ean12, setEan12] = useState<string>('241234567890');

  // Stato per simulatore QR Matrix 4x2 (1 byte = 8 bit)
  const [carattereQr, setCarattereQr] = useState<string>('I');
  const [modalitaQr, setModalitaQr] = useState<'BOTTOM-UP' | 'TOP-DOWN'>('BOTTOM-UP');

  // Calcolo Check Digit EAN-13
  const calcolaEan13 = (codice: string) => {
    const cifrePulite = codice.replace(/\D/g, '').slice(0, 12);
    if (cifrePulite.length !== 12) return null;

    let somma = 0;
    const dettagli: { cifra: number; peso: number; prodotto: number }[] = [];

    for (let i = 0; i < 12; i++) {
      const cifra = parseInt(cifrePulite[i], 10);
      const peso = i % 2 === 0 ? 1 : 3;
      const prodotto = cifra * peso;
      somma += prodotto;
      dettagli.push({ cifra, peso, prodotto });
    }

    const resto = somma % 10;
    const checkDigit = resto === 0 ? 0 : 10 - resto;
    const multiploSuccessivo = somma + checkDigit;

    return {
      codiceCompleto: cifrePulite + checkDigit,
      somma,
      checkDigit,
      multiploSuccessivo,
      dettagli,
    };
  };

  const risultatoEan = calcolaEan13(ean12);

  // Calcolo bit per QR Matrix 4x2 (8 bit)
  const charAttivo = carattereQr.length > 0 ? carattereQr[0] : 'I';
  const codiceAscii = charAttivo.charCodeAt(0);
  const binario8Bit = codiceAscii.toString(2).padStart(8, '0'); // bit7 ... bit0

  // Disposizione griglia 4 righe x 2 colonne
  // Bottom-up: riga 0 = [bit7, bit6], riga 1 = [bit5, bit4], riga 2 = [bit3, bit2], riga 3 = [bit1, bit0]
  // Top-down:  riga 0 = [bit1, bit0], riga 1 = [bit3, bit2], riga 2 = [bit5, bit4], riga 3 = [bit7, bit6]
  const righeQrMatrix =
    modalitaQr === 'BOTTOM-UP'
      ? [
          { etichette: ['bit 7', 'bit 6'], bits: [binario8Bit[0], binario8Bit[1]] },
          { etichette: ['bit 5', 'bit 4'], bits: [binario8Bit[2], binario8Bit[3]] },
          { etichette: ['bit 3', 'bit 2'], bits: [binario8Bit[4], binario8Bit[5]] },
          { etichette: ['bit 1', 'bit 0'], bits: [binario8Bit[6], binario8Bit[7]] },
        ]
      : [
          { etichette: ['bit 1', 'bit 0'], bits: [binario8Bit[6], binario8Bit[7]] },
          { etichette: ['bit 3', 'bit 2'], bits: [binario8Bit[4], binario8Bit[5]] },
          { etichette: ['bit 5', 'bit 4'], bits: [binario8Bit[2], binario8Bit[3]] },
          { etichette: ['bit 7', 'bit 6'], bits: [binario8Bit[0], binario8Bit[1]] },
        ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Link di ritorno all'indice TPSI */}
      <Link
        href="/classe-3/tpsi"
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a TPSI Classe 3ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-10 text-gray-800">
        {/* Header Principale */}
        <header className="border-b-4 border-sky-600 pb-4">
          <div className="inline-block bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            TPSI • Classe 3ª • Unità 2: I Codici Digitali
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            📷 Codifica dell'Informazione in Formato Ottico (Barcode & QR Code)
          </h1>
          <p className="text-gray-600 mt-2 text-base md:text-lg">
            Struttura dei codici a barre monodimensionali (EAN-13, ISBN) e bidimensionali (QR Code, Data Matrix, Aztec, Maxi Code), architetture di lettura e codifica binaria della QR Matrix.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* 1. INTRODUZIONE AI BARCODE E CODICI MONODIMENSIONALI (1D) */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            1. I Codici a Barre (Barcode) Monodimensionali (1D)
          </h2>
          <p className="text-sm leading-relaxed">
            I <strong>codici a barre (barcode)</strong> traducono un dato numerico o alfanumerico in simboli grafici leggibili rapidamente da uno <strong>scanner ottico</strong> o dalla fotocamera di uno smartphone. Si dividono in due grandi famiglie: <strong>monodimensionali (1D)</strong> e <strong>bidimensionali (2D)</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 border rounded-xl bg-sky-50 border-sky-200 space-y-2">
              <h3 className="font-bold text-sky-950 text-sm">📏 Come funziona un Barcode 1D</h3>
              <ul className="list-disc list-inside space-y-1.5 text-gray-800">
                <li><strong>Alternanza di barre e spazi:</strong> Le informazioni sono codificate tramite barre verticali (nere) e spazi (bianchi) di 4 diversi spessori, tutti multipli dell'unità base chiamata <strong>MODULO</strong> (1 = barra nera, 0 = spazio bianco).</li>
                <li><strong>Lettura bidirezionale:</strong> I caratteri posti alle estremità (destra e sinistra) usano codifiche complementari che consentono allo scanner di riconoscere l'orientamento del codice anche se letto al contrario.</li>
                <li><strong>Standard GS1 (Global Standard 1):</strong> Ente internazionale che definisce le simbologie commerciali più diffuse (EAN-13, EAN-8, UPC-A, GS1 QR Code).</li>
              </ul>
            </div>

            <div className="p-4 border rounded-xl bg-slate-50 border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">🔢 Codifica Binaria a 7 Moduli (Esempio Estremi EAN)</h3>
              <p className="text-gray-700">
                Ogni cifra decimale (0–9) viene rappresentata da una sequenza continua di <strong>7 moduli</strong> (7 bit), con pattern distinti per la metà sinistra (set A/B) e la metà destra (set C):
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-[11px] font-mono text-center bg-white">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="p-1 border">Cifra</th>
                      <th className="p-1 border">0</th>
                      <th className="p-1 border">1</th>
                      <th className="p-1 border">2</th>
                      <th className="p-1 border">3</th>
                      <th className="p-1 border">4</th>
                      <th className="p-1 border">5</th>
                      <th className="p-1 border">6</th>
                      <th className="p-1 border">7</th>
                      <th className="p-1 border">8</th>
                      <th className="p-1 border">9</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-1 border font-bold bg-amber-50">Set SX</td>
                      <td className="p-1 border">0001101</td>
                      <td className="p-1 border">0011001</td>
                      <td className="p-1 border">0010011</td>
                      <td className="p-1 border">0111101</td>
                      <td className="p-1 border">0100011</td>
                      <td className="p-1 border">0110001</td>
                      <td className="p-1 border">0101111</td>
                      <td className="p-1 border">0111011</td>
                      <td className="p-1 border">0110111</td>
                      <td className="p-1 border">0001011</td>
                    </tr>
                    <tr>
                      <td className="p-1 border font-bold bg-sky-50">Set DX</td>
                      <td className="p-1 border">1110011</td>
                      <td className="p-1 border">1100110</td>
                      <td className="p-1 border">1101100</td>
                      <td className="p-1 border">1000010</td>
                      <td className="p-1 border">1011100</td>
                      <td className="p-1 border">1001110</td>
                      <td className="p-1 border">1010000</td>
                      <td className="p-1 border">1000100</td>
                      <td className="p-1 border">1001000</td>
                      <td className="p-1 border">1110100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-gray-600">
                * Nota: il Set DX è il complemento bit-a-bit (NOT) del Set SX (es. 0: <code className="bg-white px-1 border rounded">0001101</code> ↔ <code className="bg-white px-1 border rounded">1110010</code> / variant C <code className="bg-white px-1 border rounded">1110011</code>).
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. IL CODICE EAN-13 E IL CODICE ISBN */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            2. Il Codice EAN-13, il Calcolo del Check Digit e il Codice ISBN
          </h2>
          <p className="text-sm leading-relaxed">
            La famiglia <strong>EAN (European Article Number)</strong> comprende quattro versioni principali: <strong>EAN-13</strong> (standard commerciale), <strong>EAN-8</strong> (ridotto, per confezioni piccole), <strong>EAN-2</strong> (riviste/periodici) ed <strong>EAN-5</strong> (supplemento editoria).
          </p>

          {/* Struttura EAN-13 */}
          <div className="grid md:grid-cols-3 gap-4 text-xs">
            <div className="md:col-span-2 p-4 border rounded-xl bg-amber-50/70 border-amber-200 space-y-3">
              <h3 className="font-bold text-amber-950 text-sm">Struttura delle 13 cifre del codice EAN-13</h3>
              <div className="grid grid-cols-4 gap-2 text-center font-mono">
                <div className="p-2.5 bg-blue-100 border border-blue-300 rounded-lg">
                  <span className="text-[10px] font-sans font-bold text-blue-900 block">Cifre 1–2 (o 3)</span>
                  <strong className="text-base text-blue-950">80</strong>
                  <span className="text-[10px] font-sans text-blue-800 block mt-0.5">Prefisso Nazione</span>
                </div>
                <div className="p-2.5 bg-indigo-100 border border-indigo-300 rounded-lg">
                  <span className="text-[10px] font-sans font-bold text-indigo-900 block">Cifre 3–7</span>
                  <strong className="text-base text-indigo-950">12345</strong>
                  <span className="text-[10px] font-sans text-indigo-800 block mt-0.5">Codice Azienda/Ditta</span>
                </div>
                <div className="p-2.5 bg-purple-100 border border-purple-300 rounded-lg">
                  <span className="text-[10px] font-sans font-bold text-purple-900 block">Cifre 8–12</span>
                  <strong className="text-base text-purple-950">67890</strong>
                  <span className="text-[10px] font-sans text-purple-800 block mt-0.5">Codice Articolo</span>
                </div>
                <div className="p-2.5 bg-emerald-100 border border-emerald-400 rounded-lg">
                  <span className="text-[10px] font-sans font-bold text-emerald-900 block">Cifra 13</span>
                  <strong className="text-base text-emerald-950">C</strong>
                  <span className="text-[10px] font-sans text-emerald-800 block mt-0.5">Check Digit</span>
                </div>
              </div>

              <div className="p-3 bg-white rounded-lg border border-amber-200 space-y-1">
                <span className="font-bold text-amber-950 block">Algoritmo per il calcolo del Check Digit (13ª cifra):</span>
                <ol className="list-decimal list-inside space-y-0.5 text-gray-800">
                  <li>Si moltiplicano le prime 12 cifre alternativamente per <strong>1</strong> (posizioni dispari: 1ª, 3ª, 5ª...) e per <strong>3</strong> (posizioni pari: 2ª, 4ª, 6ª...).</li>
                  <li>Si sommano tutti i 12 prodotti ottenuti.</li>
                  <li>Il Check Digit è il <strong>più piccolo numero (≥ 0) da aggiungere alla somma per raggiungere il multiplo di 10 successivo</strong>.</li>
                </ol>
              </div>
            </div>

            {/* Tabella Prefissi Nazione */}
            <div className="border border-gray-300 rounded-xl overflow-hidden text-xs">
              <div className="bg-indigo-900 text-white font-bold p-2 text-center">
                Principali Prefissi Nazione GS1
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-indigo-50 text-indigo-950 font-bold">
                    <th className="p-2 border-b border-r text-center">Cifre</th>
                    <th className="p-2 border-b text-left">Nazione</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="p-2 border-r text-center font-mono font-bold">00–09</td><td className="p-2">USA, Canada</td></tr>
                  <tr><td className="p-2 border-r text-center font-mono font-bold">30–37</td><td className="p-2">Francia</td></tr>
                  <tr><td className="p-2 border-r text-center font-mono font-bold">40–43</td><td className="p-2">Germania</td></tr>
                  <tr><td className="p-2 border-r text-center font-mono font-bold">45 / 49</td><td className="p-2">Giappone</td></tr>
                  <tr className="bg-emerald-50 font-bold"><td className="p-2 border-r text-center font-mono text-emerald-900">80–83</td><td className="p-2 text-emerald-900">Italia 🇮🇹</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Simulatore Interattivo Check Digit EAN-13 */}
          <div className="p-5 bg-slate-900 text-white rounded-xl space-y-3 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-amber-400 font-bold uppercase tracking-wider">
                🧮 Calcolatore Interattivo Check Digit EAN-13 / ISBN-13
              </span>
              <span className="text-slate-400 text-[11px]">Inserisci le prime 12 cifre (default: esempio dispensa 241234567890)</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <input
                type="text"
                maxLength={12}
                value={ean12}
                onChange={(e) => setEan12(e.target.value.replace(/\D/g, ''))}
                placeholder="Inserisci 12 cifre..."
                className="bg-slate-950 border border-sky-500 rounded-lg px-3 py-2 font-mono text-base tracking-widest text-emerald-300 focus:outline-none w-full sm:w-60"
              />
              {risultatoEan ? (
                <div className="flex flex-wrap items-center gap-4 font-mono">
                  <div>
                    <span className="text-slate-400 font-sans block text-[10px]">Somma pesata:</span>
                    <strong className="text-sm text-white">{risultatoEan.somma}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-sans block text-[10px]">Multiplo di 10:</span>
                    <strong className="text-sm text-white">{risultatoEan.multiploSuccessivo}</strong>
                  </div>
                  <div className="bg-emerald-900/70 border border-emerald-500 px-3 py-1 rounded-lg">
                    <span className="text-emerald-200 font-sans block text-[10px]">Check Digit (13ª cifra):</span>
                    <strong className="text-lg text-emerald-400">{risultatoEan.checkDigit}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 font-sans block text-[10px]">EAN-13 Completo:</span>
                    <strong className="text-sm text-sky-300">{risultatoEan.codiceCompleto}</strong>
                  </div>
                </div>
              ) : (
                <span className="text-amber-300">Inserisci esattamente 12 cifre numeriche per calcolare il check digit.</span>
              )}
            </div>

            {risultatoEan && (
              <div className="grid grid-cols-6 sm:grid-cols-12 gap-1 pt-1 font-mono text-center text-[11px]">
                {risultatoEan.dettagli.map((d, idx) => (
                  <div key={idx} className="bg-slate-800 p-1.5 rounded border border-slate-700">
                    <div className="text-white font-bold">{d.cifra}</div>
                    <div className="text-slate-400 text-[9px]">×{d.peso}</div>
                    <div className="text-amber-300 font-bold">{d.prodotto}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Il Codice ISBN */}
          <div className="p-4 border rounded-xl bg-purple-50 border-purple-200 space-y-2 text-xs">
            <h3 className="font-bold text-purple-950 text-sm">📚 Il Codice ISBN (International Standard Book Number)</h3>
            <p className="text-gray-800 leading-relaxed">
              Dal 1° gennaio 2007 l'ISBN utilizza lo standard a <strong>13 cifre</strong> compatibile con EAN-13 ed è suddiviso in <strong>5 blocchi</strong> (es. <code className="bg-white px-1.5 py-0.5 rounded border font-bold">ISBN 978-88-203-4824-3</code>):
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center font-mono pt-1">
              <div className="p-2 bg-white rounded border border-purple-200">
                <strong className="text-purple-900 text-sm block">978</strong>
                <span className="font-sans text-[10px] text-gray-600">1. Prefisso EAN Libro (GS1)</span>
              </div>
              <div className="p-2 bg-white rounded border border-purple-200">
                <strong className="text-purple-900 text-sm block">88</strong>
                <span className="font-sans text-[10px] text-gray-600">2. Gruppo linguistico (88 = Italia)</span>
              </div>
              <div className="p-2 bg-white rounded border border-purple-200">
                <strong className="text-purple-900 text-sm block">203</strong>
                <span className="font-sans text-[10px] text-gray-600">3. Editore (es. 203 = Hoepli)</span>
              </div>
              <div className="p-2 bg-white rounded border border-purple-200">
                <strong className="text-purple-900 text-sm block">4824</strong>
                <span className="font-sans text-[10px] text-gray-600">4. Titolo / Edizione specifica</span>
              </div>
              <div className="p-2 bg-emerald-100 rounded border border-emerald-400">
                <strong className="text-emerald-950 text-sm block">3</strong>
                <span className="font-sans text-[10px] text-emerald-900">5. Carattere di controllo</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. CODICI BIDIMENSIONALI (2D) E ARCHITETTURE DI LETTURA */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            3. I Codici a Barre Bidimensionali (2D) e le Architetture di Lettura
          </h2>
          <p className="text-sm leading-relaxed">
            I <strong>barcode 2D</strong> immagazzinano dati sia in orizzontale che in verticale tramite matrici di punti (moduli), aumentando la capacità al quadrato e integrando algoritmi di <strong>correzione degli errori (Reed-Solomon)</strong> che consentono la lettura anche se il codice è parzialmente strappato o macchiato.
          </p>

          {/* Tabella Comparativa Barcode 2D */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-xs text-left">
              <thead>
                <tr className="bg-indigo-900 text-white font-bold">
                  <th className="p-2.5 border border-indigo-800">Codice 2D</th>
                  <th className="p-2.5 border border-indigo-800">Anno & Struttura</th>
                  <th className="p-2.5 border border-indigo-800">Capacità Dati</th>
                  <th className="p-2.5 border border-indigo-800">Peculiarità e Impieghi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-sky-50/50">
                  <td className="p-2.5 border font-bold text-sky-950">QR Code</td>
                  <td className="p-2.5 border">1994 (Denso Wave). Matrice quadrata da <strong>21×21</strong> (V1) a <strong>177×177</strong> (V40) con 3 <em>Finder Pattern</em> agli angoli.</td>
                  <td className="p-2.5 border">Fino a <strong>7.089</strong> cifre numeriche o <strong>4.296</strong> caratteri alfanumerici (o 1.817 Kanji).</td>
                  <td className="p-2.5 border">Correzione errori Reed-Solomon fino al <strong>30%</strong> (livello H). Lettura a 360°; diffusissimo per URL, pagamenti, biglietti e marketing.</td>
                </tr>
                <tr>
                  <td className="p-2.5 border font-bold text-gray-900">Data Matrix</td>
                  <td className="p-2.5 border">2005 (Pubblico dominio). Matrice di moduli quadrati o circolari con bordo a «L».</td>
                  <td className="p-2.5 border">Fino a <strong>3.116</strong> numeri o <strong>2.335</strong> caratteri alfanumerici.</td>
                  <td className="p-2.5 border">Più compatto ed efficiente del QR Code a parità di dati (usato su farmaci e componenti elettronici), ma non supporta Kanji/Kana.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2.5 border font-bold text-gray-900">Aztec Code</td>
                  <td className="p-2.5 border">1995. Matrice da <strong>15×15</strong> a <strong>151×151</strong> con pattern centrale rettangolare (<em>piramide azteca</em>).</td>
                  <td className="p-2.5 border">Fino a <strong>1.914 byte</strong>.</td>
                  <td className="p-2.5 border">Non richiede Quiet Zone esterna; correzione Reed-Solomon configurabile fino al 95%. Usato nei biglietti ferroviari e aerei.</td>
                </tr>
                <tr>
                  <td className="p-2.5 border font-bold text-gray-900">Maxi Code</td>
                  <td className="p-2.5 border">1992 (UPS). Dimensione fissa 1 pollice quadrato (<strong>33×30 moduli esagonali</strong>) con <em>occhio di bue</em> centrale.</td>
                  <td className="p-2.5 border">Max <strong>138</strong> numeri o <strong>93</strong> caratteri alfanumerici.</td>
                  <td className="p-2.5 border">Progettato per la scansione ad altissima velocità sui nastri trasportatori della logistica e spedizioni merci.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Architettura Diretta vs Indiretta */}
          <div className="grid md:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-4 border rounded-xl bg-emerald-50 border-emerald-200 space-y-1.5">
              <h3 className="font-bold text-emerald-950 text-sm">📱 1. Codifica / Decodifica Diretta (Statica)</h3>
              <p className="text-gray-800 leading-relaxed">
                Lo smartphone acquisisce l'immagine tramite fotocamera e la decodifica <strong>localmente (stand-alone)</strong> ottenendo subito il dato finale (es. un URL completo <code className="bg-white px-1 rounded border">https://...</code>). Il browser contatta quindi direttamente il Content Provider.
              </p>
            </div>

            <div className="p-4 border rounded-xl bg-amber-50 border-amber-200 space-y-1.5">
              <h3 className="font-bold text-amber-950 text-sm">☁️ 2. Codifica / Decodifica Indiretta (Dinamica)</h3>
              <p className="text-gray-800 leading-relaxed">
                Il codice contiene solo un <strong>ID identificativo</strong>. Dopo la scansione, il client invia l'ID a un server intermedio (<strong>Service Platform</strong>) che restituisce il contenuto associato. Permette di <strong>aggiornare nel tempo la destinazione</strong> senza dover ristampare il codice!
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. ANATOMIA DEL QR CODE E CODIFICA BINARIA QR MATRIX */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            4. Anatomia del QR Code e Codifica Binaria (QR Matrix 4×2)
          </h2>

          {/* Livelli di correzione errore + Dimensioni */}
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 border rounded-xl bg-gray-50 border-gray-200 space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">🛡️ Livelli di Correzione Errori (Reed-Solomon)</h3>
              <div className="grid grid-cols-4 gap-2 text-center font-mono">
                <div className="p-2 bg-white border rounded"><strong>L (Low)</strong><span className="block text-sky-700 font-bold">~7%</span></div>
                <div className="p-2 bg-white border rounded"><strong>M (Med)</strong><span className="block text-sky-700 font-bold">~15%</span></div>
                <div className="p-2 bg-white border rounded"><strong>Q (Qual)</strong><span className="block text-sky-700 font-bold">~25%</span></div>
                <div className="p-2 bg-white border rounded"><strong>H (High)</strong><span className="block text-sky-700 font-bold">~30%</span></div>
              </div>
              <p className="text-gray-700">
                <strong>Formula dimensioni per Versione $V$ ($1 \le V \le 40$):</strong><br/>
                Lato in moduli = <code className="bg-white px-1.5 py-0.5 rounded border font-bold">((V - 1) × 4) + 21</code><br/>
                (es. V1 = 21×21, V2 = 25×25, V3 = 29×29 ... V40 = 177×177).
              </p>
            </div>

            <div className="p-4 border rounded-xl bg-indigo-50 border-indigo-200 space-y-1.5">
              <h3 className="font-bold text-indigo-950 text-sm">🧩 Elementi Strutturali Principali</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-800">
                <li><strong>Quiet Zone:</strong> Margine esterno interamente bianco di 4 moduli di spessore.</li>
                <li><strong>Finder Pattern (3):</strong> Grandi quadrati 7×7 agli angoli alto-sx <code className="bg-white px-1 rounded">(0,0)</code>, alto-dx e basso-sx per localizzare e orientare il codice a 360°.</li>
                <li><strong>Alignment Pattern:</strong> Quadratino interno di riferimento per compensare distorsioni prospettiche.</li>
                <li><strong>Timing Pattern:</strong> Linee alternate bianco/nero (orizzontale e verticale) per determinare le coordinate della griglia e la versione.</li>
                <li><strong>Format Information & Data Area:</strong> Livello di correzione/maschera + byte dati (D) e byte di correzione errore (E) letti a serpentina in una sola passata (<strong>OSR — One Shot Read</strong>).</li>
              </ul>
            </div>
          </div>

          {/* Simulatore Interattivo QR Matrix 4x2 */}
          <div className="p-5 bg-slate-900 text-white rounded-xl space-y-4 text-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-3">
              <div>
                <span className="text-sky-400 font-bold uppercase tracking-wider block">
                  ⬛⬜ Simulatore QR Matrix (4×2 moduli = 1 Byte)
                </span>
                <p className="text-slate-300 mt-0.5">
                  Ogni carattere ASCII (8 bit) viene disposto in una sottomatrice di 4 righe × 2 colonne (<strong>1 = modulo nero</strong>, <strong>0 = modulo bianco</strong>).
                </p>
              </div>

              <div className="flex items-center gap-2">
                <label className="text-slate-300 font-bold">Carattere:</label>
                <input
                  type="text"
                  maxLength={1}
                  value={carattereQr}
                  onChange={(e) => setCarattereQr(e.target.value)}
                  className="w-12 text-center bg-slate-950 border border-sky-500 rounded px-2 py-1 font-mono text-base font-bold text-amber-300"
                />
                <button
                  onClick={() => setModalitaQr(modalitaQr === 'BOTTOM-UP' ? 'TOP-DOWN' : 'BOTTOM-UP')}
                  className="px-3 py-1.5 rounded bg-sky-600 hover:bg-sky-500 font-bold text-white cursor-pointer"
                >
                  Modalità: {modalitaQr}
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 items-center">
              {/* Dettaglio Conversione ASCII -> Binario */}
              <div className="space-y-2 font-mono bg-slate-950 p-4 rounded-lg border border-slate-800">
                <div>Carattere selezionato: <strong className="text-amber-300 text-base">"{charAttivo}"</strong></div>
                <div>Codice ASCII decimale: <strong className="text-sky-300">{codiceAscii}<sub>10</sub></strong></div>
                <div>Codifica binaria (8 bit): <strong className="text-emerald-400 tracking-widest">{binario8Bit}<sub>2</sub></strong></div>
                <p className="font-sans text-[11px] text-slate-400 pt-1">
                  {modalitaQr === 'BOTTOM-UP'
                    ? 'In modalità BOTTOM-UP i bit meno significativi (bit 0, bit 1) partono dalla riga in basso e salgono verso l’alto.'
                    : 'In modalità TOP-DOWN i bit meno significativi (bit 0, bit 1) partono dalla riga in alto e scendono verso il basso.'}
                </p>
              </div>

              {/* Griglia Visuale 4x2 */}
              <div className="flex flex-col items-center">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Matrice Ottica ({modalitaQr})
                </span>
                <div className="grid grid-cols-2 gap-1.5 p-3 bg-slate-800 rounded-lg border border-slate-600">
                  {righeQrMatrix.map((riga, rIdx) =>
                    riga.bits.map((b, cIdx) => {
                      const isNero = b === '1';
                      return (
                        <div
                          key={`${rIdx}-${cIdx}`}
                          className={`w-20 h-12 rounded flex flex-col items-center justify-center font-mono border ${
                            isNero
                              ? 'bg-black text-white border-slate-500'
                              : 'bg-white text-black border-gray-300'
                          }`}
                        >
                          <span className="text-[9px] opacity-70">{riga.etichette[cIdx]}</span>
                          <strong className="text-base">{b}</strong>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}