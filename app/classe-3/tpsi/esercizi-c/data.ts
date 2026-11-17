export interface TestCaseC {
  id: number;
  descrizione: string;
  input: string;
  outputAtteso: string;
}

export interface EsercizioC {
  id: number;
  titolo: string;
  argomento: string;
  consegna: string;
  formatoInput: string;
  formatoOutput: string;
  esempioInput: string;
  esempioOutput: string;
  codiceTemplate: string;
  testCases: TestCaseC[];
}

export const eserciziCData: EsercizioC[] = [
  {
    id: 1,
    titolo: 'Esercizio 1: Verifica di un codice Packed BCD',
    argomento: 'Codifiche Numeriche (BCD)',
    consegna:
      'Nel codice Packed BCD (Binary Coded Decimal), ogni cifra decimale (da 0 a 9) viene codificata su 4 bit (un nibble). Una sequenza di 8 bit rappresenta quindi due cifre decimali. Scrivi un programma in C che legga una stringa di 8 caratteri binari (\'0\' e \'1\') e stabilisca se rappresenta un codice Packed BCD legittimo (entrambe le metà da 4 bit valgono tra 0 e 9) oppure illegittimo (almeno una metà vale da 10 a 15, cioè da 1010 a 1111).',
    formatoInput:
      'Una singola riga contenente una stringa di esattamente 8 caratteri (\'0\' oppure \'1\'), senza spazi.',
    formatoOutput:
      'Stampa esattamente la parola LEGITTIMO se entrambe le cifre BCD sono valide (0..9), altrimenti stampa ILLEGITTIMO (tutto in maiuscolo, senza altri testi).',
    esempioInput: '01011001',
    esempioOutput: 'LEGITTIMO',
    codiceTemplate: `#include <stdio.h>

int main() {
    // Una stringa di 8 caratteri richiede un array di 9 celle (8 bit + '\\0')
    char bits[9];
    scanf("%s", bits);

    // SUGGERIMENTI SULLA LOGICA:
    // 1. La stringa e' divisa in due nibble:
    //    - Prima cifra decimale: indici da bits[0] (MSB, peso 8) a bits[3] (LSB, peso 1)
    //    - Seconda cifra decimale: indici da bits[4] (MSB, peso 8) a bits[7] (LSB, peso 1)
    // 2. Ogni cella contiene un carattere ASCII ('0' o '1'), non un numero intero:
    //    per ottenere il valore numerico 0 o 1 sottrai '0' (es. bits[0] - '0').
    // 3. Un codice Packed BCD e' legittimo solo se ENTRAMBE le cifre calcolate sono <= 9.

    // Scrivi qui il tuo codice:


    return 0;
}`,
    testCases: [
      {
        id: 1,
        descrizione: 'Numero 59 in Packed BCD (0101 = 5, 1001 = 9) -> Valido',
        input: '01011001\n',
        outputAtteso: 'LEGITTIMO',
      },
      {
        id: 2,
        descrizione: 'Primo nibble non valido: 1010 = 10, 0011 = 3 -> Non valido',
        input: '10100011\n',
        outputAtteso: 'ILLEGITTIMO',
      },
      {
        id: 3,
        descrizione: 'Secondo nibble non valido: 0111 = 7, 1100 = 12 -> Non valido',
        input: '01111100\n',
        outputAtteso: 'ILLEGITTIMO',
      },
      {
        id: 4,
        descrizione: 'Entrambi i nibble al valore massimo valido (99 -> 1001 1001)',
        input: '10011001\n',
        outputAtteso: 'LEGITTIMO',
      },
      {
        id: 5,
        descrizione: 'Entrambi i nibble al valore zero (00 -> 0000 0000)',
        input: '00000000\n',
        outputAtteso: 'LEGITTIMO',
      },
      {
        id: 6,
        descrizione: 'Entrambi i nibble non validi (1111 1111 -> 15 e 15)',
        input: '11111111\n',
        outputAtteso: 'ILLEGITTIMO',
      },
    ],
  },
  {
    id: 2,
    titolo: 'Esercizio 2: Calcolo del Bit di Parità Pari',
    argomento: 'Rilevazione Errori (Parità)',
    consegna:
      'Data una sequenza di 7 bit di informazione, calcola il bit di parità PARI da aggiungere in coda affinché il numero totale di bit uguali a \'1\' nell\'intero byte (8 bit) sia un numero pari.',
    formatoInput:
      'Una stringa di 7 caratteri binari (\'0\' o \'1\').',
    formatoOutput:
      'Stampa un solo carattere: 0 oppure 1 (il bit di parità pari calcolato).',
    esempioInput: '1011001',
    esempioOutput: '0',
    codiceTemplate: `#include <stdio.h>

int main() {
    // 7 bit di informazione + 1 terminatore '\\0'
    char dati[8];
    scanf("%s", dati);

    // SUGGERIMENTI SULLA LOGICA:
    // 1. Scorri i 7 elementi dell'array 'dati' (indici da 0 a 6) e conta quanti
    //    caratteri sono uguali a '1' (attenzione agli apici singoli per i char!).
    // 2. Nella parita' pari, l'obiettivo e' che il numero totale di '1' (dati + bit di parita')
    //    risulti pari: se hai contato un numero pari di '1' il bit da aggiungere e' 0,
    //    se invece e' dispari devi aggiungere 1 per renderlo pari.

    // Scrivi qui il tuo codice:


    return 0;
}`,
    testCases: [
      {
        id: 1,
        descrizione: 'Quattro bit a 1 (numero pari) -> Bit di parità 0',
        input: '1011001\n',
        outputAtteso: '0',
      },
      {
        id: 2,
        descrizione: 'Tre bit a 1 (numero dispari) -> Bit di parità 1',
        input: '1010001\n',
        outputAtteso: '1',
      },
      {
        id: 3,
        descrizione: 'Tutti zeri (zero bit a 1, numero pari) -> Bit di parità 0',
        input: '0000000\n',
        outputAtteso: '0',
      },
      {
        id: 4,
        descrizione: 'Tutti uno (sette bit a 1, numero dispari) -> Bit di parità 1',
        input: '1111111\n',
        outputAtteso: '1',
      },
    ],
  },
  {
    id: 3,
    titolo: 'Esercizio 3: Decodifica Codice Bi-Quinario Standard',
    argomento: 'Codifiche Rilevatrici di Errore (Bi-Quinario)',
    consegna:
      'Il codice Bi-Quinario standard rappresenta una singola cifra decimale (0..9) usando 7 bit divisi in due gruppi: i primi 2 bit hanno pesi [5, 0] (gruppo binario) e gli ultimi 5 bit hanno pesi [4, 3, 2, 1, 0] (gruppo quinario). Un codice Bi-Quinario è valido SE E SOLO SE nei primi 2 bit c\'è esattamente un solo \'1\' E negli ultimi 5 bit c\'è esattamente un solo \'1\'. Scrivi un programma che legga 7 bit e stampi la cifra decimale corrispondente (da 0 a 9), oppure ERRORE se la sequenza non è valida.',
    formatoInput:
      'Una stringa di 7 caratteri binari (\'0\' o \'1\').',
    formatoOutput:
      'Stampa il numero decimale corrispondente (da 0 a 9) se valido, oppure la parola ERRORE (tutto maiuscolo).',
    esempioInput: '0100100',
    esempioOutput: '2',
    codiceTemplate: `#include <stdio.h>

int main() {
    char bq[8];
    scanf("%s", bq);

    // Tabella dei pesi dei 7 bit del codice Bi-Quinario standard:
    int pesi[7] = {5, 0, 4, 3, 2, 1, 0};

    // SUGGERIMENTI SULLA LOGICA:
    // 1. Verifica la validita' del primo gruppo (indici 0 e 1): conta quanti '1' ci sono.
    //    Deve esserci ESATTAMENTE un '1' (quindi conteggio == 1).
    // 2. Verifica la validita' del secondo gruppo (indici da 2 a 6): conta quanti '1' ci sono.
    //    Anche qui deve esserci ESATTAMENTE un '1' (conteggio == 1).
    // 3. Se uno dei due gruppi non ha esattamente un '1', stampa "ERRORE" e termina.
    // 4. Se entrambi i gruppi sono validi, il valore decimale e' semplicemente la somma
    //    dei pesi[i] in cui bq[i] == '1'!

    // Scrivi qui il tuo codice:


    return 0;
}`,
    testCases: [
      {
        id: 1,
        descrizione: 'Cifra 2: gruppo [5,0]="01" (0) + gruppo [4,3,2,1,0]="00100" (2)',
        input: '0100100\n',
        outputAtteso: '2',
      },
      {
        id: 2,
        descrizione: 'Cifra 8: gruppo [5,0]="10" (5) + gruppo [4,3,2,1,0]="01000" (3)',
        input: '1001000\n',
        outputAtteso: '8',
      },
      {
        id: 3,
        descrizione: 'Cifra 0: gruppo [5,0]="01" (0) + gruppo [4,3,2,1,0]="00001" (0)',
        input: '0100001\n',
        outputAtteso: '0',
      },
      {
        id: 4,
        descrizione: 'Cifra 9: gruppo [5,0]="10" (5) + gruppo [4,3,2,1,0]="10000" (4)',
        input: '1010000\n',
        outputAtteso: '9',
      },
      {
        id: 5,
        descrizione: 'Errore: due bit a 1 nel primo gruppo ("1100100")',
        input: '1100100\n',
        outputAtteso: 'ERRORE',
      },
      {
        id: 6,
        descrizione: 'Errore: nessun bit a 1 nel secondo gruppo ("1000000")',
        input: '1000000\n',
        outputAtteso: 'ERRORE',
      },
    ],
  },
  {
    id: 4,
    titolo: 'Esercizio 4: Generazione Codeword di Hamming (7,4) con Parità Pari',
    argomento: 'Codici Correttori (Hamming)',
    consegna:
      'Data una parola di 4 bit di dati (d1, d2, d3, d4), calcola i 3 bit di parità PARI (p1, p2, p4) secondo lo schema standard di Hamming(7,4) e stampa la codeword completa di 7 bit nell\'ordine: p1 p2 d1 p4 d2 d3 d4.',
    formatoInput:
      'Una stringa di 4 caratteri binari (\'0\' o \'1\') che rappresentano d1, d2, d3, d4.',
    formatoOutput:
      'Stampa una stringa di 7 caratteri binari (senza spazi) corrispondente alla codeword: p1 p2 d1 p4 d2 d3 d4.',
    esempioInput: '1011',
    esempioOutput: '0110011',
    codiceTemplate: `#include <stdio.h>

int main() {
    char dati[5];
    scanf("%s", dati);

    // Usiamo un array di 8 posizioni (indici 1..7, ignorando l'indice 0)
    // cosi' l'indice corrisponde esattamente alla posizione di Hamming!
    int h[8] = {0};

    // Posizioniamo i 4 bit di dati nelle posizioni 3, 5, 6, 7:
    h[3] = dati[0] - '0'; // d1
    h[5] = dati[1] - '0'; // d2
    h[6] = dati[2] - '0'; // d3
    h[7] = dati[3] - '0'; // d4

    // SUGGERIMENTI SULLA LOGICA (PARITA' PARI):
    // - p1 (h[1]) controlla le posizioni con bit 0 acceso (1, 3, 5, 7) -> p1 = (h[3] + h[5] + h[7]) % 2
    // - p2 (h[2]) controlla le posizioni con bit 1 acceso (2, 3, 6, 7)
    // - p4 (h[4]) controlla le posizioni con bit 2 acceso (4, 5, 6, 7)
    //
    // HINT PER ITERARE: invece di 3 formule separate, puoi iterare p = 1, 2, 4 (p *= 2)
    // e sommare gli h[i] (con i da 1 a 7) per cui (i & p) != 0, facendo poi % 2!
    // Infine stampa con un ciclo 'for' gli elementi da h[1] a h[7].

    // Scrivi qui il tuo codice:


    return 0;
}`,
    testCases: [
      {
        id: 1,
        descrizione: 'Dati 1011 -> p1=0, p2=1, p4=0 -> Codeword 0110011',
        input: '1011\n',
        outputAtteso: '0110011',
      },
      {
        id: 2,
        descrizione: 'Dati 0000 -> Tutti i bit di parità sono 0 -> 0000000',
        input: '0000\n',
        outputAtteso: '0000000',
      },
      {
        id: 3,
        descrizione: 'Dati 1111 -> Tutti i bit di parità sono 1 -> 1111111',
        input: '1111\n',
        outputAtteso: '1111111',
      },
      {
        id: 4,
        descrizione: 'Dati 1000 -> p1=1, p2=1, p4=0 -> Codeword 1110000',
        input: '1000\n',
        outputAtteso: '1110000',
      },
    ],
  },
  {
    id: 5,
    titolo: 'Esercizio 5: Carattere di Controllo del Codice Fiscale (Torino)',
    argomento: 'Check Digit e Algoritmi Istituzionali (Codice Fiscale)',
    consegna:
      'Nel template trovi già il codice che costruisce i primi 15 caratteri del Codice Fiscale per una persona nata a Torino (codice catastale L219) a partire da cognome, nome, anno, mese (lettera), giorno (già +40 se femmina) e sesso. Completa il programma calcolando il 16° carattere (carattere di controllo CIN) secondo la normativa dell\'Agenzia delle Entrate e stampa l\'intero Codice Fiscale di 16 caratteri.',
    formatoInput:
      'Sei valori separati da spazio o invio: Cognome (maiuscolo, senza spazi), Nome (maiuscolo, senza spazi), Anno (2 cifre, es. 08), LetteraMese (es. A), Giorno (2 cifre, es. 15 oppure 55), Sesso (M o F).',
    formatoOutput:
      'Stampa il Codice Fiscale completo di 16 caratteri in maiuscolo.',
    esempioInput: 'ROSSI MARIO 08 A 15 M',
    esempioOutput: 'RSSMRA08A15L219Q',
    codiceTemplate: `#include <stdio.h>
#include <string.h>

int isVocale(char c) {
    return (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U');
}

int main() {
    char cognome[30], nome[30], anno[3], mese[2], giorno[3], sesso[2];
    scanf("%s %s %s %s %s %s", cognome, nome, anno, mese, giorno, sesso);

    char cf[17];
    int k = 0;

    // 1. COGNOME (3 lettere: consonanti poi vocali poi X)
    for (int i = 0; cognome[i] != '\\0' && k < 3; i++)
        if (!isVocale(cognome[i])) cf[k++] = cognome[i];
    for (int i = 0; cognome[i] != '\\0' && k < 3; i++)
        if (isVocale(cognome[i])) cf[k++] = cognome[i];
    while (k < 3) cf[k++] = 'X';

    // 2. NOME (se >= 4 consonanti prende la 1a, 3a e 4a; altrimenti come cognome)
    char cons[30];
    int nc = 0;
    for (int i = 0; nome[i] != '\\0'; i++)
        if (!isVocale(nome[i])) cons[nc++] = nome[i];
    if (nc >= 4) {
        cf[k++] = cons[0]; cf[k++] = cons[2]; cf[k++] = cons[3];
    } else {
        for (int i = 0; i < nc && k < 6; i++) cf[k++] = cons[i];
        for (int i = 0; nome[i] != '\\0' && k < 6; i++)
            if (isVocale(nome[i])) cf[k++] = nome[i];
        while (k < 6) cf[k++] = 'X';
    }

    // 3. DATA DI NASCITA E COMUNE DI TORINO (L219)
    cf[6] = anno[0]; cf[7] = anno[1];
    cf[8] = mese[0];
    cf[9] = giorno[0]; cf[10] = giorno[1];
    cf[11] = 'L'; cf[12] = '2'; cf[13] = '1'; cf[14] = '9';

    // --- INIZIO PARTE DA COMPLETARE (16° CARATTERE DI CONTROLLO) ---
    // Vettori di conversione per le 26 lettere 'A'..'Z' (indice 0 = 'A', indice 25 = 'Z'):
    int valDispari[26] = {1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23};
    int valPari[26]    = {0, 1, 2, 3, 4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25};

    // SUGGERIMENTI SULLA LOGICA:
    // 1. Scorri i primi 15 caratteri cf[i] con i da 0 a 14.
    //    ATTENZIONE: nella regola ministeriale le posizioni si contano da 1 a 15!
    //    Quindi l'indice i = 0 e' la 1a posizione (DISPARI!), i = 1 e' la 2a posizione (PARI!), ecc.
    //    In pratica: se (i % 2 == 0) la posizione e' DISPARI, se (i % 2 == 1) la posizione e' PARI.
    // 2. Come usare i vettori:
    //    - Se cf[i] e' una lettera ('A'..'Z'), il suo indice nel vettore e' (cf[i] - 'A').
    //    - Se cf[i] e' una cifra ('0'..'9'), il suo indice nel vettore e' (cf[i] - '0')
    //      (infatti '0' ha lo stesso valore di 'A', '1' di 'B', ..., '9' di 'J'!).
    // 3. Somma tutti i 15 valori ottenuti, calcola (somma % 26) e trasformalo nella lettera
    //    corrispondente aggiungendo 'A': cf[15] = (somma % 26) + 'A';
    // 4. Metti il terminatore cf[16] = '\\0'; e stampa cf!

    // Scrivi qui il tuo codice:


    return 0;
}`,
    testCases: [
      {
        id: 1,
        descrizione: 'ROSSI MARIO nato a Torino il 15/01/2008 (M) -> RSSMRA08A15L219Q',
        input: 'ROSSI MARIO 08 A 15 M\n',
        outputAtteso: 'RSSMRA08A15L219Q',
      },
      {
        id: 2,
        descrizione: 'BIANCHI GIULIA nata a Torino il 22/03/2007 (F -> giorno 62) -> BNCGLI07C62L219O',
        input: 'BIANCHI GIULIA 07 C 62 F\n',
        outputAtteso: 'BNCGLI07C62L219O',
      },
      {
        id: 3,
        descrizione: 'RE ALESSANDRO (cognome corto con X, nome con >=4 consonanti) -> REXLSN09M04L219N',
        input: 'RE ALESSANDRO 09 M 04 M\n',
        outputAtteso: 'REXLSN09M04L219N',
      },
    ],
  },
  {
    id: 6,
    titolo: 'Esercizio 6: Calcolo Cifre di Controllo IBAN Italiano',
    argomento: 'Check Digit Bancari (ISO 7064 MOD 97-10)',
    consegna:
      'In un codice IBAN italiano (27 caratteri), le due cifre subito dopo "IT" sono le cifre di controllo calcolate secondo lo standard internazionale ISO 7064 (MOD 97-10). Data in input la stringa di 23 caratteri del BBAN italiano (1 lettera CIN + 5 cifre ABI + 5 cifre CAB + 12 caratteri Conto Corrente), calcola le due cifre di controllo e stampa l\'IBAN completo nel formato ITxx + BBAN.',
    formatoInput:
      'Una stringa di 23 caratteri alfanumerici maiuscoli che rappresentano il BBAN italiano (es. X0542811101000000123456).',
    formatoOutput:
      'Stampa l\'IBAN completo di 27 caratteri in maiuscolo (con lo zero iniziale se il numero di controllo è minore di 10, es. IT02...).',
    esempioInput: 'X0542811101000000123456',
    esempioOutput: 'IT60X0542811101000000123456',
    codiceTemplate: `#include <stdio.h>

int main() {
    char bban[24];
    scanf("%s", bban);

    // Per calcolare il controllo IBAN si sposta "IT00" in coda al BBAN:
    // bban (23 caratteri) + "IT00" (4 caratteri) = 27 caratteri totali
    char seq[28];
    for (int i = 0; i < 23; i++) seq[i] = bban[i];
    seq[23] = 'I';
    seq[24] = 'T';
    seq[25] = '0';
    seq[26] = '0';
    seq[27] = '\\0';

    // SUGGERIMENTI SULLA LOGICA (MOD 97-10 SU NUMERI GRANDI):
    // 1. Nella regola IBAN ogni carattere viene convertito in numero:
    //    - Se e' una cifra ('0'..'9') vale (c - '0') (da 0 a 9).
    //    - Se e' una lettera ('A'..'Z') vale (c - 'A' + 10) (da 10 per 'A' a 35 per 'Z').
    // 2. Il numero ottenuto ha piu' di 30 cifre e NON entra in un 'int' o 'long long'!
    //    Per calcolare il resto modulo 97 si usa la proprieta' modulare cifra per cifra:
    //    partendo da resto = 0, per ogni carattere convertito in 'val':
    //    - se val < 10 (una cifra):  resto = (resto * 10 + val) % 97;
    //    - se val >= 10 (due cifre): resto = (resto * 100 + val) % 97;
    // 3. Alla fine del ciclo, il codice di controllo e': check = 98 - resto;
    // 4. Stampa "IT", poi check su 2 cifre con zero iniziale (printf("IT%02d%s\\n", check, bban);).

    // Scrivi qui il tuo codice:


    return 0;
}`,
    testCases: [
      {
        id: 1,
        descrizione: 'BBAN standard di esempio -> IT60X0542811101000000123456',
        input: 'X0542811101000000123456\n',
        outputAtteso: 'IT60X0542811101000000123456',
      },
      {
        id: 2,
        descrizione: 'Check digit minore di 10 (richiede lo zero davanti: IT02...)',
        input: 'A0306909606100000012345\n',
        outputAtteso: 'IT02A0306909606100000012345',
      },
      {
        id: 3,
        descrizione: 'BBAN con lettere nel numero di conto -> IT40S0300203280284979424662',
        input: 'S0300203280284979424662\n',
        outputAtteso: 'IT40S0300203280284979424662',
      },
    ],
  },
];