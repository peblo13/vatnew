export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-cyan-400">VAT Faktura</div>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-gray-300 hover:text-cyan-400">
              Zaloguj się
            </button>
            <button className="px-6 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600">
              Zarejestruj się
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div className="flex">
        <aside className="hidden md:block w-64 bg-slate-900/50 border-r border-slate-700/50 p-6 sticky top-16 h-screen overflow-y-auto">
          <nav className="space-y-4">
            {[
              { icon: "📊", label: "Załóż firmę" },
              { icon: "📄", label: "Faktura" },
              { icon: "📋", label: "PIT" },
              { icon: "🏢", label: "ZUS" },
              { icon: "🔍", label: "Sprawdź Kontrahenta" },
              { icon: "🗺️", label: "Mapa Urzędów" },
              { icon: "⚖️", label: "Bezpłatne Porady" },
              { icon: "📝", label: "Generator Umów" },
            ].map((item, idx) => (
              <button key={idx} className="w-full text-left flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded transition">
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 text-white">
          {/* Hero */}
          <section className="px-6 py-32 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-8 px-4 py-2 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                🚀 SZYBKO I SPRAWNIE
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                  Fakturowanie
                </span>
                <br />
                <span className="text-white">bez limitów</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  bez dodatkowych kosztów
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Profesjonalna, nowoczesna platforma do tworzenia faktur z pełnymi funkcjami. Żadnych limitów, żadnej karty kredytowej, żadnych ukrytych opłat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded font-semibold transition">
                  Rozpocznij za darmo
                </button>
                <button className="px-8 py-3 border border-cyan-500/50 text-cyan-400 rounded hover:bg-cyan-500/10 transition font-semibold">
                  Zaloguj się
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 py-12 border-t border-slate-700/50">
                <div>
                  <div className="text-5xl font-bold text-cyan-400 mb-2">50 000+</div>
                  <div className="text-gray-400">aktywnych użytkowników</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-cyan-400 mb-2">2 000 000+</div>
                  <div className="text-gray-400">wystawionych faktur</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-cyan-400 mb-2">4.9/5</div>
                  <div className="text-gray-400">średnia ocena</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="px-6 py-20 border-t border-slate-700/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Dlaczego VAT Faktura?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Szybkie tworzenie", desc: "Utwórz fakturę w kilka sekund" },
                  { title: "Bezpieczne", desc: "Twoje dane chronione i bezpieczne" },
                  { title: "Export PDF", desc: "Pobierz faktury jako PDF" },
                  { title: "Szablony", desc: "Gotowe szablony dla firm" },
                  { title: "Automatyczne obliczenia", desc: "VAT liczony automatycznie" },
                  { title: "Profesjonalny design", desc: "Faktury z profesjonalnym wyglądem" },
                ].map((f, i) => (
                  <div key={i} className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg hover:border-cyan-500/50 transition">
                    <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                    <p className="text-gray-400">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Załóż firmę */}
          <section className="px-6 py-20 border-t border-slate-700/50 bg-slate-900/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Załóż firmę online</h2>
              <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                Nie musisz już odwiedzać urzędu! VAT Faktura pomaga w rejestracji Twojej firmy online.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  "Szybka rejestracja online",
                  "Bez wizyt w urzędach",
                  "Pełna obsługa dokumentacji",
                  "Integracja z fakturaowaniem",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="text-cyan-400">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Dla obcokrajowców */}
          <section className="px-6 py-20 border-t border-slate-700/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Poradnik dla obcokrajowców</h2>
              <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                Kompletny przewodnik dla obcokrajowców chcących pracować i prowadzić biznes w Polsce.
              </p>
            </div>
          </section>

          {/* Jak to działa */}
          <section className="px-6 py-20 border-t border-slate-700/50 bg-slate-900/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Jak to działa?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { num: "1", title: "Zarejestruj się", desc: "Bezpłatne konto w 30 sekund" },
                  { num: "2", title: "Utwórz fakturę", desc: "Wypełnij dane i gotowe" },
                  { num: "3", title: "Wyślij lub pobierz", desc: "Email lub PDF" },
                ].map((step, i) => (
                  <div key={i} className="text-center">
                    <div className="inline-flex w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full items-center justify-center mb-6 text-2xl font-bold">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Rozliczenia PIT */}
          <section className="px-6 py-20 border-t border-slate-700/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Rozlicz PIT bezpośrednio</h2>
              <p className="text-gray-300 text-center mb-12">
                Wypełnij deklarację podatkową online i wyślij bezpośrednio do urzędu - wszystko za darmo.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["PIT-37", "PIT-36", "PIT-28", "PIT-38", "PIT-39", "PIT-16A"].map((pit, i) => (
                  <div key={i} className="p-4 bg-slate-800/30 border border-slate-700/50 rounded text-center hover:border-cyan-500/50 transition">
                    <div className="font-semibold text-cyan-400">{pit}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Narzędzia ZUS */}
          <section className="px-6 py-20 border-t border-slate-700/50 bg-slate-900/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Narzędzia ZUS online</h2>
              <p className="text-gray-300 text-center mb-12">
                Wypełnij formularze ZUS, oblicz zasiłki - wszystko w jednym miejscu.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "ZUS Z-3", desc: "Zaświadczenie chorobowe" },
                  { title: "ZUS Z-15", desc: "Zasiłek opiekuńczy" },
                  { title: "Kalkulator zasiłku", desc: "Zasiłek chorobowy i macierzyński" },
                  { title: "Kalendarz ZUS", desc: "Terminy i deadline'y" },
                ].map((tool, i) => (
                  <div key={i} className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg hover:border-cyan-500/50 transition">
                    <h3 className="text-lg font-semibold text-cyan-400 mb-2">{tool.title}</h3>
                    <p className="text-gray-400">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Dodatkowe usługi */}
          <section className="px-6 py-20 border-t border-slate-700/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Dodatkowe usługi</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: "🗺️", title: "Mapa Urzędów", desc: "Znajdź dane urzędów" },
                  { icon: "⚖️", title: "Porady Prawne", desc: "Bezpłatne konsultacje" },
                  { icon: "📝", title: "Generator Umów", desc: "Szablony umów z AI" },
                ].map((service, i) => (
                  <div key={i} className="text-center p-8 bg-slate-800/30 border border-slate-700/50 rounded-lg hover:border-cyan-500/50 transition">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-400">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnerzy */}
          <section className="px-6 py-20 border-t border-slate-700/50 bg-slate-900/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Poleceni partnerzy</h2>
              <p className="text-gray-300 text-center mb-12">
                Sprawdzeni partnerzy zaufania dla Twojego biznesu
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { icon: "💳", name: "Wise", desc: "Przelewy międzynarodowe" },
                  { icon: "💰", name: "Stripe", desc: "Płatności online" },
                  { icon: "📊", name: "Comarch", desc: "Rozwiązania księgowe" },
                  { icon: "🌐", name: "Namecheap", desc: "Domeny i hosting" },
                  { icon: "📧", name: "Google Workspace", desc: "Email i narzędzia" },
                  { icon: "🎨", name: "Canva", desc: "Materiały marketingowe" },
                ].map((partner, i) => (
                  <div key={i} className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg text-center hover:border-cyan-500/50 transition">
                    <div className="text-3xl mb-2">{partner.icon}</div>
                    <h3 className="font-semibold">{partner.name}</h3>
                    <p className="text-sm text-gray-400">{partner.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="px-6 py-24 border-t border-slate-700/50 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-5xl font-bold mb-8">Gotów na zmianę?</h2>
              <p className="text-xl text-gray-300 mb-12">
                Załóż darmowe konto i zacznij fakturować dzisiaj. Bez limitów, bez karty kredytowej, zawsze bezpłatnie.
              </p>
              <button className="px-12 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold text-lg transition">
                Rozpocznij za darmo
              </button>
            </div>
          </section>

          {/* Newsletter */}
          <section className="px-6 py-20 border-t border-slate-700/50 bg-slate-900/50">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Bądź na bieżąco</h2>
              <p className="text-gray-400 mb-8">Subskrybuj nasz newsletter i otrzymuj tips podatkowe</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Twój email..." className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded text-white placeholder-gray-500" />
                <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded font-semibold transition">
                  Subskrybuj
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="px-6 py-12 border-t border-slate-700/50 text-center text-gray-400">
            <p>&copy; 2024 VAT Faktura. Wszystkie prawa zastrzeżone.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
