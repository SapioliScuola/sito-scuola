export interface EsercizioCodifica {
  id: number;
  categoria: 'teoria' | 'hamming' | 'parita-crc' | 'codici-civili';
  titolo: string;
  consegna: string;
  domandeGuida?: string[];
  opzioni?: string[];
  rispostaCorretta?: string;
  svolgimentoDettagliato: string;
}

export const datasetEserciziCodifiche: EsercizioCodifica[] = [
  // --- SEZIONE 1: TEORIA E CODIFICHE PESATE ---
  {
    id: 1,
    categoria: 'teoria',
    titolo: 'Esercizio 1.1: Caratteristiche dei Codici a Lunghezza Fissa',
    consegna: 'Quale tra i seguenti codici ha una lunghezza fissa stabilita dallo standard?',
    opzioni: [
      'a. Il codice fiscale (16 caratteri alfanumerici)',
      'b. Il codice ASCII standard (7 bit)',
      'c. La Partita IVA (11 cifre numeriche)',
      'd. Tutte le risposte precedenti sono corrette'
    ],
    rispostaCorretta: 'd. Tutte le risposte precedenti sono corrette',
    svolgimentoDettagliato: 'I codici a lunghezza fissa mantengono sempre il medesimo numero di simboli o bit: il Codice Fiscale (16 caratteri), l\'ASCII standard (7 bit per 128 caratteri) e la Partita IVA (11 cifre).'
  },
  {
    id: 2,
    categoria: 'teoria',
    titolo: 'Esercizio 1.2: Decodifica BCD 8421',
    consegna: 'A quale numero decimale corrisponde la codifica BCD (8421) 00011000?',
    domandeGuida: [
      'Separa la stringa a 8 bit in due quartetti di 4 bit.',
      'Converti ciascun quartetto (0001 e 1000) nel rispettivo valore decimale.'
    ],
    svolgimentoDettagliato: '1. Primo quartetto (0001) = 1\n2. Secondo quartetto (1000) = 8\nRisultato: Il valore decimale è 18.'
  },
  {
    id: 3,
    categoria: 'teoria',
    titolo: 'Esercizio 1.3: Decodifica Codice Aiken (2421)',
    consegna: 'A quale numero decimale corrisponde la codifica Aiken (pesi 2, 4, 2, 1) 00101100?',
    domandeGuida: [
      'Separa i 2 nibble: 0010 e 1100.',
      'Applica i pesi (2, 4, 2, 1) ai bit a 1 di ciascun nibble.'
    ],
    svolgimentoDettagliato: '1. Primo nibble 0010: bit a 1 in 3ª posizione (peso 2) → Cifra 2.\n2. Secondo nibble 1100: bit a 1 in 1ª e 2ª posizione (pesi 2 e 4) → 2 + 4 = 6.\nRisultato: Il numero decimale è 26.'
  },
  {
    id: 4,
    categoria: 'teoria',
    titolo: 'Esercizio 1.4: Decodifica Codice 2 su 5 (74210)',
    consegna: 'A quale cifra corrisponde la sequenza 10001 nel codice 2 su 5 con pesi 7, 4, 2, 1, 0?',
    svolgimentoDettagliato: 'La sequenza presenta i bit a 1 nella 1ª posizione (peso 7) e nella 5ª posizione (peso 0). Somma dei pesi: 7 + 0 = 7. Il valore decimale è 7.'
  },
  {
    id: 5,
    categoria: 'teoria',
    titolo: 'Esercizio 1.5: Conversione Decimale in BCD 8421',
    consegna: 'Convertire il numero decimale 495 in BCD 8421.',
    svolgimentoDettagliato: '1. Cifra 4 → 0100\n2. Cifra 9 → 1001\n3. Cifra 5 → 0101\nRisultato BCD: 0100 1001 0101.'
  },
  {
    id: 6,
    categoria: 'teoria',
    titolo: 'Esercizio 1.6: Proprietà dell\'Autocomplementarietà',
    consegna: 'Quale codice BCD pesato gode della proprietà di autocomplementarietà a 9?',
    opzioni: [
      'a. BCD 8421',
      'b. Codice Aiken (2421)',
      'c. Codice 2 su 5',
      'd. Codice EBCDIC'
    ],
    rispostaCorretta: 'b. Codice Aiken (2421)',
    svolgimentoDettagliato: 'Nel codice Aiken (2421), invertendo i singoli bit di una cifra (0↔1), si ottiene direttamente la codifica del suo complemento a 9.'
  },

  // --- SEZIONE 2: DISTANZA DI HAMMING & PARITÀ ---
  {
    id: 7,
    categoria: 'hamming',
    titolo: 'Esercizio 2.1: Calcolo Distanza di Hamming tra due Stringhe',
    consegna: 'Calcolare la distanza di Hamming tra le due parole di codice S1 = 00101000 e S2 = 00011001.',
    domandeGuida: [
      'Confronta i bit nelle 8 posizioni corrispondenti.',
      'Conta in quante posizioni i bit differiscono.'
    ],
    svolgimentoDettagliato: 'Confronto bit a bit:\n• Posizione 3: S1 ha 1, S2 ha 0 (Differenza 1)\n• Posizione 4: S1 ha 0, S2 ha 1 (Differenza 2)\n• Posizione 8: S1 ha 0, S2 ha 1 (Differenza 3)\nLe due stringhe differiscono in 3 posizioni → Distanza di Hamming d = 3.'
  },
  {
    id: 8,
    categoria: 'hamming',
    titolo: 'Esercizio 2.2: Distanza Minima e Capacità di Correzione',
    consegna: 'Dato un codice composto da 3 parole a 5 bit: A = 00000, B = 00111, C = 11100. Determinare la distanza minima d_min, il numero di errori rilevabili (e_ril) e correggibili (t_corr).',
    svolgimentoDettagliato: '1. Distanze a coppie:\n   - d(A, B) = 3 (differiscono nei bit 3, 4, 5)\n   - d(A, C) = 3 (differiscono nei bit 1, 2, 3)\n   - d(B, C) = 4 (differiscono nei bit 1, 2, 4, 5)\n2. Distanza minima d_min = 3.\n3. Errori Rilevabili: e_ril = d_min - 1 = 3 - 1 = 2 errori.\n4. Errori Correggibili: t_corr = floor((d_min - 1) / 2) = floor(2 / 2) = 1 errore.'
  },
  {
    id: 9,
    categoria: 'hamming',
    titolo: 'Esercizio 2.3: Calcolo del Bit di Parità Semplice',
    consegna: 'Calcolare il bit di parità PARI e DISPARI per il byte di dati 1011001.',
    svolgimentoDettagliato: '1. Conteggio dei bit a 1 nel byte 1011001: ci sono 4 bit a 1 (numero pari).\n2. Parità PARI: Il totale deve essere pari → Bit aggiuntivo = 0 (10110010).\n3. Parità DISPARI: Il totale deve essere dispari → Bit aggiuntivo = 1 (10110011).'
  },
  {
    id: 10,
    categoria: 'parita-crc',
    titolo: 'Esercizio 2.4: Parità Bidimensionale e Correzione Errore',
    consegna: 'In una matrice di parità pari (8 raggruppamenti), il 7° byte ricevuto è 11100010 (3 bit a 1, dispari) e nel controllo verticale per colonna la 7ª colonna risulta errata. Identificare il bit errato e fornirne la correzione.',
    svolgimentoDettagliato: 'L\'intersezione tra la riga con parità errata (riga 7) e la colonna con parità errata (colonna 7) individua esattamente il bit corrotto.\n- Bit in riga 7, colonna 7 ricevuto: 1\n- Bit corretto invertito: 0\n- Byte corretto: 11100000.'
  },

  // --- SEZIONE 3: CRC E CODICE DI HAMMING (11,7) ---
  {
    id: 11,
    categoria: 'parita-crc',
    titolo: 'Esercizio 3.1: Calcolo Checksum CRC col Polinomio Generatore',
    consegna: 'Dato il messaggio M = 1110 (4 bit) e il polinomio generatore G(x) = x³ + x + 1 (divisore 1011), calcolare la checksum CRC ed la codeword finale trasmessa.',
    domandeGuida: [
      'Determina il grado di G(x): k = 3.',
      'Aggiungi k zeri in coda al messaggio M: 1110000.',
      'Esegui la divisione modulo-2 (XOR) per 1011.'
    ],
    svolgimentoDettagliato: '1. Dividendo con zeri aggiunti: 1110000\n2. Divisione XOR per 1011:\n   1110000 XOR 1011 = 101000\n   101000  XOR 1011 = 000100 -> Resto R = 100\n3. Codeword finale trasmessa: M + R = 1110100.'
  },
  {
    id: 12,
    categoria: 'parita-crc',
    titolo: 'Esercizio 3.2: Verifica Ricezione con CRC',
    consegna: 'Se il ricevitore ottiene il messaggio con CRC 1110100 ed usa il divisore 1011, come rileva che non ci sono errori?',
    svolgimentoDettagliato: 'Il ricevitore esegue la divisione modulo-2 tra la codeword ricevuta 1110100 ed il divisore 1011:\n1110100 XOR 1011 = 101100\n101100  XOR 1011 = 000000 → Resto R = 000.\nUn resto pari a zero conferma l\'assenza di errori di trasmissione!'
  },
  {
    id: 13,
    categoria: 'hamming',
    titolo: 'Esercizio 3.3: Generazione Codice di Hamming (11,7)',
    consegna: 'Codificare il carattere ASCII \'M\' (7 bit: 1001101) inserendolo nel codice di Hamming (11,7) a parità pari.',
    svolgimentoDettagliato: '1. Inserimento bit di informazione nelle posizioni non potenza di 2 (3, 5, 6, 7, 9, 10, 11):\n   Posizione: 1  2  3  4  5  6  7  8  9  10 11\n   Bit:       r1 r2 m1 r4 m2 m3 m4 r8 m5 m6 m7\n   Valore:    x  x  1  x  0  0  1  x  1  0  1\n\n2. Calcolo r1, r2, r4, r8 (Parità Pari):\n   - r1 (pos 1,3,5,7,9,11 -> 1,0,1,1,1 = 4 "1") -> r1 = 0\n   - r2 (pos 2,3,6,7,10,11 -> 1,0,1,0,1 = 3 "1") -> r2 = 1\n   - r4 (pos 4,5,6,7 -> 0,0,1 = 1 "1") -> r4 = 1\n   - r8 (pos 8,9,10,11 -> 1,0,1 = 2 "1") -> r8 = 0\n\nCodeword (11,7) generata: 01110010101.'
  },
  {
    id: 14,
    categoria: 'hamming',
    titolo: 'Esercizio 3.4: Individuazione e Correzione Errore con Sindrome Hamming',
    consegna: 'In un codice Hamming (7,4) a parità pari viene ricevuta la sequenza 1011011. Calcolare i bit della sindrome (s1, s2, s3) per individuare la posizione dell\'eventuale bit errato.',
    svolgimentoDettagliato: '1. Analisi controlli di parità sui bit ricevuti:\n   - s1 = p1 XOR b3 XOR b5 XOR b7 = 1 XOR 1 XOR 0 XOR 1 = 1\n   - s2 = p2 XOR b3 XOR b6 XOR b7 = 0 XOR 1 XOR 1 XOR 1 = 1\n   - s3 = p4 XOR b5 XOR b6 XOR b7 = 1 XOR 0 XOR 1 XOR 1 = 1\n2. Sindrome (s3 s2 s1) = 111 (in decimale = 7).\n3. Il bit errato si trova in POSIZIONE 7. Invertendolo da 1 a 0 la sequenza corretta è 1011010.'
  },

  // --- SEZIONE 4: CODICI CIVILI E BANCARI (CF, P.IVA, IBAN) ---
  {
    id: 15,
    categoria: 'codici-civili',
    titolo: 'Esercizio 4.1: Calcolo Carattere CIN del Codice Fiscale',
    consegna: 'Dati i primi 15 caratteri di un Codice Fiscale RSSMRA80A01H501, calcolare la 16ª lettera di controllo (CIN).',
    svolgimentoDettagliato: '1. Separa i caratteri in posizioni Dispari (1,3,5...) e Pari (2,4,6...):\n   - Dispari: R, S, R, 8, A, 1, 5, 1 → Pesi: R=8, S=12, R=8, 8=19, A=1, 1=0, 5=13, 1=0 → Somma = 69.\n   - Pari: S, M, A, 0, 0, H, 0 → Pesi: S=18, M=12, A=0, 0=0, 0=0, H=7, 0=0 → Somma = 37.\n2. Somma Totale = 69 + 37 = 106.\n3. Resto = 106 Mod 26 = 2.\n4. Corrispondenza alfabetica (0=A, 1=B, 2=C...): 2 corrisponde a \'C\'.\nIl Codice Fiscale completo è RSSMRA80A01H501C.'
  },
  {
    id: 16,
    categoria: 'codici-civili',
    titolo: 'Esercizio 4.2: Check Digit Partita IVA con Formula di Luhn',
    consegna: 'Calcolare la 11ª cifra di controllo per le prime 10 cifre di Partita IVA: 0764352056.',
    svolgimentoDettagliato: '1. Cifre posizioni dispari (1ª,3ª,5ª,7ª,9ª): 0, 6, 3, 2, 5 → Somma X = 16.\n2. Cifre posizioni pari (2ª,4ª,6ª,8ª,10ª): 7, 4, 5, 0, 6.\n   - Raddoppio e somma cifre > 9:\n     7x2=14 (1+4=5), 4x2=8, 5x2=10 (1+0=1), 0x2=0, 6x2=12 (1+2=3).\n   - Somma Y modificata = 5 + 8 + 1 + 0 + 3 = 17.\n3. Somma Totale T = X + Y = 16 + 17 = 33.\n4. Check Digit C = (10 - (33 Mod 10)) Mod 10 = (10 - 3) = 7.\nPartita IVA completa: 07643520567.'
  },
  {
    id: 17,
    categoria: 'codici-civili',
    titolo: 'Esercizio 4.3: Verifica Validità IBAN Modulo 97',
    consegna: 'Spiegare il procedimento per verificare se l\'IBAN IT60X0538511101000000123456 è valido secondo la norma ISO 7064.',
    svolgimentoDettagliato: '1. Sposta i primi 4 caratteri (IT60) in coda: X0538511101000000123456IT60.\n2. Sostituisci le lettere con numeri (A=10, B=11, ... I=18, T=29, X=33):\n   330538511101000000123456182960.\n3. Esegui il calcolo numerico: Resto = StringaNumerica Mod 97.\n4. Se Resto === 1, l\'IBAN è formalmente valido ed integro.'
  },
  {
    id: 18,
    categoria: 'codici-civili',
    titolo: 'Esercizio 4.4: Codifica del Sesso e Data nel Codice Fiscale',
    consegna: 'Una persona di sesso femminile è nata il 12 Maggio. Come vengono codificate le cifre del giorno e mese nel Codice Fiscale?',
    svolgimentoDettagliato: '1. Per le donne si aggiunge 40 al giorno di nascita: 12 + 40 = 52.\n2. Il mese di Maggio corrisponde alla lettera \'E\'.\n3. La sequenza nel Codice Fiscale sarà: E52.'
  }
];