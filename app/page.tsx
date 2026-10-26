import Link from 'next/link';

interface ClasseInfo {
  id: string;
  nome: string;
  descrizione: string;
  colore: string;
}

const classi: ClasseInfo[] = [
  { id: '2', nome: 'Classe 2ª', descrizione: 'Programma, compiti e materiali per la 2ª classe.', colore: 'border-blue-500' },
  { id: '3', nome: 'Classe 3ª', descrizione: 'Programma, compiti e materiali per la 3ª classe.', colore: 'border-green-500' },
  { id: '5', nome: 'Classe 5ª', descrizione: 'Programma, compiti e materiali per la 5ª classe.', colore: 'border-purple-500' },
];

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          Benvenuti nel Portale Scolastico
        </h1>
        <p className="text-lg text-gray-600">
          Seleziona una classe dal menu in alto oppure clicca su una delle schede qui sotto:
        </p>
      </div>

      {/* SCHEDE DELLE CLASSI SULLA PAGINA */}
      <div className="grid md:grid-cols-3 gap-6">
        {classi.map((c) => (
          <Link
            key={c.id}
            href={`/classe-${c.id}`}
            className={`block p-6 bg-white rounded-xl shadow-sm hover:shadow-md border-t-4 ${c.colore} border-x border-b border-gray-200 transition-all hover:-translate-y-1`}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{c.nome}</h2>
            <p className="text-gray-600 text-sm mb-4">{c.descrizione}</p>
            <span className="text-blue-600 font-semibold text-sm inline-flex items-center">
              Accedi alla classe →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}