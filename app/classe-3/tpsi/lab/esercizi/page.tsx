'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function EserciziLabPage() {
  // Stati per il codice HTML degli editor interattivi
  const [codeEx1, setCodeEx1] = useState<string>(
    '<!DOCTYPE html>\n<html>\n<head>\n  <title>Il Mio Profilo Web</title>\n</head>\n<body>\n  <h1>Nome e Cognome</h1>\n  <p>Ciao! Sono uno studente. La mia passione è la <strong>programmazione web</strong> e il mio hobby è <em>leggere</em>.</p>\n</body>\n</html>'
  );

  const [codeEx2, setCodeEx2] = useState<string>(
    '<h2>Ingredienti</h2>\n<ul>\n  <li>Pasta</li>\n  <li>Guanciale</li>\n</ul>\n<h2>Preparazione</h2>\n<ol>\n  <li>Rosolare il guanciale</li>\n  <li>Scolare la pasta\n    <ul>\n      <li>Consiglio dello chef: mantecare a fuoco spento</li>\n    </ul>\n  </li>\n</ol>'
  );

  const [codeEx3, setCodeEx3] = useState<string>(
    '<table border="1">\n  <thead>\n    <tr>\n      <th>Ora</th>\n      <th>Lunedì</th>\n      <th>Martedì</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>1ª Ora</td>\n      <td>TPSI</td>\n      <td rowspan="2">Lab. Informatica</td>\n    </tr>\n    <tr>\n      <td>2ª Ora</td>\n      <td>Matematica</td>\n    </tr>\n    <tr>\n      <td>11:00</td>\n      <td colspan="2">RICREAZIONE</td>\n    </tr>\n  </tbody>\n</table>'
  );

  const [codeEx5, setCodeEx5] = useState<string>(
    '<form action="#" method="POST">\n  <label>Nome e Cognome *:</label><br>\n  <input type="text" required><br><br>\n  \n  <label>Provincia:</label><br>\n  <select>\n    <option>Seleziona...</option>\n    <option>MI</option>\n    <option>RM</option>\n  </select><br><br>\n  \n  <input type="submit" value="Invia Dati">\n</form>'
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Link di navigazione per tornare alla pagina principale del laboratorio */}
      <Link 
        href="/classe-3/tpsi/lab" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna alla Pagina Principale del Laboratorio
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-10 text-gray-800">
        
        {/* Header della Sottopagina */}
        <header className="border-b-4 border-emerald-600 pb-4">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Laboratorio TPSI • Sottopagina Esercizi
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            🏋️ Palestra di Programmazione HTML5
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Scrivi e modifica il codice HTML negli editor di ciascun esercizio e osserva in tempo reale l'anteprima del rendering visivo.
          </p>
        </header>

        {/* SEZIONE 1: LIVELLO BASE */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-emerald-800 border-b border-emerald-200 pb-2 flex items-center gap-2">
            🟢 Livello Base: Struttura Documento, Intestazioni e Formattazione
          </h2>

          {/* Esercizio 1 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-3">
            <span className="bg-emerald-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 1</span>
            <h3 className="font-bold text-gray-900 text-base">La Prima Pagina Personale HTML5</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Crea un file con la struttura standard HTML5 (<code>{"<!DOCTYPE html>"}</code>, <code>{"<html>"}</code>, <code>{"<head>"}</code>, <code>{"<body>"}</code>).
              Includi un titolo principale <code>{"<h1>"}</code> con il tuo nome e un paragrafo <code>{"<p>"}</code> di presentazione con <code>{"<strong>"}</code> ed <code>{"<em>"}</code>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-3 pt-2">
              <div>
                <span className="text-[11px] font-mono font-bold text-gray-500 block mb-1">💻 Editor Codice HTML:</span>
                <textarea
                  value={codeEx1}
                  onChange={(e) => setCodeEx1(e.target.value)}
                  rows={8}
                  className="w-full p-3 bg-slate-900 text-green-400 font-mono text-xs rounded border border-slate-700 outline-none leading-relaxed"
                />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-gray-500 block mb-1">🌐 Anteprima Browser Live:</span>
                <div 
                  className="p-4 bg-white border border-gray-300 rounded h-[185px] overflow-y-auto text-xs"
                  dangerouslySetInnerHTML={{ __html: codeEx1 }}
                />
              </div>
            </div>
          </div>

          {/* Esercizio 2 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-3">
            <span className="bg-emerald-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 2</span>
            <h3 className="font-bold text-gray-900 text-base">Elenchi Ordinati e Non Ordinati Nidificati</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Crea una pagina con un elenco puntato (<code>{"<ul>"}</code>) per gli **Ingredienti** e un elenco numerato (<code>{"<ol>"}</code>) per i **Passaggi**, nidificando un sotto-elenco per i consigli dello chef.
            </p>

            <div className="grid md:grid-cols-2 gap-3 pt-2">
              <div>
                <span className="text-[11px] font-mono font-bold text-gray-500 block mb-1">💻 Editor Codice HTML:</span>
                <textarea
                  value={codeEx2}
                  onChange={(e) => setCodeEx2(e.target.value)}
                  rows={8}
                  className="w-full p-3 bg-slate-900 text-green-400 font-mono text-xs rounded border border-slate-700 outline-none leading-relaxed"
                />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-gray-500 block mb-1">🌐 Anteprima Browser Live:</span>
                <div 
                  className="p-4 bg-white border border-gray-300 rounded h-[185px] overflow-y-auto text-xs"
                  dangerouslySetInnerHTML={{ __html: codeEx2 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SEZIONE 2: TABELLE ED ELEMENTI MULTIMEDIALI */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-amber-800 border-b border-amber-200 pb-2 flex items-center gap-2">
            🟡 Livello Intermedio: Tabelle, Collegamenti Ipertestuali ed Immagini
          </h2>

          {/* Esercizio 3 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-3">
            <span className="bg-amber-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 3</span>
            <h3 className="font-bold text-gray-900 text-base">Orario Scolastico Completo con Tabelle (colspan/rowspan)</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Crea la tabella dell'orario scolastico unendo la riga della Ricreazione su più colonne con <code>{"colspan"}</code> e le ore di laboratorio con <code>{"rowspan"}</code>.
            </p>

            <div className="grid md:grid-cols-2 gap-3 pt-2">
              <div>
                <span className="text-[11px] font-mono font-bold text-gray-500 block mb-1">💻 Editor Codice HTML:</span>
                <textarea
                  value={codeEx3}
                  onChange={(e) => setCodeEx3(e.target.value)}
                  rows={10}
                  className="w-full p-3 bg-slate-900 text-green-400 font-mono text-xs rounded border border-slate-700 outline-none leading-relaxed"
                />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-gray-500 block mb-1">🌐 Anteprima Browser Live:</span>
                <div 
                  className="p-4 bg-white border border-gray-300 rounded h-[225px] overflow-y-auto text-xs"
                  dangerouslySetInnerHTML={{ __html: codeEx3 }}
                />
              </div>
            </div>
          </div>

          {/* Esercizio 4 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-2">
            <span className="bg-amber-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 4</span>
            <h3 className="font-bold text-gray-900 text-base">Collegamenti Ipertestuali (Assoluti, Relativi e Ancore)</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Crea una pagina con tre tipi di link: relativo, assoluto (<code>{"target=\"_blank\""}</code>) ed ancora interna verso un id a fondo pagina.
            </p>
          </div>
        </section>

        {/* SEZIONE 3: FORM ED INTERATTIVITÀ HTML5 */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-red-800 border-b border-red-200 pb-2 flex items-center gap-2">
            🔴 Livello Avanzato: Moduli Form, Input e Mappe d'Immagine
          </h2>

          {/* Esercizio 5 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-3">
            <span className="bg-red-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 5</span>
            <h3 className="font-bold text-gray-900 text-base">Form di Registrazione Utente Completo</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Crea un modulo <code>{"<form>"}</code> con campi testo obbligatori (<code>{"required"}</code>), menu a discesa <code>{"<select>"}</code> e pulsante di invio.
            </p>

            <div className="grid md:grid-cols-2 gap-3 pt-2">
              <div>
                <span className="text-[11px] font-mono font-bold text-gray-500 block mb-1">💻 Editor Codice HTML:</span>
                <textarea
                  value={codeEx5}
                  onChange={(e) => setCodeEx5(e.target.value)}
                  rows={9}
                  className="w-full p-3 bg-slate-900 text-green-400 font-mono text-xs rounded border border-slate-700 outline-none leading-relaxed"
                />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold text-gray-500 block mb-1">🌐 Anteprima Browser Live:</span>
                <div 
                  className="p-4 bg-white border border-gray-300 rounded h-[205px] overflow-y-auto text-xs"
                  dangerouslySetInnerHTML={{ __html: codeEx5 }}
                />
              </div>
            </div>
          </div>

          {/* Esercizio 6 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-2">
            <span className="bg-red-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 6</span>
            <h3 className="font-bold text-gray-900 text-base">Tipi di Input HTML5 e Validazione Native</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Realizza una pagina per le prenotazioni usando i nuovi tipi di input HTML5: <code>{"date"}</code>, <code>{"number"}</code> (con <code>{"min"}</code>/<code>{"max"}</code>), <code>{"range"}</code> e <code>{"color"}</code>.
            </p>
          </div>

          {/* Esercizio 7 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-2">
            <span className="bg-red-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 7</span>
            <h3 className="font-bold text-gray-900 text-base">Integrazione di Elementi Audio, Video e iframe</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Crea una pagina multimediale che includa un lettore video HTML5 (<code>{"<video controls>"}</code>), un lettore audio ed un quadro <code>{"<iframe>"}</code> incorporato.
            </p>
          </div>

          {/* Esercizio 8 */}
          <div className="border p-5 rounded-lg bg-gray-50 border-gray-200 space-y-2">
            <span className="bg-red-600 text-white font-mono text-[10px] font-bold px-2 py-0.5 rounded">Esercizio 8</span>
            <h3 className="font-bold text-gray-900 text-base">Mappe d'Immagine Interattive (map e area con usemap)</h3>
            <p className="text-xs text-gray-700 leading-relaxed">
              Crea un'immagine mappata tramite gli elementi <code>{"<img usemap=\"#miamappa\">"}</code>, <code>{"<map name=\"miamappa\">"}</code> ed i sotto-elementi <code>{"<area>"}</code> rettangolari e circolari.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}