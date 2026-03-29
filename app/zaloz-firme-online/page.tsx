export default function ZalozFirme() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <a href="/" className="text-2xl font-bold text-cyan-400">VAT Faktura</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-bold mb-4">Załóż Firmę Online</h1>
        <p className="text-xl text-gray-300 mb-16">
          Porównaj rodzaje firm i wybierz najlepszą formę prawną dla Twojego biznesu. Zarejestruj się w kilka minut.
        </p>

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              name: "JDG",
              title: "Jednoosobowa Działalność Gospodarcza",
              desc: "Idealna dla freelancerów i samozatrudnionych",
              details: [
                "Kapitał: Brak wymogu",
                "Czas: CEIDG - 1-2 dni",
                "Koszt: 0 zł",
                "Odpowiedzialność: Nieograniczona"
              ]
            },
            {
              name: "Sp. z o.o.",
              title: "Spółka Limite Odpowiedzialności",
              desc: "Najpopularniejsza forma dla małych firm",
              details: [
                "Kapitał: 5 000 zł",
                "Czas: 5-10 dni",
                "Koszt: 2 000-3 000 zł",
                "Odpowiedzialność: Ograniczona"
              ]
            }
          ].map((form, i) => (
            <div key={i} className="p-8 bg-slate-800/30 border border-slate-700/50 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">{form.name}</h3>
              <h4 className="text-lg font-semibold mb-2">{form.title}</h4>
              <p className="text-gray-400 mb-6">{form.desc}</p>
              <ul className="space-y-2 mb-6">
                {form.details.map((detail, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-300">
                    <span className="text-cyan-400">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded font-semibold transition">
                Dowiedz się więcej
              </button>
            </div>
          ))}
        </div>

        {/* Steps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Szybki Start</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Wybierz formę", desc: "Zdecyduj który typ firmy pasuje do Ciebie" },
              { num: "2", title: "Przygotuj dokumenty", desc: "Przygotuj wymagane dokumenty i dane" },
              { num: "3", title: "Zarejestruj", desc: "Złóż wniosek w odpowiednim urzędzie" },
              { num: "4", title: "Zacznij pracować", desc: "Wystawiaj faktury i zarządzaj biznesem" }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex w-12 h-12 bg-cyan-500 rounded-full items-center justify-center mb-4 text-lg font-bold">
                  {step.num}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Pytania i Odpowiedzi</h2>
          <div className="space-y-4">
            {[
              {
                q: "Którą formę wybrać na początek?",
                a: "Jeśli jesteś samozatrudniony - JDG. Jeśli planujesz zatrudniać innych lub chcesz większą ochronę - Sp. z o.o."
              },
              {
                q: "Czy mogę zmienić formę prawną później?",
                a: "Tak, możesz przekształcić firmę z JDG na Sp. z o.o., ale wiąże się to z dodatkowymi formalności i kosztami."
              },
              {
                q: "Ile kosztuje założenie firmy?",
                a: "JDG i Sp. partnerska to około 0-500 zł. Sp. z o.o. to 2000-3000 zł. S.A. to 3000-5000 zł."
              }
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-lg">
                <h3 className="font-semibold text-cyan-400 mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
