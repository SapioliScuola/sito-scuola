'use client';

import { useState } from 'react';
import Link from 'next/link';
import { fontDataEsercizi, Esercizio } from './data';

export default function EserciziPythonV8CompletoPage() {
  const [parteAttiva, setParteAttiva] = useState<number>(0);
  const [categoriaAttiva, setCategoriaAttiva] = useState<string>('tutte');

  const eserciziFiltrati = fontDataEsercizi.filter((ex) => {
    const matchParte = parteAttiva === 0 || ex.parte === parteAttiva;
    const matchCategoria = categoriaAttiva === 'tutte' || ex.categoria === categoriaAttiva;
    return matchParte && matchCategoria;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Link di ritorno */}
      <Link 
        href="/classe-2/scita" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        &larr; Torna a SCITA Classe 2ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-8 text-gray-800">
        
        {/* Header */}
        <header className="border-b-4 border-emerald-600 pb-4">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            SCITA &bull; Classe 2ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            🐍 Palestra di Programmazione Python (96 Esercizi - V8)
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Raccolta completa dei 96 esercizi ufficiali organizzati in 8 Parti e 3 Tipologie di verifica.
          </p>
        </header>

        {/* Filtro per Parte */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
            Filtra per Parte dell&apos;Eserciziario:
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
              Previsione dell&apos;Output
            </button>
          </div>
        </div>

        {/* Conteggio Risultati */}
        <div className="text-xs font-bold text-gray-500 pt-2 border-b border-gray-200 pb-2 flex items-center justify-between">
          <span>Esercizi Visualizzati: {eserciziFiltrati.length} di 96</span>
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

              <pre className="bg-slate-900 text-green-400 p-3 rounded font-mono text-xs overflow-x-auto leading-relaxed mt-2 border border-slate-700">
                <code>{ex.codice}</code>
              </pre>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}