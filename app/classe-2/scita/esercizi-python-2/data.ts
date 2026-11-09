export interface Esercizio {
  id: number;
  parte: number;
  categoria: 'sintassi' | 'logica' | 'previsione';
  titolo: string;
  descrizione?: string;
  codice: string;
}

export const fontDataEsercizi: Esercizio[] = [
  // --- PARTE 1: PRINT, VARIABILI, TIPI DI DATO E INPUT ---
  { id: 1, parte: 1, categoria: 'sintassi', titolo: 'Es 1.1', codice: `print("Benvenuto al corso di Python!` },
  { id: 2, parte: 1, categoria: 'sintassi', titolo: 'Es 1.2', codice: `eta = input("Quanti anni hai? ")\nprint "Hai" + eta + "anni"` },
  { id: 3, parte: 1, categoria: 'sintassi', titolo: 'Es 1.3', codice: `1numero = 10\nnome utente = "Luca"\nprint(1numero, nome utente)` },
  { id: 4, parte: 1, categoria: 'sintassi', titolo: 'Es 1.4', codice: `n1 = int(input("Primo numero: ")\nn2 = int(input("Secondo numero: "))\nprint("Somma:", n1 + n2)` },
  { id: 5, parte: 1, categoria: 'logica', titolo: 'Es 2.1', descrizione: 'Deve sommare due numeri inseriti in input, non concatenare le stringhe.', codice: `a = input("Primo numero: ")\nb = input("Secondo numero: ")\nsomma = a + b\nprint("La somma è:", somma)` },
  { id: 6, parte: 1, categoria: 'logica', titolo: 'Es 2.2', descrizione: 'Calcola la media aritmetica di tre numeri (media di 10, 20, 30 deve dare 20.0).', codice: `n1 = 10\nn2 = 20\nn3 = 30\nmedia = n1 + n2 + n3 / 3\nprint("La media è:", media)` },
  { id: 7, parte: 1, categoria: 'logica', titolo: 'Es 2.3', descrizione: 'Scambia il valore di due variabili a e b.', codice: `a = 5\nb = 10\na = b\nb = a\nprint("a:", a, "b:", b)` },
  { id: 8, parte: 1, categoria: 'logica', titolo: 'Es 2.4', descrizione: 'Calcola il prezzo scontato del 20%.', codice: `prezzo = 50\nsconto = 20\nfinale = prezzo - sconto\nprint("Prezzo scontato:", finale)` },
  { id: 9, parte: 1, categoria: 'previsione', titolo: 'Es 3.1', codice: `x = 5\ny = 2\nprint(x + y * 3)\nprint(x // y)\nprint(x % y)` },
  { id: 10, parte: 1, categoria: 'previsione', titolo: 'Es 3.2', codice: `nome = "Mario"\ncognome = "Rossi"\ncompleto = nome + " " + cognome\nprint(completo)\nprint(len(completo))` },
  { id: 11, parte: 1, categoria: 'previsione', titolo: 'Es 3.3', codice: `a = "10"\nb = "20"\nprint(a + b)\nprint(int(a) + int(b))` },
  { id: 12, parte: 1, categoria: 'previsione', titolo: 'Es 3.4', codice: `x = 10\nx += 5\nx *= 2\nprint(x)` },

  // --- PARTE 2: OPERATORI MATEMATICI E DI CONFRONTO ---
  { id: 13, parte: 2, categoria: 'sintassi', titolo: 'Es 4.1', codice: `a = 10\nb = 3\nprint("Resto:" a % b)` },
  { id: 14, parte: 2, categoria: 'sintassi', titolo: 'Es 4.2', codice: `x = 5\nprint(x = 5)` },
  { id: 15, parte: 2, categoria: 'sintassi', titolo: 'Es 4.3', codice: `valore = 10\nif valore => 10:\n    print("Ok")` },
  { id: 16, parte: 2, categoria: 'sintassi', titolo: 'Es 4.4', codice: `a = 5\nb = 2\nprint(a ** b +)` },
  { id: 17, parte: 2, categoria: 'logica', titolo: 'Es 5.1', descrizione: 'Verifica se un numero intero è pari.', codice: `n = 7\ne_pari = n / 2 == 0\nprint("Pari:", e_pari)` },
  { id: 18, parte: 2, categoria: 'logica', titolo: 'Es 5.2', descrizione: 'Controlla se x è compreso tra 10 e 20 inclusi.', codice: `x = 15\nin_range = x >= 10 or x <= 20\nprint("Compreso:", in_range)` },
  { id: 19, parte: 2, categoria: 'logica', titolo: 'Es 5.3', descrizione: 'Calcola la divisione decimale esatta tra due interi.', codice: `a = 7\nb = 2\nrisultato = a // b\nprint("Risultato:", risultato)` },
  { id: 20, parte: 2, categoria: 'logica', titolo: 'Es 5.4', descrizione: 'Verifica se un anno è un secolo (multiplo di 100).', codice: `anno = 2000\ne_secolo = anno % 10 == 0\nprint("È un secolo:", e_secolo)` },
  { id: 21, parte: 2, categoria: 'previsione', titolo: 'Es 6.1', codice: `print(10 > 5 and 3 < 2)\nprint(not(5 == 5 or 2 > 10))` },
  { id: 22, parte: 2, categoria: 'previsione', titolo: 'Es 6.2', codice: `a = 15\nb = 4\nprint(a // b, a % b, a / b)` },
  { id: 23, parte: 2, categoria: 'previsione', titolo: 'Es 6.3', codice: `x = True\ny = False\nprint(x and not y)\nprint(not x or y)` },
  { id: 24, parte: 2, categoria: 'previsione', titolo: 'Es 6.4', codice: `print(2 ** 3 ** 2)\nprint((2 ** 3) ** 2)` },

  // --- PARTE 3: CONDIZIONALI (IF / ELIF / ELSE) ---
  { id: 25, parte: 3, categoria: 'sintassi', titolo: 'Es 7.1', codice: `voto = 8\nif voto >= 6\n    print("Promosso")` },
  { id: 26, parte: 3, categoria: 'sintassi', titolo: 'Es 7.2', codice: `x = 10\nif x > 5:\nprint("Maggiore")` },
  { id: 27, parte: 3, categoria: 'sintassi', titolo: 'Es 7.3', codice: `a = 3\nelse:\n    print("Minore")` },
  { id: 28, parte: 3, categoria: 'sintassi', titolo: 'Es 7.4', codice: `n = 5\nif n = 5:\n    print("Uguale a 5")` },
  { id: 29, parte: 3, categoria: 'logica', titolo: 'Es 8.1', descrizione: 'Verifica se un anno è bisestile.', codice: `anno = 2024\nif anno % 4 == 0 or anno % 100 == 0:\n    print("Bisestile")` },
  { id: 30, parte: 3, categoria: 'logica', titolo: 'Es 8.2', descrizione: 'Determina il massimo tra tre numeri.', codice: `a = 10\nb = 25\nc = 15\nif a > b and a > c:\n    max_val = a\nelif b > c:\n    max_val = b\nprint("Massimo:", max_val)` },
  { id: 31, parte: 3, categoria: 'logica', titolo: 'Es 8.3', descrizione: 'Verifica se un numero è positivo, negativo o zero.', codice: `n = -5\nif n > 0:\n    print("Positivo")\nif n < 0:\n    print("Negativo")\nprint("Zero")` },
  { id: 32, parte: 3, categoria: 'logica', titolo: 'Es 8.4', descrizione: 'Assegna un voto in lettere (A, B, C, F).', codice: `punteggio = 85\nif punteggio >= 90:\n    voto = "A"\nif punteggio >= 80:\n    voto = "B"\nif punteggio >= 70:\n    voto = "C"\nelse:\n    voto = "F"\nprint("Voto:", voto)` },
  { id: 33, parte: 3, categoria: 'previsione', titolo: 'Es 9.1', codice: `x = 15\nif x > 20:\n    print("A")\nelif x > 10:\n    print("B")\nelse:\n    print("C")` },
  { id: 34, parte: 3, categoria: 'previsione', titolo: 'Es 9.2', codice: `num = 12\nif num % 2 == 0:\n    if num % 3 == 0:\n        print("Divisibile per 6")\n    else:\n        print("Solo per 2")` },
  { id: 35, parte: 3, categoria: 'previsione', titolo: 'Es 9.3', codice: `a = 5\nb = 10\nprint("OK") if a < b else print("NO")` },
  { id: 36, parte: 3, categoria: 'previsione', titolo: 'Es 9.4', codice: `temp = 25\ne_estate = True\nif temp > 30 or not e_estate:\n    print("Condizionatore OFF")\nelse:\n    print("Condizionatore ON")` },

  // --- PARTE 4: MATCH...CASE ---
  { id: 37, parte: 4, categoria: 'sintassi', titolo: 'Es 10.1', codice: `giorno = 1\nmatch giorno\n    case 1:\n        print("Lunedì")` },
  { id: 38, parte: 4, categoria: 'sintassi', titolo: 'Es 10.2', codice: `scelta = 2\nmatch scelta:\n    case 1:\n        print("Uno")\n    case 2\n        print("Due")` },
  { id: 39, parte: 4, categoria: 'sintassi', titolo: 'Es 10.3', codice: `op = "+"\nmatch op:\n    case "+":\n        print("Addizione")\n    case _\n        print("Altro")` },
  { id: 40, parte: 4, categoria: 'sintassi', titolo: 'Es 10.4', codice: `v = 10\nmatch v:\n    case 10:\n    print("Dieci")` },
  { id: 41, parte: 4, categoria: 'logica', titolo: 'Es 11.1', descrizione: 'Gestisce l opzione di default non valida.', codice: `scelta = 5\nmatch scelta:\n    case 1:\n        print("Start")\n    case default:\n        print("Non valido")` },
  { id: 42, parte: 4, categoria: 'logica', titolo: 'Es 11.2', descrizione: 'Riconosce se un carattere è una vocale o una consonante.', codice: `ch = "a"\nmatch ch:\n    case "a" | "e" | "i" | "o" | "u":\n        print("Consonante")\n    case _:\n        print("Vocale")` },
  { id: 43, parte: 4, categoria: 'logica', titolo: 'Es 11.3', descrizione: 'Simula una calcolatrice di base (+, -, *, /).', codice: `a = 10\nb = 0\nop = "/"\nmatch op:\n    case "/":\n        print(a / b)\n    case _:\n        print("Operatore sconosciuto")` },
  { id: 44, parte: 4, categoria: 'logica', titolo: 'Es 11.4', descrizione: 'Classifica la stagione in base al mese.', codice: `mese = 12\nmatch mese:\n    case 12 | 1 | 2:\n        print("Inverno")\n    case 3 | 4 | 5:\n        print("Primavera")\n    case 6 | 7 | 8:\n        print("Autunno")\n    case 9 | 10 | 11:\n        print("Estate")` },
  { id: 45, parte: 4, categoria: 'previsione', titolo: 'Es 12.1', codice: `valore = "B"\nmatch valore:\n    case "A":\n        print("Eccellente")\n    case "B" | "C":\n        print("Buono")\n    case _:\n        print("Sufficiente")` },
  { id: 46, parte: 4, categoria: 'previsione', titolo: 'Es 12.2', codice: `n = 3\nmatch n:\n    case 1:\n        print("Uno")\n    case _:\n        print("Qualsiasi")\n    case 3:\n        print("Tre")` },
  { id: 47, parte: 4, categoria: 'previsione', titolo: 'Es 12.3', codice: `punto = (0, 5)\nmatch punto:\n    case (0, 0):\n        print("Origine")\n    case (0, y):\n        print(f"Asse Y a quota {y}")\n    case (x, 0):\n        print(f"Asse X a quota {x}")` },
  { id: 48, parte: 4, categoria: 'previsione', titolo: 'Es 12.4', codice: `stato = 404\nmatch stato:\n    case 200 | 201:\n        print("Successo")\n    case 400 | 404:\n        print("Errore Client")\n    case 500:\n        print("Errore Server")` },

  // --- PARTE 5: CICLO FOR ---
  { id: 49, parte: 5, categoria: 'sintassi', titolo: 'Es 13.1', codice: `for i in range(5)\n    print(i)` },
  { id: 50, parte: 5, categoria: 'sintassi', titolo: 'Es 13.2', codice: `for i = 0 in range(5):\n    print(i)` },
  { id: 51, parte: 5, categoria: 'sintassi', titolo: 'Es 13.3', codice: `for range(5):\n    print("Ciao")` },
  { id: 52, parte: 5, categoria: 'sintassi', titolo: 'Es 13.4', codice: `for i in 10:\n    print(i)` },
  { id: 53, parte: 5, categoria: 'logica', titolo: 'Es 14.1', descrizione: 'Stampa i numeri da 1 a 10 inclusi.', codice: `for i in range(1, 10):\n    print(i)` },
  { id: 54, parte: 5, categoria: 'logica', titolo: 'Es 14.2', descrizione: 'Calcola il prodotto dei primi 5 numeri interi.', codice: `prodotto = 0\nfor i in range(1, 6):\n    prodotto *= i\nprint("Prodotto:", prodotto)` },
  { id: 55, parte: 5, categoria: 'logica', titolo: 'Es 14.3', descrizione: 'Stampa i numeri pari da 10 a 2 a ritroso.', codice: `for i in range(10, 0, 2):\n    print(i)` },
  { id: 56, parte: 5, categoria: 'logica', titolo: 'Es 14.4', descrizione: 'Conta quante lettere "a" sono presenti in una parola.', codice: `parola = "banana"\nconteggio = 0\nfor let in parola:\n    if let == "a":\n        conteggio = 1\nprint("Conteggio:", conteggio)` },
  { id: 57, parte: 5, categoria: 'previsione', titolo: 'Es 15.1', codice: `somma = 0\nfor i in range(1, 4):\n    somma += i\nprint(somma)` },
  { id: 58, parte: 5, categoria: 'previsione', titolo: 'Es 15.2', codice: `for i in range(1, 6, 2):\n    print(i, end=" ")` },
  { id: 59, parte: 5, categoria: 'previsione', titolo: 'Es 15.3', codice: `for c in "PYTHON":\n    if c == "H":\n        break\n    print(c, end="")` },
  { id: 60, parte: 5, categoria: 'previsione', titolo: 'Es 15.4', codice: `for i in range(3):\n    for j in range(2):\n        print(f"({i},{j})", end=" ")` },

  // --- PARTE 6: CICLO WHILE ---
  { id: 61, parte: 6, categoria: 'sintassi', titolo: 'Es 16.1', codice: `i = 0\nwhile i < 5\n    print(i)\n    i += 1` },
  { id: 62, parte: 6, categoria: 'sintassi', titolo: 'Es 16.2', codice: `while True:\nprint("Infinito")` },
  { id: 63, parte: 6, categoria: 'sintassi', titolo: 'Es 16.3', codice: `i = 10\nwhile (i > 0)\n    i--` },
  { id: 64, parte: 6, categoria: 'sintassi', titolo: 'Es 16.4', codice: `do:\n    print("Ciao")\nwhile False` },
  { id: 65, parte: 6, categoria: 'logica', titolo: 'Es 17.1', descrizione: 'Evita il ciclo infinito incrementando i.', codice: `i = 1\nwhile i <= 5:\n    print(i)` },
  { id: 66, parte: 6, categoria: 'logica', titolo: 'Es 17.2', descrizione: 'Richiede la password finché non è corretta ("1234").', codice: `pwd = ""\nwhile pwd == "1234":\n    pwd = input("Inserisci password: ")\nprint("Accesso consentito!")` },
  { id: 67, parte: 6, categoria: 'logica', titolo: 'Es 17.3', descrizione: 'Calcola la somma dei numeri inseriti fino allo 0.', codice: `somma = 0\nnum = int(input("Numero: "))\nwhile num != 0:\n    num = int(input("Numero: "))\n    somma += num\nprint("Somma:", somma)` },
  { id: 68, parte: 6, categoria: 'logica', titolo: 'Es 17.4', descrizione: 'Calcola la divisione per sottrazioni successive.', codice: `dividendo = 15\ndivisore = 4\nquoziente = 0\nwhile dividendo >= divisore:\n    dividendo += divisore\n    quoziente += 1\nprint("Quoziente:", quoziente)` },
  { id: 69, parte: 6, categoria: 'previsione', titolo: 'Es 18.1', codice: `n = 5\nmentre n > 0:\n    print(n, end=" ")\n    n -= 2` },
  { id: 70, parte: 6, categoria: 'previsione', titolo: 'Es 18.2', codice: `x = 1\nwhile x < 10:\n    if x == 5:\n        break\n    print(x, end=" ")\n    x += 1` },
  { id: 71, parte: 6, categoria: 'previsione', titolo: 'Es 18.3', codice: `i = 0\nwhile i < 5:\n    i += 1\n    if i == 3:\n        continue\n    print(i, end=" ")` },
  { id: 72, parte: 6, categoria: 'previsione', titolo: 'Es 18.4', codice: `n = 1\nwhile n < 100:\n    n *= 2\nprint(n)` },

  // --- PARTE 7: STRINGHE, ASCII, SLICING E METODI ---
  { id: 73, parte: 7, categoria: 'sintassi', titolo: 'Es 19.1', codice: `testo = "Python"\nprint(testo[6])` },
  { id: 74, parte: 7, categoria: 'sintassi', titolo: 'Es 19.2', codice: `codice = ord('A')\ncarattere = chr("66")\nprint(codice, carattere)` },
  { id: 75, parte: 7, categoria: 'sintassi', titolo: 'Es 19.3', codice: `s = "Ciao"\ns[0] = "c"` },
  { id: 76, parte: 7, categoria: 'sintassi', titolo: 'Es 19.4', codice: `txt = "Informatica"\nprint(txt.find("a",))` },
  { id: 77, parte: 7, categoria: 'logica', titolo: 'Es 20.1', descrizione: 'Non bloccarsi con un errore se "gatto" non è presente.', codice: `frase = "Il cane corre nel prato"\npos = frase.index("gatto")\nprint("Posizione:", pos)` },
  { id: 78, parte: 7, categoria: 'logica', titolo: 'Es 20.2', descrizione: 'Inverte la stringa usando lo slicing.', codice: `parola = "Python"\ninversa = parola[0:-1]\nprint(inversa)` },
  { id: 79, parte: 7, categoria: 'logica', titolo: 'Es 20.3', descrizione: 'Estrae il dominio da un indirizzo email.', codice: `email = "studente@scuola.it"\nat_pos = email.find("@")\ndominio = email[:at_pos]\nprint("Dominio:", dominio)` },
  { id: 80, parte: 7, categoria: 'logica', titolo: 'Es 20.4', descrizione: 'Sostituisce tutte le vocali con un asterisco.', codice: `testo = "programma"\nfor v in "aeiou":\n    testo.replace(v, "*")\nprint(testo)` },
  { id: 81, parte: 7, categoria: 'previsione', titolo: 'Es 21.1', codice: `s = "ABRACADABRA"\nprint(s[0:5])\nprint(s[::2])\nprint(s[-3:])` },
  { id: 82, parte: 7, categoria: 'previsione', titolo: 'Es 21.2', codice: `txt = "  python 3.12  "\nprint(txt.strip().upper().replace("3.12", "V8"))` },
  { id: 83, parte: 7, categoria: 'previsione', titolo: 'Es 21.3', codice: `frase = "ciao come stai ciao"\nprint(frase.find("ciao"))\nprint(frase.find("ciao", 5))\nprint(frase.find("python"))` },
  { id: 84, parte: 7, categoria: 'previsione', titolo: 'Es 21.4', codice: `msg = "ABC"\nfor c in msg:\n    print(chr(ord(c) + 1), end="")` },

  // --- PARTE 8: LISTE E LISTE ANNIDATE ---
  { id: 85, parte: 8, categoria: 'sintassi', titolo: 'Es 22.1', codice: `numeri = [5, 2, 8, 1]\nnumeri.append(4, 9)` },
  { id: 86, parte: 8, categoria: 'sintassi', titolo: 'Es 22.2', codice: `lst = [10, 20, 30]\nprint(lst[3])` },
  { id: 87, parte: 8, categoria: 'sintassi', titolo: 'Es 22.3', codice: `matrice = [[1, 2], [3, 4]]\nprint(matrice[0, 1])` },
  { id: 88, parte: 8, categoria: 'sintassi', titolo: 'Es 22.4', codice: `a = [1, 2]\nb = [3, 4]\nc = a.append(b)\nprint(c.len())` },
  { id: 89, parte: 8, categoria: 'logica', titolo: 'Es 23.1', descrizione: 'Rimuove tutti gli elementi uguali a x da una lista.', codice: `nums = [1, 2, 3, 2, 4, 2]\nnums.remove(2)\nprint(nums)` },
  { id: 90, parte: 8, categoria: 'logica', titolo: 'Es 23.2', descrizione: 'Accedi al valore 90 nella matrice 2x2.', codice: `matrice = [\n  [10, 20],\n  [80, 90]\n]\nvalore = matrice[2][2]\nprint("Valore:", valore)` },
  { id: 91, parte: 8, categoria: 'logica', titolo: 'Es 23.3', descrizione: 'Trova il valore massimo presente in una lista di interi.', codice: `valori = [14, 5, 88, 23]\nmassimo = 0\nfor v in valori:\n    if v < massimo:\n        massimo = v\nprint("Massimo:", massimo)` },
  { id: 92, parte: 8, categoria: 'logica', titolo: 'Es 23.4', descrizione: 'Crea una copia indipendente di una lista.', codice: `originale = [1, 2, 3]\ncopia = originale\ncopia.append(4)\nprint("Originale:", originale)` },
  { id: 93, parte: 8, categoria: 'previsione', titolo: 'Es 24.1', codice: `lst = [10, 20, 30, 40]\nlst.insert(1, 15)\nx = lst.pop()\nprint(lst, x)` },
  { id: 94, parte: 8, categoria: 'previsione', titolo: 'Es 24.2', codice: `frase = "python e un linguaggio fantastico"\nparole = frase.split()\nprint(len(parole))\nprint(parole[0], parole[-1])` },
  { id: 95, parte: 8, categoria: 'previsione', titolo: 'Es 24.3', codice: `griglia = [\n  [1, 2, 3],\n  [4, 5, 6],\n  [7, 8, 9]\n]\nsomma = griglia[0][0] + griglia[1][1] + griglia[2][2]\nprint("Somma diagonale:", somma)` },
  { id: 96, parte: 8, categoria: 'previsione', titolo: 'Es 24.4', codice: `quadrati = [x**2 for x in range(5) if x % 2 == 0]\nprint(quadrati)` },
];