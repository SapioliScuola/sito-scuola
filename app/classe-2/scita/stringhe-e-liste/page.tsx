'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function StringheEListePage() {
  // Stato per il simulatore di Slicing delle Stringhe
  const [testoSlice, setTestoSlice] = useState<string>('PYTHON');
  const [startIdx, setStartIdx] = useState<number>(0);
  const [endIdx, setEndIdx] = useState<number>(4);

  // Stato per il simulatore chr() e ord()
  const [charCode, setCharCode] = useState<number>(65);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Link di navigazione */}
      <Link 
        href="/classe-2/scita" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a SCITA Classe 2ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-10 text-gray-800">
        
        {/* Header Principale */}
        <header className="border-b-4 border-indigo-600 pb-4">
          <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Materia: SCITA • Classe 2ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            🔤 Le Stringhe e le Liste in Python
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Guida completa alle sequenze: indicizzazione, slicing, conversioni ASCII con <code>chr()</code>, metodi delle stringhe e strutture di dati con liste annidate.
          </p>
        </header>

        {/* SEZIONE 1: STRINGHE E CODIFICA ASCII (len, chr, ord) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2 flex items-center gap-2">
            1. Le Stringhe, Funzioni <code>len()</code>, <code>chr()</code> ed <code>ord()</code>
          </h2>
          <p className="text-sm leading-relaxed">
            In Python una stringa (<code>str</code>) è una sequenza immutabile di caratteri. La funzione <code>len()</code> ne restituisce la lunghezza, mentre <code>ord()</code> e <code>chr()</code> consentono di convertire un carattere nel rispettivo codice numerico ASCII e viceversa.
          </p>

          <div className="grid md:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 bg-slate-900 text-green-400 rounded border border-slate-700">
              <span className="text-amber-400 font-bold block mb-1">len(s)</span>
              s = "Informatica"<br />
              print(len(s))  # Output: 11
            </div>
            <div className="p-3 bg-slate-900 text-green-400 rounded border border-slate-700">
              <span className="text-amber-400 font-bold block mb-1">ord(c)</span>
              print(ord("A"))  # Output: 65<br />
              print(ord("a"))  # Output: 97
            </div>
            <div className="p-3 bg-slate-900 text-green-400 rounded border border-slate-700">
              <span className="text-amber-400 font-bold block mb-1">chr(n)</span>
              print(chr(65))  # Output: 'A'<br />
              print(chr(97))  # Output: 'a'
            </div>
          </div>

          {/* Mini-Simulatore chr / ord */}
          <div className="bg-slate-900 text-white p-4 rounded-xl border border-slate-700 space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              🧪 Simulatore Convertitore ASCII: chr() ed ord()
            </span>
            <div className="flex items-center gap-4 text-xs font-mono">
              <label>Codice ASCII (32-126):</label>
              <input 
                type="number" 
                min={32} 
                max={126} 
                value={charCode} 
                onChange={(e) => setCharCode(Number(e.target.value))}
                className="w-20 p-1 bg-slate-800 text-emerald-400 border border-slate-700 rounded text-center font-bold"
              />
              <span>→ <code>chr({charCode})</code> = <strong className="text-yellow-300 text-base">{String.fromCharCode(charCode)}</strong></span>
            </div>
          </div>
        </section>

        {/* SEZIONE 2: INDICIZZAZIONE E SLICING */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            2. Indicizzazione e Slicing <code>[start:stop:step]</code>
          </h2>
          <p className="text-sm leading-relaxed">
            Ogni carattere di una stringa possiede un indice numerico a partire da 0 (o da -1 partendo da destra). Lo **slicing** permette di estrarre una sotto-stringa indicando <code>stringa[inizio:fine:passo]</code> dove l'indice finale è sempre **escluso**.
          </p>

          {/* Simulatore Slicing */}
          <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-700 space-y-3 font-mono text-xs">
            <span className="text-emerald-400 font-bold block text-center uppercase tracking-wider">
              🔍 Simulatore Slicing Interattivo
            </span>
            <div className="flex flex-wrap gap-3 items-center justify-center bg-slate-800 p-3 rounded">
              <div>
                <label className="block text-gray-400 text-[10px]">Testo:</label>
                <input 
                  type="text" 
                  value={testoSlice} 
                  onChange={(e) => setTestoSlice(e.target.value)}
                  className="p-1 bg-slate-900 text-green-400 rounded border border-slate-700 font-bold w-28 text-center"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-[10px]">Start (inizio):</label>
                <input 
                  type="number" 
                  value={startIdx} 
                  onChange={(e) => setStartIdx(Number(e.target.value))}
                  className="p-1 bg-slate-900 text-green-400 rounded border border-slate-700 font-bold w-16 text-center"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-[10px]">Stop (fine escluso):</label>
                <input 
                  type="number" 
                  value={endIdx} 
                  onChange={(e) => setEndIdx(Number(e.target.value))}
                  className="p-1 bg-slate-900 text-green-400 rounded border border-slate-700 font-bold w-16 text-center"
                />
              </div>
            </div>
            <div className="text-center p-2 bg-black rounded text-amber-300 font-bold text-sm">
              Slicing <code>{testoSlice}[{startIdx}:{endIdx}]</code> → "{testoSlice.slice(startIdx, endIdx)}"
            </div>
          </div>
        </section>

        {/* SEZIONE 3: METODI OGGETTO STRINGA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            3. Metodi dell'Oggetto Stringa (find, index, count)
          </h2>

          <div className="grid md:grid-cols-3 gap-3 text-xs">
            <div className="p-4 border rounded bg-gray-50 border-gray-200 space-y-2">
              <h3 className="font-bold text-blue-900 text-sm">find(sub)</h3>
              <p className="text-gray-600">Restituisce l'indice della prima occorrenza. Se la sottostringa non è presente, restituisce <strong>-1</strong> senza causare errori.</p>
              <pre className="bg-slate-900 text-green-400 p-2 rounded font-mono text-[10px]">
                <code>txt = "scuola"<br />txt.find("uo") # 2<br />txt.find("z")  # -1</code>
              </pre>
            </div>

            <div className="p-4 border rounded bg-gray-50 border-gray-200 space-y-2">
              <h3 className="font-bold text-purple-900 text-sm">index(sub)</h3>
              <p className="text-gray-600">Funziona come <code>find()</code>, ma se il carattere non viene trovato solleva un errore di tipo <strong>ValueError</strong>.</p>
              <pre className="bg-slate-900 text-green-400 p-2 rounded font-mono text-[10px]">
                <code>txt = "scuola"<br />txt.index("o") # 3<br /># txt.index("z") errore!</code>
              </pre>
            </div>

            <div className="p-4 border rounded bg-gray-50 border-gray-200 space-y-2">
              <h3 className="font-bold text-emerald-900 text-sm">count(sub)</h3>
              <p className="text-gray-600">Conta quante volte una determinata sottostringa si ripete all'interno del testo trasmesso.</p>
              <pre className="bg-slate-900 text-green-400 p-2 rounded font-mono text-[10px]">
                <code>txt = "banana"<br />txt.count("a") # 3<br />txt.count("na") # 2</code>
              </pre>
            </div>
          </div>
        </section>

        {/* SEZIONE 4: LISTE E LISTE ANNIDATE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            4. Le Liste e Liste Annidate (Matrici)
          </h2>
          <p className="text-sm leading-relaxed">
            Una lista (<code>list</code>) è una sequenza <strong>mutabile</strong> di elementi racchiusi tra parentesi quadre <code>[]</code>. Una **lista annidata** contiene altre liste al suo interno ed è comunemente usata per rappresentare matrici a due dimensioni.
          </p>

          <pre className="bg-slate-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto leading-relaxed">
            <code>
{`# Definizione di una matrice 2x3 (lista di liste)
matrice = [
    [10, 20, 30],
    [40, 50, 60]
]

print(matrice[0])       # [10, 20, 30] (Prima riga)
print(matrice[1][2])    # 60 (Seconda riga, terzo elemento)`}
            </code>
          </pre>
        </section>

        {/* SEZIONE 5: METODI DELLE LISTE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-indigo-900 border-b border-gray-200 pb-2">
            5. Principali Metodi delle Liste
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-xs">
              <thead>
                <tr className="bg-indigo-100 text-indigo-900 font-bold">
                  <th className="p-2 border border-gray-300 text-left">Metodo</th>
                  <th className="p-2 border border-gray-300 text-left">Descrizione</th>
                  <th className="p-2 border border-gray-300 text-left">Esempio Python</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border font-mono font-bold">append(x)</td>
                  <td className="p-2 border">Aggiunge un elemento alla fine della lista</td>
                  <td className="p-2 border font-mono">v.append(5)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border font-mono font-bold">insert(i, x)</td>
                  <td className="p-2 border">Inserisce l'elemento x all'indice specificato i</td>
                  <td className="p-2 border font-mono">v.insert(0, 99)</td>
                </tr>
                <tr>
                  <td className="p-2 border font-mono font-bold">remove(x)</td>
                  <td className="p-2 border">Rimuove il primo elemento valore x presente</td>
                  <td className="p-2 border font-mono">v.remove(10)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border font-mono font-bold">pop(i)</td>
                  <td className="p-2 border">Rimuove e restituisce l'elemento all'indice i (di default l'ultimo)</td>
                  <td className="p-2 border font-mono">ultimo = v.pop()</td>
                </tr>
                <tr>
                  <td className="p-2 border font-mono font-bold">sort()</td>
                  <td className="p-2 border">Ordina gli elementi della lista in modo crescente in-place</td>
                  <td className="p-2 border font-mono">v.sort()</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-2 border font-mono font-bold">reverse()</td>
                  <td className="p-2 border">Inverte l'ordine degli elementi della lista</td>
                  <td className="p-2 border font-mono">v.reverse()</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}