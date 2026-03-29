export default function ZUS() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <a href="/" className="text-2xl font-bold text-cyan-400">VAT Faktura</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-4">Narzędzia ZUS Online</h1>
        <p className="text-xl text-gray-300 mb-16">
          Wypełnij formularze ZUS, oblicz zasiłki - wszystko w jednym miejscu.
        </p>

        {/* ZUS Tools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: "📋",
              title: "ZUS Z-3",
              desc: "Zaświadczenie chorobowe"
            },
            {
              icon: "👶",
              title: "ZUS Z-15",
              desc: "Zasiłek opiekuńczy"
            },
            {
              icon: "💰",
              title: "Kalkulator Zasiłku",
              desc: "Zasiłek chorobowy i macierzyński"
            },
            {
              icon: "📅",
              title: "Kalendarz ZUS",
              desc: "Terminy i deadline'y"
            }
          ].map((tool, i) => (
            <button
              key={i}
              className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-lg hover:border-cyan-500/50 hover:bg-slate-800/50 transition text-left"
            >
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">{tool.title}</h3>
              <p className="text-gray-400">{tool.desc}</p>
            </button>
          ))}
        </div>

        {/* Info */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Jak Korzystać</h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Wybierz Formularz",
                desc: "Zdecyduj, który dokument ZUS potrzebujesz"
              },
              {
                step: "2",
                title: "Wypełnij Dane",
                desc: "Wpisz wymagane informacje i dokumenty"
              },
              {
                step: "3",
                title: "Wyślij Online",
                desc: "Wyślij bezpośrednio do ZUS elektronicznie"
              },
              {
                step: "4",
                title: "Otrzymaj Potwierdzenie",
                desc: "Czekaj na potwierdzenie z ZUS"
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
