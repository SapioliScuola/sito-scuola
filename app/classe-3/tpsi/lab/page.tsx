import Link from 'next/link';

export default function TpsiLabPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link 
        href="/classe-3/tpsi" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a TPSI Classe 3ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-8 text-gray-800">
        <header className="border-b-4 border-emerald-600 pb-4">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Laboratorio TPSI
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            🧪 Laboratorio di TPSI - Classe 3ª
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Esercitazioni pratiche, concetti di rete, sviluppo Web (HTML/CSS/JS) e simulazioni.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-4">
          
          {/* Modulo 1: Architettura Web */}
          <Link 
            href="/classe-3/tpsi/lab/architettura-web"
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded">
                Modulo 1
              </span>
              <span className="text-xs text-gray-400">Teoria & Schemi</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-emerald-600 mb-1">
              🌐 Architettura Web e Fondamenti
            </h2>
            <p className="text-sm text-gray-600">
              Client-Server, IP, DNS, HTTP/HTTPS, URL, Front-End vs Back-End e la triade del Web.
            </p>
          </Link>

          {/* Modulo 2: HTML5 Base */}
          <Link 
            href="/classe-3/tpsi/lab/html-base"
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-orange-500 transition-all block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-orange-100 text-orange-800 text-xs font-bold px-2.5 py-0.5 rounded">
                Modulo 2
              </span>
              <span className="text-xs text-gray-400">Pratica & Editor</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 mb-1">
              🧱 HTML5: Primi passi e Tag
            </h2>
            <p className="text-sm text-gray-600">
              Struttura del documento (html, head, title, body, h1), regola dell'indentazione e stile base.
            </p>
          </Link>

          {/* Modulo 3: Tabelle e Liste */}
          <Link 
            href="/classe-3/tpsi/lab/tabelle-e-liste"
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition-all block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded">
                Modulo 3
              </span>
              <span className="text-xs text-gray-400">Pratica & Editor</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 mb-1">
              📊 Tabelle e Liste in HTML5
            </h2>
            <p className="text-sm text-gray-600">
              Struttura tabelle (table, tr, td, th, caption), liste (ul, ol, li), stili e attributi.
            </p>
          </Link>

          {/* Modulo 4: Immagini e Link */}
          <Link 
            href="/classe-3/tpsi/lab/immagini-e-link"
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-purple-500 transition-all block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-0.5 rounded">
                Modulo 4
              </span>
              <span className="text-xs text-gray-400">Pratica & Editor</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 mb-1">
              🖼️ Immagini e Link (img + href)
            </h2>
            <p className="text-sm text-gray-600">
              Tag img, collegamenti ipertestuali (a href), attributi src/alt e creazione di immagini cliccabili.
            </p>
          </Link>

          {/* Modulo 5: Mappe d'Immagine */}
          <Link 
            href="/classe-3/tpsi/lab/mappe-immagine"
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-500 transition-all block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2.5 py-0.5 rounded">
                Modulo 5
              </span>
              <span className="text-xs text-gray-400">Pratica & Editor</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 mb-1">
              🗺️ Mappe d'Immagine (usemap, map, area)
            </h2>
            <p className="text-sm text-gray-600">
              Creare mappe interattive su un'immagine definendo regioni geometriche (rect, circle, poly).
            </p>
          </Link>

          {/* Modulo 6: Esercizi */}
          <Link 
            href="/classe-3/tpsi/lab/esercizi"
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-indigo-500 transition-all block group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2.5 py-0.5 rounded">
            Modulo 6
              </span>
              <span className="text-xs text-gray-400">Pratica & Editor</span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 mb-1">
              🗺️ Esercizi
            </h2>
          </Link>

        </div>
      </div>
    </div>
  );
}