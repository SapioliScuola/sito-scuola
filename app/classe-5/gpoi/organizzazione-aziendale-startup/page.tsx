'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function OrganizzazioneAziendaleStartupPage() {
  const [casoSoluzioneVisibile, setCasoSoluzioneVisibile] = useState<{ [key: number]: boolean }>({});

  const toggleSoluzioneCaso = (id: number) => {
    setCasoSoluzioneVisibile((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Link di navigazione */}
      <Link 
        href="/classe-5/gpoi" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a GPOI Classe 5ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-10 text-gray-800">
        
        {/* Header Principale */}
        <header className="border-b-4 border-indigo-600 pb-4">
          <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            GPOI • Classe 5ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            🏢 Organizzazione Aziendale, Forme Societarie e Startup Innovative
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Dalla definizione giuridica d'impresa alle forme societarie, requisiti delle Startup Innovative, finanza agevolata, crowdfunding ed ecosistema degli incubatori.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* 1. IMPRENDITORE, AZIENDA E IMPRESA NEL CODICE CIVILE */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            1. Imprenditore, Azienda, Impresa e Registro delle Imprese
          </h2>
          <p className="text-sm leading-relaxed">
            In economia si distingue tra <strong>azienda</strong> (qualsiasi organizzazione di persone e beni che svolge attività produttiva, incluse famiglie, associazioni e PA) e <strong>impresa</strong> (azienda che produce per il mercato al fine di generare profitto). Nel diritto italiano, invece, il Codice Civile parte dalla figura dell'imprenditore:
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 border rounded-lg bg-blue-50 border-blue-200 space-y-1.5">
              <span className="font-bold text-blue-900 text-sm block">Art. 2082 c.c. — Imprenditore</span>
              <p className="text-gray-700 leading-relaxed">
                «È imprenditore chi esercita professionalmente un'attività economica organizzata al fine della produzione o dello scambio di beni o di servizi.»
              </p>
            </div>

            <div className="p-4 border rounded-lg bg-indigo-50 border-indigo-200 space-y-1.5">
              <span className="font-bold text-indigo-900 text-sm block">Art. 2555 c.c. — Azienda</span>
              <p className="text-gray-700 leading-relaxed">
                «L'azienda è il complesso dei beni organizzati dall'imprenditore per l'esercizio dell'impresa.» (Strumento attraverso cui si realizza l'impresa).
              </p>
            </div>

            <div className="p-4 border rounded-lg bg-purple-50 border-purple-200 space-y-1.5">
              <span className="font-bold text-purple-900 text-sm block">Art. 2247 c.c. — Contratto di Società</span>
              <p className="text-gray-700 leading-relaxed">
                «Con il contratto di società due o più persone conferiscono beni o servizi per l'esercizio in comune di un'attività economica, allo scopo di dividerne gli utili.»
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-4 border rounded-lg bg-gray-50 border-gray-200 space-y-1.5">
              <h3 className="font-bold text-gray-900 text-sm">Personalità Giuridica e Autonomia Patrimoniale</h3>
              <p className="text-gray-700 leading-relaxed">
                Avere <strong>personalità giuridica</strong> significa che l'organizzazione è soggetto di diritto distinto dai soci (<strong>autonomia patrimoniale perfetta</strong>): i creditori della società possono rivalersi solo sul patrimonio aziendale e non su quello personale dei soci.
              </p>
            </div>

            <div className="p-4 border rounded-lg bg-gray-50 border-gray-200 space-y-1.5">
              <h3 className="font-bold text-gray-900 text-sm">Camera di Commercio e Registro delle Imprese</h3>
              <p className="text-gray-700 leading-relaxed">
                Ogni impresa ha l'obbligo di iscriversi al <strong>Registro delle Imprese</strong> presso la Camera di Commercio (CCIAA). È un registro pubblico informatizzato che certifica denominazione, forma giuridica, oggetto sociale e <strong>codice ATECO</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. FORME SOCIETARIE: CARATTERISTICHE E QUADRO NORMATIVO */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            2. Le Forme Societarie in Italia: Caratteristiche e Normativa
          </h2>
          <p className="text-sm leading-relaxed">
            L'ordinamento italiano suddivide le attività imprenditoriali in <strong>Impresa Individuale</strong> e tre grandi famiglie societarie: <strong>Società di Persone</strong>, <strong>Società di Capitali</strong> e <strong>Società Cooperative</strong>.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-xs text-left">
              <thead>
                <tr className="bg-indigo-900 text-white font-bold">
                  <th className="p-2.5 border border-indigo-800">Forma Giuridica</th>
                  <th className="p-2.5 border border-indigo-800">Riferimento Normativo</th>
                  <th className="p-2.5 border border-indigo-800">Autonomia Patrimoniale & Responsabilità</th>
                  <th className="p-2.5 border border-indigo-800">Capitale Minimo & Caratteristiche</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Impresa Individuale */}
                <tr className="bg-white">
                  <td className="p-2.5 border font-bold text-gray-900">Ditta Individuale / Libero Professionista</td>
                  <td className="p-2.5 border font-mono">Art. 2082 / 2222 c.c.</td>
                  <td className="p-2.5 border text-red-700 font-semibold">Assente: responsabilità illimitata del titolare con tutto il patrimonio personale.</td>
                  <td className="p-2.5 border">Nessun capitale minimo. Costituzione rapida tramite Comunicazione Unica (ComUnica) o apertura P.IVA.</td>
                </tr>

                {/* Società di Persone */}
                <tr className="bg-amber-50/40">
                  <td className="p-2.5 border font-bold text-amber-900">Società Semplice (S.s.)</td>
                  <td className="p-2.5 border font-mono">Artt. 2251–2290 c.c.</td>
                  <td className="p-2.5 border text-amber-800">Imperfetta: soci illimitatamente e solidalmente responsabili (salvo patto contrario per non amministratori).</td>
                  <td className="p-2.5 border">Nessun capitale minimo. Utilizzabile <strong>solo per attività non commerciali</strong> (es. agricoltura, gestione immobiliare, studi associati).</td>
                </tr>
                <tr className="bg-amber-50/40">
                  <td className="p-2.5 border font-bold text-amber-900">Società in Nome Collettivo (S.n.c.)</td>
                  <td className="p-2.5 border font-mono">Artt. 2291–2312 c.c.</td>
                  <td className="p-2.5 border text-red-700 font-semibold">Imperfetta: tutti i soci rispondono illimitatamente e solidalmente (patto contrario inefficace verso terzi).</td>
                  <td className="p-2.5 border">Nessun capitale minimo. Modello base per attività commerciali dove prevale l'elemento fiduciario tra soci.</td>
                </tr>
                <tr className="bg-amber-50/40">
                  <td className="p-2.5 border font-bold text-amber-900">Società in Accomandita Semplice (S.a.s.)</td>
                  <td className="p-2.5 border font-mono">Artt. 2313–2324 c.c.</td>
                  <td className="p-2.5 border">
                    Doppia categoria di soci:<br/>
                    • <strong>Accomandatari:</strong> gestiscono e rispondono illimitatamente.<br/>
                    • <strong>Accomandanti:</strong> rispondono solo per la quota conferita (divieto di immistione).
                  </td>
                  <td className="p-2.5 border">Nessun capitale minimo. Permette di associare soci finanziatori (accomandanti) a soci operativi.</td>
                </tr>

                {/* Società di Capitali */}
                <tr className="bg-emerald-50/40">
                  <td className="p-2.5 border font-bold text-emerald-900">Società a Responsabilità Limitata (S.r.l.)</td>
                  <td className="p-2.5 border font-mono">Artt. 2462–2483 c.c.</td>
                  <td className="p-2.5 border text-emerald-700 font-semibold">Perfetta (Personalità Giuridica): la società risponde solo con il proprio patrimonio.</td>
                  <td className="p-2.5 border">Capitale minimo <strong>10.000 €</strong> (o da <strong>1 €</strong> con accantonamento riserva legale fino a 10.000 €). Grande flessibilità statutaria.</td>
                </tr>
                <tr className="bg-emerald-50/40">
                  <td className="p-2.5 border font-bold text-emerald-900">S.r.l. Semplificata (S.r.l.s.)</td>
                  <td className="p-2.5 border font-mono">Art. 2463-bis c.c. (D.L. 1/2012)</td>
                  <td className="p-2.5 border text-emerald-700 font-semibold">Perfetta (Personalità Giuridica).</td>
                  <td className="p-2.5 border">Capitale tra <strong>1 € e 9.999,99 €</strong> (solo conferimenti in denaro). Atto costitutivo standard ministeriale inderogabile; esenzione onorari notarili.</td>
                </tr>
                <tr className="bg-emerald-50/40">
                  <td className="p-2.5 border font-bold text-emerald-900">Società per Azioni (S.p.A.)</td>
                  <td className="p-2.5 border font-mono">Artt. 2325–2451 c.c.</td>
                  <td className="p-2.5 border text-emerald-700 font-semibold">Perfetta (Personalità Giuridica).</td>
                  <td className="p-2.5 border">Capitale minimo <strong>50.000 €</strong> diviso in azioni. Indicata per grandi imprese e per l'accesso ai mercati regolamentati (Borsa).</td>
                </tr>
                <tr className="bg-emerald-50/40">
                  <td className="p-2.5 border font-bold text-emerald-900">Società in Accomandita per Azioni (S.a.p.a.)</td>
                  <td className="p-2.5 border font-mono">Artt. 2452–2461 c.c.</td>
                  <td className="p-2.5 border">Personalità giuridica, ma soci accomandatari (amministratori di diritto) illimitatamente responsabili; accomandanti limitati alle azioni.</td>
                  <td className="p-2.5 border">Capitale minimo <strong>50.000 €</strong>. Spesso usata come holding di famiglia per garantire stabilità al comando.</td>
                </tr>

                {/* Cooperative */}
                <tr className="bg-blue-50/40">
                  <td className="p-2.5 border font-bold text-blue-900">Società Cooperative (Sociali, Produzione/Lavoro, Consumo, Credito)</td>
                  <td className="p-2.5 border font-mono">Artt. 2511–2548 c.c. & Art. 45 Cost.</td>
                  <td className="p-2.5 border text-emerald-700 font-semibold">Perfetta (applicano regole S.r.l. o S.p.A.).</td>
                  <td className="p-2.5 border"><strong>Scopo mutualistico</strong> (non lucrativo puro): fornire beni, servizi o occasioni di lavoro ai soci a condizioni più vantaggiose del mercato. Principio <em>«una testa, un voto»</em>.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. LA STARTUP INNOVATIVA: NORMATIVA E REQUISITI */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            3. La Startup Innovativa (D.L. 179/2012 e Legge 193/2024)
          </h2>
          <p className="text-sm leading-relaxed">
            Introdotta con il <strong>Decreto Crescita 2.0 (D.L. 179/2012, art. 25)</strong> e aggiornata dalla <strong>Legge sulla Concorrenza 2024 (L. 193/2024)</strong>, la Startup Innovativa non è una nuova forma societaria, bensì uno <strong>status giuridico speciale</strong> (con iscrizione nella sezione speciale del Registro delle Imprese) riservato alle società di capitali (anche cooperative) ad alto valore tecnologico.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            {/* Requisiti Cumulativi */}
            <div className="p-4 border rounded-lg bg-indigo-50 border-indigo-200 space-y-2">
              <h3 className="font-bold text-indigo-900 text-sm">A. Requisiti Cumulativi (tutti obbligatori)</h3>
              <ul className="list-disc list-inside space-y-1.5 text-gray-800">
                <li><strong>Forma giuridica:</strong> Società di capitali (S.r.l., S.r.l.s., S.p.A., S.a.p.a.) o cooperativa con sede in Italia (o in Stato UE/SEE con sede produttiva/filiale in Italia).</li>
                <li><strong>Non quotazione:</strong> Le azioni o quote non devono essere quotate su un mercato regolamentato.</li>
                <li><strong>Costituzione recente:</strong> Costituita da non più di <strong>60 mesi (5 anni)</strong> (estendibili fino a 9 anni solo per scaleup con specifici obiettivi di crescita e R&S previsti dalla L. 193/2024).</li>
                <li><strong>Dimensione:</strong> A partire dal 2° anno, valore della produzione annua non superiore a <strong>5 milioni di euro</strong> e qualifica di Micro, Piccola o Media Impresa (PMI).</li>
                <li><strong>Divieto di distribuzione utili:</strong> Non distribuisce e non ha distribuito utili.</li>
                <li><strong>Oggetto sociale esclusivo o prevalente:</strong> Sviluppo, produzione e commercializzazione di <strong>prodotti o servizi innovativi ad alto valore tecnologico</strong> (non mera attività di agenzia o consulenza).</li>
                <li><strong>Continuità aziendale:</strong> Non costituita da fusione, scissione o cessione di azienda/ramo d'azienda.</li>
              </ul>
            </div>

            {/* Requisiti Alternativi + Agevolazioni */}
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-amber-50 border-amber-200 space-y-2">
                <h3 className="font-bold text-amber-900 text-sm">B. Requisiti Alternativi di Innovazione (almeno 1 su 3)</h3>
                <ol className="list-decimal list-inside space-y-1.5 text-gray-800">
                  <li><strong>Spese in R&S:</strong> Almeno il <strong>15%</strong> del maggiore valore tra costo e valore totale della produzione è destinato a Ricerca e Sviluppo.</li>
                  <li><strong>Team qualificato:</strong> Almeno <strong>1/3</strong> della forza lavoro composto da dottorandi, dottori di ricerca o ricercatori, oppure almeno <strong>2/3</strong> in possesso di laurea magistrale.</li>
                  <li><strong>Proprietà Intellettuale:</strong> Titolarità, deposito o licenza di almeno una <strong>privativa industriale (brevetto)</strong> o di un <strong>software originario registrato presso la SIAE</strong>.</li>
                </ol>
              </div>

              <div className="p-4 border rounded-lg bg-emerald-50 border-emerald-200 space-y-2">
                <h3 className="font-bold text-emerald-900 text-sm">C. Principali Deroghe e Agevolazioni</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-800">
                  <li><strong>Esonero diritti camerali e imposte di bollo</strong> per iscrizione al Registro Imprese.</li>
                  <li><strong>Deroghe al diritto societario:</strong> Possibilità di creare categorie di quote senza diritto di voto e piani di <em>work for equity</em> (remunerazione tramite quote/stock option esenti da tassazione).</li>
                  <li><strong>Proroga copertura perdite:</strong> Rinvio di un esercizio aggiuntivo per il ripianamento delle perdite oltre il terzo del capitale.</li>
                  <li><strong>Incentivi fiscali agli investitori:</strong> Detrazione IRPEF / deduzione IRES del <strong>30%</strong> (fino al <strong>65%</strong> in regime <em>de minimis</em> per investimenti in startup nei primi 3 anni).</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-900 text-white rounded-xl text-xs space-y-1.5">
            <span className="text-amber-400 font-bold uppercase tracking-wider block">📄 Il Business Plan: Strumento Chiave</span>
            <p className="text-gray-300 leading-relaxed">
              Per presentare il progetto a banche, investitori o bandi pubblici serve un <strong>Business Plan</strong> strutturato in due parti: <strong>parte descrittiva</strong> (Executive Summary, analisi di mercato/competitor, modello di business, team, piano marketing) e <strong>parte economico-finanziaria</strong> (piano degli investimenti, conto economico previsionale a 3-5 anni, punto di pareggio / Break-Even Point e fabbisogno finanziario).
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. FINANZA AGEVOLATA: FONDI DI GARANZIA, BANDI NAZIONALI E CROWDFUNDING */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            4. Strumenti di Finanziamento: Fondi di Garanzia, Incentivi e Crowdfunding
          </h2>
          <p className="text-sm leading-relaxed">
            Oltre all'autofinanziamento (<strong>Bootstrapping</strong> — utilizzo di risparmi personali e flussi di cassa generati dall'attività, che mantiene il 100% del controllo ma limita la velocità di crescita), una startup dispone di canali dedicati pubblici e privati:
          </p>

          {/* Fondi di Garanzia e Bandi Pubblici */}
          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 border rounded-lg bg-blue-50 border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-900 text-sm">🇮🇹 Fondi di Garanzia e Bandi Nazionali (Invitalia / MIMIT)</h3>
              <ul className="space-y-2 text-gray-800">
                <li>
                  <strong>Fondo di Garanzia per le PMI (Mediocredito Centrale):</strong> Le Startup Innovative hanno accesso prioritario, automatico e gratuito a una garanzia pubblica fino all'<strong>80%</strong> dell'importo del finanziamento bancario (fino a 2,5 milioni di euro), senza valutazione economico-finanziaria storica da parte del Fondo.
                </li>
                <li>
                  <strong>Smart&Start Italia (Invitalia):</strong> Principale incentivo nazionale per startup innovative. Finanziamento a <strong>tasso zero</strong> (senza garanzie) per progetti tra 100.000 € e 1,5 milioni €, a copertura dell'80% delle spese (elevabile al <strong>90%</strong> per startup composte interamente da donne o giovani under 35, o con almeno un dottore di ricerca). Per le regioni del Sud (Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia, Sardegna, Sicilia) include una quota a <strong>fondo perduto del 30%</strong>.
                </li>
                <li>
                  <strong>Resto al Sud 2.0 (D.L. Coesione):</strong> Misura gestita da Invitalia rivolta ai giovani <strong>under 35</strong> disoccupati/inoccupati nelle regioni del Mezzogiorno e del Centro Italia (aree sisma) per l'avvio di nuove attività imprenditoriali e libero-professionali, tramite voucher a fondo perduto fino a 40.000-50.000 € e contributi in conto capitale fino al 75%.
                </li>
                <li>
                  <strong>ON — Oltre Nuove Imprese a Tasso Zero:</strong> Agevolazione Invitalia per giovani (18-35 anni) e donne di ogni età su tutto il territorio nazionale: mix di finanziamento a tasso zero e contributo a fondo perduto fino al 90% delle spese ammissibili.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              {/* Fondi Europei */}
              <div className="p-4 border rounded-lg bg-indigo-50 border-indigo-200 space-y-2">
                <h3 className="font-bold text-indigo-900 text-sm">🇪🇺 Fondi e Strumenti Europei</h3>
                <ul className="space-y-2 text-gray-800">
                  <li>
                    <strong>EIC Accelerator (Horizon Europe):</strong> Programma dell'European Innovation Council per startup e PMI <em>deep-tech</em> ad altissimo potenziale di scalabilità: combina sovvenzioni a fondo perduto fino a <strong>2,5 milioni €</strong> con investimenti in equity tramite l'<em>EIC Fund</em> fino a 15 milioni €.
                  </li>
                  <li>
                    <strong>Programma InvestEU & FEI (Fondo Europeo per gli Investimenti):</strong> Mobilita garanzie europee attraverso intermediari finanziari e fondi di Venture Capital per facilitare l'accesso al credito di PMI innovative, transizione digitale e verde.
                  </li>
                  <li>
                    <strong>Fondi Strutturali (FESR — Fondi Regionali):</strong> Gestiti dalle singole Regioni (es. PR FESR Piemonte) per finanziare prototipazione, brevetti, digitalizzazione e internazionalizzazione.
                  </li>
                </ul>
              </div>

              {/* Crowdfunding */}
              <div className="p-4 border rounded-lg bg-purple-50 border-purple-200 space-y-2">
                <h3 className="font-bold text-purple-900 text-sm">🌐 Tipologie e Piattaforme di Crowdfunding</h3>
                <p className="text-gray-700">
                  Regolamentato a livello europeo dal <strong>Regolamento (UE) 2020/1503 (ECSP)</strong> vigilato da CONSOB e Banca d'Italia:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-800">
                  <li><strong>Equity Crowdfunding:</strong> Gli investitori acquistano quote societarie diventando soci. Piattaforme italiane principali: <em>Mamacrowd</em>, <em>CrowdFundMe</em>, <em>BacktoWork</em>, <em>Opstart</em>.</li>
                  <li><strong>Lending Crowdfunding:</strong> Prestito diretto tra privati/investitori e impresa con restituzione a tasso di interesse. Piattaforme: <em>October</em>, <em>BorsadelCredito</em>, <em>Ener2Crowd</em> (green).</li>
                  <li><strong>Reward & Donation Crowdfunding:</strong> Ricompensa non finanziaria (pre-ordine del prodotto) o donazione pura. Piattaforme: <em>Kickstarter</em>, <em>Indiegogo</em>, <em>Produzioni dal Basso</em>, <em>Eppela</em>.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. GLI INCUBATORI CERTIFICATI: FOCUS TORINO E ECOSISTEMA NAZIONALE */}
        {/* ========================================================================= */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            5. Gli Incubatori di Startup: Torino ed Ecosistema Italiano
          </h2>
          <p className="text-sm leading-relaxed">
            L'<strong>Incubatore Certificato</strong> (art. 25, comma 5, D.L. 179/2012) è una società di capitali iscritta nella sezione speciale del Registro delle Imprese che supporta la nascita e lo sviluppo di startup innovative offrendo spazi fisici attrezzati, mentorship, consulenza legale/fiscale e accesso a reti di investitori (Business Angels e Venture Capital).
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            {/* Focus Torino */}
            <div className="p-4 border-2 rounded-xl bg-blue-50/70 border-blue-300 space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-blue-950 text-sm">📍 Eccellenze a Torino e in Piemonte</h3>
                <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Focus Territoriale</span>
              </div>
              <ul className="space-y-2 text-gray-800">
                <li>
                  <strong>I3P — Incubatore del Politecnico di Torino:</strong> Uno dei principali incubatori universitari d'Europa (più volte premiato a livello mondiale da UBI Global). Supporta startup <em>deep-tech</em>, ICT, cleantech e ingegneristiche nate dalla ricerca universitaria e dall'imprenditoria indipendente.
                </li>
                <li>
                  <strong>2i3T — Incubatore dell'Università degli Studi di Torino:</strong> Specializzato nella valorizzazione dei risultati della ricerca accademica in ambito biotech, medtech, chimica, agroalimentare e scienze sociali.
                </li>
                <li>
                  <strong>OGR Tech (Officine Grandi Riparazioni):</strong> Hub internazionale dell'innovazione e della ricerca applicata nel cuore di Torino; ospita acceleratori internazionali (come Techstars), fondi di venture capital e corporate tech.
                </li>
                <li>
                  <strong>Environment Park (Envipark):</strong> Parco scientifico e tecnologico torinese dedicato all'innovazione ambientale, idrogeno, efficienza energetica ed economia circolare.
                </li>
                <li>
                  <strong>SocialFare | Centro per l'Innovazione Sociale:</strong> Primo centro in Italia dedicato all'<em>impact entrepreneurship</em> e alle startup a impatto sociale, con sede a Torino (Rinascimenti Sociali).
                </li>
              </ul>
            </div>

            {/* Resto d'Italia */}
            <div className="p-4 border rounded-xl bg-gray-50 border-gray-200 space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-900 text-sm">🇮🇹 Principali Poli e Incubatori in Italia</h3>
                <span className="bg-gray-200 text-gray-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Rete Nazionale</span>
              </div>
              <ul className="space-y-2 text-gray-800">
                <li>
                  <strong>PoliHub (Milano):</strong> Innovation Park & Startup Accelerator del Politecnico di Milano, punto di riferimento lombardo per il trasferimento tecnologico e l'accelerazione industriale.
                </li>
                <li>
                  <strong>H-FARM (Roncade, Treviso):</strong> Piattaforma d'innovazione che integra formazione, consulenza digitale e accelerazione di startup in un grande campus nel Veneto.
                </li>
                <li>
                  <strong>Nana Bianca (Firenze):</strong> Startup studio e incubatore focalizzato sul mondo digitale, web, fintech e intelligenza artificiale.
                </li>
                <li>
                  <strong>LUISS EnLabs / LVenture Group (Roma):</strong> Uno dei principali acceleratori e operatori di micro-seed venture capital del Centro-Sud Italia, situato presso la Stazione Termini.
                </li>
                <li>
                  <strong>Campania NewSteel (Napoli):</strong> Incubatore certificato promosso da Città della Scienza e Università Federico II di Napoli, polo chiave per l'innovazione nel Mezzogiorno.
                </li>
                <li>
                  <strong>Trentino Sviluppo / Polo Meccatronica (Rovereto):</strong> Hub di riferimento nel Nord-Est per industria 4.0, robotica e sostenibilità.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. ATTIVITÀ IN CLASSE: SPEED AUDIT STARTUP (30 MINUTI) */}
        {/* ========================================================================= */}
        <section className="space-y-4 border-t-4 border-amber-500 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Sfida in Aula • 30 Minuti
              </span>
              <h2 className="text-2xl font-bold text-indigo-900 mt-1">
                ⏱️ Speed Audit Startup: Casi Studio a Squadre
              </h2>
            </div>
            <span className="text-xs font-mono bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200">
              15 min Analisi • 90 sec Pitch
            </span>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            Ogni squadra analizza uno dei 4 casi reali qui sotto e definisce in 15 minuti: <strong>(1) Forma societaria</strong>, <strong>(2) Requisito alternativo Startup Innovativa</strong>, <strong>(3) Canale di finanziamento / bando</strong> e <strong>(4) Incubatore target</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            {[
              {
                id: 1,
                titolo: 'Caso 1 — "GreenWatt AI" (Torino)',
                badge: 'Cleantech & Software',
                scenario: 'Tre neolaureati del Politecnico di Torino hanno scritto un algoritmo per ridurre i consumi elettrici delle PMI. Budget iniziale: 2.000 €. Vogliono far entrare investitori Venture Capital entro 12 mesi.',
                soluzione: '• Società: S.r.l. ordinaria (capitale ridotto), evitando la S.r.l.s. il cui statuto rigido blocca quote speciali per gli investitori.\n• Requisito: Team qualificato (laureati magistrali) o software registrato SIAE.\n• Finanza: Smart&Start Italia (tasso zero fino al 90% per under 35) + Equity Crowdfunding.\n• Incubatore: I3P (Politecnico di Torino) o Environment Park.'
              },
              {
                id: 2,
                titolo: 'Caso 2 — "MediLink Sud" (Napoli)',
                badge: 'MedTech & Mezzogiorno',
                scenario: 'Due sviluppatrici (26 e 28 anni) creano una piattaforma web di telemedicina. Nessun brevetto né laurea magistrale, ma destineranno il 25% del budget in Ricerca e Sviluppo. Fabbisogno: 150.000 €.',
                soluzione: '• Società: S.r.l. (autonomia patrimoniale perfetta).\n• Requisito: Spese in R&S >= 15% (qui sono al 25%).\n• Finanza: Smart&Start Italia (copertura 90% team femminile/giovanile + 30% a fondo perduto per sede in Campania) o ON.\n• Incubatore: Campania NewSteel (Napoli).'
              },
              {
                id: 3,
                titolo: 'Caso 3 — "SocialCare Box" (Torino)',
                badge: 'Impact & Domotica',
                scenario: 'Quattro ragazzi lanciano un servizio digitale di teleassistenza per anziani soli con sensori low-cost. Obiettivo: impatto sociale e raccolta dei primi 30.000 € coinvolgendo direttamente i cittadini.',
                soluzione: '• Società: Società Cooperativa Sociale (ammessa tra le Startup Innovative dall\'art. 25 D.L. 179/2012) o S.r.l. a vocazione sociale.\n• Requisito: Registrazione software SIAE o spese R&S >= 15%.\n• Finanza: Reward/Donation Crowdfunding (Produzioni dal Basso, Eppela) con pre-ordine del kit.\n• Incubatore: SocialFare (Torino).'
              },
              {
                id: 4,
                titolo: 'Caso 4 — "AgroDrone" (Veneto)',
                badge: 'AgriTech & Credito',
                scenario: 'Due fratelli periti agrari hanno sviluppato un sistema di monitoraggio vigneti con droni e software registrato alla SIAE. Hanno 10.000 € propri e chiedono 80.000 € in banca senza ipotecare beni personali.',
                soluzione: '• Società: S.r.l. (da scartare la S.n.c. per la responsabilità illimitata dei soci).\n• Requisito: Titolarità di software originario registrato alla SIAE.\n• Finanza: Prestito bancario con Fondo di Garanzia PMI (garanzia pubblica gratuita all\'80%).\n• Incubatore: H-FARM (Roncade, Treviso).'
              }
            ].map((caso) => (
              <div key={caso.id} className="p-4 border rounded-xl bg-gray-50 border-gray-200 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-indigo-950 text-sm">{caso.titolo}</h3>
                    <span className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded">
                      {caso.badge}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{caso.scenario}</p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => toggleSoluzioneCaso(caso.id)}
                    className="w-full py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg transition-colors text-[11px] cursor-pointer"
                  >
                    {casoSoluzioneVisibile[caso.id] ? '🙈 Nascondi Soluzione Audit' : '🔍 Verifica Soluzione Audit'}
                  </button>

                  {casoSoluzioneVisibile[caso.id] && (
                    <pre className="bg-slate-900 text-emerald-400 p-3 rounded-lg font-mono text-[11px] whitespace-pre-wrap leading-relaxed border border-slate-700">
                      {caso.soluzione}
                    </pre>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}