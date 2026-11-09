export interface Domanda {
  id: number;
  domanda: string;
  opzioni: string[];
  rispostaCorretta: number;
  spiegazione: string;
}

export const datasetDomandeEconomia: Domanda[] = [
  // --- MODULO 1: MODELLI ECONOMICI & CONCETTI DI BASE ---
  {
    id: 1,
    domanda: "Qual è il principio cardine della Teoria del Valore-Lavoro nella scuola Economica Classica?",
    opzioni: [
      "Il valore di una merce dipende dall'utilità marginale percepita dal consumatore",
      "Il valore di una merce è determinato dalla quantità di lavoro socialmente necessario per produrla",
      "Il valore è dato dal prezzo di equilibrio sul mercato di concorrenza perfetta",
      "Il valore dipende esclusivamente dalla rarità delle materie prime impiegate"
    ],
    rispostaCorretta: 1,
    spiegazione: "Gli economisti classici (Smith, Ricardo, Marx) sostenevano che il valore di scambio di un bene fosse misurato dalla quantità di lavoro necessaria alla sua fabbricazione."
  },
  {
    id: 2,
    domanda: "Come spiega il Paradosso dell'Acqua e del Diamante la Scuola Neoclassica / Marginalista?",
    opzioni: [
      "Con il costo elevato di estrazione del diamante rispetto all'acqua",
      "Tramite l'intervento dello Stato che regola il valore delle risorse primarie",
      "Con il concetto di utilità marginale: l'acqua è abbondante quindi la sua utilità marginale crolla, mentre quella del diamante resta elevata",
      "Dimostrando che il diamante non possiede alcun valore d'uso reale"
    ],
    rispostaCorretta: 2,
    spiegazione: "Mentre l'utilità totale dell'acqua è immensa, la sua disponibilità rende l'utilità marginale (dell'ultimo bicchiere) quasi nulla, al contrario del diamante che è scarso."
  },
  {
    id: 3,
    domanda: "Cosa rappresenta il Vincolo di Bilancio per un consumatore?",
    opzioni: [
      "Il massimo profitto che un'azienda può conseguire al netto delle tasse",
      "L'insieme di tutti i panieri di beni che il consumatore può acquistare esaurendo il proprio reddito",
      "Il livello minimo di ricavo necessario per coprire i costi fissi aziendali",
      "La pendenza della curva di offerta aggregata nel lungo periodo"
    ],
    rispostaCorretta: 1,
    spiegazione: "L'equazione p1*q1 + p2*q2 = R esprime tutte le combinazioni di beni acquistabili dato il reddito R ed i prezzi di mercato."
  },
  {
    id: 4,
    domanda: "Qual è la differenza fondamentale tra Microeconomia e Macroeconomia?",
    opzioni: [
      "La microeconomia studia i software, la macroeconomia l'hardware",
      "La microeconomia si occupa delle scelte dei singoli agenti, la macroeconomia dei fenomeni aggregati nazionali (PIL, inflazione)",
      "La microeconomia riguarda l'outsourcing, la macroeconomia la produzione interna",
      "Non vi è alcuna differenza, sono sinonimi nati nel Monetarismo"
    ],
    rispostaCorretta: 1,
    spiegazione: "La microeconomia analizza singoli consumatori e imprese; la macroeconomia studia grandezze globali come PIL, disoccupazione e politiche monetarie."
  },
  {
    id: 5,
    domanda: "Un bene è definito 'economico' secondo il modello neoclassico se possiede quale caratteristica essenziale?",
    opzioni: [
      "Viene prodotto esclusivamente da aziende pubbliche",
      "È disponibile in quantità illimitata in natura",
      "È scarso, ovvero non disponibile in quantità sufficiente a soddisfare gratuitamente chiunque",
      "Ha un prezzo stabilito per legge dallo Stato"
    ],
    rispostaCorretta: 2,
    spiegazione: "La scarsità è la condizione necessaria affinché un bene acquisisca valore economico ed imponga scelte di allocazione razionale."
  },

  // --- MODULO 2 & 3: DOMANDA, OFFERTA E MERCATO ---
  {
    id: 6,
    domanda: "Perché la curva di domanda ha tipicamente pendenza negativa?",
    opzioni: [
      "Perché all'aumentare del prezzo i consumatori riducono la quantità acquistata per rispettare il vincolo di bilancio",
      "Perché i produttori aumentano l'offerta quando i prezzi scendono",
      "Perché i costi fissi diminuiscono all'aumentare della produzione",
      "Perché rappresenta mercati in situazione di monopolio naturale"
    ],
    rispostaCorretta: 0,
    spiegazione: "La legge della domanda stabilisce una relazione inversa tra prezzo e quantità domandata."
  },
  {
    id: 7,
    domanda: "Cosa provoca uno spostamento dell'INTERA curva di domanda verso destra?",
    opzioni: [
      "Una variazione del prezzo della merce stessa a parità di reddito",
      "Un aumento del reddito disponibile del consumatore o una variazione favorevole delle preferenze",
      "Un aumento dei costi variabili di produzione",
      "L'introduzione di una tassa sulla produzione"
    ],
    rispostaCorretta: 1,
    spiegazione: "Mentre la variazione del prezzo causa un movimento LUNGO la curva, fattori esterni come l'aumento del reddito traslano l'intera curva verso destra."
  },
  {
    id: 8,
    domanda: "Quali merci sono definite 'complementari'?",
    opzioni: [
      "Beni che soddisfano lo stesso identico bisogno (es. farmaco generico ed equivalente)",
      "Beni il cui consumo di uno implica contestualmente il consumo dell'altro (es. carburante e automobile)",
      "Beni il cui prezzo è fisso per legge",
      "Merci prive di up-front costs"
    ],
    rispostaCorretta: 1,
    spiegazione: "I beni complementari vengono consumati congiuntamente: l'aumento del prezzo di uno riduce la domanda anche dell'altro."
  },
  {
    id: 9,
    domanda: "Quale tra le seguenti NON è una condizione della Concorrenza Perfetta?",
    opzioni: [
      "Presenza di barriere all'entrata elevate per proteggere le aziende esistenti",
      "Molteplicità e piccola dimensione degli operatori (aziende price-taker)",
      "Perfetta omogeneità dei prodotti offerti",
      "Trasparenza e informazione perfetta sul mercato"
    ],
    rispostaCorretta: 0,
    spiegazione: "In concorrenza perfetta NON devono esistere barriere all'entrata o all'uscita; il mercato è liberamente accessibile."
  },
  {
    id: 10,
    domanda: "Cosa accade nel mercato se il prezzo corrente è SUPERIORE al Prezzo di Equilibrio (P*)?",
    opzioni: [
      "Si ha un eccesso di domanda ed i prezzi salgono ulteriormente",
      "Si verifica un eccesso di offerta: i produttori abbassano i prezzi per smaltire l'invenduto",
      "Il mercato entra in lock-in tecnologico",
      "La curva di domanda diventa perfettamente orizzontale"
    ],
    rispostaCorretta: 1,
    spiegazione: "A prezzi superiori a P*, la quantità offerta supera quella domandata (eccesso di offerta), spingendo le imprese a ridurre i prezzi fino a P*."
  },
  {
    id: 11,
    domanda: "Nel Modello della Ragnatela (Cobweb Model), quando il sistema oscilla CONVERGENDO verso l'equilibrio?",
    opzioni: [
      "Quando l'offerta è più rigida della domanda (minore pendenza dell'offerta)",
      "Quando la domanda è perfettamente rigida",
      "Quando l'offerta è più elastica della domanda producendo instabilità",
      "Quando l'inflazione è pari a zero"
    ],
    rispostaCorretta: 0,
    spiegazione: "La ragnatela è stabile e convergente se l'offerta ha una reattività/pendenza inferiore rispetto alla curva di domanda."
  },

  // --- MODULO 4: COSTI E MASSIMIZZAZIONE DEL PROFITTO ---
  {
    id: 12,
    domanda: "Come è definita la funzione di profitto P(q) di un'azienda?",
    opzioni: [
      "Profitto = Costi Fissi - Costi Variabili",
      "Profitto = Ricavi Totali - Costi Totali : P(q) = R(q) - C(q)",
      "Profitto = Prezzo / Quantità Prodotta",
      "Profitto = Ricavo Marginale + Costo Marginale"
    ],
    rispostaCorretta: 1,
    spiegazione: "Il profitto economico è la differenza algebrica tra l'incasso totale dei ricavi (p * q) ed i costi complessivi di produzione."
  },
  {
    id: 13,
    domanda: "Cosa distingue i Costi Fissi (CF) dai Costi Variabili (CV)?",
    opzioni: [
      "I costi fissi dipendono dalla quantità prodotta, i variabili no",
      "I costi fissi non variano al variare dei volumi di produzione e restano attivi anche a produzione nulla",
      "I costi fissi riguardano solo l'outsourcing",
      "I costi variabili sono sempre pari a zero nelle merci informazione"
    ],
    rispostaCorretta: 1,
    spiegazione: "I CF (es. affitto locali, licenze annuali) sono sostenuti indipendentemente dal volume q prodotta."
  },
  {
    id: 14,
    domanda: "Qual è la regola aurea per la massimizzazione del profitto aziendale?",
    opzioni: [
      "Uguagliare il Ricavo Marginale al Costo Marginale (R_marg = C_marg)",
      "Azzerare i Costi Fissi aziendali",
      "Massimizzare esclusivamente la quantità prodotta q al valore massimo",
      "Mantenere il prezzo di vendita inferiore al costo medio"
    ],
    rispostaCorretta: 0,
    spiegazione: "Matematicamente, la derivata prima del profitto dP/dq = 0 implica dR/dq = dC/dq, ovvero Ricavo Marginale = Costo Marginale."
  },
  {
    id: 15,
    domanda: "Se per un'azienda il Ricavo Marginale è MAGGIORE del Costo Marginale (R_marg > C_marg), quale decisione operativa deve prendere?",
    opzioni: [
      "Ridurre la produzione",
      "Aumentare la produzione poiché ogni unità aggiuntiva incrementa il profitto totale",
      "Cessare immediatamente l'attività",
      "Esternalizzare l'intero ciclo produttivo"
    ],
    rispostaCorretta: 1,
    spiegazione: "Finché la vendita di un'unità in più genera più ricavi che costi aggiuntivi, conviene incrementare q."
  },
  {
    id: 16,
    domanda: "In regime di Concorrenza Perfetta, a cosa equivale il Ricavo Marginale (R_marg)?",
    opzioni: [
      "È sempre uguale al Prezzo unitario di mercato (R_marg = p)",
      "È pari alla somma dei Costi Fissi",
      "È uguale a zero per ogni livello di output",
      "Varia quadraticamente in base alla legge di Metcalfe"
    ],
    rispostaCorretta: 0,
    spiegazione: "Essendo l'impresa price-taker, il prezzo p è costante per qualsiasi quantità venduta, quindi ogni unità in più rende esattamente p."
  },

  // --- MODULO 5: INVESTIMENTI E MAKE OR BUY ---
  {
    id: 17,
    domanda: "Quando un investimento aziendale è da ritenersi economicamente conveniente tramite il criterio del Valore Attuale Netto (VAN)?",
    opzioni: [
      "Quando il VAN è uguale a zero",
      "Quando il VAN è maggiore di zero (VAN > 0)",
      "Quando il VAN è negativo ma l'azienda ha liquidità",
      "Quando il TIR è inferiore al tasso di rendimento minimo"
    ],
    rispostaCorretta: 1,
    spiegazione: "Un VAN > 0 indica che la somma attualizzata dei flussi di cassa futuri supera l'esborso dell'investimento iniziale."
  },
  {
    id: 18,
    domanda: "Che cos'è il Tasso Interno di Rendimento (TIR)?",
    opzioni: [
      "Il tasso d'interesse applicato dalle banche centrali per il prestito di moneta",
      "Il particolare tasso di sconto che azzera il Valore Attuale Netto (VAN = 0) dell'investimento",
      "La percentuale di sconto applicata nelle aste Google Ads",
      "Il rapporto tra costi fissi e costi variabili nell'outsourcing"
    ],
    rispostaCorretta: 1,
    spiegazione: "Il TIR è il saggio di attualizzazione che rende equivalente l'investimento iniziale ed i flussi futuri attualizzati."
  },
  {
    id: 19,
    domanda: "Nella scelta strategica tra Make or Buy, cosa indica il Break Even Point (Punto di Pareggio)?",
    opzioni: [
      "La quantità soglia di produzione per cui i costi totali interni (Make) uguagliano i costi totali di acquisto esterno (Buy)",
      "Il momento in cui l'azienda decide di fallire",
      "La quantità in cui l'utilità marginale del consumatore azzera i prezzi",
      "Il numero minimo di follower per monetizzare su YouTube"
    ],
    rispostaCorretta: 0,
    spiegazione: "q_BEP = (CF_a - CF_p) / (CV_p - CV_a). Se la domanda supera q_BEP conviene il Make; se è inferiore conviene il Buy."
  },
  {
    id: 20,
    domanda: "Qual è il principale vantaggio economico della pratica dell'Outsourcing (esternalizzazione)?",
    opzioni: [
      "Trasformare costi fissi di struttura in costi variabili legati all'effettivo consumo",
      "Eliminare completamente la necessità di marketing",
      "Garantire una posizione di monopolio sul mercato",
      "Aumentare gli up-front costs per spaventare i concorrenti"
    ],
    rispostaCorretta: 0,
    spiegazione: "Esternalizzare attività non core permette di abbattere i costi fissi strutturali pagando il fornitore solo per i volumi richiesti."
  },

  // --- MODULO 6: ECONOMIA DELLE MERCI INFORMAZIONE ---
  {
    id: 21,
    domanda: "Qual è la caratteristica fondamentale della struttura dei costi delle Merci Informazione?",
    opzioni: [
      "Elevatissimi costi marginali di riproduzione e costi fissi nulli",
      "Elevatissimi costi fissi iniziali di prima realizzazione (up-front costs) e costi marginali di riproduzione quasi nulli (C_marg ≈ 0)",
      "Costi fissi e variabili identici a quelli dei beni tradizionali petroliferi",
      "Assenza totale di qualsiasi tipologia di costo"
    ],
    rispostaCorretta: 1,
    spiegazione: "Creare la prima copia di un software o film costa milioni (up-front), ma duplicare e distribuire le copie successive via rete costa quasi zero."
  },
  {
    id: 22,
    domanda: "Perché le Merci Informazione sono considerate 'Beni Esperienza' (Experience Goods)?",
    opzioni: [
      "Perché richiedono anni di esperienza lavorativa per essere programmate",
      "Perché il loro reale valore informativo può essere valutato dal consumatore solo dopo averne effettuato la fruizione/consumo",
      "Perché vengono vendute unicamente tramite aste fisiche",
      "Perché non scadono mai nel tempo"
    ],
    rispostaCorretta: 1,
    spiegazione: "Un utente non conosce il valore reale di un film, software o e-book finché non lo ha provato/utilizzato."
  },
  {
    id: 23,
    domanda: "Qual è la differenza tra le modalità di outsourcing IT 'Hosting' e 'Housing' (Colocation)?",
    opzioni: [
      "L'hosting riguarda i software grafici, l'housing le reti social",
      "Nell'Hosting si affitta lo spazio su server del fornitore; nell'Housing il cliente colloca i propri server fisici di proprietà nella webfarm del fornitore",
      "L'housing è gratuito, l'hosting è sempre a pagamento",
      "Non c'è differenza, sono due termini per indicare il Cloud SaaS"
    ],
    rispostaCorretta: 1,
    spiegazione: "Con l'housing l'azienda possiede la macchina fisica e ne affitta la connettività e lo spazio protetto in data center."
  },
  {
    id: 24,
    domanda: "Nel Cloud Computing, cosa identifica la sigla SaaS?",
    opzioni: [
      "Software as a Service: fruizione diretta di applicazioni software complete via web senza installazione locale",
      "Storage as a Service: la vendita di hard disk fisici per backup",
      "System as a Service: la progettazione di impianti elettrici aziendali",
      "Security as a Service: il servizio di vigilanza notturna degli uffici"
    ],
    rispostaCorretta: 0,
    spiegazione: "SaaS offre l'uso di applicativi web (es. Microsoft 365, Google Workspace) direttamente da browser."
  },

  // --- MODULO 7: SWITCHING COSTS, LOCK-IN ED ECONOMIE DI RETE ---
  {
    id: 25,
    domanda: "Cosa si intende per 'Switching Costs' nell'ambito ICT?",
    opzioni: [
      "I costi di acquisto di uno switch di rete aziendale",
      "L'insieme dei costi (ricerca, contratti, formazione, beni complementari) che un utente sostiene per passare da una tecnologia all'altra",
      "Il costo dell'energia elettrica per tenere acceso il server",
      "Le provvigioni versate a Google per gli annunci sponsorizzati"
    ],
    rispostaCorretta: 1,
    spiegazione: "Cambiare sistema tecnologico comporta costi di apprendimento, incompatibilità hardware, penali e migrazione dati."
  },
  {
    id: 26,
    domanda: "Quando un cliente/azienda si trova in uno stato di 'Lock-in'?",
    opzioni: [
      "Quando viene bloccato dal firewall aziendale",
      "Quando gli switching costs per cambiare tecnologia sono così elevati da rendere sconveniente l'abbandono del vecchio fornitore/standard",
      "Quando la sua connessione internet scende sotto i 10 Mbps",
      "Quando acquista un bene in concorrenza perfetta"
    ],
    rispostaCorretta: 1,
    spiegazione: "Il lock-in è la prigionia tecnologica generata da costi di transizione (switching costs) proibitivi."
  },
  {
    id: 27,
    domanda: "Cosa afferma la Legge di Metcalfe riguardo alle Economie di Rete?",
    opzioni: [
      "Il valore di una rete con n utenti cresce in modo proporzionale al quadrato del numero degli utenti: Valore ≈ n² - n",
      "Il costo dei server raddoppia ogni 18 mesi",
      "La quantità domandata è sempre pari alla quantità offerta",
      "Il valore di una rete diminuisce all'aumentare dei partecipanti per via del traffico"
    ],
    rispostaCorretta: 0,
    spiegazione: "Le esternalità di rete positive implicano che più utenti usano una rete, più essa acquisisce valore per ciascun partecipante (proporzionale a n²)."
  },
  {
    id: 28,
    domanda: "Nel fenomeno di inefficienza tecnologica, cosa rappresenta l'Excess Inertia (Farrell & Saloner)?",
    opzioni: [
      "La fretta eccessiva nell'adottare nuove tecnologie immature",
      "La mancata adozione di uno standard tecnologico superiore per paura che il resto del mercato non segua la transizione",
      "La lentezza nella velocità di calcolo dei processori",
      "Il calo dei prezzi delle memorie RAM nel tempo"
    ],
    rispostaCorretta: 1,
    spiegazione: "Gli operatori rimangono vincolati a vecchie tecnologie inferiori per timore di rimanere isolati se gli altri non migrano."
  },
  {
    id: 29,
    domanda: "In cosa consiste la strategia di discriminazione dei prezzi denominata 'Versioning'?",
    opzioni: [
      "Vendere un unico prodotto allo stesso prezzo a tutti i clienti",
      "Offrire differenti versioni dello stesso software (es. Standard, Pro, Enterprise) lasciando che gli utenti si auto-selezionino",
      "Regalare sempre la prima versione del programma",
      "Aumentare i prezzi ogni volta che si corregge un bug"
    ],
    rispostaCorretta: 1,
    spiegazione: "Il versioning segmenta il mercato offrendo vari livelli di funzionalità per catturare la diversa disponibilità a pagare degli utenti."
  },
  {
    id: 30,
    domanda: "La vendita abbinata 'Bundling' di merci informazione ha lo scopo di:",
    opzioni: [
      "Vendete più prodotti insieme a un prezzo unico per ridurre la dispersione delle preferenze dei consumatori",
      "Evitare di pagare le tasse sulle vendite online",
      "Aumentare i costi marginali di distribuzione",
      "Vendere solo prodotti fisici da magazzino"
    ],
    rispostaCorretta: 0,
    spiegazione: "Il bundling (es. pacchetto Office) unisce più software in una suite a un prezzo inferiore alla somma dei singoli componenti."
  },

  // --- MODULO 8: MARKETING DIGITALE, SEO ED ADVERTISING ---
  {
    id: 31,
    domanda: "Come si è evoluto il Marketing dal modello tradizionale a quello digitale?",
    opzioni: [
      "Dalle 4C tradizionali alle 4P moderne",
      "Dal modello delle 4P (Product, Price, Place, Promotion) incentrato sull'offerta al modello delle 4C (Consumer, Cost, Communication, Convenience) incentrato sul cliente",
      "Dall'uso delle e-mail all'uso della carta stampata",
      "Abbandonando completamente la comunicazione web"
    ],
    rispostaCorretta: 1,
    spiegazione: "Il marketing moderno sposta il focus dal prodotto alle esigenze, costi e comodità d'esperienza del consumatore."
  },
  {
    id: 32,
    domanda: "Cosa si intende per SERP nei motori di ricerca come Google?",
    opzioni: [
      "Search Engine Results Page: la pagina contenente i risultati della ricerca (organici e sponsorizzati)",
      "System Error Redirection Protocol",
      "Software Enterprise Resource Planning",
      "Single Emission Revenue Price"
    ],
    rispostaCorretta: 0,
    spiegazione: "La SERP è la schermata visualizzata dagli utenti dopo aver effettuato una query su un motore di ricerca."
  },
  {
    id: 33,
    domanda: "Qual è la differenza fondamentale tra posizionamento SEO e annunci Google Ads?",
    opzioni: [
      "Google Ads è gratuito, la SEO si paga sempre con tariffa fissa",
      "La SEO ottimizza la presenza nei risultati organici non a pagamento via algoritmo; Google Ads gestisce annunci sponsorizzati a pagamento via asta (PPC)",
      "La SEO funziona solo su smartphone, Google Ads solo su PC",
      "Non c'è alcuna differenza"
    ],
    rispostaCorretta: 1,
    spiegazione: "La SEO agisce sulla pertinenza e qualità naturale dei contenuti (organici); Ads è il circuito ad aste Pay-Per-Click."
  },
  {
    id: 34,
    domanda: "Come funziona il modello pubblicitario Pay Per Click (PPC)?",
    opzioni: [
      "L'inserzionista paga una quota fissa mensile a prescindere dalle visite",
      "L'inserzionista paga la piattaforma pubblicitaria solo quando un utente clicca effettivamente sul suo annuncio",
      "L'utente viene pagato ogni volta che vede una pubblicità",
      "Il pagamento avviene solo in caso di acquisto in contanti"
    ],
    rispostaCorretta: 1,
    spiegazione: "Con il PPC (es. Google Ads) la pubblicazione dell'annuncio è gratuita; si paga solo per i clic ricevuti."
  },
  {
    id: 35,
    domanda: "Che cos'è Google AdSense?",
    opzioni: [
      "Il motore di ricerca interno per i siti di e-commerce",
      "Un programma per publisher (gestori di siti web) che consente di ospitare annunci Google sul proprio sito guadagnando sui clic/visualizzazioni",
      "Un antivirus cloud per i server web",
      "L'algoritmo di calcolo del vincolo di bilancio"
    ],
    rispostaCorretta: 1,
    spiegazione: "AdSense permette ai proprietari di siti di monetizzare i propri spazi pubblicitari inserendo i banner del circuito Google."
  },
  {
    id: 36,
    domanda: "Nelle metriche di Social Media Advertising, cosa indica il PPA (Pay Per Action / Conversione)?",
    opzioni: [
      "Il pagamento effettuato dall'inserzionista solo quando l'utente compie un'azione specifica (es. iscrizione, download, acquisto)",
      "Il costo dell'abbonamento alla connessione fibra",
      "Il tempo di permanenza dell'utente sulla pagina di registrazione",
      "Il tasso di svalutazione annuale dell'hardware"
    ],
    rispostaCorretta: 0,
    spiegazione: "Il PPA commisura il costo pubblicitario al raggiungimento di un obiettivo di conversione concreto per l'azienda."
  },

  // --- APPROFONDIMENTI ED ESERCIZI DA DISPENSA ---
  {
    id: 37,
    domanda: "Nei calcoli del Risolutore di Excel per la programmazione lineare aziendale, quali celle rappresentano le 'incognite' da determinare?",
    opzioni: [
      "Le celle del profitto totale obiettivo",
      "Le Celle Variabili che contengono le quantità da produrre per ciascun modello",
      "Le celle dei vincoli fisici sulle ore di manodopera",
      "Le celle contenenti le formule dei costi fissi"
    ],
    rispostaCorretta: 1,
    spiegazione: "Il Risolutore modifica il valore delle Celle Variabili (quantità prodotte q) per massimizzare la Cella Obiettivo rispettando i vincoli."
  },
  {
    id: 38,
    domanda: "Nel modello di mercato con imposte, la quota dell'imposta indiretta che grava sul consumatore è maggiore quando:",
    opzioni: [
      "La domanda è rigida rispetto all'offerta",
      "La domanda è perfettamente elastica",
      "L'offerta è infinitamente rigida",
      "Il mercato è in monopolio assoluto"
    ],
    rispostaCorretta: 0,
    spiegazione: "Quando i consumatori hanno una domanda rigida (beni indispensabili), i produttori possono traslare l'intero ammontare dell'imposta sul prezzo finale."
  },
  {
    id: 39,
    domanda: "Nel caso aziendale dell'Airbus A380 citato nella dispensa, perché Boeing rinunciò a produrre un aereo concorrente dello stesso segmento?",
    opzioni: [
      "Perché mancano i brevetti sul motore a reazione",
      "Perché il Break Even Point (400 aerei) per coprire l'investimento di 18 miliardi di $ non consentiva la sopravvivenza economica di due produttori sul mercato",
      "Perché le normative europee vietarono il volo dei Boeing",
      "Perché l'alluminio era diventato un bene privo di scarsità"
    ],
    rispostaCorretta: 1,
    spiegazione: "La dimensione del mercato globale non avrebbe permesso a due aziende di raggiungere ciascuna la quantità di equilibrio (BEP = 400 aerei)."
  },
  {
    id: 40,
    domanda: "Qual è il significato economico dell'indice NVTR (Network Value-to-Transaction Ratio) nelle criptovalute?",
    opzioni: [
      "Rapporto tra l'energia elettrica consumata ed il numero di blocchi minati",
      "Rapporto tra la Capitalizzazione complessiva di mercato ed il Valore giornaliero delle transazioni effettuate",
      "La percentuale di utenti attivi sui social network aziendali",
      "Il tempo di recupero del capitale investito in server GPU"
    ],
    rispostaCorretta: 1,
    spiegazione: "NVTR valuta se una rete blockchain è sovra/sottovalutata confrontando il valore di mercato col volume transato reale."
  },
  {
    id: 41,
    domanda: "Che cosa misura la 'pendenza' della retta del vincolo di bilancio sul piano cartesiano?",
    opzioni: [
      "Il prezzo relativo tra i due beni (-p1/p2)",
      "La somma totale dei costi fissi dell'azienda",
      "Il valore del PIL nazionale",
      "Il numero di utenti connessi in rete"
    ],
    rispostaCorretta: 0,
    spiegazione: "Il coefficiente angolare del segmento di bilancio indica il rapporto tra i prezzi dei due beni, ossia il saggio marginale di sostituzione di mercato."
  },
  {
    id: 42,
    domanda: "Una diminuzione dell'Offerta aggregata (traslazione della curva a sinistra) a parità di domanda determina:",
    opzioni: [
      "Un aumento del Prezzo di equilibrio (P*) ed una riduzione della Quantità di equilibrio (Q*)",
      "Una riduzione sia del prezzo che della quantità",
      "Un aumento della quantità ed una riduzione del prezzo",
      "L'azzeramento di tutti i costi variabili"
    ],
    rispostaCorretta: 0,
    spiegazione: "La scarsità dell'offerta spinge i prezzi al rialzo, contraendo la quantità scambiata al nuovo punto di equilibrio."
  },
  {
    id: 43,
    domanda: "Quale tra le seguenti spese aziendali rientra nella categoria dei 'Costi Indiretti'?",
    opzioni: [
      "La materia prima utilizzata esclusivamente per il prodotto A",
      "L'affitto dell'intero capannone industriale in cui lavorano più reparti produttivi",
      "La provvigione del venditore sul singolo bene venduto",
      "L'imballaggio specifico del prodotto B"
    ],
    rispostaCorretta: 1,
    spiegazione: "I costi indiretti sono comuni a più prodotti e richiedono criteri formali di ripartizione tra vari centri di costo."
  },
  {
    id: 44,
    domanda: "Nel calcolo del tempo di recupero (Payback Period) di un investimento, qual è l'obiettivo principale?",
    opzioni: [
      "Individuare il numero di anni necessari affinché i flussi di cassa cumulati coprano l'esborso iniziale",
      "Calcolare l'ammontare delle tasse sui profitti futuri",
      "Determinare la velocità del processore del server",
      "Azzerare l'utilità marginale del cliente"
    ],
    rispostaCorretta: 0,
    spiegazione: "Il Payback Period misura il tempo necessario ad azzerare il saldo finanziario negativo dell'investimento."
  },
  {
    id: 45,
    domanda: "Nel modello di monetizzazione su YouTube, cosa esprime la metrica CPM?",
    opzioni: [
      "Costo Per Mille: la remunerazione pubblicitaria corrisposta ogni 1.000 visualizzazioni (impression) dell'annuncio",
      "Costo Per Minuto di video registrato",
      "Codice di Protezione della Memoria RAM",
      "Controllo di Parità Modulo 2"
    ],
    rispostaCorretta: 0,
    spiegazione: "Il CPM indica il valore economico riconosciuto per ogni blocco di 1.000 impression pubblicitarie erogate."
  },
  {
    id: 46,
    domanda: "Cosa descrive il fenomeno dell'Excess Momentum nella transizione tra tecnologie?",
    opzioni: [
      "Gli operatori abbandonano affrettatamente una vecchia tecnologia per adoperarne una nuova senza reali benefici netti, per paura di rimanere esclusi",
      "La lentezza nella diffusione delle reti fibra ottica",
      "Il calo dell'inflazione nei mercati di concorrenza perfetta",
      "La stabilità del prezzo di equilibrio nel lungo periodo"
    ],
    rispostaCorretta: 0,
    spiegazione: "L'excess momentum è la corsa precipitosa ad adottare nuove mode tecnologiche spinti dal timore del tagliati fuori (FOMO)."
  },
  {
    id: 47,
    domanda: "Nelle funzioni commerciali web, cosa contraddistingue il modello IaaS nel Cloud Computing?",
    opzioni: [
      "Infrastructure as a Service: fornitura via rete di risorse hardware grezze (macchine virtuali, storage, rete) gestite autonomamente dal cliente",
      "Installazione fisica di cavi in rame negli uffici",
      "La vendita di licenze cartacee di software contabili",
      "L'erogazione di corsi di formazione al personale"
    ],
    rispostaCorretta: 0,
    spiegazione: "IaaS fornisce l'infrastruttura sistemistica di base lasciando al cliente l'installazione del SO e degli applicativi."
  },
  {
    id: 48,
    domanda: "Se un bene presenta una Domanda Elastica (bassa pendenza della curva), un piccolo AUMENTO del prezzo provoca:",
    opzioni: [
      "Una forte riduzione della quantità domandata ed un calo del ricavo totale per il venditore",
      "Un aumento della quantità domandata dal mercato",
      "Nessuna variazione nei volumi di vendita",
      "L'azzeramento dei costi fissi aziendali"
    ],
    rispostaCorretta: 0,
    spiegazione: "Con domanda elastica, i consumatori reagiscono con forza ai rincari sostituendo il bene o rinunciandovi."
  },
  {
    id: 49,
    domanda: "Nei mercati di beni digitali, a cosa equivale teoricamente il Costo Marginale di riproduzione per l'unità n+1?",
    opzioni: [
      "È prossimo a zero (C_marg ≈ 0)",
      "È uguale agli up-front costi iniziali",
      "È sempre pari al 50% del prezzo di vendita",
      "Cresce in modo esponenziale secondo la legge di Metcalfe"
    ],
    rispostaCorretta: 0,
    spiegazione: "Duplicare un file o un software da server non comporta costi materiali di fabbricazione apprezzabili."
  },
  {
    id: 50,
    domanda: "Qual è la condizione finale di Equilibrio Oggettivo nel mercato neoclassico?",
    opzioni: [
      "Nessun agente ha motivo di modificare la propria scelta e tutte le decisioni individuali sono tra loro compatibili",
      "Tutte le aziende del mercato falliscono per mancanza di ricavi",
      "Lo Stato stabilisce d'ufficio i quantitativi di vendita",
      "Il prezzo di ogni merce diviene pari a zero"
    ],
    rispostaCorretta: 0,
    spiegazione: "In equilibrio oggettivo l'intersezione di domanda ed offerta rende stabili e concordi le decisioni di compratori e venditori."
  }
];