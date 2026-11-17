'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RedditivitaBilancioCicliPage() {
  // Stati per simulatore Leva Finanziaria (da ROI a ROE)
  const [roi, setRoi] = useState<number>(12);
  const [rod, setRod] = useState<number>(4);
  const [debitiSuCapitale, setDebitiSuCapitale] = useState<number>(1.5);
  const [aliquotaFiscale, setAliquotaFiscale] = useState<number>(28);

  // Calcolo ROE con formula della leva finanziaria:
  // ROE = [ROI + (ROI - ROD) * (D / CP)] * (1 - t)
  const effettoLeva = (roi - rod) * debitiSuCapitale;
  const roeLordo = roi + effettoLeva;
  const roeNetto = roeLordo * (1 - aliquotaFiscale / 100);

  // Stati per simulatore Valore Azienda (Reddito Medio Prospettico)
  const [redditoMedio, setRedditoMedio] = useState<number>(512500);
  const [freeRisk, setFreeRisk] = useState<number>(3.41);
  const [rischioImpresa, setRischioImpresa] = useState<number>(5.50);
  const [inflazione, setInflazione] = useState<number>(0.60);

  const tassoAttualizzazione = Number((freeRisk + rischioImpresa + inflazione).toFixed(2));
  const valoreAzienda = tassoAttualizzazione > 0 
    ? Math.round(redditoMedio / (tassoAttualizzazione / 100)) 
    : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Link di ritorno all'indice GPOI */}
      <Link 
        href="/classe-5/gpoi" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a GPOI Classe 5ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-10 text-gray-800">
        
        {/* Header Principale */}
        <header className="border-b-4 border-emerald-600 pb-4">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            GPOI • Classe 5ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            📊 Economicità, Bilancio, Indici (ROI/ROE), Valutazione e Cicli Aziendali
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Equilibrio economico e finanziario, passaggio matematico dal ROI al ROE (leva finanziaria), struttura del Bilancio d'esercizio, stima del valore d'azienda e sfasamento dei cicli aziendali.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* 1. ECONOMICITÀ: REDDITIVITÀ E LIQUIDITÀ */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            1. Le Due Determinanti dell'Economicità: Redditività e Liquidità
          </h2>
          <p className="text-sm leading-relaxed">
            Per sopravvivere e svilupparsi nel tempo in modo autonomo, un'impresa deve operare in condizioni di <strong>economicità</strong>, che si fonda su due equilibri distinti ma complementari:
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 border rounded-xl bg-emerald-50 border-emerald-200 space-y-2">
              <h3 className="font-bold text-emerald-950 text-base">📈 Equilibrio Economico → Redditività</h3>
              <p className="text-gray-800 leading-relaxed">
                È la capacità dell'azienda di generare ricavi superiori ai costi, assicurando un'adeguata remunerazione a tutti i fattori produttivi e al capitale conferito dai soci.
              </p>
              <div className="bg-white p-2.5 rounded border border-emerald-200 font-mono text-[11px] text-emerald-900">
                Condizione: Ricavi {'>'} Costi + Remunerazione Capitale (ROE {'>'} Titoli di Stato + Premio al Rischio)
              </div>
            </div>

            <div className="p-4 border rounded-xl bg-blue-50 border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-950 text-base">💧 Equilibrio Finanziario → Liquidità</h3>
              <p className="text-gray-800 leading-relaxed">
                È la capacità dell'azienda di far fronte <strong>tempestivamente ed entro le scadenze</strong> a tutte le uscite monetarie (fornitori, stipendi, tasse, rate dei prestiti) tramite le entrate disponibili.
              </p>
              <div className="bg-white p-2.5 rounded border border-blue-200 font-mono text-[11px] text-blue-900">
                Attenzione: Un'azienda con ottimi profitti (ricavi {'>'} costi) può fallire per crisi di liquidità se incassa troppo tardi rispetto ai pagamenti!
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. DAL ROI AL ROE: LA FORMULA DELLA LEVA FINANZIARIA */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            2. Dal ROI al ROE: Formula della Leva Finanziaria
          </h2>
          <p className="text-sm leading-relaxed">
            Il <strong>ROI</strong> (<em>Return on Investment</em>) misura la redditività operativa dell'intero capitale investito nell'azienda (proprio + di terzi), mentre il <strong>ROE</strong> (<em>Return on Equity</em>) misura il rendimento netto riservato ai soli soci sul capitale proprio. Per passare dal ROI al ROE occorre considerare il costo del denaro preso a prestito (<strong>ROD</strong> — <em>Return on Debt</em>), il grado di indebitamento e l'incidenza fiscale:
          </p>

          {/* Box Formule */}
          <div className="grid md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 bg-slate-900 text-white rounded-lg space-y-1">
              <span className="text-emerald-400 font-bold uppercase text-[10px]">1. Redditività Operativa (ROI)</span>
              <div className="font-mono text-sm font-bold">ROI = (EBIT / Capitale Investito) × 100</div>
              <p className="text-slate-300 text-[11px]">Dove EBIT è il Risultato Operativo (prima di interessi e tasse).</p>
            </div>

            <div className="p-3.5 bg-slate-900 text-white rounded-lg space-y-1">
              <span className="text-amber-400 font-bold uppercase text-[10px]">2. Costo del Debito (ROD)</span>
              <div className="font-mono text-sm font-bold">ROD = (Oneri Finanziari / Debiti) × 100</div>
              <p className="text-slate-300 text-[11px]">Tasso di interesse medio pagato alle banche/finanziatori.</p>
            </div>

            <div className="p-3.5 bg-slate-900 text-white rounded-lg space-y-1">
              <span className="text-sky-400 font-bold uppercase text-[10px]">3. Redditività Netta (ROE)</span>
              <div className="font-mono text-sm font-bold">ROE = (Utile Netto / Capitale Proprio) × 100</div>
              <p className="text-slate-300 text-[11px]">Rendimento effettivo per l'imprenditore/soci.</p>
            </div>
          </div>

          {/* Formula Esplicita di Collegamento */}
          <div className="p-5 bg-indigo-50 border-2 border-indigo-300 rounded-xl space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-800 block">
              📐 Formula Analitica di Passaggio (Effetto Leva Finanziaria)
            </span>
            <div className="bg-white p-3 rounded-lg border border-indigo-200 font-mono text-sm md:text-base font-bold text-center text-indigo-950 overflow-x-auto">
              ROE = [ ROI + (ROI − ROD) × (Debiti / Capitale Proprio) ] × (1 − t)
            </div>
            <ul className="text-xs text-gray-700 space-y-1 pt-1">
              <li>• <strong>(ROI − ROD) × (Debiti / Capitale Proprio)</strong> rappresenta l'<strong>effetto leva</strong>: se <strong>ROI {'>'} ROD</strong> (il capitale investito rende più del tasso bancario), indebitarsi fa aumentare il ROE dei soci (<em>leva positiva</em>). Se <strong>ROI {'<'} ROD</strong>, i debiti erodono il ROE (<em>leva negativa</em>).</li>
              <li>• <strong>(1 − t)</strong> rappresenta l'incidenza fiscale (dove <em>t</em> è l'aliquota complessiva delle imposte sul reddito, es. IRES + IRAP ≈ 28%).</li>
            </ul>
          </div>

          {/* Simulatore Interattivo ROI -> ROE */}
          <div className="p-5 bg-gray-50 border border-gray-300 rounded-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900 text-sm">🎛️ Simulatore Interattivo: Calcola il ROE dal ROI</h3>
              <span className="text-[11px] bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">Prova a modificare i parametri</span>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="font-bold text-gray-700 block mb-1">ROI (%): {roi}%</label>
                <input type="range" min="0" max="25" step="0.5" value={roi} onChange={(e) => setRoi(Number(e.target.value))} className="w-full accent-emerald-600" />
              </div>
              <div>
                <label className="font-bold text-gray-700 block mb-1">ROD - Tasso Debiti (%): {rod}%</label>
                <input type="range" min="1" max="15" step="0.5" value={rod} onChange={(e) => setRod(Number(e.target.value))} className="w-full accent-amber-600" />
              </div>
              <div>
                <label className="font-bold text-gray-700 block mb-1">Rapporto Debiti / Equity: {debitiSuCapitale}</label>
                <input type="range" min="0" max="4" step="0.25" value={debitiSuCapitale} onChange={(e) => setDebitiSuCapitale(Number(e.target.value))} className="w-full accent-indigo-600" />
              </div>
              <div>
                <label className="font-bold text-gray-700 block mb-1">Imposte t (%): {aliquotaFiscale}%</label>
                <input type="range" min="15" max="45" step="1" value={aliquotaFiscale} onChange={(e) => setAliquotaFiscale(Number(e.target.value))} className="w-full accent-slate-600" />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 bg-white rounded border border-gray-200">
                <span className="text-gray-500 block font-sans">Effetto Leva (ROI - ROD)×(D/CP):</span>
                <span className={`text-base font-bold ${effettoLeva >= 0 ? 'text-emerald-700' : 'text-red-600'}`}>
                  {effettoLeva >= 0 ? `+${effettoLeva.toFixed(2)}%` : `${effettoLeva.toFixed(2)}%`}
                </span>
              </div>
              <div className="p-3 bg-white rounded border border-gray-200">
                <span className="text-gray-500 block font-sans">ROE Ante Imposte:</span>
                <span className="text-base font-bold text-gray-900">{roeLordo.toFixed(2)}%</span>
              </div>
              <div className="p-3 bg-emerald-900 text-white rounded">
                <span className="text-emerald-200 block font-sans">ROE Netto Finale:</span>
                <span className="text-lg font-extrabold">{roeNetto.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. ESEMPIO COMPLETO DI BILANCIO D'ESERCIZIO */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            3. Esempio Pratico di Bilancio d'Esercizio (Art. 2423 c.c.)
          </h2>
          <p className="text-sm leading-relaxed">
            Il Bilancio d'esercizio è composto da <strong>Stato Patrimoniale</strong> (fotografia del patrimonio a fine anno: impieghi e fonti), <strong>Conto Economico</strong> (flusso di ricavi e costi dell'anno), <strong>Rendiconto Finanziario</strong> e <strong>Nota Integrativa</strong>. Ecco l'esempio numerico della <em>TechSoft S.r.l.</em>:
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            {/* Stato Patrimoniale */}
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <div className="bg-blue-900 text-white font-bold p-2.5 text-center">
                STATO PATRIMONIALE al 31/12 (Valori in €)
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-100 text-blue-950 font-bold">
                    <th className="p-2 border-b border-r text-left">ATTIVO (Impieghi)</th>
                    <th className="p-2 border-b text-right">Importo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="p-2 border-r">Immobilizzazioni (Brevetti, Server, PC)</td><td className="p-2 text-right font-mono">180.000</td></tr>
                  <tr><td className="p-2 border-r">Rimanenze di magazzino</td><td className="p-2 text-right font-mono">20.000</td></tr>
                  <tr><td className="p-2 border-r">Crediti verso clienti</td><td className="p-2 text-right font-mono">65.000</td></tr>
                  <tr><td className="p-2 border-r">Disponibilità liquide (Banca e Cassa)</td><td className="p-2 text-right font-mono">35.000</td></tr>
                  <tr className="bg-blue-50 font-bold"><td className="p-2 border-r">TOTALE ATTIVO (Capitale Investito)</td><td className="p-2 text-right font-mono">300.000</td></tr>
                </tbody>
              </table>

              <table className="w-full border-collapse border-t-2 border-blue-900">
                <thead>
                  <tr className="bg-blue-100 text-blue-950 font-bold">
                    <th className="p-2 border-b border-r text-left">PASSIVO E NETTO (Fonti)</th>
                    <th className="p-2 border-b text-right">Importo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="p-2 border-r">Capitale Sociale + Riserve</td><td className="p-2 text-right font-mono">120.000</td></tr>
                  <tr><td className="p-2 border-r">Utile d'esercizio</td><td className="p-2 text-right font-mono text-emerald-700 font-bold">30.000</td></tr>
                  <tr className="bg-emerald-50/70 font-semibold"><td className="p-2 border-r">Totale Patrimonio Netto (Equity)</td><td className="p-2 text-right font-mono">150.000</td></tr>
                  <tr><td className="p-2 border-r">Mutui bancari passivi (M/L termine)</td><td className="p-2 text-right font-mono">100.000</td></tr>
                  <tr><td className="p-2 border-r">Debiti verso fornitori e tributari (Breve)</td><td className="p-2 text-right font-mono">50.000</td></tr>
                  <tr className="bg-blue-50 font-bold"><td className="p-2 border-r">TOTALE PASSIVO E NETTO</td><td className="p-2 text-right font-mono">300.000</td></tr>
                </tbody>
              </table>
            </div>

            {/* Conto Economico */}
            <div className="border border-gray-300 rounded-lg overflow-hidden flex flex-col justify-between">
              <div>
                <div className="bg-emerald-900 text-white font-bold p-2.5 text-center">
                  CONTO ECONOMICO Scalare (Valori in €)
                </div>
                <table className="w-full border-collapse">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-gray-50 font-bold"><td className="p-2 border-r">A) Valore della Produzione (Ricavi vendite)</td><td className="p-2 text-right font-mono">420.000</td></tr>
                    <tr><td className="p-2 border-r">Costi per materie, cloud e servizi</td><td className="p-2 text-right font-mono text-red-700">-170.000</td></tr>
                    <tr><td className="p-2 border-r">Costi per il personale (stipendi e contributi)</td><td className="p-2 text-right font-mono text-red-700">-165.000</td></tr>
                    <tr><td className="p-2 border-r">Ammortamenti immobilizzazioni</td><td className="p-2 text-right font-mono text-red-700">-37.000</td></tr>
                    <tr className="bg-gray-50 font-bold"><td className="p-2 border-r">B) Totale Costi della Produzione</td><td className="p-2 text-right font-mono text-red-700">-372.000</td></tr>
                    <tr className="bg-amber-50 font-bold text-amber-950"><td className="p-2 border-r">Differenza (A − B) = EBIT (Risultato Operativo)</td><td className="p-2 text-right font-mono">48.000</td></tr>
                    <tr><td className="p-2 border-r">C) Oneri finanziari (Interessi su mutui)</td><td className="p-2 text-right font-mono text-red-700">-6.000</td></tr>
                    <tr className="bg-gray-100 font-bold"><td className="p-2 border-r">Risultato Prima delle Imposte (EBT)</td><td className="p-2 text-right font-mono">42.000</td></tr>
                    <tr><td className="p-2 border-r">Imposte sul reddito (IRES + IRAP)</td><td className="p-2 text-right font-mono text-red-700">-12.000</td></tr>
                    <tr className="bg-emerald-100 font-extrabold text-emerald-950"><td className="p-2 border-r">UTILE NETTO D'ESERCIZIO</td><td className="p-2 text-right font-mono">30.000</td></tr>
                  </tbody>
                </table>
              </div>

              {/* Calcolo Indici dal Bilancio */}
              <div className="p-3 bg-slate-900 text-white space-y-1 text-[11px] font-mono">
                <span className="text-amber-400 font-bold font-sans uppercase block">Indici estratti dal Bilancio sopra:</span>
                <div>• ROI = 48.000 / 300.000 = <strong className="text-emerald-400">16,0%</strong></div>
                <div>• ROD = 6.000 / 150.000 (debiti tot.) = <strong className="text-amber-300">4,0%</strong></div>
                <div>• ROE = 30.000 / 150.000 (Patr. Netto) = <strong className="text-sky-400">20,0%</strong></div>
                <div>• Liquidità immediata = (35.000 + 65.000) / 50.000 = <strong className="text-emerald-400">2,0 ({'>'} 1, ottima)</strong></div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. VALUTAZIONE D'AZIENDA CON IL REDDITO MEDIO PROSPETTICO */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            4. Stima del Valore di un'Azienda (Metodo Reddituale / Flussi Economici)
          </h2>
          <p className="text-sm leading-relaxed">
            Quanto vale un'azienda sul mercato (ad esempio in caso di cessione o ingresso di nuovi soci)? Il <strong>metodo reddituale puro (rendita perpetua)</strong> stima il capitale economico dell'impresa attualizzando il <strong>Reddito Medio Prospettico ($R$)</strong> — cioè la capacità futura dell'azienda di produrre utili — mediante un <strong>Tasso di Attualizzazione ($i$)</strong> coerente con il rischio d'impresa:
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl space-y-2">
              <h3 className="font-bold text-indigo-950 text-sm">Procedimento in 3 Passaggi (Modello Excel)</h3>
              <ol className="list-decimal list-inside space-y-1.5 text-gray-800">
                <li><strong>Calcolo dei Redditi Netti Storici (P5 → P1):</strong> Si sottraggono le imposte dal reddito lordo degli ultimi 5 esercizi.</li>
                <li><strong>Proiezione Futura (F1 → F5) e Media:</strong> Si estrapolano i 5 esercizi futuri tramite regressione lineare (in Excel funzione <code className="bg-white px-1 rounded border">=TENDENZA()</code>) e se ne calcola la media (<code className="bg-white px-1 rounded border">=MEDIA()</code>) ottenendo il <strong>Reddito Medio Prospettico ($R$)</strong>.</li>
                <li><strong>Attualizzazione al Tasso $i$:</strong> Si divide il Reddito Medio Prospettico per il tasso di attualizzazione $i$:
                  <div className="bg-white p-2 mt-1.5 rounded border border-indigo-200 font-mono font-bold text-center text-indigo-950">
                    Valore Azienda (W) = R / i
                  </div>
                </li>
              </ol>
              <p className="text-[11px] text-gray-600 pt-1">
                * Il tasso $i$ è dato da: <strong>Tasso Free Risk</strong> (Titoli di Stato) + <strong>Premio per il Rischio di Impresa</strong> + <strong>Tasso di Inflazione</strong>.
              </p>
            </div>

            {/* Tabella Esempio Numerico */}
            <div className="border border-gray-300 rounded-xl overflow-hidden text-xs">
              <div className="bg-slate-800 text-white font-bold p-2 text-center">
                Esempio Numerico (Dati Storici e Previsionali)
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 font-bold text-gray-700">
                    <th className="p-1.5 border">Anno</th>
                    <th className="p-1.5 border text-right">Reddito Lordo</th>
                    <th className="p-1.5 border text-right">Imposte</th>
                    <th className="p-1.5 border text-right">Risultato Netto</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 font-mono">
                  <tr><td className="p-1.5 border font-sans">P5 (5 anni fa)</td><td className="p-1.5 border text-right">175.000 €</td><td className="p-1.5 border text-right">50.000 €</td><td className="p-1.5 border text-right font-bold">125.000 €</td></tr>
                  <tr><td className="p-1.5 border font-sans">P4</td><td className="p-1.5 border text-right">300.000 €</td><td className="p-1.5 border text-right">90.000 €</td><td className="p-1.5 border text-right font-bold">210.000 €</td></tr>
                  <tr><td className="p-1.5 border font-sans">P3</td><td className="p-1.5 border text-right">280.000 €</td><td className="p-1.5 border text-right">85.000 €</td><td className="p-1.5 border text-right font-bold">195.000 €</td></tr>
                  <tr><td className="p-1.5 border font-sans">P2</td><td className="p-1.5 border text-right">390.000 €</td><td className="p-1.5 border text-right">115.000 €</td><td className="p-1.5 border text-right font-bold">275.000 €</td></tr>
                  <tr><td className="p-1.5 border font-sans">P1 (Ultimo anno)</td><td className="p-1.5 border text-right">520.000 €</td><td className="p-1.5 border text-right">150.000 €</td><td className="p-1.5 border text-right font-bold">370.000 €</td></tr>
                  <tr className="bg-amber-50">
                    <td colSpan={3} className="p-1.5 border font-sans font-bold text-amber-950">Proiezione F1..F5 (=TENDENZA): 401.500 → 623.500 €</td>
                    <td className="p-1.5 border text-right font-bold text-amber-950">Media: 512.500 €</td>
                  </tr>
                  <tr className="bg-emerald-50 font-bold text-emerald-950">
                    <td colSpan={3} className="p-1.5 border font-sans">Tasso i = 3,41% (Free Risk) + 5,50% (Rischio) + 0,60% (Infl.) = 9,51%</td>
                    <td className="p-1.5 border text-right">W = 5.389.064 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Calcolatore Interattivo Valore Azienda */}
          <div className="p-4 bg-gray-50 border border-gray-300 rounded-xl space-y-3 text-xs">
            <h3 className="font-bold text-gray-900 text-sm">🧮 Calcolatore Valore d'Azienda (W = R / i)</h3>
            <div className="grid sm:grid-cols-4 gap-3">
              <div>
                <label className="font-bold text-gray-700 block mb-1">Reddito Medio Prospettico (€)</label>
                <input type="number" value={redditoMedio} onChange={(e) => setRedditoMedio(Number(e.target.value))} className="w-full p-1.5 border rounded bg-white font-mono" />
              </div>
              <div>
                <label className="font-bold text-gray-700 block mb-1">Tasso Free Risk (%)</label>
                <input type="number" step="0.1" value={freeRisk} onChange={(e) => setFreeRisk(Number(e.target.value))} className="w-full p-1.5 border rounded bg-white font-mono" />
              </div>
              <div>
                <label className="font-bold text-gray-700 block mb-1">Rischio Impresa (%)</label>
                <input type="number" step="0.1" value={rischioImpresa} onChange={(e) => setRischioImpresa(Number(e.target.value))} className="w-full p-1.5 border rounded bg-white font-mono" />
              </div>
              <div>
                <label className="font-bold text-gray-700 block mb-1">Inflazione (%)</label>
                <input type="number" step="0.1" value={inflazione} onChange={(e) => setInflazione(Number(e.target.value))} className="w-full p-1.5 border rounded bg-white font-mono" />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between bg-indigo-950 text-white p-3 rounded-lg font-mono">
              <span>Tasso Attualizzazione (i): <strong>{tassoAttualizzazione}%</strong></span>
              <span className="text-base">Valore Stimato Azienda (W): <strong className="text-emerald-400">{valoreAzienda.toLocaleString('it-IT')} €</strong></span>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. I TRE CICLI AZIENDALI E LO SFASAMENTO TEMPORALE */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            5. I Tre Cicli Aziendali e l'Effetto dello Sfasamento Temporale
          </h2>
          <p className="text-sm leading-relaxed">
            La gestione aziendale si sviluppa lungo tre cicli sovrapposti ma con <strong>date di inizio e fine quasi mai coincidenti</strong>:
          </p>

          <div className="grid md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 border-l-4 border-purple-600 bg-purple-50 rounded-r-lg">
              <strong className="text-purple-950 block text-sm">1. Ciclo Tecnico-Produttivo</strong>
              <p className="text-gray-700 mt-1">Inizia con l'immissione dei fattori produttivi (<em>input</em>: materie prime, ore lavoro) nella lavorazione e termina con l'ottenimento del prodotto finito (<em>output</em>).</p>
            </div>
            <div className="p-3.5 border-l-4 border-amber-500 bg-amber-50 rounded-r-lg">
              <strong className="text-amber-950 block text-sm">2. Ciclo Economico</strong>
              <p className="text-gray-700 mt-1">Inizia con il sostenimento dei <strong>costi</strong> (acquisto materie/forniture) e termina con il conseguimento dei <strong>ricavi</strong> (consegna/fatturazione del prodotto al cliente).</p>
            </div>
            <div className="p-3.5 border-l-4 border-emerald-600 bg-emerald-50 rounded-r-lg">
              <strong className="text-emerald-950 block text-sm">3. Ciclo Finanziario (Monetario)</strong>
              <p className="text-gray-700 mt-1">Inizia con l'<strong>uscita monetaria</strong> (pagamento effettivo ai fornitori) e termina con l'<strong>entrata monetaria</strong> (incasso effettivo della fattura dal cliente).</p>
            </div>
          </div>

          {/* Esempio Pratico con Timeline */}
          <div className="p-5 bg-slate-50 border border-slate-300 rounded-xl space-y-4 text-xs">
            <div>
              <span className="bg-red-100 text-red-800 font-bold px-2.5 py-0.5 rounded uppercase text-[10px]">
                Caso Pratico di Sfasamento • Azienda Software "WWW"
              </span>
              <h3 className="font-bold text-slate-900 text-base mt-1">
                Perché i tre cicli non coincidono e generano fabbisogno di cassa
              </h3>
              <p className="text-gray-700 mt-1 leading-relaxed">
                L'azienda <strong>WWW</strong> firma il <strong>15 Gennaio</strong> un contratto con il cliente <strong>TTT</strong> per sviluppare un sistema middleware (pagamento pattuito a <strong>60 giorni dalla consegna</strong>). Per realizzarlo, il <strong>15 Febbraio</strong> WWW acquista hardware e licenze dal fornitore <strong>YYY</strong> (consegna dopo 15 giorni, pagamento a <strong>30 giorni</strong>). La produzione dura <strong>45 giorni</strong> e la consegna avviene dopo altri <strong>15 giorni</strong>.
              </p>
            </div>

            {/* Cronologia delle 6 date */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-center font-mono">
              <div className="p-2 bg-white border rounded shadow-xs">
                <span className="text-[10px] text-gray-500 block">15 Gennaio</span>
                <strong className="text-gray-800">Ordine da TTT</strong>
              </div>
              <div className="p-2 bg-amber-100 border border-amber-300 rounded shadow-xs">
                <span className="text-[10px] text-amber-800 block">15 Febbraio</span>
                <strong className="text-amber-950">Acquisto YYY (COSTO)</strong>
              </div>
              <div className="p-2 bg-purple-100 border border-purple-300 rounded shadow-xs">
                <span className="text-[10px] text-purple-800 block">1 Marzo</span>
                <strong className="text-purple-950">Inizio Lavori (INPUT)</strong>
              </div>
              <div className="p-2 bg-emerald-100 border border-emerald-300 rounded shadow-xs">
                <span className="text-[10px] text-emerald-800 block">15 Marzo</span>
                <strong className="text-emerald-950">Pago YYY (USCITA)</strong>
              </div>
              <div className="p-2 bg-purple-100 border border-purple-300 rounded shadow-xs">
                <span className="text-[10px] text-purple-800 block">15 Apr / 1 Mag</span>
                <strong className="text-purple-950">Output & Consegna (RICAVO)</strong>
              </div>
              <div className="p-2 bg-emerald-100 border border-emerald-300 rounded shadow-xs">
                <span className="text-[10px] text-emerald-800 block">1 Luglio</span>
                <strong className="text-emerald-950">Incasso TTT (ENTRATA)</strong>
              </div>
            </div>

            {/* Barre Gantt Visive dei 3 Cicli */}
            <div className="space-y-2.5 pt-2 bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex justify-between text-[10px] font-bold text-gray-400 border-b pb-1">
                <span>GEN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAG</span><span>GIU</span><span>LUG</span>
              </div>

              {/* Ciclo Tecnico */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="font-bold text-purple-900">Ciclo Tecnico-Produttivo (45 giorni)</span>
                  <span className="text-gray-500">1 Marzo (Input) → 15 Aprile (Output)</span>
                </div>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden flex">
                  <div className="w-[28%]"></div>
                  <div className="w-[22%] bg-purple-600 rounded-full"></div>
                </div>
              </div>

              {/* Ciclo Economico */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="font-bold text-amber-900">Ciclo Economico (75 giorni)</span>
                  <span className="text-gray-500">15 Febbraio (Costo) → 1 Maggio (Ricavo/Consegna)</span>
                </div>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden flex">
                  <div className="w-[21%]"></div>
                  <div className="w-[36%] bg-amber-500 rounded-full"></div>
                </div>
              </div>

              {/* Ciclo Finanziario */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="font-bold text-emerald-900">Ciclo Finanziario (105 giorni scoperti)</span>
                  <span className="text-gray-500">15 Marzo (Uscita cassa) → 1 Luglio (Entrata cassa)</span>
                </div>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden flex">
                  <div className="w-[35%]"></div>
                  <div className="w-[50%] bg-emerald-600 rounded-full"></div>
                </div>
              </div>

              <div className="mt-3 p-2.5 bg-red-50 border-l-4 border-red-500 text-red-900 text-[11px]">
                <strong>Conclusione operativa:</strong> Anche se l'operazione genera un ottimo profitto economico (Ricavo TTT {'>'} Costo YYY), l'azienda rimane <strong>esposta finanziariamente per 105 giorni</strong> (dal 15 Marzo al 1 Luglio), periodo in cui deve avere liquidità propria o un fido bancario per pagare fornitori e stipendi prima di incassare dal cliente.
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}