'use client';

import { useState } from 'react';
import Link from 'next/link';

interface EsercizioScrittura {
  id: number;
  parte: number;
  titolo: string;
  consegna: string;
  domandeGuida?: string[];
  outputFormato?: string;
  templateCodice: string;
}

const eserciziScritturaData: EsercizioScrittura[] = [
  // --- PARTE 1 ---
  {
    id: 1,
    parte: 1,
    titolo: "Esercizio 1: Calcolo del terzo angolo di un triangolo",
    consegna: "Scrivi un programma in Python che richieda di inserire in input i valori interi di due angoli di un triangolo, misurati in gradi, e mostri come output il valore del terzo angolo.",
    domandeGuida: [
      "Quale valore non dovrà superare A, il primo dato di input intero? (Risposta: 178°)",
      "Quale valore non dovrà superare B, il secondo dato di input intero? (Risposta: 178° - A)"
    ],
    outputFormato: "Il terzo angolo misura ... gradi.",
    templateCodice: `# Esercizio 1\nangolo1 = int(input("Inserisci il primo angolo: "))\nangolo2 = int(input("Inserisci il secondo angolo: "))\n\n# Calcola il terzo angolo (180 - a1 - a2)\nterzo_angolo = 180 - (angolo1 + angolo2)\nprint(f"Il terzo angolo misura {terzo_angolo} gradi.")`
  },
  {
    id: 2,
    parte: 1,
    titolo: "Esercizio 2: Conversione da Pollici a Centimetri e Metri",
    consegna: "Scrivi un programma che prenda in input una distanza espressa in pollici (numero reale o intero) e la converta in centimetri e in metri. Sapendo che 1 pollice corrisponde a 2.54 cm, mostra i due valori in output ben formattati.",
    templateCodice: `# Esercizio 2\npollici = float(input("Inserisci la distanza in pollici: "))\ncm = pollici * 2.54\nmetri = cm / 100\nprint(f"{pollici} pollici = {cm:.2f} cm ({metri:.4f} m)")`
  },
  {
    id: 3,
    parte: 1,
    titolo: "Esercizio 3: Quoziente intero e Resto tra numeri",
    consegna: "Scrivi un programma che chieda in input due numeri interi. Il programma deve calcolare e stampare in due output distinti la parte intera della divisione (quoziente intero //) e il resto (modulo %) del primo numero diviso per il secondo.",
    templateCodice: `# Esercizio 3\nnum1 = int(input("Primo numero: "))\nnum2 = int(input("Secondo numero: "))\nprint("Quoziente intero:", num1 // num2)\nprint("Resto:", num1 % num2)`
  },
  {
    id: 4,
    parte: 1,
    titolo: "Esercizio 4: Calcolo dell'Ipotenusa di un Triangolo Rettangolo",
    consegna: "Dati in input i valori decimali (float) dei due cateti di un triangolo rettangolo, calcola la lunghezza dell'ipotenusa usando il teorema di Pitagora e stampala in output.",
    templateCodice: `import math\n\n# Esercizio 4\nc1 = float(input("Cateto 1: "))\nc2 = float(input("Cateto 2: "))\nipotenusa = math.sqrt(c1**2 + c2**2)\nprint(f"L'ipotenusa misura: {ipotenusa:.2f}")`
  },
  {
    id: 5,
    parte: 1,
    titolo: "Esercizio 5: Circonferenza e Area del Cerchio",
    consegna: "Dato in input il valore del raggio di un cerchio (tipo float), calcola la circonferenza e l'area usando la costante math.pi.",
    outputFormato: "La circonferenza misura ... centimetri\nL'area del cerchio misura ... centimetri quadrati",
    templateCodice: `import math\n\n# Esercizio 5\nraggio = float(input("Raggio: "))\ncirconferenza = 2 * math.pi * raggio\narea = math.pi * (raggio ** 2)\nprint(f"La circonferenza misura {circonferenza:.2f} cm")\nprint(f"L'area del cerchio misura {area:.2f} cm²")`
  },
  {
    id: 6,
    parte: 1,
    titolo: "Esercizio 6: Calcolo del Prezzo Scontato con IVA",
    consegna: "Scrivi un programma che chieda in input il prezzo di listino di un prodotto (float) e la percentuale di sconto (int). Calcola il prezzo scontato e successivamente applica l'IVA al 22% al prezzo scontato per ottenere il totale finale.",
    templateCodice: `# Esercizio 6\nprezzo = float(input("Prezzo di listino: "))\nsconto_pct = int(input("Sconto (%): "))\nprezzo_scontato = prezzo * (1 - sconto_pct / 100)\ntotale_iva = prezzo_scontato * 1.22\nprint(f"Prezzo Scontato: {prezzo_scontato:.2f}€")\nprint(f"Totale con IVA 22%: {totale_iva:.2f}€")`
  },

  // --- PARTE 2 ---
  {
    id: 7,
    parte: 2,
    titolo: "Esercizio 7: Verifica Ricavi e Spese",
    consegna: "Scrivi un programma che richieda all'utente di inserire i ricavi totali e le spese totali di un'azienda (valori float). Il programma deve verificare e stampare se l'azienda è in guadagno (ricavi > spese), in parità o in perdita, indicando l'importo del profitto o della perdita.",
    templateCodice: `# Esercizio 7\nricavi = float(input("Ricavi totali: "))\nspese = float(input("Spese totali: "))\ndifferenza = ricavi - spese\n\nif differenza > 0:\n    print(f"Azienda in GUADAGNO di {differenza:.2f}€")\nelif differenza < 0:\n    print(f"Azienda in PERDITA di {abs(differenza):.2f}€")\nelse:\n    print("Azienda in PARITÀ (0€)")`
  },
  {
    id: 8,
    parte: 2,
    titolo: "Esercizio 8: Controllo Avanzato sugli Angoli di un Triangolo",
    consegna: "Migliora il programma per il calcolo degli angoli (Esercizio 1): richiedi in input i due angoli e controlla se i dati inseriti sono validi. Un input NON è valido se uno dei due angoli è <= 0 oppure se la loro somma è >= 180°.",
    templateCodice: `# Esercizio 8\na1 = int(input("Angolo 1: "))\na2 = int(input("Angolo 2: "))\n\nif a1 <= 0 or a2 <= 0 or (a1 + a2) >= 180:\n    print("ERRORE: I valori inseriti non formano un triangolo valido!")\nelse:\n    a3 = 180 - (a1 + a2)\n    print(f"Terzo angolo: {a3}°")`
  },
  {
    id: 9,
    parte: 2,
    titolo: "Esercizio 9: Autenticazione e Modifica del PIN",
    consegna: "Scrivi un programma che simuli il controllo di un PIN segreto (memorizzato in pin_segreto = '1234'). Chiede all'utente di inserire il PIN per accedere. Se è corretto, chiede se desidera modificarlo e richiede la conferma del vecchio PIN prima di salvare il nuovo.",
    templateCodice: `pin_segreto = "1234"\ninput_pin = input("Inserisci il PIN: ")\n\nif input_pin == pin_segreto:\n    print("Accesso effettuato!")\n    scelta = input("Vuoi cambiare il PIN? (s/n): ")\n    if scelta.lower() == 's':\n        vecchio = input("Conferma vecchio PIN: ")\n        if vecchio == pin_segreto:\n            pin_segreto = input("Nuovo PIN: ")\n            print("PIN aggiornato con successo!")\n        else:\n            print("PIN non corretto. Operazione annullata.")\nelse:\n    print("PIN Errato!")`
  },
  {
    id: 10,
    parte: 2,
    titolo: "Esercizio 10: Determinare il Maggiore e il Minore tra 3 Interi",
    consegna: "Chiedi all'utente di inserire tre numeri interi. Senza usare le funzioni predefinite max() e min(), determina quale dei tre numeri è il maggiore e quale è il minore usando opportunamente i blocchi if ... elif ... else.",
    templateCodice: `# Esercizio 10\nn1 = int(input("Primo numero: "))\nn2 = int(input("Secondo numero: "))\nn3 = int(input("Terzo numero: "))\n\n# Trova il maggiore\nif n1 >= n2 and n1 >= n3:\n    maggiore = n1\nelif n2 >= n1 and n2 >= n3:\n    maggiore = n2\nelse:\n    maggiore = n3\n\nprint(f"Il numero maggiore è: {maggiore}")`
  },
  {
    id: 11,
    parte: 2,
    titolo: "Esercizio 11: Calcolatore di Aree Geometriche con match...case",
    consegna: "Scrivi un programma che mostri un menu per scegliere quale area calcolare tra: 1. Triangolo (base e altezza), 2. Rettangolo (base e altezza), 3. Cerchio (raggio). Gestisci la selezione dell'utente utilizzando la struttura match ... case.",
    templateCodice: `import math\n\nscelta = input("Calcola area: 1.Triangolo 2.Rettangolo 3.Cerchio: ")\nmatch scelta:\n    case "1":\n        b = float(input("Base: "))\n        h = float(input("Altezza: "))\n        print("Area:", (b * h) / 2)\n    case "2":\n        b = float(input("Base: "))\n        h = float(input("Altezza: "))\n        print("Area:", b * h)\n    case "3":\n        r = float(input("Raggio: "))\n        print("Area:", math.pi * r**2)\n    case _:\n        print("Scelta non valida")`
  },
  {
    id: 12,
    parte: 2,
    titolo: "Esercizio 12: Classificazione dell'Età per la Tariffa del Cinema",
    consegna: "Scrivi un programma che chieda l'età dell'utente e determini il costo del biglietto del cinema: gratuito sotto i 5 anni, 5€ tra 5 e 12 anni inclusi, 8€ tra 13 e 65 anni, 4€ sopra i 65 anni. Stampa la fascia d'età e il prezzo corrispondente.",
    templateCodice: `# Esercizio 12\neta = int(input("Inserisci l'età: "))\nif eta < 5:\n    prezzo = 0\nelif eta <= 12:\n    prezzo = 5\nelif eta <= 65:\n    prezzo = 8\nelse:\n    prezzo = 4\nprint(f"Prezzo Biglietto: {prezzo}€")`
  },

  // --- PARTE 3 ---
  {
    id: 13,
    parte: 3,
    titolo: "Esercizio 13: Ricerca dei Sottomultipli (Divisori) di un Numero",
    consegna: "Dato in input un numero intero positivo, scrivi un programma che trovi e stampi tutti i suoi sottomultipli (divisori esatti). Esempio: per 12, l'output deve mostrare 1, 2, 3, 4, 6, 12.",
    templateCodice: `# Esercizio 13\nn = int(input("Inserisci un numero intero positivo: "))\nprint(f"Divisori di {n}:")\nfor i in range(1, n + 1):\n    if n % i == 0:\n        print(i, end=" ")`
  },
  {
    id: 14,
    parte: 3,
    titolo: "Esercizio 14: Conteggio delle Cifre di un Numero Intero",
    consegna: "Dato un numero intero positivo in input, scrivi un programma che calcoli e restituisca il numero di cifre da cui è composto SENZA convertire il numero in stringa o usare len(), ma usando un ciclo while e la divisione intera per 10 (// 10).",
    templateCodice: `# Esercizio 14\nn = int(input("Inserisci numero intero: "))\ntemp = n\ncifre = 0\nwhile temp > 0:\n    cifre += 1\n    temp = temp // 10\nprint(f"Il numero {n} è composto da {cifre} cifre.")`
  },
  {
    id: 15,
    parte: 3,
    titolo: "Esercizio 15: Simulazione di uno Sportello ATM (Bancomat)",
    consegna: "Scrivi un programma che simuli uno sportello bancomat. Saldo iniziale = 200 euro. Mostra un menu ripetuto con ciclo while finché l'utente sceglie di uscire: 1. Saldo, 2. Versamento, 3. Prelievo (verificare fondi), 4. Termina.",
    templateCodice: `saldo = 200.0\nattivo = True\nwhile attivo:\n    print("\\n--- BANCOMAT ---\\n1. Saldo | 2. Versamento | 3. Prelievo | 4. Esci")\n    scelta = input("Scelta: ")\n    if scelta == "1":\n        print(f"Saldo attuale: {saldo:.2f}€")\n    elif scelta == "2":\n        importo = float(input("Importo da versare: "))\n        saldo += importo\n    elif scelta == "3":\n        importo = float(input("Importo da prelevare: "))\n        if importo <= saldo:\n            saldo -= importo\n        else:\n            print("Fondi insufficienti!")\n    elif scelta == "4":\n        attivo = False`
  },
  {
    id: 16,
    parte: 3,
    titolo: "Esercizio 16: Somma di Numeri con Sentinella",
    consegna: "Scrivi un programma che richieda all'utente di inserire una serie di numeri interi positivi uno alla volta. L'inserimento termina quando l'utente digita 0 o un numero negativo. Al termine del ciclo, stampa la somma totale e il conteggio dei numeri validi.",
    templateCodice: `# Esercizio 16\nsomma = 0\nconteggio = 0\nwhile True:\n    num = int(input("Inserisci numero (<=0 per terminare): "))\n    if num <= 0:\n        break\n    somma += num\n    conteggio += 1\nprint(f"Totale numeri: {conteggio}, Somma: {somma}")`
  },
  {
    id: 17,
    parte: 3,
    titolo: "Esercizio 17: Tabella di Moltiplicazione Personalizzata",
    consegna: "Chiedi all'utente un numero intero N. Con un ciclo for, genera e stampa la tabellina di quel numero moltiplicandolo da 1 a 10 con una grafica chiara (es. N x 1 = ...).",
    templateCodice: `# Esercizio 17\nn = int(input("Inserisci il numero per la tabellina: "))\nfor i in range(1, 11):\n    print(f"{n} x {i:2d} = {n * i}")`
  },
  {
    id: 18,
    parte: 3,
    titolo: "Esercizio 18: Gioco di Indovina il Numero",
    consegna: "Memorizza un numero segreto (es. segreto = 42). Chiedi all'utente di indovinarlo usando un ciclo while: ad ogni tentativo errato indica se il numero da indovinare è più grande o più piccolo. Al successo, stampa i congratulazioni ed il numero di tentativi.",
    templateCodice: `segreto = 42\ntentativi = 0\nwhile True:\n    tentativo = int(input("Indovina il numero: "))\n    tentativi += 1\n    if tentativo == segreto:\n        print(f"Complimenti! Indovinato in {tentativi} tentativi.")\n        break\n    elif tentativo < segreto:\n        print("Più grande!")\n    else:\n        print("Più piccolo!")`
  },

  // --- PARTE 4 ---
  {
    id: 19,
    parte: 4,
    titolo: "Esercizio 19: Formattatore di Nomi Propri",
    consegna: "Scrivi un programma che richieda all'utente di inserire il proprio nome e cognome (anche con spazi casuali in testa/coda e maiuscole errate) e restituisca la stringa pulita e formattata con l'iniziale maiuscola (strip e title).",
    templateCodice: `# Esercizio 19\nraw_input = input("Inserisci nome e cognome: ")\npulito = raw_input.strip().title()\nprint("Nome formattato:", pulito)`
  },
  {
    id: 20,
    parte: 4,
    titolo: "Esercizio 20: Conteggio Vocali e Consonanti",
    consegna: "Chiedi all'utente di inserire una frase. Conta e stampa quante vocali e quante consonanti sono presenti nella frase (ignorando spazi e punteggiatura).",
    templateCodice: `# Esercizio 20\nfrase = input("Inserisci una frase: ").lower()\nvocali = 0\nconsonanti = 0\nfor c in frase:\n    if c.isalpha():\n        if c in "aeiou":\n            vocali += 1\n        else:\n            consonanti += 1\nprint(f"Vocali: {vocali}, Consonanti: {consonanti}")`
  },
  {
    id: 21,
    parte: 4,
    titolo: "Esercizio 21: Verifica Palindromo",
    consegna: "Scrivi un programma che richieda all'utente una parola o frase e verifichi se si tratta di un palindromo (cioè se si legge allo stesso modo da sinistra a destra e viceversa, ignorando spazi e maiuscole).",
    templateCodice: `# Esercizio 21\ntesto = input("Inserisci una parola/frase: ").lower().replace(" ", "")\nif testo == testo[::-1]:\n    print("È un palindromo!")\nelse:\n    print("Non è un palindromo.")`
  },
  {
    id: 22,
    parte: 4,
    titolo: "Esercizio 22: Gestione di una Lista della Spesa",
    consegna: "Crea una lista vuota per la spesa. Tramite un ciclo while con menu, permetti all'utente di: 1. Aggiungere un elemento (append), 2. Rimuovere un elemento (remove se presente), 3. Visualizzare la lista ordinata (sort), 4. Uscire.",
    templateCodice: `spesa = []\nwhile True:\n    scelta = input("\\n1.Aggiungi 2.Rimuovi 3.Mostra 4.Esci: ")\n    if scelta == "1":\n        item = input("Articolo: ").strip()\n        spesa.append(item)\n    elif scelta == "2":\n        item = input("Articolo da rimuovere: ").strip()\n        if item in spesa:\n            spesa.remove(item)\n        else:\n            print("Non presente!")\n    elif scelta == "3":\n        print("Lista spesa:", sorted(spesa))\n    elif scelta == "4":\n        break`
  },
  {
    id: 23,
    parte: 4,
    titolo: "Esercizio 23: Calcolo Statistico su Lista di Voti",
    consegna: "Chiedi all'utente di inserire 5 voti scolastici (float). Salvali in una lista, calcola e stampa: il voto massimo, il voto minimo, la media aritmetica ed il numero di voti sufficienti (>= 6.0).",
    templateCodice: `# Esercizio 23\nvoti = []\nfor i in range(5):\n    v = float(input(f"Inserisci voto {i+1}: "))\n    voti.append(v)\n\nprint("Voto Max:", max(voti))\nprint("Voto Min:", min(voti))\nprint("Media:", sum(voti) / len(voti))\nsufficienti = sum(1 for v in voti if v >= 6.0)\nprint("Voti sufficienti:", sufficienti)`
  },
  {
    id: 24,
    parte: 4,
    titolo: "Esercizio 24: Generatore di Acronimi",
    consegna: "Dato in input un titolo o frase (es. 'Tecnologie e Progettazione Sistemi Informatici'), estrai la prima lettera di ciascuna parola e crea l'acronimo in maiuscolo (es. 'TPSI').",
    templateCodice: `# Esercizio 24\nfrase = input("Inserisci titolo/frase: ")\nparole = frase.split()\nacronimo = "".join([p[0].upper() for p in parole if p])\nprint("Acronimo:", acronimo)`
  },
  {
    id: 25,
    parte: 4,
    titolo: "Esercizio 25: Filtraggio Numeri Pari e Dispari in Liste Separate",
    consegna: "Data una sequenza di numeri interi inseriti dall'utente e salvati in una lista principale, separa i numeri pari in una lista 'pari' e i dispari in una lista 'dispari' e stampale entrambe.",
    templateCodice: `# Esercizio 25\nnumeri = [12, 7, 5, 18, 22, 9, 3, 14]\npari = []\ndispari = []\nfor n in numeri:\n    if n % 2 == 0:\n        pari.append(n)\n    else:\n        dispari.append(n)\nprint("Pari:", pari)\nprint("Dispari:", dispari)`
  },
  {
    id: 26,
    parte: 4,
    titolo: "Esercizio 26: Matrice Scacchiera 3x3 e Somma Diagonale Principale",
    consegna: "Crea una matrice 3x3 con numeri interi predefiniti o inseriti in input. Calcola e stampa la somma degli elementi presenti sulla diagonale principale (gli elementi con indice riga == colonna).",
    templateCodice: `matrice = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\nsomma_diagonale = 0\nfor i in range(3):\n    somma_diagonale += matrice[i][i]\nprint("Somma Diagonale Principale:", somma_diagonale)`
  },
  {
    id: 27,
    parte: 4,
    titolo: "Esercizio 27: Cifrario di Cesare Semplificato",
    consegna: "Scrivi un programma che prenda in input una parola in maiuscolo ed una chiave numerica di scorrimento (es. k=3). Trasforma ogni lettera nel suo corrispondente carattere shiftato di k posizioni usando ord() e chr().",
    templateCodice: `# Esercizio 27\ntesto = input("Inserisci parola (MAIUSCOLA): ")\nchiave = int(input("Chiave (es. 3): "))\ncifrato = ""\nfor c in testo:\n    if c.isalpha():\n        cifrato += chr((ord(c) - 65 + chiave) % 26 + 65)\nprint("Testo Cifrato:", cifrato)`
  },
  {
    id: 28,
    parte: 4,
    titolo: "Esercizio 28: Ricerca e Sostituzione di Parola in un Testo",
    consegna: "Chiedi all'utente di inserire un testo lungo, poi una 'parola da cercare' ed una 'parola di sostituzione'. Sostituisci tutte le occorrenze e mostra quante sostituzioni sono state effettuate usando count().",
    templateCodice: `# Esercizio 28\ntesto = input("Inserisci il testo: ")\nda_cercare = input("Parola da cercare: ")\nsostituto = input("Parola sostitutiva: ")\noccorrenze = testo.count(da_cercare)\nnuovo_testo = testo.replace(da_cercare, sostituto)\nprint(f"Effettuate {occorrenze} sostituzioni.")\nprint("Nuovo testo:", nuovo_testo)`
  },
  {
    id: 29,
    parte: 4,
    titolo: "Esercizio 29: Inversione degli Elementi di una Lista senza reverse()",
    consegna: "Data una lista di stringhe o numeri, inverti l'ordine dei suoi elementi SENZA usare il metodo predefinito .reverse() o lo slicing [::-1], ma scambiando gli elementi con un ciclo.",
    templateCodice: `# Esercizio 29\nlst = [10, 20, 30, 40, 50]\nn = len(lst)\nfor i in range(n // 2):\n    lst[i], lst[n - 1 - i] = lst[n - 1 - i], lst[i]\nprint("Lista invertita in-place:", lst)`
  },
  {
    id: 30,
    parte: 4,
    titolo: "Esercizio 30: Registro Studenti e Voti con Lista di Liste",
    consegna: "Crea un registro di una classe dove ogni elemento è una sottolista contentente [Nome, Voto]. Inserisci 4 studenti. Calcola la media della classe e stampa i nomi degli studenti con voto superiore alla media.",
    templateCodice: `registro = [\n    ["Luca", 8.5],\n    ["Anna", 9.0],\n    ["Marco", 5.5],\n    ["Sara", 7.0]\n]\nsomma_voti = sum(student[1] for student in registro)\nmedia = somma_voti / len(registro)\nprint(f"Media Classe: {media:.2f}")\nprint("Studenti sopra la media:")\nfor nome, voto in registro:\n    if voto > media:\n        print(f"- {nome} ({voto})")`
  }
];

export default function EserciziScritturaPythonPage() {
  const [parteAttiva, setParteAttiva] = useState<number>(0);
  // Stato per gestire quali soluzioni sono visibili (tramite ID esercizio)
  const [soluzioniVisibili, setSoluzioniVisibili] = useState<{ [key: number]: boolean }>({});

  const toggleSoluzione = (id: number) => {
    setSoluzioniVisibili((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const eserciziFiltrati = parteAttiva === 0 
    ? eserciziScritturaData 
    : eserciziScritturaData.filter((ex) => ex.parte === parteAttiva);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link 
        href="/classe-2/scita" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        &larr; Torna a SCITA Classe 2ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-8 text-gray-800">
        
        <header className="border-b-4 border-indigo-600 pb-4">
          <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            SCITA &bull; Classe 2ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            ✍️ Esercizi di Scrittura Codice Python da Zero (30 Esercizi)
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Mettiti alla prova scrivendo il codice! Clicca su &quot;Mostra Soluzione&quot; per verificare il tuo algoritmo.
          </p>
        </header>

        {/* Filtro Parti */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
            Seleziona la Sezione dell&apos;Eserciziario:
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setParteAttiva(0)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                parteAttiva === 0 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tutti i 30 Esercizi
            </button>
            <button
              onClick={() => setParteAttiva(1)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                parteAttiva === 1 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Parte 1: I/O &amp; Formule (1-6)
            </button>
            <button
              onClick={() => setParteAttiva(2)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                parteAttiva === 2 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Parte 2: Condizionali (7-12)
            </button>
            <button
              onClick={() => setParteAttiva(3)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                parteAttiva === 3 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Parte 3: Cicli (13-18)
            </button>
            <button
              onClick={() => setParteAttiva(4)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                parteAttiva === 4 ? 'bg-indigo-600 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Parte 4: Stringhe &amp; Liste (19-30)
            </button>
          </div>
        </div>

        {/* Griglia Esercizi */}
        <div className="space-y-6">
          {eserciziFiltrati.map((ex) => (
            <div key={ex.id} className="p-5 border rounded-xl bg-gray-50 space-y-3 border-gray-200 shadow-sm">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-indigo-900 text-base">
                  {ex.titolo}
                </h3>
                <span className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  Parte {ex.parte}
                </span>
              </div>

              <p className="text-xs text-gray-700 leading-relaxed">
                {ex.consegna}
              </p>

              {ex.domandeGuida && (
                <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r text-xs space-y-1">
                  <span className="font-bold text-amber-900">Domande Guida per la risoluzione:</span>
                  <ul className="list-disc list-inside text-amber-800">
                    {ex.domandeGuida.map((q, idx) => (
                      <li key={idx}>{q}</li>
                    ))}
                  </ul>
                </div>
              )}

              {ex.outputFormato && (
                <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r text-xs font-mono text-blue-900">
                  <span className="font-bold block mb-1 font-sans">Formato Output Richiesto:</span>
                  <pre className="whitespace-pre-wrap">{ex.outputFormato}</pre>
                </div>
              )}

              {/* Pulsante Toggle Soluzione */}
              <div className="pt-2">
                <button
                  onClick={() => toggleSoluzione(ex.id)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg transition-all shadow-sm flex items-center gap-1.5"
                >
                  {soluzioniVisibili[ex.id] ? '🙈 Nascondi Soluzione' : '💡 Mostra Soluzione / Codice'}
                </button>
              </div>

              {/* Blocco Codice visibile solo al click */}
              {soluzioniVisibili[ex.id] && (
                <div className="space-y-1 pt-2 animate-fadeIn">
                  <span className="text-[11px] font-mono font-bold text-emerald-700 block">
                    🐍 Soluzione Python Proposta:
                  </span>
                  <pre className="bg-slate-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto leading-relaxed border border-slate-700 shadow-inner">
                    <code>{ex.templateCodice}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}