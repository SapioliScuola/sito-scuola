'use client';

import { useState } from 'react';
import Link from 'next/link';
import { datasetDomandeEconomia, Domanda } from './data';

export default function EconomiaOrganizzazioneAziendalePage() {
  // Stato per la domanda casuale
  const [domandaCorrente, setDomandaCorrente] = useState<Domanda | null>(null);
  const [opzioneSelezionata, setOpzioneSelezionata] = useState<number | null>(null);
  const [mostraRisultato, setMostraRisultato] = useState<boolean>(false);

  // Funzione per estrarre una domanda casuale dal dataset
  const generaDomandaCasuale = () => {
    const indiceCasuale = Math.floor(Math.random() * datasetDomandeEconomia.length);
    setDomandaCorrente(datasetDomandeEconomia[indiceCasuale]);
    setOpzioneSelezionata(null);
    setMostraRisultato(false);
  };

  const gestisciSelezioneOpzione = (index: number) => {
    setOpzioneSelezionata(index);
    setMostraRisultato(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Navigation Link */}
      <Link 
        href="/classe-5" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a Classe 5ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-10 text-gray-800">
        
        {/* Header principale */}
        <header className="border-b-4 border-indigo-600 pb-4">
          <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            GPOI • Classe 5ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            📊 Economia e Organizzazione d'Impresa
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Dispensa teorica integrata: Modelli Economici, Micro/Macroeconomia, Costi, Outsourcing, Merci Informazione e Marketing Digitale.
          </p>
        </header>

        {/* WIDGET INTERATTIVO: GENERATORE DOMANDE CASUALI (50 DOMANDE) */}
        <section className="bg-slate-900 text-white p-6 rounded-xl border border-slate-700 space-y-5 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700 pb-4">
            <div>
              <span className="bg-amber-400 text-slate-950 font-bold text-[10px] px-2.5 py-1 rounded uppercase tracking-wider block w-max mb-1">
                Allenamento Esame di Stato
              </span>
              <h2 className="text-xl font-bold text-amber-300">
                🎲 Generatore di Domande Casuali (Dataset 50 Quesiti)
              </h2>
            </div>
            <button
              onClick={generaDomandaCasuale}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-3 rounded-lg transition-all shadow-md flex items-center justify-center gap-2"
            >
              🔄 {domandaCorrente ? 'Estrai Nuova Domanda' : 'Avvia Simulatore Domande'}
            </button>
          </div>

          {/* Schermata di benvenuto del simulator */}
          {!domandaCorrente && (
            <p className="text-xs text-gray-400 text-center py-4 italic">
              Clicca sul pulsante qui sopra per estrarre una domanda casuale tra i 50 quesiti ufficiali di Economia ed Organizzazione Aziendale.
            </p>
          )}

          {/* Domanda Estratta */}
          {domandaCorrente && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                <span>Domanda #{domandaCorrente.id} di 50</span>
                <span>Dataset: Dispensa Economia GPOI</span>
              </div>

              <h3 className="text-base font-bold text-white leading-snug">
                {domandaCorrente.domanda}
              </h3>

              {/* Opzioni di risposta */}
              <div className="grid gap-2 pt-2">
                {domandaCorrente.opzioni.map((opzione, idx) => {
                  let statoBottone = 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-gray-200';
                  
                  if (mostraRisultato) {
                    if (idx === domandaCorrente.rispostaCorretta) {
                      statoBottone = 'bg-emerald-900 border-emerald-500 text-emerald-200 font-bold';
                    } else if (idx === opzioneSelezionata) {
                      statoBottone = 'bg-red-900 border-red-500 text-red-200';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={mostraRisultato}
                      onClick={() => gestisciSelezioneOpzione(idx)}
                      className={`w-full text-left p-3 rounded border text-xs transition-all leading-relaxed ${statoBottone}`}
                    >
                      <span className="font-mono font-bold mr-2">{String.fromCharCode(65 + idx)}.</span>
                      {opzione}
                    </button>
                  );
                })}
              </div>

              {/* Spiegazione ed Esito */}
              {mostraRisultato && (
                <div className={`p-4 rounded-lg text-xs space-y-2 border ${
                  opzioneSelezionata === domandaCorrente.rispostaCorretta 
                    ? 'bg-emerald-950 border-emerald-700 text-emerald-200' 
                    : 'bg-red-950 border-red-700 text-red-200'
                }`}>
                  <div className="font-bold text-sm">
                    {opzioneSelezionata === domandaCorrente.rispostaCorretta 
                      ? '✅ Risposta Corretta!' 
                      : '❌ Risposta Errata'}
                  </div>
                  <p className="leading-relaxed">
                    <strong>Spiegazione:</strong> {domandaCorrente.spiegazione}
                  </p>
                </div>
              )}
            </div>
          )}
        </section>

        {/* LEZIONE TEORICA INTEGRALE */}
        
        {/* 1. MODELLI ECONOMICI E CONCETTI DI BASE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            1. Modelli Economici e Concetti di Base
          </h2>
          <p className="text-sm leading-relaxed">
            L'economia studia le relazioni tra gli agenti ed operatori economici (consumatori, produttori, lavoratori) ed i fattori produttivi (terra, capitale, lavoro). L'interazione genera redditi (rendita, interesse, salario) e permette la produzione di beni e servizi destinati al consumo.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 border rounded-lg bg-gray-50 border-gray-200 space-y-2">
              <h3 className="font-bold text-indigo-800 text-sm">Scuole di Pensiero Economico</h3>
              <ul className="space-y-1.5 text-gray-700">
                <li><strong>Scuola Classica (~1750-1870):</strong> Smith, Ricardo, Marx. Teoria del <em>valore-lavoro</em>: il valore di una merce è determinato dalla quantità di lavoro socialmente necessario a produrla.</li>
                <li><strong>Marginalismo / Neoclassica (~1870-1930):</strong> Walras, Menger, Schumpeter. Incentrata sull'<em>utilità marginale</em> e sulla scarsità dei beni. Nasce la microeconomia.</li>
                <li><strong>Scuola Keynesiana (~1930):</strong> Keynes. Focalizzata sulla domanda aggregata e sull'intervento diretto dello Stato nell'economia.</li>
                <li><strong>Monetarismo (~1950):</strong> Friedman. Analizza l'inflazione ed il controllo dell'offerta di moneta.</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg bg-gray-50 border-gray-200 space-y-2">
              <h3 className="font-bold text-indigo-800 text-sm">Concetti Neoclassici e Vincolo di Bilancio</h3>
              <p className="text-gray-700">
                Un bene è **economico** se è <em>scarso</em>. Il **Vincolo di Bilancio** identifica tutti i panieri di beni acquistabili dato il reddito R ed i prezzi p<sub>1</sub> e p<sub>2</sub>:
              </p>
              <div className="p-2 bg-slate-900 text-green-400 font-mono text-[11px] rounded">
                p₁q₁ + p₂q₂ = R → q₂ = (R / p₂) - (p₁ / p₂)q₁
              </div>
              <p className="text-gray-700">
                La pendenza <code>-p₁/p₂</code> rappresenta il prezzo relativo tra i due beni sul mercato.
              </p>
            </div>
          </div>
        </section>

        {/* 2. DOMANDA, OFFERTA E MERCATO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            2. Domanda, Offerta e Prezzo di Equilibrio
          </h2>
          <p className="text-sm">
            La **Curva di Domanda** (pendenza negativa) esprime la quantità che i consumatori acquistano a ciascun livello di prezzo. La **Curva di Offerta** (pendenza positiva) indica quanto i produttori intendono vendere.
          </p>

          <div className="border p-4 rounded-lg bg-gray-50 space-y-3 text-xs">
            <h3 className="font-bold text-gray-900 text-sm">Concorrenza Perfetta e Dinamiche di Equilibrio</h3>
            <p className="text-gray-700">
              In concorrenza perfetta gli operatori sono numerosi e piccoli (<em>price-taker</em>), i prodotti sono omogenei e non vi sono barriere all'entrata. Il **Prezzo di Equilibrio (P*)** uguaglia domanda ed offerta aggregata.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-center font-mono">
                <thead>
                  <tr className="bg-indigo-100 text-indigo-900 font-bold">
                    <th className="p-2 border">Evento di Mercato</th>
                    <th className="p-2 border">Impatto sul Prezzo (P*)</th>
                    <th className="p-2 border">Impatto sulla Quantità (Q*)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-1.5 border">Aumento della Domanda</td><td className="p-1.5 border text-emerald-700 font-bold">Aumenta (↑)</td><td className="p-1.5 border text-emerald-700 font-bold">Aumenta (↑)</td></tr>
                  <tr className="bg-gray-50"><td className="p-1.5 border">Diminuzione della Domanda</td><td className="p-1.5 border text-red-700 font-bold">Diminuisce (↓)</td><td className="p-1.5 border text-red-700 font-bold">Diminuisce (↓)</td></tr>
                  <tr><td className="p-1.5 border">Aumento dell'Offerta</td><td className="p-1.5 border text-red-700 font-bold">Diminuisce (↓)</td><td className="p-1.5 border text-emerald-700 font-bold">Aumenta (↑)</td></tr>
                  <tr className="bg-gray-50"><td className="p-1.5 border">Diminuzione dell'Offerta</td><td className="p-1.5 border text-emerald-700 font-bold">Aumenta (↑)</td><td className="p-1.5 border text-red-700 font-bold">Diminuisce (↓)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3. COSTI AZIENDALI E MASSIMIZZAZIONE DEL PROFITTO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            3. Azienda, Costi e Massimizzazione del Profitto
          </h2>
          <p className="text-sm">
            L'azienda opera come una <em>black box</em> che trasforma input in output. Il profitto è dato da <strong>P(q) = R(q) - C(q)</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 border rounded-lg bg-gray-50 space-y-2">
              <h3 className="font-bold text-indigo-800 text-sm">Struttura dei Costi</h3>
              <ul className="space-y-1 text-gray-700">
                <li><strong>Costi Fissi (CF):</strong> Indipendenti dai volumi di produzione (es. affitto, illuminazione di base). Presenti anche a q=0.</li>
                <li><strong>Costi Variabili (CV):</strong> Variano direttamente con le quantità prodotte (materie prime, manodopera).</li>
                <li><strong>Costi Diretti e Indiretti:</strong> I primi sono imputabili al 100% ad un prodotto; i secondi sono comuni a più reparti.</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg bg-gray-50 space-y-2">
              <h3 className="font-bold text-indigo-800 text-sm">Ricavo e Costo Marginale</h3>
              <p className="text-gray-700">
                L'azienda massimizza il profitto nel punto in cui il **Ricavo Marginale** uguaglia il **Costo Marginale**:
              </p>
              <div className="p-2 bg-slate-900 text-green-400 font-mono text-[11px] rounded">
                dP/dq = 0 → R_marg = C_marg
              </div>
              <p className="text-gray-700">
                In concorrenza perfetta, poiché il prezzo p è fisso, si ha <strong>R_marg = p = C_marg</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* 4. INVESTIMENTI E OUTSOURCING */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            4. Investimenti, Outsourcing e Make or Buy
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 border rounded-lg bg-purple-50 border-purple-200 space-y-2">
              <h3 className="font-bold text-purple-900 text-sm">Tecniche di Valutazione Investimenti</h3>
              <ul className="space-y-1.5 text-gray-700">
                <li><strong>Valore Attuale Netto (VAN):</strong> Somma attualizzata dei flussi di cassa netti negando l'investimento iniziale. Se <em>VAN &gt 0</em> l'investimento è conveniente.</li>
                <li><strong>Tasso Interno di Rendimento (TIR):</strong> Tasso di sconto che azzera il VAN (VAN = 0). Conveniente se <em>TIR &gt tasso di rendimento minimo</em>.</li>
                <li><strong>Payback Period:</strong> Tempo necessario a recuperare il capitale investito.</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg bg-blue-50 border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-900 text-sm">Make or Buy e Break Even Point</h3>
              <p className="text-gray-700">
                L'outsourcing esternalizza componenti del ciclo produttivo per trasformare costi fissi in variabili.
              </p>
              <div className="p-2 bg-slate-900 text-amber-300 font-mono text-[11px] rounded">
                q_BEP = (CF_a - CF_p) / (CV_p - CV_a)
              </div>
              <p className="text-gray-700">
                Se la domanda prevista supera <code>q_BEP</code> conviene produrre internamente (Make); se è inferiore conviene acquistare all'esterno (Buy).
              </p>
            </div>
          </div>
        </section>

        {/* 5. MERCI INFORMAZIONE, SWITCHING COSTS ED ECONOMIE DI RETE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            5. Merci Informazione, Switching Costs e Legge di Metcalfe
          </h2>

          <div className="space-y-3 text-xs">
            <div className="p-4 border rounded-lg bg-emerald-50 border-emerald-200 space-y-2">
              <h3 className="font-bold text-emerald-900 text-sm">Merci Informazione & Up-Front Costs</h3>
              <p className="text-gray-700">
                Le merci informazione (dati, software, servizi cloud) sono caratterizzate da elevatissimi costi fissi iniziali di prima realizzazione (<strong>Up-Front Costs</strong>) e costi marginali di riproduzione virtualmente nulli (<code>C_marg ≈ 0</code>). Si definiscono <em>Beni Esperienza</em> poiché il loro valore si comprende solo con l'uso.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-gray-50 space-y-2">
                <h3 className="font-bold text-gray-900 text-sm">Switching Costs e Lock-in</h3>
                <p className="text-gray-700">
                  Gli <strong>Switching Costs</strong> comprendono costi di ricerca, penali contrattuali, acquisto di beni complementari e costi di formazione (learning). Quando tali costi sono insostenibili, l'utente si trova in uno stato di <strong>Lock-in</strong> (prigionia tecnologica).
                </p>
              </div>

              <div className="p-4 border rounded-lg bg-gray-50 space-y-2">
                <h3 className="font-bold text-gray-900 text-sm">Economie di Rete (Legge di Metcalfe)</h3>
                <p className="text-gray-700">
                  Nelle economie di rete il valore di un servizio aumenta con il crescere del numero degli utenti:
                </p>
                <div className="p-2 bg-slate-900 text-green-400 font-mono text-[11px] rounded text-center">
                  Valore Rete ∝ n(n - 1) = n² - n
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. MARKETING DIGITALE E SEO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            6. Marketing Digitale, SEO e Pubblicità Online
          </h2>

          <div className="grid md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 border rounded bg-gray-50 space-y-1">
              <h3 className="font-bold text-indigo-900 text-sm">Dalle 4P alle 4C</h3>
              <p className="text-gray-600">
                Evoluzione dal modello tradizionale incentrato sull'offerta (Product, Price, Place, Promotion) al modello digitale incentrato sul consumatore (Consumer, Cost, Communication, Convenience).
              </p>
            </div>

            <div className="p-3 border rounded bg-gray-50 space-y-1">
              <h3 className="font-bold text-indigo-900 text-sm">SEO e SERP</h3>
              <p className="text-gray-600">
                La <strong>SEO</strong> ottimizza i fattori on-page ed off-page per scalare le posizioni organiche della <strong>SERP</strong> (Search Engine Results Page) tramite l'algoritmo PageRank.
              </p>
            </div>

            <div className="p-3 border rounded bg-gray-50 space-y-1">
              <h3 className="font-bold text-indigo-900 text-sm">Google Ads e AdSense</h3>
              <p className="text-gray-600">
                <strong>Google Ads</strong> gestisce aste pubblicitarie sul modello Pay Per Click (PPC); <strong>AdSense</strong> permette ai publisher di ospitare annunci monetizzando gli spazi web.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}