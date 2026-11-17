'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import JSCPP from 'JSCPP';
import { eserciziCData, EsercizioC } from './data';

interface RisultatoSingoloTest {
  id: number;
  descrizione: string;
  input: string;
  outputAtteso: string;
  outputOttenuto: string;
  superato: boolean;
  erroreRuntime?: string;
}

export default function EserciziCTpsiPage() {
  const [esercizioSelezionato, setEsercizioSelezionato] = useState<EsercizioC>(eserciziCData[0]);
  const [codice, setCodice] = useState<string>(eserciziCData[0].codiceTemplate);
  const [inputManuale, setInputManuale] = useState<string>(eserciziCData[0].esempioInput);
  const [outputTerminale, setOutputTerminale] = useState<string>('');
  const [erroreCompilazione, setErroreCompilazione] = useState<string>('');
  const [risultatiTest, setRisultatiTest] = useState<RisultatoSingoloTest[] | null>(null);

  const editorRef = useRef<HTMLDivElement>(null);

  // Permette di usare il tasto TAB nella textarea
  const gestisciTab = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const nuovoCodice = codice.substring(0, start) + '    ' + codice.substring(end);
      setCodice(nuovoCodice);
      setTimeout(() => {
        e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 4;
      }, 0);
    }
  };

  // Funzione helper per eseguire il codice C con un determinato input
  const eseguiMotoreC = (sorgente: string, stdin: string): { output: string; errore?: string } => {
    let bufferOutput = '';
    try {
      const inputFormattato = stdin.endsWith('\n') ? stdin : stdin + '\n';
      JSCPP.run(sorgente, inputFormattato, {
        stdio: {
          write: (testo: string) => {
            bufferOutput += testo;
          },
        },
      });
      return { output: bufferOutput };
    } catch (err: any) {
      return {
        output: bufferOutput,
        errore: err?.message || String(err),
      };
    }
  };

  // Esecuzione singola nella finestrella Terminale con l'input manuale
  const eseguiNelTerminale = () => {
    setRisultatiTest(null);
    setErroreCompilazione('');
    const res = eseguiMotoreC(codice, inputManuale);
    if (res.errore) {
      setErroreCompilazione(res.errore);
      setOutputTerminale(res.output);
    } else {
      setOutputTerminale(res.output || '(Nessun output stampato)');
    }
  };

  // Esecuzione di tutti i test cases dell'esercizio attivo
  const eseguiSuiteTest = () => {
    setErroreCompilazione('');
    const risultati: RisultatoSingoloTest[] = [];

    for (const tc of esercizioSelezionato.testCases) {
      const res = eseguiMotoreC(codice, tc.input);
      const ottenutoPulito = res.output.trim();
      const attesoPulito = tc.outputAtteso.trim();

      risultati.push({
        id: tc.id,
        descrizione: tc.descrizione,
        input: tc.input.trim(),
        outputAtteso: attesoPulito,
        outputOttenuto: ottenutoPulito,
        superato: !res.errore && ottenutoPulito === attesoPulito,
        erroreRuntime: res.errore,
      });
    }

    setRisultatiTest(risultati);

    // Mostra anche nella finestrella terminale l'output del primo test case
    if (risultati.length > 0) {
      const primo = risultati[0];
      if (primo.erroreRuntime) {
        setErroreCompilazione(primo.erroreRuntime);
        setOutputTerminale(primo.outputOttenuto);
      } else {
        setOutputTerminale(
          `[Esecuzione Test #1 | Input: ${primo.input}]\n${primo.outputOttenuto || '(Nessun output)'}`
        );
      }
    }
  };

  // Carica il template di un esercizio nell'editor e imposta i suoi test
  const caricaEsercizioNellEditor = (ex: EsercizioC) => {
    setEsercizioSelezionato(ex);
    setCodice(ex.codiceTemplate);
    setInputManuale(ex.esempioInput);
    setOutputTerminale('');
    setErroreCompilazione('');
    setRisultatiTest(null);
    editorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const testSuperatiCount = risultatiTest ? risultatiTest.filter((r) => r.superato).length : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Link di ritorno */}
      <Link
        href="/classe-3/tpsi"
        className="text-sm text-blue-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna a TPSI Classe 3ª
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-10 text-gray-800">
        {/* Header */}
        <header className="border-b-4 border-sky-600 pb-4">
          <div className="inline-block bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            TPSI • Classe 3ª • Laboratorio C
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            ⚙️ Laboratorio di Programmazione C: Codifiche e Controllo Errori
          </h1>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Copia il template di un esercizio nell'editor qui sotto, completa il codice seguendo i suggerimenti e clicca su <strong>Esegui Test</strong> per verificare automaticamente il tuo programma su più casi di prova.
          </p>
        </header>

        {/* ========================================================================= */}
        {/* EDITOR C + TERMINALE + RISULTATI TEST IN CIMA */}
        {/* ========================================================================= */}
        <section ref={editorRef} className="space-y-4">
          <div className="bg-slate-900 rounded-xl border-2 border-sky-600/70 shadow-lg overflow-hidden text-white">
            {/* Barra superiore Editor */}
            <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">💻</span>
                <span className="font-bold text-sm text-sky-400">Editor C (Standard C99)</span>
                <span className="text-[11px] bg-sky-950 text-sky-300 border border-sky-700 px-2.5 py-0.5 rounded-full font-semibold">
                  Attivo: {esercizioSelezionato.titolo}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => caricaEsercizioNellEditor(esercizioSelezionato)}
                  className="px-3 py-1.5 rounded text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-gray-200 transition-colors cursor-pointer"
                >
                  ↺ Ripristina Template
                </button>
                <button
                  onClick={eseguiNelTerminale}
                  className="px-3.5 py-1.5 rounded text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white transition-colors cursor-pointer"
                >
                  ▶ Esegui con Input
                </button>
                <button
                  onClick={eseguiSuiteTest}
                  className="px-4 py-1.5 rounded text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-colors cursor-pointer"
                >
                  ✅ Esegui Test ({esercizioSelezionato.testCases.length})
                </button>
              </div>
            </div>

            {/* Area Codice + Input/Terminale */}
            <div className="grid lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-slate-700">
              {/* Sorgente C (3 colonne su 5) */}
              <div className="lg:col-span-3 p-3 bg-slate-950 flex flex-col">
                <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1.5">
                  Codice Sorgente (main.c)
                </label>
                <textarea
                  value={codice}
                  onChange={(e) => setCodice(e.target.value)}
                  onKeyDown={gestisciTab}
                  spellCheck={false}
                  rows={16}
                  className="w-full flex-1 bg-transparent text-emerald-300 font-mono text-xs focus:outline-none resize-y leading-relaxed"
                />
              </div>

              {/* Pannello Input Manuale + Finestrella Terminale (2 colonne su 5) */}
              <div className="lg:col-span-2 p-3 bg-slate-900 flex flex-col justify-between space-y-3">
                {/* Input standard (stdin) */}
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-amber-400 font-bold block mb-1">
                    ⌨️ Input Tastiera (stdin per "Esegui con Input")
                  </label>
                  <textarea
                    value={inputManuale}
                    onChange={(e) => setInputManuale(e.target.value)}
                    spellCheck={false}
                    rows={2}
                    placeholder="Inserisci qui i dati letti da scanf..."
                    className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-amber-200 font-mono text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Finestrella Output Terminale */}
                <div className="flex-1 flex flex-col">
                  <label className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    🖥️ Finestra Terminale (stdout)
                  </label>
                  <div className="flex-1 min-h-[160px] bg-black border border-slate-700 rounded p-3 font-mono text-xs overflow-auto whitespace-pre-wrap">
                    {!outputTerminale && !erroreCompilazione && (
                      <span className="text-slate-500 italic">
                        Premi "Esegui con Input" o "Esegui Test" per vedere l'output del terminale...
                      </span>
                    )}
                    {outputTerminale && <div className="text-gray-100">{outputTerminale}</div>}
                    {erroreCompilazione && (
                      <div className="text-red-400 bg-red-950/60 p-2 rounded border border-red-800 mt-2">
                        <strong>Errore di compilazione / esecuzione:</strong>
                        <pre className="whitespace-pre-wrap mt-1 text-[11px]">{erroreCompilazione}</pre>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PANNELLO RISULTATI DEI TEST AUTOMATICI */}
          {/* ========================================================================= */}
          {risultatiTest && (
            <div className="p-5 rounded-xl border-2 border-slate-300 bg-slate-50 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                <h3 className="font-extrabold text-base text-slate-900">
                  📋 Risultati Verifica Automatica — {esercizioSelezionato.titolo}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-extrabold ${
                    testSuperatiCount === risultatiTest.length
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-400'
                      : 'bg-amber-100 text-amber-900 border border-amber-400'
                  }`}
                >
                  Superati: {testSuperatiCount} / {risultatiTest.length}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-3 text-xs">
                {risultatiTest.map((t) => (
                  <div
                    key={t.id}
                    className={`p-3.5 rounded-lg border-l-4 space-y-2 ${
                      t.superato
                        ? 'bg-emerald-50/80 border-emerald-600 border border-emerald-200'
                        : 'bg-red-50/80 border-red-600 border border-red-200'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-gray-900">
                        {t.superato ? '✅' : '❌'} Test #{t.id}: {t.descrizione}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 font-mono text-[11px] bg-white p-2 rounded border border-gray-200">
                      <div>
                        <span className="text-gray-400 font-sans block text-[10px]">Input:</span>
                        <strong className="text-gray-900">{t.input}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 font-sans block text-[10px]">Atteso:</span>
                        <strong className="text-emerald-700">{t.outputAtteso}</strong>
                      </div>
                      <div>
                        <span className="text-gray-400 font-sans block text-[10px]">Tuo Output:</span>
                        <strong className={t.superato ? 'text-emerald-700' : 'text-red-600'}>
                          {t.erroreRuntime ? 'Errore' : t.outputOttenuto || '(vuoto)'}
                        </strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ========================================================================= */}
        {/* ELENCO ESERCIZI CON SPECIFICHE DI INPUT/OUTPUT */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-900 border-b border-gray-200 pb-2">
            📚 Tracce degli Esercizi
          </h2>

          <div className="space-y-6">
            {eserciziCData.map((ex) => {
              const isAttivo = esercizioSelezionato.id === ex.id;
              return (
                <div
                  key={ex.id}
                  className={`p-5 rounded-xl border-2 transition-all space-y-4 ${
                    isAttivo
                      ? 'bg-sky-50/40 border-sky-500 shadow-sm'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="bg-sky-100 text-sky-900 text-[10px] font-bold px-2.5 py-0.5 rounded uppercase">
                        {ex.argomento}
                      </span>
                      <h3 className="text-lg font-extrabold text-blue-950 mt-1">
                        {ex.titolo}
                      </h3>
                    </div>

                    <button
                      onClick={() => caricaEsercizioNellEditor(ex)}
                      className="px-4 py-2 rounded-lg text-xs font-bold bg-sky-600 hover:bg-sky-700 text-white shadow-sm transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      ⬆️ Copia Template nell'Editor
                    </button>
                  </div>

                  <p className="text-sm text-gray-800 leading-relaxed">{ex.consegna}</p>

                  {/* Box Chiari per Formato Input e Formato Output */}
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg space-y-1">
                      <span className="font-extrabold text-amber-950 uppercase tracking-wider block">
                        📥 Formato dell'Input (cosa legge scanf)
                      </span>
                      <p className="text-amber-900 leading-relaxed">{ex.formatoInput}</p>
                    </div>

                    <div className="p-3.5 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg space-y-1">
                      <span className="font-extrabold text-emerald-950 uppercase tracking-wider block">
                        📤 Formato dell'Output (cosa stampare con printf)
                      </span>
                      <p className="text-emerald-900 leading-relaxed">{ex.formatoOutput}</p>
                    </div>
                  </div>

                  {/* Esempio Rapido Input -> Output */}
                  <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono bg-slate-900 text-white p-3 rounded-lg">
                    <div>
                      <span className="text-slate-400 font-sans text-[10px] uppercase block">
                        Esempio Input:
                      </span>
                      <span className="text-amber-300 font-bold">{ex.esempioInput}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 font-sans text-[10px] uppercase block">
                        Esempio Output Atteso:
                      </span>
                      <span className="text-emerald-400 font-bold">{ex.esempioOutput}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}