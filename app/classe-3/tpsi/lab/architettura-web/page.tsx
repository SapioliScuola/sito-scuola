'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ArchitetturaWebLabPage() {
  // Stato per la simulazione del viaggio HTTP
  const [step, setStep] = useState<number>(0);

  const stepsData = [
    {
      title: '1. Inserimento URL',
      desc: 'L\'utente scrive "https://www.scuola.it" nel browser (Client).',
      badge: 'Client / Browser',
      color: 'bg-blue-500',
    },
    {
      title: '2. Risoluzione DNS',
      desc: 'Il browser chiede al Server DNS: "A quale indirizzo IP corrisponde www.scuola.it?". Il DNS risponde con l\'IP (es. 93.184.216.34).',
      badge: 'DNS',
      color: 'bg-purple-500',
    },
    {
      title: '3. Richiesta HTTP (Request)',
      desc: 'Il browser invia una richiesta HTTP GET all\'indirizzo IP del Server Web sulla porta 80/443.',
      badge: 'Protocollo HTTP',
      color: 'bg-amber-500',
    },
    {
      title: '4. Elaborazione Server (Back-End)',
      desc: 'Il Web Server riceve la richiesta, interroga il Database e genera il codice HTML/CSS/JS finale.',
      badge: 'Server / Back-End',
      color: 'bg-red-500',
    },
    {
      title: '5. Risposta HTTP (Response) e Rendering (Front-End)',
      desc: 'Il server invia la risposta (codice 200 OK) con i file. Il browser scarica HTML, CSS e JS ed esegue il rendering della pagina visibile all\'utente.',
      badge: 'Client / Front-End',
      color: 'bg-emerald-500',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Navigation link */}
      <Link 
        href="/classe-3/tpsi/lab" 
        className="text-sm text-emerald-600 hover:underline mb-6 inline-flex items-center gap-1 font-medium"
      >
        ← Torna al Laboratorio TPSI
      </Link>

      <div className="bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-200 space-y-12 text-gray-800">
        
        {/* Header Principale */}
        <header className="border-b-4 border-emerald-600 pb-4">
          <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2">
            Modulo 1 • Fondamenti Web
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900">
            🌐 Come Funziona il Web: Architettura Client-Server & Protocolli
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            I pilastri della rete: IP, DNS, HTTP, URL, il ruolo di Front-End vs Back-End e i linguaggi del Web (HTML, CSS, JS).
          </p>
        </header>

        {/* 1. L'ARCHITETTURA CLIENT-SERVER & ROBO FRONT-END / BACK-END */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            1. L'Architettura Client-Server
          </h2>
          <p className="text-sm leading-relaxed">
            Ogni interazione sul Web si basa sul modello <strong>Client-Server</strong>, un dialogo continuo tra chi richiede un servizio e chi lo fornisce.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-blue-900 text-lg">💻 Il Client (Front-End)</h3>
                <span className="bg-blue-200 text-blue-800 text-xs px-2 py-0.5 rounded font-bold">User Side</span>
              </div>
              <p className="text-sm text-gray-700">
                È il dispositivo (computer, smartphone, tablet) e l'applicazione (il <strong>Browser</strong> come Chrome, Firefox, Safari) usata dall'utente.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Front-End:</strong> Tutto ciò che l'utente vede e con cui interagisce nell'interfaccia grafica (struttura, stile e animazioni).
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-purple-900 text-lg">🖥️ Il Server (Back-End)</h3>
                <span className="bg-purple-200 text-purple-800 text-xs px-2 py-0.5 rounded font-bold">Server Side</span>
              </div>
              <p className="text-sm text-gray-700">
                È un computer potente sempre connesso a Internet che custodisce i file del sito, elabora i dati e gestisce i database.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Back-End:</strong> La logica nascosta dietro le quinte (autenticazione, gestione utenti, sicurezza, salvataggio dati).
              </p>
            </div>
          </div>
        </section>

        {/* 2. GLI INDIRIZZI DEL WEB: IP, DNS, URI & URL */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            2. Come si Trova una Pagina Web? (IP, DNS, URI, URL)
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border p-4 rounded-lg bg-gray-50 space-y-1">
              <h3 className="font-bold text-gray-900">📍 Indirizzo IP (Internet Protocol)</h3>
              <p className="text-xs text-gray-600">
                È il "numero di telefono" univoco di ogni dispositivo in rete.
              </p>
              <p className="text-xs font-mono text-blue-700 font-bold">Es: 142.250.180.174 (IPv4) o 2001:db8::1 (IPv6)</p>
            </div>

            <div className="border p-4 rounded-lg bg-gray-50 space-y-1">
              <h3 className="font-bold text-gray-900">📖 DNS (Domain Name System)</h3>
              <p className="text-xs text-gray-600">
                È la "rubrica telefonica" di Internet. Traduce un nome memorabile (es. <code>google.com</code>) nel rispettivo indirizzo IP numerico.
              </p>
            </div>

            <div className="border p-4 rounded-lg bg-gray-50 space-y-1">
              <h3 className="font-bold text-gray-900">🆔 URI (Uniform Resource Identifier)</h3>
              <p className="text-xs text-gray-600">
                Stringa di caratteri che identifica in modo univoco una risorsa (concetto generale).
              </p>
            </div>

            <div className="border p-4 rounded-lg bg-gray-50 space-y-1">
              <h3 className="font-bold text-gray-900">🔗 URL (Uniform Resource Locator)</h3>
              <p className="text-xs text-gray-600">
                Tipo specifico di URI che indica <strong>dove</strong> si trova una risorsa e <strong>come</strong> recuperarla.
              </p>
            </div>
          </div>

          {/* Anatomia di un URL */}
          <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 space-y-3">
            <h3 className="font-bold text-amber-900 text-sm">Anatomia di un URL:</h3>
            <div className="bg-white p-3 rounded border border-amber-300 font-mono text-xs md:text-sm text-center font-bold text-gray-800 break-all">
              <span className="text-red-600">https://</span>
              <span className="text-blue-600">www.esempio.it</span>
              <span className="text-green-600">:8080</span>
              <span className="text-purple-600">/pagine/lab.html</span>
              <span className="text-amber-600 font-normal">?id=5#sezione1</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-[11px] font-mono text-center">
              <div className="bg-red-100 p-1 rounded text-red-800">Protocollo (HTTPS)</div>
              <div className="bg-blue-100 p-1 rounded text-blue-800">Dominio / Host</div>
              <div className="bg-green-100 p-1 rounded text-green-800">Porta (Opzionale)</div>
              <div className="bg-purple-100 p-1 rounded text-purple-800">Path / Percorso</div>
              <div className="bg-amber-100 p-1 rounded text-amber-800">Query & Anchor</div>
            </div>
          </div>
        </section>

        {/* 3. WWW & PROTOCOLLO HTTP/HTTPS */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            3. Il World Wide Web (WWW) e il Protocollo HTTP
          </h2>

          <div className="space-y-3 text-sm">
            <p>
              <strong>WWW (World Wide Web):</strong> Inventato da Tim Berners-Lee nel 1989 al CERN di Ginevra, è l'insieme dei documenti ipertestuali interconnessi tra loro tramite link e accessibili via Internet.
            </p>
            <p>
              <strong>HTTP (HyperText Transfer Protocol):</strong> Il linguaggio comune usato da Client e Server per comunicare. Funziona con il ciclo <strong>Richiesta (Request)</strong> e <strong>Risposta (Response)</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-gray-900 text-green-400 p-3 rounded-lg space-y-1">
                <span className="text-gray-400 block font-sans font-bold text-xs">Richiesta HTTP (Client → Server):</span>
                <p>GET /index.html HTTP/1.1</p>
                <p>Host: www.esempio.it</p>
                <p>User-Agent: Chrome/120.0</p>
              </div>

              <div className="bg-gray-900 text-blue-400 p-3 rounded-lg space-y-1">
                <span className="text-gray-400 block font-sans font-bold text-xs">Risposta HTTP (Server → Client):</span>
                <p>HTTP/1.1 200 OK</p>
                <p>Content-Type: text/html</p>
                <p>{'<html><body>...</body></html>'}</p>
              </div>
            </div>

            <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200 text-xs text-emerald-900">
              <strong>🔒 HTTPS (HTTP Secure):</strong> È la versione cifrata dell'HTTP mediante protocollo <strong>TLS/SSL</strong>. Protegge le informazioni da intercettazioni (crittografia).
            </div>
          </div>
        </section>

        {/* 4. I TRE LINGUAGGI FONDAMENTALI DEL FRONT-END */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            4. La Triade del Front-End: HTML, CSS e JavaScript
          </h2>
          <p className="text-sm">
            Per costruire qualsiasi pagina Web si usano tre tecnologie complementari (analogia del corpo umano):
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-orange-50 border-t-4 border-orange-500 p-4 rounded-b-lg space-y-2">
              <h3 className="font-bold text-orange-900 text-lg">🧱 HTML</h3>
              <p className="text-xs font-semibold text-orange-700">HyperText Markup Language</p>
              <p className="text-xs text-gray-700">
                <strong>Lo Scheletro:</strong> Definisce la struttura ed i contenuti della pagina (titoli, paragrafi, immagini, link, tabelle, form).
              </p>
            </div>

            <div className="bg-blue-50 border-t-4 border-blue-500 p-4 rounded-b-lg space-y-2">
              <h3 className="font-bold text-blue-900 text-lg">🎨 CSS</h3>
              <p className="text-xs font-semibold text-blue-700">Cascading Style Sheets</p>
              <p className="text-xs text-gray-700">
                <strong>I Vestiti / L'Aspetto:</strong> Cura la grafica, i colori, i font, i margini ed il layout responsive per smartphone e PC.
              </p>
            </div>

            <div className="bg-yellow-50 border-t-4 border-yellow-500 p-4 rounded-b-lg space-y-2">
              <h3 className="font-bold text-yellow-900 text-lg">⚡ JavaScript</h3>
              <p className="text-xs font-semibold text-yellow-700">Linguaggio di Programmazione Client-Side</p>
              <p className="text-xs text-gray-700">
                <strong>I Muscoli / Il Cervello:</strong> Rende la pagina dinamica e interattiva (menu a comparsa, controlli sui form, animazioni, chiamate dati).
              </p>
            </div>
          </div>
        </section>

        {/* 5. SIMULATORE INTERATTIVO: IL VIAGGIO DI UNA RICHIESTA WEB */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b border-gray-200 pb-2">
            5. Simulatore Interattivo: Il Viaggio di una Richiesta Web
          </h2>

          <div className="bg-slate-900 text-white p-6 rounded-xl space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-slate-700 pb-4">
              <div>
                <span className="text-xs text-emerald-400 font-mono">Simulazione Passo-Passo</span>
                <h3 className="text-xl font-bold">{stepsData[step].title}</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${stepsData[step].color}`}>
                {stepsData[step].badge}
              </span>
            </div>

            <p className="text-sm text-slate-300 min-h-[50px]">
              {stepsData[step].desc}
            </p>

            {/* Controlli Step */}
            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                disabled={step === 0}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 rounded text-xs font-bold"
              >
                ← Indietro
              </button>

              <div className="flex gap-1.5">
                {stepsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setStep(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${step === idx ? 'bg-emerald-400 scale-125' : 'bg-slate-700'}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setStep(Math.min(stepsData.length - 1, step + 1))}
                disabled={step === stepsData.length - 1}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 rounded text-xs font-bold"
              >
                Avanti →
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}