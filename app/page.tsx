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

          {/* Dla Obcokrajowców */}
          <section className="px-6 py-20 border-t border-slate-700/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Dla różnych grup</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Freelancerzy", desc: "Szybkie faktury bez biurokracji" },
                  { title: "Małe firmy", desc: "Pełne zarządzanie VAT" },
                  { title: "Agencje", desc: "Faktury dla wielu klientów" },
                  { title: "Obcokrajowcy", desc: "Obsługa międzynarodowa" },
                ].map((group, idx) => (
                  <div key={idx} className="p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 rounded-lg hover:border-cyan-500/50 transition">
                    <h3 className="text-lg font-semibold mb-2">{group.title}</h3>
                    <p className="text-gray-400 text-sm">{group.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Funkcjonalności */}
          <section className="px-6 py-20 border-t border-slate-700/50 bg-slate-900/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Pełne funkcjonalności</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Automatyczne obliczenia", desc: "System automatycznie liczy VAT, netto, brutto" },
                  { title: "Szablony faktur", desc: "Dostosuj wygląd faktury do swojej firmy" },
                  { title: "Historia transakcji", desc: "Wszystkie faktury zawsze dostępne" },
                  { title: "Eksport do PDF", desc: "Pobierz i wydrukuj faktury" },
                  { title: "Elektroniczne faktury", desc: "Kompatybilne z kSEF" },
                  { title: "Integracja z bankami", desc: "Synchronizacja ze swoim kontem bankowym" },
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="text-cyan-400 text-2xl">✓</div>
                    <div>
                      <h3 className="font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Dokumenty */}
          <section className="px-6 py-20 border-t border-slate-700/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Generuj dokumenty</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: "📄", title: "Faktury", desc: "Faktury VAT, proforma i zaliczki" },
                  { icon: "📋", title: "PIT", desc: "Rozliczenie podatku dochodowego" },
                  { icon: "🏢", title: "ZUS", desc: "Deklaracje i rozliczenia ZUS" },
                ].map((doc, idx) => (
                  <div key={idx} className="text-center p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg">
                    <div className="text-5xl mb-4">{doc.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                    <p className="text-gray-400">{doc.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Narzędzia */}
          <section className="px-6 py-20 border-t border-slate-700/50 bg-slate-900/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Dodatkowe narzędzia</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Mapa Urzędów", desc: "Znajdź najbliższy urząd skarbowy lub ZUS" },
                  { title: "Sprawdzenie Kontrahenta", desc: "Weryfikuj dane firm i przedsiębiorców" },
                  { title: "Generator Umów", desc: "Szablony umów dla różnych branż" },
                  { title: "Bezpłatne Porady", desc: "Poradnictwo z zakresu podatków i VAT" },
                ].map((tool, idx) => (
                  <div key={idx} className="p-6 bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 rounded-lg hover:border-cyan-500/50 transition">
                    <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                    <p className="text-gray-400">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bezpieczeństwo */}
          <section className="px-6 py-20 border-t border-slate-700/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Bezpieczeństwo i prywatność</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Szyfrowanie", desc: "Wszystkie dane szyfrowane end-to-end" },
                  { title: "Kopie zapasowe", desc: "Automatyczne backupy Twoich danych" },
                  { title: "Zgodność", desc: "Pełna zgodność z polskim prawem" },
                ].map((sec, idx) => (
                  <div key={idx} className="text-center p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg">
                    <div className="text-4xl mb-4">🔒</div>
                    <h3 className="text-lg font-semibold mb-2">{sec.title}</h3>
                    <p className="text-gray-400">{sec.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cennik */}
          <section className="px-6 py-20 border-t border-slate-700/50 bg-slate-900/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Transparentny cennik</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Darmowy", price: "0 zł", features: ["Do 10 faktur/miesiąc", "Podstawowe funkcje", "Brak karty kredytowej"] },
                  { name: "Profesjonalny", price: "29 zł", features: ["Nielimitowane faktury", "Wszystkie funkcje", "Wsparcie priorytetowe"] },
                  { name: "Biznesowy", price: "99 zł", features: ["API dostęp", "Integracje zaawansowane", "Dedykowane wsparcie"] },
                ].map((plan, idx) => (
                  <div key={idx} className={`p-8 border rounded-lg transition ${idx === 1 ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/20 to-blue-600/20' : 'border-slate-700/50 bg-slate-800/30'}`}>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-cyan-400 mb-6">{plan.price}<span className="text-lg text-gray-400">/miesiąc</span></div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <span className="text-cyan-400">✓</span>{feat}
                        </li>
                      ))}
                    </ul>
                    <button className={`w-full py-3 rounded-lg font-semibold transition ${idx === 1 ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/50' : 'border border-slate-600 text-gray-300 hover:border-cyan-500'}`}>
                      Wybierz plan
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="px-6 py-20 border-t border-slate-700/50">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Najczęstsze pytania</h2>
              <div className="space-y-4">
                {[
                  { q: "Czy opłata jest rzeczywiście darmowa?", a: "Tak, plan darmowy zawsze będzie bezpłatny. Bez karty kredytowej, bez niespodzianek." },
                  { q: "Czy moje faktury są bezpieczne?", a: "Wszystkie dane szyfrowane end-to-end. Automatyczne backupy codziennie." },
                  { q: "Czy system jest kompatybilny z kSEF?", a: "Tak, pełna kompatybilność z polskim kSEF." },
                  { q: "Mogę zmienić plan w dowolnym momencie?", a: "Oczywiście, bez żadnych zobowiązań. Anuluj gdy chcesz." },
                ].map((faq, idx) => (
                  <div key={idx} className="p-6 bg-slate-800/30 border border-slate-700/30 rounded-lg hover:border-cyan-500/50 transition">
                    <h3 className="font-semibold text-lg mb-2 text-cyan-400">{faq.q}</h3>
                    <p className="text-gray-400">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="px-6 py-20 border-t border-slate-700/50 bg-slate-900/30">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16">Co mówią użytkownicy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Anna K.", role: "Freelancerka", comment: "Świetne narzędzie! Oszczędzam mnóstwo czasu na faktury." },
                  { name: "Piotr S.", role: "Właściciel firmy", comment: "Najlepsze rozwiązanie do zarządzania VAT na rynku." },
                  { name: "Maria W.", role: "Księgowa", comment: "Polecam każdemu. Zmienia sposób pracy z fakturami." },
                ].map((testimonial, idx) => (
                  <div key={idx} className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-lg">
                    <div className="mb-4 text-cyan-400">★★★★★</div>
                    <p className="text-gray-300 mb-4">"{testimonial.comment}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="px-6 py-24 border-t border-slate-700/50 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-5xl font-bold mb-8">Nie czekaj, zacznij teraz!</h2>
              <p className="text-xl text-gray-300 mb-12">
                Załóż konto za darmo. Bez karty kredytowej. Bez zobowiązań.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-xl hover:shadow-cyan-500/50 transition font-semibold text-lg">
                  Rozpocznij za darmo
                </button>
                <button className="px-12 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition font-semibold text-lg">
                  Pokaż demo
                </button>
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section className="px-6 py-20 border-t border-slate-700/50 bg-slate-900/50">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Bądź na bieżąco</h2>
              <p className="text-gray-400 mb-8">Otrzymuj najnowsze porady podatkowe i aktualizacje platformy</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Twój email..." className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500" />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition">
                  Zapisz się
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="px-6 py-12 border-t border-slate-700/50 text-center text-gray-400">
            <div className="max-w-6xl mx-auto mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-white mb-4">Produkty</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-cyan-400 transition">Faktury</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition">PIT</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition">ZUS</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Firma</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-cyan-400 transition">O nas</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition">Kontakt</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Prawne</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-cyan-400 transition">Polityka prywatności</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition">Regulamin</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition">Cookies</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-4">Obserwuj</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-cyan-400 transition">Facebook</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition">Twitter</a></li>
                    <li><a href="#" className="hover:text-cyan-400 transition">LinkedIn</a></li>
                  </ul>
                </div>
              </div>
              <p>&copy; 2024 VAT Faktura. Wszystkie prawa zastrzeżone.</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
        </main>
      </div>
    </div>
  );
}
