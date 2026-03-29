export default function PIT() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <a href="/" className="text-2xl font-bold text-cyan-400">VAT Faktura</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-4">Rozlicz PIT Bezpośrednio</h1>
        <p className="text-xl text-gray-300 mb-16">
          Wypełnij deklarację podatkową online i wyślij bezpośrednio do urzędu - wszystko za darmo.
        </p>

        {/* PIT Forms */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {["PIT-37", "PIT-36", "PIT-28", "PIT-38", "PIT-39", "PIT-16A"].map((pit, i) => (
            <button
              key={i}
              className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg hover:border-cyan-500/50 hover:bg-slate-800/50 transition text-center"
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">{pit}</div>
              <div className="text-sm text-gray-400">Formularz PIT</div>
            </button>
          ))}
        </div>

        {/* Info */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Rodzaje Deklaracji PIT</h2>
          <div className="space-y-6">
            {[
              {
                form: "PIT-37",
                title: "Pracownik",
                desc: "Dla osób fizycznych zatrudnionych na umowę o pracę"
              },
              {
                form: "PIT-36",
                title: "Działalność Gospodarcza",
                desc: "Dla przedsiębiorców i samozatrudnionych"
              },
              {
                form: "PIT-28",
                title: "Dochody Zagraniczne",
                desc: "Dla osób uzyskujących dochody z zagranicy"
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-cyan-400 flex-shrink-0">{item.form}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Terminy Rozliczenia</h2>
          <div className="space-y-4">
            {[
              { period: "Styczeń - Marzec", deadline: "30 kwietnia" },
              { period: "Kwiecień - Czerwiec", deadline: "31 lipca" },
              { period: "Lipiec - Wrzesień", deadline: "31 października" },
              { period: "Październik - Grudzień", deadline: "31 stycznia (następnego roku)" }
            ].map((item, i) => (
              <div key={i} className="p-4 bg-slate-800/30 border border-slate-700/50 rounded-lg flex justify-between items-center">
                <span className="font-semibold">{item.period}</span>
                <span className="text-cyan-400">Termin: {item.deadline}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
