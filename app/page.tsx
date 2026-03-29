import { Zap, Lock, FileText, Calculator, Sparkles, Check, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">VAT Faktura</div>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition">
              Zaloguj się
            </button>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium">
              Zarejestruj się
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Szybko i sprawnie</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Faktury bez limitów
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              bez dodatkowych kosztów
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Profesjonalna, nowoczesna platforma do tworzenia faktur z pełnymi funkcjami. Żadnych limitów, żadnej karty kredytowej, żadnych ukrytych opłat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-lg transition flex items-center justify-center gap-2">
              Rozpocznij za darmo
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-600 text-gray-300 hover:bg-slate-800 px-8 py-6 text-lg font-semibold rounded-lg transition">
              Dowiedz się więcej
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-slate-700/50">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">50 000+</div>
            <div className="text-gray-400">aktywnych użytkowników</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">2 000 000+</div>
            <div className="text-gray-400">wystawionych faktur</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">4.9/5</div>
            <div className="text-gray-400">średnia ocena</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-700/50">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Dlaczego VAT Faktura?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Szybkie tworzenie", desc: "Utwórz profesjonalną fakturę w kilka sekund dzięki intuicyjnemu interfejsowi" },
            { icon: Lock, title: "Bezpieczne", desc: "Twoje dane są chronione i przechowywane bezpiecznie w przeglądarce" },
            { icon: FileText, title: "Export do PDF", desc: "Pobierz i wyślij faktury w formacie PDF gotowym do druku" },
            { icon: Sparkles, title: "Szablony", desc: "Korzystaj z gotowych szablonów i stwórz własne dla swojej firmy" },
            { icon: Calculator, title: "Automatyczne obliczenia", desc: "Wszystkie matematyczne obliczenia wykonywane automatycznie" },
            { icon: Check, title: "Profesjonalny wygląd", desc: "Faktury z profesjonalnym designem dla Twojej firmy" },
          ].map((feature, idx) => (
            <div key={idx} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 hover:border-blue-500/30 transition">
              <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-700/50">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Jak to działa?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { num: "1", title: "Zarejestruj się", desc: "Załóż bezpłatne konto w ciągu 30 sekund. Nie potrzebujesz karty kredytowej." },
            { num: "2", title: "Utwórz fakturę", desc: "Wypełnij dane odbiorcy, towary/usługi i gotowe. System automatycznie obliczy VAT." },
            { num: "3", title: "Wyślij lub pobierz", desc: "Wyślij fakturę emailem lub pobierz jako PDF. Wszystko zapisuje się automatycznie." },
          ].map((step, idx) => (
            <div key={idx} className="relative">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-8 h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 mt-4">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-700/50">
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-lg p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Gotów na zmianę?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Załóż darmowe konto i zacznij fakturować dzisiaj. Bez limitów, bez karty kredytowej, zawsze bezpłatnie.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-lg transition">
            Rozpocznij teraz
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-900/50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 VAT Faktura. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </main>
  );
}
