'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TabelleListeLabPage() {
  const [htmlCode, setHtmlCode] = useState<string>(
`<caption align="top"><b>Orario delle Lezioni</b></caption>
<table border="1" bgcolor="#ffffff" align="center" width="100%" cellpadding="8" cellspacing="0">
  <thead>
    <tr bgcolor="#2563eb" align="center">
      <th><font color="white">Ora</font></th>
      <th><font color="white">Lunedì</font></th>
      <th><font color="white">Martedì</font></th>
    </tr>
  </thead>
  <tbody>
    <tr bgcolor="#f1f5f9">
      <td align="center"><b>1ª Ora</b></td>
      <td align="left">TPSI</td>
      <td align="left">Informatica</td>
    </tr>
    <tr bgcolor="#ffffff">
      <td align="center"><b>2ª Ora</b></td>
      <td align="left">Sistemi</td>
      <td align="left">TPSI</td>
    </tr>
  </tbody>
</table>

<h3 align="left">Materiale Occorrente</h3>
<ol type="A">
  <li>Quaderno ad anelli</li>
  <li>Penna blu o nera</li>
</ol>`
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link 
        href="/classe-3/tpsi/lab" 
        className="text-sm text-emerald-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna al Laboratorio TPSI
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-10 text-gray-800">
        
        <header className="border-b-4 border-blue-500 pb-4">
          <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Modulo 3 • HTML5 Avanzato
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            📊 Tabelle e Liste in HTML5
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Formattare tabelle e liste usando esclusivamente gli attributi HTML nativi.
          </p>
        </header>

        {/* 1. LE TABELLE E ATTRIBUTI NATIVI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. Gli Attributi delle Tabelle
          </h2>
          <p className="text-sm leading-relaxed">
            I tag di tabella supportano diversi attributi HTML diretti per la formattazione:
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-blue-900 mb-1 font-mono">border="1"</h3>
              <p className="text-xs text-gray-700">Definisce lo spessore del bordo attorno alle celle della tabella in pixel.</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-purple-900 mb-1 font-mono">bgcolor="#colore"</h3>
              <p className="text-xs text-gray-700">Imposta il colore di sfondo della tabella intera, di una riga (tr) o di una singola cella (td/th).</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-amber-900 mb-1 font-mono">cellpadding="8"</h3>
              <p className="text-xs text-gray-700">Spazio interno in pixel tra il bordo della cella e il suo contenuto.</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-emerald-900 mb-1 font-mono">cellspacing="0"</h3>
              <p className="text-xs text-gray-700">Distanza in pixel tra le varie celle adiacenti.</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50 md:col-span-2">
              <h3 className="font-bold text-orange-900 mb-1 font-mono">align="left|center|right"</h3>
              <p className="text-xs text-gray-700">Allinea la tabella nella pagina oppure il contenuto testuale all interno delle celle.</p>
            </div>
          </div>
        </section>

        {/* 2. LE LISTE IN HTML */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Liste Puntate e Ordinate
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-blue-900 mb-1 font-mono">ul (Unordered List)</h3>
              <p className="text-xs text-gray-700">Crea una lista non ordinata (puntata).</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-purple-900 mb-1 font-mono">ol (Ordered List)</h3>
              <p className="text-xs text-gray-700">Crea una lista ordinata (numerata).</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50 md:col-span-2">
              <h3 className="font-bold text-emerald-900 mb-1 font-mono">type="1|A|a|I|i"</h3>
              <p className="text-xs text-gray-700">Attributo per impostare il tipo di marcatore della lista ordinata.</p>
            </div>
          </div>
        </section>

        {/* 3. PLAYGROUND INTERATTIVO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Playground Interattivo
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Codice HTML:
              </label>
              <textarea
                value={htmlCode}
                onChange={(e) => setHtmlCode(e.target.value)}
                rows={12}
                className="w-full p-3 font-mono text-xs bg-gray-900 text-green-400 rounded-lg border border-gray-800 outline-none leading-relaxed"
                spellCheck={false}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Anteprima:
              </label>
              <div 
                className="w-full h-[235px] p-4 bg-white border border-gray-300 rounded-lg overflow-y-auto prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: htmlCode }}
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}