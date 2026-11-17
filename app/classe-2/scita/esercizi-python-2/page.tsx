'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { fontDataEsercizi, Esercizio } from './data';
import PythonEditor from '../../../components/PythonEditor';

export default function EserciziPythonV8CompletoPage() {
  const [parteAttiva, setParteAttiva] = useState<number>(0);
  const [categoriaAttiva, setCategoriaAttiva] = useState<string>('tutte');
  const [codiceSelezionato, setCodiceSelezionato] = useState<string>('');
  const editorRef = useRef<HTMLDivElement>(null);

  const eserciziFiltrati = fontDataEsercizi.filter((ex) => {
    const matchParte = parteAttiva === 0 || ex.parte === parteAttiva;
    const matchCategoria = categoriaAttiva === 'tutte' || ex.categoria === categoriaAttiva;
    return matchParte && matchCategoria;
  });

  const inviaAllEditor = (codice: string) => {
    setCodiceSelezionato(codice);
    editorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link 
        href="/classe-2/scita" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a SCITA Classe 2ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-8 text-gray-800">
        
        {/* Header */}
        <header className="border-b-4 border-emerald-600 pb-4">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            SCITA • Classe 2ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            🐍 Palestra di Programmazione Python (96 Esercizi - V8)
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Copia o invia il codice di un esercizio nell'editor qui sotto per correggerlo ed eseguirlo direttamente nel browser.
          </p>
        </header>

        {/* Sezione Quiz Interattivi Kahoot */}
<section className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 p-6 rounded-xl text-white shadow-md border border-purple-700 space-y-4">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-700/60 pb-3">
    <div>
      <span className="bg-amber-400 text-purple-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
        Sfida la Classe
      </span>
      <h2 className="text-xl font-extrabold mt-1 flex items-center gap-2">
        🎮 Quiz Interattivi su Kahoot!
      </h2>
    </div>
    <p className="text-xs text-purple-200">
      Metti alla prova le tue conoscenze in tempo reale
    </p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
    {[
      {
        num: 1,
        titolo: 'Kahoot #1',
        sottotitolo: 'Fondamenti & Logica',
        url: 'https://create.kahoot.it/details/d2139080-e9d1-40a6-b845-242cf0bd6e09',
        colore: 'from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 border-pink-400/40',
      },
      {
        num: 2,
        titolo: 'Kahoot #2',
        sottotitolo: 'Condizionali & Selezione',
        url: 'https://create.kahoot.it/details/927dad76-aeeb-4dca-9284-aded2524d6a3',
        colore: 'from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-blue-400/40',
      },
      {
        num: 3,
        titolo: 'Kahoot #3',
        sottotitolo: 'Cicli & Iterazioni',
        url: 'https://create.kahoot.it/details/f9093830-1293-4da9-a3ea-d0cf0b677e11',
        colore: 'from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 border-amber-300/40',
      },
      {
        num: 4,
        titolo: 'Kahoot #4',
        sottotitolo: 'Stringhe, Liste & Ripasso',
        url: 'https://create.kahoot.it/details/06ebdac3-58cf-489f-b3c0-788addf2716a',
        colore: 'from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 border-emerald-400/40',
      },
    ].map((quiz) => (
      <a
        key={quiz.num}
        href={quiz.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-gradient-to-br ${quiz.colore} p-4 rounded-xl border shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col justify-between group`}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="bg-black/25 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
            Quiz {quiz.num}
          </span>
          <span className="text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-xs">
            ↗
          </span>
        </div>
        <div>
          <h3 className="font-extrabold text-base text-white">{quiz.titolo}</h3>
          <p className="text-[11px] text-white/90 mt-0.5">{quiz.sottotitolo}</p>
        </div>
        <div className="mt-3 pt-2 border-t border-white/20 text-[11px] font-bold text-white flex items-center justify-between">
          <span>Gioca ora</span>
          <span>→</span>
        </div>
      </a>
    ))}
  </div>
</section>

        {/* EDITOR PYODIDE IN CIMA */}
        <div ref={editorRef}>
          <PythonEditor codiceIniziale={codiceSelezionato} />
        </div>

        {/* Filtro per Parte */}
        <div className="space-y-2 pt-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
            Filtra per Parte dell'Eserciziario:
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setParteAttiva(0)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                parteAttiva === 0 ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tutte le Parti (96)
            </button>
            {[
              { id: 1, label: 'P1: Print & Input' },
              { id: 2, label: 'P2: Operatori' },
              { id: 3, label: 'P3: If / Else' },
              { id: 4, label: 'P4: Match-Case' },
              { id: 5, label: 'P5: Ciclo For' },
              { id: 6, label: 'P6: Ciclo While' },
              { id: 7, label: 'P7: Stringhe' },
              { id: 8, label: 'P8: Liste' },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setParteAttiva(p.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  parteAttiva === p.id ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filtro per Categoria */}
        <div className="space-y-2 pt-2 border-t border-gray-100">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
            Filtra per Tipologia di Errore / Verifica:
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategoriaAttiva('tutte')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                categoriaAttiva === 'tutte' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Tutte le Tipologie
            </button>
            <button
              onClick={() => setCategoriaAttiva('sintassi')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                categoriaAttiva === 'sintassi' ? 'bg-red-600 text-white' : 'bg-red-50 text-red-700 hover:bg-red-100'
              }`}
            >
              Errori di Sintassi
            </button>
            <button
              onClick={() => setCategoriaAttiva('logica')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                categoriaAttiva === 'logica' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
              }`}
            >
              Errori di Logica
            </button>
            <button
              onClick={() => setCategoriaAttiva('previsione')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                categoriaAttiva === 'previsione' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
              }`}
            >
              Previsione dell'Output
            </button>
          </div>
        </div>

        {/* Conteggio Risultati */}
        <div className="text-xs font-bold text-gray-500 pt-2 border-b border-gray-200 pb-2">
          Esercizi Visualizzati: {eserciziFiltrati.length} di 96
        </div>

        {/* Griglia Esercizi */}
        <div className="grid md:grid-cols-2 gap-4">
          {eserciziFiltrati.map((ex: Esercizio) => (
            <div key={ex.id} className="p-4 border rounded-lg bg-gray-50 space-y-2 text-xs flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-700 text-sm">
                    {ex.titolo} <span className="text-gray-400 font-normal text-xs">(Es. {ex.id})</span>
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                    ex.categoria === 'sintassi' ? 'bg-red-100 text-red-700' :
                    ex.categoria === 'logica' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'
                  }`}>
                    {ex.categoria}
                  </span>
                </div>
                {ex.descrizione && (
                  <p className="text-gray-600 text-[11px] leading-relaxed">
                    🎯 {ex.descrizione}
                  </p>
                )}
              </div>

              <div className="space-y-2 mt-2">
                <pre className="bg-slate-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto leading-relaxed border border-slate-700">
                  <code>{ex.codice}</code>
                </pre>

                <button
                  onClick={() => inviaAllEditor(ex.codice)}
                  className="w-full py-1.5 px-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded font-bold text-[11px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  ⬆️ Prova nell'Editor
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}