'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ImmaginiELinkLabPage() {
  const [htmlCode, setHtmlCode] = useState<string>(
`<h3 align="left">1. Immagine Standard</h3>
<img src="https://picsum.photos/300/150" alt="Paesaggio casuale" width="300" height="150" border="1">

<h3 align="left">2. Collegamento Ipertestuale (Link)</h3>
<p align="left">
  Visita il sito <a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a> per approfondire.
</p>

<h3 align="left">3. Immagine Cliccabile (img + href)</h3>
<p align="left">Clicca sull'immagine con bordo per aprire la documentazione:</p>
<a href="https://developer.mozilla.org" target="_blank">
  <img src="https://picsum.photos/300/150?grayscale" alt="Link tramite immagine" width="300" height="150" border="3">
</a>`
  );

  // Stringa di codice di esempio per evitare qualsiasi errore di parsing JSX
  const esempioNidificazione = '<a href="destinazione.html"><img src="foto.jpg" alt="Descrizione" border="1"></a>';

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link 
        href="/classe-3/tpsi/lab" 
        className="text-sm text-emerald-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna al Laboratorio TPSI
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-10 text-gray-800">
        
        <header className="border-b-4 border-purple-500 pb-4">
          <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Modulo 4 • HTML5 Media e Link
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            🖼️ Immagini e Collegamenti (img e a href)
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Inserire risorse multimediali, creare link ipertestuali e formattare le immagini con attributi nativi HTML.
          </p>
        </header>

        {/* 1. TAG IMG */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. Il Tag img
          </h2>
          <p className="text-sm leading-relaxed">
            Il tag <code>img</code> è un elemento autochiudente che mostra immagini e supporta attributi diretti di formattazione.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-purple-900 mb-1 font-mono">src</h3>
              <p className="text-xs text-gray-700">Specifica l URL o il percorso del file immagine da caricare.</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-blue-900 mb-1 font-mono">alt</h3>
              <p className="text-xs text-gray-700">Testo alternativo descrittivo per l accessibilità e in caso di errore di caricamento.</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-emerald-900 mb-1 font-mono">width e height</h3>
              <p className="text-xs text-gray-700">Dimensioni dell immagine in pixel.</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-amber-900 mb-1 font-mono">border</h3>
              <p className="text-xs text-gray-700">Attributo HTML nativo per impostare lo spessore del bordo in pixel attorno all immagine.</p>
            </div>
          </div>
        </section>

        {/* 2. TAG A E HREF */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Il Tag a (Anchor) e l Attributo href
          </h2>
          <p className="text-sm">
            Il tag <code>a</code> crea un collegamento ipertestuale verso un altra pagina Web o una risorsa esterna.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-blue-900 mb-1 font-mono">href</h3>
              <p className="text-xs text-gray-700">Indica la destinazione del link (es. URL o percorso pagina).</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-amber-900 mb-1 font-mono">target="_blank"</h3>
              <p className="text-xs text-gray-700">Apre il collegamento in una nuova scheda del browser.</p>
            </div>
          </div>
        </section>

        {/* 3. COMBINARE IMG E HREF */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Immagini Cliccabili (Nidificazione)
          </h2>
          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg space-y-2 text-sm">
            <p className="font-bold text-purple-900">Regola di nidificazione:</p>
            <p className="text-xs text-gray-700">
              Per rendere un immagine cliccabile, basta racchiudere il tag <code>img</code> all interno dell elemento <code>a</code>:
            </p>
            <p className="font-mono text-xs bg-white p-2 rounded border border-purple-200 text-purple-900">
              {esempioNidificazione}
            </p>
          </div>
        </section>

        {/* 4. PLAYGROUND INTERATTIVO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            4. Playground Interattivo
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