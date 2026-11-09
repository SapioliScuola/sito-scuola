'use client';

import { useState } from 'react';
import Link from 'next/link';
import { datasetEserciziCodifiche, EsercizioCodifica } from './data';

export default function EserciziarioCodifichePage() {
  const [categoriaAttiva, setCategoriaAttiva] = useState<string>('tutti');
  const [svolgimentoVisibile, setSvolgimentoVisibile] = useState<{ [key: number]: boolean }>({});

  const toggleSvolgimento = (id: number) => {
    setSvolgimentoVisibile((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const eserciziFiltrati = categoriaAttiva === 'tutti'
    ? datasetEserciziCodifiche
    : datasetEserciziCodifiche.filter((ex) => ex.categoria === categoriaAttiva);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Navigation Link */}
      <Link 
        href="/classe-3/tpsi" 
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a TPSI Classe 3ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-8 text-gray-800">
        
        {/* Header principale */}
        <header className="border-b-4 border-indigo-600 pb-4">
          <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            TPSI • Classe 3ª
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            ✍️ Eserciziario Completo: Codifiche e Algoritmi di Controllo
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Raccolta guidata di esercizi svolti passo-passo: Codifiche pesate, Distanza di Hamming, Parità Bidimensionale, CRC, Hamming (11,7), Codice Fiscale, Partita IVA ed IBAN.
          </p>
        </header>

        {/* Filtri Categoria */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
            Filtra per Categoria Tematica:
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategoriaAttiva('tutti')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                categoriaAttiva === 'tutti' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tutti gli Esercizi ({datasetEserciziCodifiche.length})
            </button>
            <button
              onClick={() => setCategoriaAttiva('teoria')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                categoriaAttiva === 'teoria' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Codifiche Pesate (BCD, Aiken, 2su5)
            </button>
            <button
              onClick={() => setCategoriaAttiva('hamming')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                categoriaAttiva === 'hamming' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Distanza di Hamming & Code (11,7)
            </button>
            <button
              onClick={() => setCategoriaAttiva('parita-crc')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                categoriaAttiva === 'parita-crc' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Parità Bidimensionale & CRC
            </button>
            <button
              onClick={() => setCategoriaAttiva('codici-civili')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                categoriaAttiva === 'codici-civili' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Codici Civili (CF, P.IVA, IBAN)
            </button>
          </div>
        </div>

        {/* Lista Esercizi */}
        <div className="space-y-6">
          {eserciziFiltrati.map((ex: EsercizioCodifica) => (
            <div key={ex.id} className="p-5 border rounded-xl bg-gray-50 space-y-3 border-gray-200 shadow-sm">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-bold text-indigo-900 text-base">
                  {ex.titolo}
                </h3>
                <span className="bg-indigo-100 text-indigo-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase whitespace-nowrap">
                  {ex.categoria}
                </span>
              </div>

              <p className="text-xs text-gray-800 leading-relaxed font-medium">
                {ex.consegna}
              </p>

              {ex.opzioni && (
                <div className="grid gap-1.5 pt-1 pl-2 text-xs text-gray-700">
                  {ex.opzioni.map((opt, i) => (
                    <div key={i} className="p-1.5 bg-white rounded border border-gray-200">
                      {opt}
                    </div>
                  ))}
                </div>
              )}

              {ex.domandeGuida && (
                <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r text-xs space-y-1">
                  <span className="font-bold text-amber-900">💡 Domande Guida per la risoluzione:</span>
                  <ul className="list-disc list-inside text-amber-800 space-y-0.5">
                    {ex.domandeGuida.map((q, idx) => (
                      <li key={idx}>{q}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Pulsante Toggle Svolgimento */}
              <div className="pt-2">
                <button
                  onClick={() => toggleSvolgimento(ex.id)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg transition-all shadow-sm flex items-center gap-1.5"
                >
                  {svolgimentoVisibile[ex.id] ? '🙈 Nascondi Svolgimento' : '💡 Mostra Svolgimento Passo-Passo'}
                </button>
              </div>

              {/* Blocco Svolgimento Dettagliato */}
              {svolgimentoVisibile[ex.id] && (
                <div className="space-y-1.5 pt-2 animate-fadeIn">
                  <span className="text-[11px] font-mono font-bold text-emerald-700 block">
                    📝 Svolgimento Passo-Passo & Soluzione:
                  </span>
                  <pre className="bg-slate-900 text-green-400 p-4 rounded font-mono text-xs overflow-x-auto leading-relaxed border border-slate-700 shadow-inner whitespace-pre-wrap">
                    <code>{ex.svolgimentoDettagliato}</code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}