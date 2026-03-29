export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">VAT Faktura</span>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-gray-300 hover:text-cyan-400 transition">
              Zaloguj się
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition font-medium">
              Zarejestruj się
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div className="flex">
        <aside className="hidden md:block w-64 bg-slate-900/50 border-r border-slate-700/50 p-8 h-screen overflow-y-auto sticky top-20">
          <nav className="space-y-6">
            <div className="flex items-center gap-3 text-cyan-400 hover:text-cyan-300 cursor-pointer transition">
              <span className="text-xl">📊</span>
              <span>Założ firmę</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 cursor-pointer transition">
              <span className="text-xl">📄</span>
              <span>Faktura</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 cursor-pointer transition">
              <span className="text-xl">📋</span>
              <span>PIT</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 cursor-pointer transition">
              <span className="text-xl">🏢</span>
              <span>ZUS</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 cursor-pointer transition">
              <span className="text-xl">🔍</span>
              <span>Sprawdź Kontrahenta</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 cursor-pointer transition">
              <span className="text-xl">🗺️</span>
              <span>Mapa Urzędów</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 cursor-pointer transition">
              <span className="text-xl">💰</span>
              <span>Bezpłatne Porady</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 cursor-pointer transition">
              <span className="text-xl">📝</span>
              <span>Generator Umów</span>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="px-6 py-32 text-center">
            <div className="max-w-5xl mx-auto">
              <div className="inline-block mb-8 px-4 py-2 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
                🚀 SZYBKO I SPRAWNIE
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">
                  turowanie
                </span>
                <br />
                <span className="text-white">bez limitów</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-400">
                  bez dodatkowych kosztów
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                Profesjonalna, nowoczesna platforma do tworzenia faktur z pełnymi funkcjami. Żadnych limitów, żadnej karty kredytowej, żadnych ukrytych opłat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-xl hover:shadow-cyan-500/30 transition font-semibold text-lg">
                  Rozpocznij za darmo
                </button>
                <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition font-semibold text-lg">
                  Dowiedz się więcej
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 py-12 border-t border-slate-700/50">
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    50 000+
                  </div>
                  <div className="text-gray-400">aktywnych użytkowników</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    2 000 000+
                  </div>
                  <div className="text-gray-400">wystawionych faktur</div>
                </div>
                <div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    4.9/5
                  </div>
                  <div className="text-gray-400">średnia ocena</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="px-6 py-20 border-t border-slate-700/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Dlaczego VAT Faktura?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Szybkie tworzenie", desc: "Utwórz fakturę w kilka sekund" },
                  { title: "Bezpieczne", desc: "Dane chronione i przechowywane bezpiecznie" },
                  { title: "Export PDF", desc: "Pobierz faktury w formacie PDF" },
                  { title: "Szablony", desc: "Gotowe szablony dla Twojej firmy" },
                  { title: "Automatyczne obliczenia", desc: "VAT liczony automatycznie" },
                  { title: "Profesjonalny design", desc: "Faktury z profesjonalnym wyglądem" },
                ].map((feature, idx) => (
                  <div key={idx} className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg hover:border-cyan-500/50 hover:bg-slate-800/70 transition group">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition">{feature.title}</h3>
                    <p className="text-gray-400">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="px-6 py-20 border-t border-slate-700/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Jak to działa?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { num: "1", title: "Zarejestruj się", desc: "Bezpłatne konto w 30 sekund" },
                  { num: "2", title: "Utwórz fakturę", desc: "Wypełnij dane i gotowe" },
                  { num: "3", title: "Wyślij lub pobierz", desc: "Email lub PDF - Twój wybór" },
                ].map((step, idx) => (
                  <div key={idx} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6 text-2xl font-bold">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-6 py-20 border-t border-slate-700/50">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Gotów na zmianę?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Załóż darmowe konto i zacznij fakturować dzisiaj. Bez limitów, zawsze bezpłatnie.
              </p>
              <button className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition font-semibold text-lg">
                Rozpocznij teraz
              </button>
            </div>
          </section>

          {/* Footer */}
          <footer className="px-6 py-12 border-t border-slate-700/50 text-center text-gray-400">
            <p>&copy; 2024 VAT Faktura. Wszystkie prawa zastrzeżone.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
