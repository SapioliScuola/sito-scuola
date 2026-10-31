'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HtmlBaseLabPage() {
  const [htmlCode, setHtmlCode] = useState<string>(
`<!DOCTYPE html>
<html lang="it">
  <head>
    <title>Il mio primo sito Web</title>
  </head>
  <body bgcolor="#f8fafc">
    
    <!-- Intestazione con colore di sfondo e allineamento centrale -->
    <header align="center">
      <h1>Intestazione Principale</h1>
    </header>

    <main>
      <p align="left">Benvenuti nel laboratorio di <strong>TPSI</strong>!</p>      
      <p align="center">Questo testo è centrato usando solo l'attributo HTML align.</p>
    </main>

  </body>
</html>`
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
        
        <header className="border-b-4 border-orange-500 pb-4">
          <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Modulo 2 • HTML5 Base
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            Primi passi con HTML5: Struttura, Tag e Indentazione
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Guida essenziale alla struttura dei documenti Web e all uso degli attributi HTML.
          </p>
        </header>

        {/* 1. TAG FONDAMENTALI */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. I Tag di Struttura Principali
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-blue-900 mb-1">html</h3>
              <p className="text-xs text-gray-700">Elemento radice (root) che racchiude l intero documento.</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-purple-900 mb-1">head</h3>
              <p className="text-xs text-gray-700">Contiene metadati, titolo della scheda e collegamenti esterni.</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-amber-900 mb-1">title</h3>
              <p className="text-xs text-gray-700">Definisce il titolo mostrato sulla scheda del browser.</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-emerald-900 mb-1">body</h3>
              <p className="text-xs text-gray-700">Racchiude tutto il contenuto visibile dell utente.</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50 md:col-span-2">
              <h3 className="font-bold text-orange-900 mb-1">h1 ... h6</h3>
              <p className="text-xs text-gray-700">Titoli della pagina. Il tag h1 rappresenta il titolo principale (di norma uno solo per pagina).</p>
            </div>
          </div>
        </section>

        {/* 2. ATTRIBUTI DI FORMATTAZIONE HTML */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Attributi HTML per lo Stile
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-blue-900 mb-1 font-mono">align="left|center|right"</h3>
              <p className="text-xs text-gray-700">Allinea il testo o gli elementi all interno del contenitore.</p>
            </div>
            <div className="border p-4 rounded-lg bg-gray-50">
              <h3 className="font-bold text-purple-900 mb-1 font-mono">bgcolor="#colore"</h3>
              <p className="text-xs text-gray-700">Imposta il colore di sfondo di un elemento o del corpo della pagina (body).</p>
            </div>
          </div>
        </section>

        {/* 3. PLAYGROUND INTERATTIVO */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Editor Interattivo
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
                className="w-full p-3 font-mono text-xs bg-gray-900 text-green-400 rounded-lg border border-gray-800 outline-none"
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