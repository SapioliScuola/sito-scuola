'use client';

import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    loadPyodide: any;
  }
}

interface PythonEditorProps {
  codiceIniziale?: string;
}

export default function PythonEditor({ codiceIniziale = '' }: PythonEditorProps) {
  const [codice, setCodice] = useState<string>(
    codiceIniziale || '# Incolla qui il codice di un esercizio e clicca Esegui!\nprint("Ciao dal laboratorio Python!")'
  );
  const [output, setOutput] = useState<string>('');
  const [errore, setErrore] = useState<string>('');
  const [pyodidePronto, setPyodidePronto] = useState<boolean>(false);
  const [inEsecuzione, setInEsecuzione] = useState<boolean>(false);
  const pyodideRef = useRef<any>(null);

  // Aggiorna l'editor quando lo studente clicca "Copia nell'editor" su una card
  useEffect(() => {
    if (codiceIniziale) {
      setCodice(codiceIniziale);
      setOutput('');
      setErrore('');
    }
  }, [codiceIniziale]);

  const inizializzaPyodide = async () => {
    if (pyodideRef.current || !window.loadPyodide) return;
    try {
      const pyodide = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/',
      });
      pyodideRef.current = pyodide;
      setPyodidePronto(true);
    } catch (err) {
      setErrore('Errore nel caricamento dell\'interprete Python.');
    }
  };

  // Se lo script è già in cache (navigazione tra pagine Next.js)
  useEffect(() => {
    if (window.loadPyodide && !pyodideRef.current) {
      inizializzaPyodide();
    }
  }, []);

  const eseguiCodice = async () => {
    if (!pyodideRef.current) return;
    setInEsecuzione(true);
    setOutput('');
    setErrore('');

    try {
      const pyodide = pyodideRef.current;

      // Cattura lo standard output (print)
      pyodide.setStdout({
        batched: (testo: string) => {
          setOutput((prev) => prev + testo + '\n');
        },
      });

      // Abilita input() tramite prompt del browser
      await pyodide.runPythonAsync(`
import builtins
from js import prompt

def custom_input(msg=""):
    res = prompt(msg)
    if res is None:
        return ""
    print(f"{msg}{res}")
    return str(res)

builtins.input = custom_input
      `);

      // Esegue il codice dello studente
      await pyodide.runPythonAsync(codice);
    } catch (err: any) {
      setErrore(err.message || String(err));
    } finally {
      setInEsecuzione(false);
    }
  };

  return (
    <div className="bg-slate-900 rounded-xl border-2 border-emerald-600/60 shadow-lg overflow-hidden text-white">
      {/* Caricamento Pyodide da CDN */}
      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js"
        strategy="afterInteractive"
        onLoad={inizializzaPyodide}
      />

      {/* Barra superiore Editor */}
      <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">🐍</span>
          <span className="font-bold text-sm text-emerald-400">Interprete Python Interattivo</span>
          <span
            className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
              pyodidePronto
                ? 'bg-emerald-950 text-emerald-400 border border-emerald-600'
                : 'bg-amber-950 text-amber-300 border border-amber-600 animate-pulse'
            }`}
          >
            {pyodidePronto ? '● Pronto' : '⏳ Caricamento Python...'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setCodice('');
              setOutput('');
              setErrore('');
            }}
            className="px-3 py-1.5 rounded text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-gray-200 transition-colors"
          >
            Pulisci
          </button>
          <button
            onClick={eseguiCodice}
            disabled={!pyodidePronto || inEsecuzione}
            className={`px-4 py-1.5 rounded text-xs font-bold transition-all flex items-center gap-1.5 ${
              pyodidePronto && !inEsecuzione
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm cursor-pointer'
                : 'bg-slate-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            {inEsecuzione ? 'Esecuzione...' : '▶ Esegui Codice'}
          </button>
        </div>
      </div>

      {/* Area Codice + Output affiancati su desktop */}
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-700">
        {/* Textarea Codice */}
        <div className="p-3 bg-slate-950">
          <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
            Codice Sorgente (main.py)
          </label>
          <textarea
            value={codice}
            onChange={(e) => setCodice(e.target.value)}
            spellCheck={false}
            rows={9}
            placeholder="Scrivi o incolla qui il tuo codice Python..."
            className="w-full bg-transparent text-green-400 font-mono text-xs focus:outline-none resize-y leading-relaxed"
          />
        </div>

        {/* Terminale Output */}
        <div className="p-3 bg-slate-900 flex flex-col">
          <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
            Console Output
          </label>
          <div className="flex-1 font-mono text-xs overflow-auto max-h-56 whitespace-pre-wrap">
            {!output && !errore && (
              <span className="text-slate-500 italic">
                L'output del programma apparirà qui...
              </span>
            )}
            {output && <div className="text-gray-100">{output}</div>}
            {errore && (
              <div className="text-red-400 bg-red-950/50 p-2 rounded border border-red-800/60 mt-1">
                {errore}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}