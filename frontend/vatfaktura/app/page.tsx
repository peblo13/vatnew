export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">VAT Faktura</div>
          <div className="flex gap-4">
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600">
              Zaloguj się
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Zarejestruj się
            </button>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Faktury bez limitów
          <br />
          bez dodatkowych kosztów
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Profesjonalna, nowoczesna platforma do tworzenia faktur z pełnymi funkcjami. Żadnych limitów, żadnej karty kredytowej.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
            Rozpocznij za darmo
          </button>
          <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
            Dowiedz się więcej
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">użytkowników</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">2M+</div>
            <div className="text-gray-600">faktur</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">ocena</div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Dlaczego VAT Faktura?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border rounded-lg hover:border-blue-400">
            <h3 className="text-xl font-semibold mb-3">Szybkie tworzenie</h3>
            <p className="text-gray-600">Utwórz fakturę w kilka sekund</p>
          </div>
          <div className="p-8 border rounded-lg hover:border-blue-400">
            <h3 className="text-xl font-semibold mb-3">Bezpieczne</h3>
            <p className="text-gray-600">Twoje dane chronione i bezpieczne</p>
          </div>
          <div className="p-8 border rounded-lg hover:border-blue-400">
            <h3 className="text-xl font-semibold mb-3">Export PDF</h3>
            <p className="text-gray-600">Pobierz faktury jako PDF</p>
          </div>
          <div className="p-8 border rounded-lg hover:border-blue-400">
            <h3 className="text-xl font-semibold mb-3">Szablony</h3>
            <p className="text-gray-600">Gotowe szablony dla firm</p>
          </div>
          <div className="p-8 border rounded-lg hover:border-blue-400">
            <h3 className="text-xl font-semibold mb-3">Automatyczne obliczenia</h3>
            <p className="text-gray-600">System liczy VAT automatycznie</p>
          </div>
          <div className="p-8 border rounded-lg hover:border-blue-400">
            <h3 className="text-xl font-semibold mb-3">Profesjonalny design</h3>
            <p className="text-gray-600">Faktury z profesjonalnym wyglądem</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Jak to działa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Zarejestruj się</h3>
              <p className="text-gray-600">Bezpłatne konto w 30 sekund</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Utwórz fakturę</h3>
              <p className="text-gray-600">Wypełnij dane i gotowe</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Wyślij lub pobierz</h3>
              <p className="text-gray-600">Email lub PDF - wybór Twój</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Gotów na zmianę?</h2>
          <p className="text-xl mb-8">
            Załóż darmowe konto i zacznij fakturować dzisiaj.
          </p>
          <button className="px-10 py-3 bg-white text-blue-600 font-semibold rounded hover:bg-gray-100">
            Rozpocznij teraz
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; 2024 VAT Faktura. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </main>
  );
}
