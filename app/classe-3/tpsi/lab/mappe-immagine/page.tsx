'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MappeImmagineLabPage() {
  const [htmlCode, setHtmlCode] = useState<string>(
`<h3 align="left">Mappa Interattiva dell'Immagine</h3>
<p align="left">Passa il mouse sull'immagine e clicca sulle diverse aree (Pianeta, Stella, Rettangolo):</p>

<!-- Immagine principale associata alla mappa tramite usemap -->
<img src="https://picsum.photos/id/1069/500/250" alt="Paesaggio con forme" width="500" height="250" usemap="#mappademo" border="2">

<!-- Definizione della mappa d'immagine -->
<map name="mappademo">
  <!-- Area Circolare (Sole/Pianeta): centro X=120, centro Y=120, raggio R=50 -->
  <area shape="circle" coords="120,120,50" href="https://it.wikipedia.org/wiki/Cerchio" alt="Cerchio" target="_blank" title="Area Circolare">

  <!-- Area Rettangolare: X1=250, Y1=50, X2=450, Y2=150 -->
  <area shape="rect" coords="250,50,450,150" href="https://it.wikipedia.org/wiki/Rettangolo" alt="Rettangolo" target="_blank" title="Area Rettangolare">

  <!-- Area Poligonale (Triangolo/Stella): X1,Y1, X2,Y2, X3,Y3 -->
  <area shape="poly" coords="100,200,150,240,50,240" href="https://it.wikipedia.org/wiki/Triangolo" alt="Poligono" target="_blank" title="Area Poligonale">
</map>`
  );

  // Variabili per i frammenti di codice esplicativi (scudo contro errori di parsing JSX)
  const snippetUsemap = '<img src="foto.jpg" usemap="#nomemappa" width="500" height="300" border="0">';
  const snippetMap = '<map name="nomemappa"> ... </map>';
  const snippetArea = '<area shape="rect" coords="X1,Y1,X2,Y2" href="pagina.html" alt="Descrizione">';

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link 
        href="/classe-3/tpsi/lab" 
        className="text-sm text-emerald-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna al Laboratorio TPSI
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-10 text-gray-800">
        
        <header className="border-b-4 border-indigo-500 pb-4">
          <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Modulo 5 • HTML5 Avanzato
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            🗺️ Mappe d'Immagine: usemap, map e area
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Rendere cliccabili porzioni specifiche di un'unica immagine definendo aree geometriche (rettangoli, cerchi e poligoni).
          </p>
        </header>

        {/* 1. IL TAG IMG E L'ATTRIBUTO USEMAP */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. Collegare l'Immagine alla Mappa (usemap)
          </h2>
          <p className="text-sm leading-relaxed">
            L'attributo <code>usemap</code> inserito nel tag <code>img</code> indica al browser quale mappa d'immagine utilizzare. Il valore deve iniziare con il carattere cancelletto (<code>#</code>) seguito dal nome della mappa.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-2">
            <h3 className="font-bold text-indigo-900 text-sm font-mono">Sintassi img usemap:</h3>
            <p className="font-mono text-xs bg-white p-2 rounded border border-gray-300 text-indigo-900">
              {snippetUsemap}
            </p>
          </div>
        </section>

        {/* 2. IL TAG MAP E GLI ELEMENTI AREA */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Il Tag map e le Aree Cliccabili (area)
          </h2>
          <p className="text-sm">
            Il tag <code>map</code> definisce la mappa e usa l'attributo <code>name</code> per farsi riconoscere dal tag <code>img</code>. Al suo interno racchiude uno o più tag autochiudenti <code>area</code>.
          </p>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50 space-y-1">
              <h3 className="font-bold text-indigo-900 font-mono">map name="nome"</h3>
              <p className="text-xs text-gray-700">Contenitore delle regioni cliccabili. Il nome deve corrispondere al valore di usemap (senza il cancelletto).</p>
            </div>

            <div className="border p-4 rounded-lg bg-gray-50 space-y-1">
              <h3 className="font-bold text-purple-900 font-mono">area shape="..."</h3>
              <p className="text-xs text-gray-700">Definisce la forma geometrica dell'area (rect, circle, poly o default).</p>
            </div>
          </div>
        </section>

        {/* 3. SHAPE E COORDS: VALORI DELLE COORDINATE */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Forme (shape) e Coordinate (coords)
          </h2>
          <p className="text-sm">
            L'attributo <code>coords</code> specifica la posizione dell'area in pixel, partendo dall'angolo in alto a sinistra dell'immagine (0,0):
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-blue-50 border-blue-200 space-y-2">
              <h3 className="font-bold text-blue-900 font-mono">shape="rect"</h3>
              <p className="text-xs text-gray-700 font-semibold">Rettangolo</p>
              <p className="text-xs text-gray-600">Richiede 4 coordinate:</p>
              <p className="font-mono text-[11px] bg-white p-1 rounded border border-blue-200 text-blue-900">coords="X1,Y1,X2,Y2"</p>
              <p className="text-[11px] text-gray-500">Angolo in alto a sinistra (X1,Y1) e in basso a destra (X2,Y2).</p>
            </div>

            <div className="border p-4 rounded-lg bg-amber-50 border-amber-200 space-y-2">
              <h3 className="font-bold text-amber-900 font-mono">shape="circle"</h3>
              <p className="text-xs text-gray-700 font-semibold">Cerchio</p>
              <p className="text-xs text-gray-600">Richiede 3 coordinate:</p>
              <p className="font-mono text-[11px] bg-white p-1 rounded border border-amber-200 text-amber-900">coords="X,Y,R"</p>
              <p className="text-[11px] text-gray-500">Centro del cerchio (X,Y) e Raggio R in pixel.</p>
            </div>

            <div className="border p-4 rounded-lg bg-emerald-50 border-emerald-200 space-y-2">
              <h3 className="font-bold text-emerald-900 font-mono">shape="poly"</h3>
              <p className="text-xs text-gray-700 font-semibold">Poligono</p>
              <p className="text-xs text-gray-600">Richiede coppie di vertici:</p>
              <p className="font-mono text-[11px] bg-white p-1 rounded border border-emerald-200 text-emerald-900">coords="X1,Y1,X2,Y2,..."</p>
              <p className="text-[11px] text-gray-500">Insieme di punti ordinati per chiudere qualsiasi forma.</p>
            </div>
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
                rows={14}
                className="w-full p-3 font-mono text-xs bg-gray-900 text-green-400 rounded-lg border border-gray-800 outline-none leading-relaxed"
                spellCheck={false}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                Anteprima:
              </label>
              <div 
                className="w-full h-[270px] p-4 bg-white border border-gray-300 rounded-lg overflow-y-auto prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: htmlCode }}
              />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}