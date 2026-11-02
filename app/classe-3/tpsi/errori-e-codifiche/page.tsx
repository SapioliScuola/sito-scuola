'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ErroriCodifichePage() {
  // Stato per il simulatore interattivo di Distanza di Hamming (XOR)
  const [strS1, setStrS1] = useState<string>('10001001');
  const [strS2, setStrS2] = useState<string>('10110001');

  // Stato per il simulatore di Parità Incrociata VRC / LRC
  const [dato3Bit5, setDato3Bit5] = useState<number>(0); // 0 = Corretto, 1 = Sporco (Errore)

  // Calcolo Distanza di Hamming (XOR bit a bit e conteggio degli 1)
  const calcolaDistanzaHamming = (s1: string, s2: string) => {
    if (s1.length !== s2.length || s1.length === 0) {
      return { xorResult: 'Lunghezze diverse', distanza: -1 };
    }
    let xorArr = '';
    let dist = 0;
    for (let i = 0; i < s1.length; i++) {
      const b1 = s1[i] === '1' ? 1 : 0;
      const b2 = s2[i] === '1' ? 1 : 0;
      const res = b1 ^ b2;
      xorArr += res.toString();
      if (res === 1) dist++;
    }
    return { xorResult: xorArr, distanza: dist };
  };

  const risultatoHamming = calcolaDistanzaHamming(strS1, strS2);

  // Snippet di codice/tabelle isolati in stringhe JS
  const snippetXorExample = `s1 = 10001001\ns2 = 10110001\n\ns1 XOR s2 = 00111000\nDistanza di Hamming = 3 (numero di bit '1' nel risultato XOR)`;

  const snippetCrcExample = `# Esempio Calcolo CRC con divisione modulo 2 (XOR)\nMessaggio M(x) = 11001001 (8 bit, m=8)\nPolinomio Generatore G(x) = x^3 + 1 -> 1001 (Grado r = 3)\n\n1. Aggiunta di r zeri a M(x): 11001001000\n2. Divisione modulo 2 per 1001:\n   11001001000 : 1001 = 11001001 con Resto = 011 (3 bit)\n3. Messaggio finale trasmetto M'(x) = 11001001011`;

  const snippetHammingPositions = `# Posizionamento dei bit di controllo (CTR) per Hamming (12, 4):\n\nBit Index: 1    2    3    4    5    6    7    8    9    10   11   12\nTipo:      CTR  CTR  D3   CTR  D5   D6   D7   CTR  D9   D10  D11  D12\nPotenza 2: 2^0  2^1       2^2                 2^3\n\n- Posizione 1 (2^0 = 1): Controlla i bit con bit 0 dell'indice binario a 1 (1, 3, 5, 7, 9, 11)\n- Posizione 2 (2^1 = 2): Controlla i bit con bit 1 dell'indice binario a 1 (2, 3, 6, 7, 10, 11)\n- Posizione 4 (2^2 = 4): Controlla i bit con bit 2 dell'indice binario a 1 (4, 5, 6, 7, 12)\n- Posizione 8 (2^3 = 8): Controlla i bit con bit 3 dell'indice binario a 1 (8, 9, 10, 11, 12)`;

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
        <header className="border-b-4 border-blue-600 pb-4">
          <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Materia: TPSI • Classe 3ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            📡 Codici per la Rilevazione e Correzione degli Errori
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Rumore elettromagnetico sui BUS, Distanza di Hamming, Parità VRC/LRC, CRC, codifica Reed-Solomon e Codice di Hamming (12,4).
          </p>
        </header>

        {/* 1. TRASMISSIONE DIGITALE, BUS E ORIGINE DEGLI ERRORI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. Trasmissione nei Calcolatori e Origine degli Errori
          </h2>
          <p className="text-sm leading-relaxed">
            All'interno di un elaboratore avvengono continuamente scambi di informazioni in formato digitale sotto forma di tensioni elettriche (alto = 1, basso = 0) propagate su conduttori paralleli chiamati **BUS** (dati, indirizzi, controllo). La circolazione di elettroni genera campi elettromagnetici che producono **rumore**: tali disturbi possono alterare la tensione di uno o più bit (fenomeno del <em>bit sporcato</em>, es. <code>10011</code> che perviene come <code>10111</code>).
          </p>

          {/* Schemino architetturale BUS */}
          <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-700 font-mono text-xs space-y-3">
            <span className="text-emerald-400 font-bold block text-center uppercase tracking-wider">
              Schematico del Flusso Dati e BUS Hardware
            </span>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-2">
              <div className="border border-blue-400 p-3 rounded text-center w-full md:w-1/4 bg-slate-800">
                <span className="font-bold text-blue-300 block">CPU / Sender</span>
                <span className="text-[10px] text-gray-400">Generatore Dati</span>
              </div>
              <div className="flex-1 w-full flex flex-col items-center border-t-2 border-b-2 border-dashed border-amber-400 py-2">
                <span className="text-amber-300 font-bold text-[11px]">BUS Dati & Indirizzi (16/32/64 bit)</span>
                <span className="text-[10px] text-red-400 animate-pulse">⚡ Rumore Elettromagnetico (Interferenze) ⚡</span>
              </div>
              <div className="border border-emerald-400 p-3 rounded text-center w-full md:w-1/4 bg-slate-800">
                <span className="font-bold text-emerald-300 block">RAM / Receiver</span>
                <span className="text-[10px] text-gray-400">Destinatario</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-3 text-xs pt-2">
            <div className="p-3 border rounded bg-gray-50 border-gray-200">
              <span className="font-bold text-red-800 block mb-1">1. Scartare il messaggio</span>
              <p className="text-gray-600">L'informazione errata viene eliminata senza notifiche.</p>
            </div>
            <div className="p-3 border rounded bg-gray-50 border-gray-200">
              <span className="font-bold text-amber-800 block mb-1">2. Ritrasmissione (ARQ)</span>
              <p className="text-gray-600">Si richiede al mittente di inviare nuovamente i dati.</p>
            </div>
            <div className="p-3 border rounded bg-gray-50 border-gray-200">
              <span className="font-bold text-blue-800 block mb-1">3. Migliorare il canale</span>
              <p className="text-gray-600">Schermare i cavi hardware per azzerare i rumori.</p>
            </div>
            <div className="p-3 border rounded bg-emerald-50 border-emerald-200">
              <span className="font-bold text-emerald-900 block mb-1">4. Autocorrezione (FEC)</span>
              <p className="text-gray-700 font-medium">Uso di codifiche ridondanti per correggere l'errore in ricezione.</p>
            </div>
          </div>
        </section>

        {/* 2. DISTANZA DI HAMMING ED ESEMPI PRATICI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Ridondanza e Distanza di Hamming
          </h2>
          <p className="text-sm">
            La <strong>Distanza di Hamming</strong> (<em>d</em>) tra due configurazioni binarie della stessa lunghezza è il numero di bit per cui esse differiscono. Si calcola effettuando l'operazione logica di <strong>XOR</strong> bit a bit e contandone gli 1 risultanti.
          </p>

          <pre className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto leading-relaxed">
            <code>{snippetXorExample}</code>
          </pre>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg space-y-2 text-xs text-gray-800">
            <h4 className="font-bold text-amber-900 text-sm">Regola della Distanza Minima (D<sub>min</sub>):</h4>
            <p>
              Per **rilevare** <em>k</em> errori occorre un codice con distanza minima <strong>D<sub>min</sub> = k + 1</strong>.<br />
              Per **correggere** <em>t</em> errori occorre una distanza minima <strong>D<sub>min</sub> = 2t + 1</strong>.
            </p>
          </div>

          {/* Simulatore interattivo di Distanza di Hamming */}
          <div className="bg-slate-900 text-white p-5 rounded-xl space-y-3">
            <h3 className="text-sm font-bold text-amber-400 border-b border-slate-700 pb-2">
              🧪 Simulatore Calcolo Distanza di Hamming (XOR Bit a Bit)
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <label className="block text-gray-300 font-bold mb-1">Stringa S1 (8 bit):</label>
                <input
                  type="text"
                  maxLength={8}
                  value={strS1}
                  onChange={(e) => setStrS1(e.target.value)}
                  className="w-full p-2 bg-slate-800 text-green-400 rounded border border-slate-700 outline-none font-mono"
                />
              </div>
              <div>
                <label className="block text-gray-300 font-bold mb-1">Stringa S2 (8 bit):</label>
                <input
                  type="text"
                  maxLength={8}
                  value={strS2}
                  onChange={(e) => setStrS2(e.target.value)}
                  className="w-full p-2 bg-slate-800 text-green-400 rounded border border-slate-700 outline-none font-mono"
                />
              </div>
            </div>

            <div className="bg-slate-800 p-3 rounded font-mono text-xs border border-slate-700 text-center space-y-1">
              <p className="text-gray-400">Risultato Operazione XOR: <span className="text-yellow-300 font-bold">{risultatoHamming.xorResult}</span></p>
              <p className="text-base text-emerald-400 font-bold">Distanza di Hamming = {risultatoHamming.distanza}</p>
            </div>
          </div>
        </section>

        {/* 3. PARITÀ TRASVERSALE (VRC) E PARITÀ INCROCIATA (VRC + LRC) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Bit di Parità (VRC) e Parità Incrociata (VRC + LRC)
          </h2>
          <p className="text-sm">
            Il metodo **VRC (Vertical Redundancy Check)** aggiunge 1 bit di parità (Pari o Dispari) in coda al dato per renderne il numero di 1 sempre pari (Parity Even) o dispari (Parity Odd).
          </p>

          <div className="border p-4 rounded-lg bg-gray-50 border-gray-200 space-y-3">
            <h3 className="font-bold text-gray-900 text-sm">Parità Incrociata per l'Autocorrezione (VRC + LRC)</h3>
            <p className="text-xs text-gray-700">
              Affiancando alla parità trasversale (VRC sulle righe) il **byte di checksum** calcolato con parità longitudinale (LRC sulle colonne tramite XOR), l'intersezione tra la riga errata e la colonna errata individua **esattamente la posizione del bit sporcato**, permettendone l'autocorrezione.
            </p>

            {/* Tabella interattiva parità incrociata */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-400 text-xs text-center font-mono">
                <thead>
                  <tr className="bg-gray-200 font-bold">
                    <th className="p-2 border">Dato</th>
                    <th className="p-2 border">b7</th>
                    <th className="p-2 border">b6</th>
                    <th className="p-2 border bg-amber-100">b5</th>
                    <th className="p-2 border">b4</th>
                    <th className="p-2 border">b3</th>
                    <th className="p-2 border">b2</th>
                    <th className="p-2 border">b1</th>
                    <th className="p-2 border bg-blue-100">Parità VRC (Riga)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-1.5 border font-bold">Dato 1</td>
                    <td className="p-1.5 border">1</td><td className="p-1.5 border">1</td><td className="p-1.5 border">0</td>
                    <td className="p-1.5 border">0</td><td className="p-1.5 border">1</td><td className="p-1.5 border">1</td>
                    <td className="p-1.5 border">1</td><td className="p-1.5 border font-bold bg-blue-50">1</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 border font-bold">Dato 2</td>
                    <td className="p-1.5 border">0</td><td className="p-1.5 border">1</td><td className="p-1.5 border">0</td>
                    <td className="p-1.5 border">0</td><td className="p-1.5 border">0</td><td className="p-1.5 border">0</td>
                    <td className="p-1.5 border">0</td><td className="p-1.5 border font-bold bg-blue-50">1</td>
                  </tr>
                  <tr className={dato3Bit5 === 1 ? 'bg-red-100 font-bold text-red-900' : ''}>
                    <td className="p-1.5 border font-bold">Dato 3</td>
                    <td className="p-1.5 border">0</td><td className="p-1.5 border">0</td>
                    <td className="p-1.5 border bg-amber-200">
                      {dato3Bit5 === 0 ? '1' : '0 (SPORCO!)'}
                    </td>
                    <td className="p-1.5 border">1</td><td className="p-1.5 border">0</td><td className="p-1.5 border">0</td>
                    <td className="p-1.5 border">0</td>
                    <td className="p-1.5 border font-bold bg-blue-50">
                      {dato3Bit5 === 0 ? '0' : '0 (ERRORE RIGA!)'}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1.5 border font-bold">Dato 4</td>
                    <td className="p-1.5 border">1</td><td className="p-1.5 border">1</td><td className="p-1.5 border">0</td>
                    <td className="p-1.5 border">0</td><td className="p-1.5 border">1</td><td className="p-1.5 border">1</td>
                    <td className="p-1.5 border">0</td><td className="p-1.5 border font-bold bg-blue-50">0</td>
                  </tr>
                  <tr className="bg-amber-100 font-bold">
                    <td className="p-1.5 border">Checksum LRC (Colonna)</td>
                    <td className="p-1.5 border">0</td><td className="p-1.5 border">1</td>
                    <td className="p-1.5 border bg-red-200">
                      {dato3Bit5 === 0 ? '1' : '1 (ERRORE COLONNA!)'}
                    </td>
                    <td className="p-1.5 border">1</td><td className="p-1.5 border">0</td><td className="p-1.5 border">0</td>
                    <td className="p-1.5 border">1</td><td className="p-1.5 border">0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={() => setDato3Bit5(dato3Bit5 === 0 ? 1 : 0)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2 rounded transition-all"
              >
                {dato3Bit5 === 0 ? 'Simula Bit Sporcato (Dato 3, Bit 5)' : 'Ripristina Bit Corretto'}
              </button>
              <span className="text-xs text-gray-600">
                {dato3Bit5 === 1 && '🎯 Intersezione individuata: Riga Dato 3, Colonna b5! L\'errore viene negato e autocorretto.'}
              </span>
            </div>
          </div>
        </section>

        {/* 4. CRC (CONTROLLO A RIDONDANZA CICLICA) E REED-SOLOMON */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            4. CRC (Controllo a Ridondanza Ciclica) e Codici Reed-Solomon
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50 border-gray-200 space-y-2">
              <h3 className="font-bold text-indigo-900 text-sm">CRC (Polynomial Code)</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Il CRC applica l'algebra dei polinomi con divisione in sottrazione modulo 2 (XOR).
                Il mittente divide il messaggio <em>M(x)</em> seguito da <em>r</em> zeri per un polinomio generatore noto <em>G(x)</em> di grado <em>r</em>, ottenendo un **resto** (checksum) da allegare alla trasmissione. Il ricevitore ridivide per <em>G(x)</em>: se il resto è **0**, non ci sono errori.
              </p>
              <pre className="bg-gray-900 text-green-400 p-2 rounded font-mono text-[10px] overflow-x-auto">
                <code>{snippetCrcExample}</code>
              </pre>
            </div>

            <div className="border p-4 rounded-lg bg-purple-50 border-purple-200 space-y-2">
              <h3 className="font-bold text-purple-900 text-sm">Codici Reed-Solomon</h3>
              <p className="text-xs text-gray-700 leading-relaxed">
                Codici a blocchi basati sul teorema algebrico: <em>"Qualsiasi successione di k punti distinti determina univocamente un polinomio al più di grado k-1"</em>. Effettuano il sovracampionamento del polinomio in più punti per tollerare burst di errori.
              </p>
            </div>
          </div>
        </section>

        {/* 5. IL CODICE DI HAMMING (12,4) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            5. Il Codice di Hamming (12, 4)
          </h2>
          <p className="text-sm">
            Proposto da Richard Hamming nel 1950, è un codice **autocorrettore istantaneo** per errori singoli su messaggi di qualsiasi lunghezza. I bit di controllo (<em>r</em>) vengono posizionati nelle posizioni corrispondenti alle **potenze di 2** (2<sup>0</sup>=1, 2<sup>1</sup>=2, 2<sup>2</sup>=4, 2<sup>3</sup>=8).
          </p>

          <pre className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto leading-relaxed">
            <code>{snippetHammingPositions}</code>
          </pre>
        </section>

        {/* 6. ESEMPI E APPLICAZIONI NEL MONDO REALE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            🌐 6. Esempi d'Uso Reali delle Tecniche di Codifica
          </h2>
          <p className="text-sm text-gray-600">
            Dove vengono impiegate quotidianamente queste tecniche nel mondo dell'informatica e delle telecomunicazioni:
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 border rounded-lg bg-blue-50 border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-900 text-sm">💻 RAM ECC (Error-Correcting Code)</h3>
              <p className="text-gray-700">
                Nei server di rete e datacenter vengono utilizzate memorie <strong>RAM ECC</strong> basate sul **Codice di Hamming** per rilevare e correggere istantaneamente i singoli ribaltamenti di bit (bit flip) causati da raggio cosmico o rumori di tensione senza mandare in crash il sistema.
              </p>
            </div>

            <div className="p-4 border rounded-lg bg-emerald-50 border-emerald-200 space-y-2">
              <h3 className="font-bold text-emerald-900 text-sm">📱 Codici a Barre e QR Code</h3>
              <p className="text-gray-700">
                I **QR Code** integrano la codifica **Reed-Solomon** su 4 livelli di sicurezza (L, M, Q, H). Il livello elevato consente di scansionare e decodificare il QR Code con successo anche se l'etichetta è sporca, strappata o coperta fino al <strong>30%</strong> della sua superficie.
              </p>
            </div>

            <div className="p-4 border rounded-lg bg-amber-50 border-amber-200 space-y-2">
              <h3 className="font-bold text-amber-900 text-sm">🌐 Protocolli di Rete (Ethernet, Wi-Fi e ZIP)</h3>
              <p className="text-gray-700">
                I frame delle reti Ethernet, i pacchetti Wi-Fi ed i file compressi (ZIP, PNG) utilizzano il **CRC-32** nel campo FCS (Frame Check Sequence) per scartare istantaneamente i pacchetti corrotti durante la trasmissione in radiofrequenza o su cavo rame.
              </p>
            </div>

            <div className="p-4 border rounded-lg bg-purple-50 border-purple-200 space-y-2">
              <h3 className="font-bold text-purple-900 text-sm">💿 Supporti Ottici (CD, DVD e Blu-ray)</h3>
              <p className="text-gray-700">
                Nei CD audio e DVD i dati sono protetti da **Reed-Solomon (CIRC)** per ricostruire le traccia audio senza salti anche in presenza di graffi superficiali sul disco.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}