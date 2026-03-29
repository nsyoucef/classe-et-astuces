export default function Tarifs() {
  return (
    <main className="min-h-screen bg-white">

      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <a href="/" className="text-2xl font-bold" style={{color: "#1a2e5a"}}>
          Classe et Astuces
        </a>
        <div className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
            Connexion
          </a>
          <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600">
            Essai gratuit
          </a>
        </div>
      </header>

      <section className="text-center px-8 py-16 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl font-bold text-gray-900">Nos offres</h2>
        <p className="mt-4 text-xl text-gray-600">Sans engagement, annulable à tout moment</p>
      </section>

      <section className="px-8 py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="border-2 border-gray-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900">Decouverte</h3>
            <div className="mt-4 text-5xl font-bold text-gray-900">Gratuit</div>
            <p className="mt-2 text-gray-500">Pour toujours</p>
            <ul className="mt-8 space-y-3 text-left text-gray-600">
              <li>10 fiches PDF par mois</li>
              <li>Acces aux exercices de base</li>
              <li>Pas de videos de cours</li>
              <li>Pas de sequences completes</li>
            </ul>
            <a href="#" className="mt-8 block border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-400">
              Commencer
            </a>
          </div>

          <div className="border-2 rounded-2xl p-8 text-center relative" style={{borderColor: "#f97316"}}>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Le plus populaire
            </div>
            <h3 className="text-xl font-bold text-gray-900">Essentiel</h3>
            <div className="mt-4 text-5xl font-bold" style={{color: "#f97316"}}>9,90€</div>
            <p className="mt-2 text-gray-500">par mois</p>
            <ul className="mt-8 space-y-3 text-left text-gray-600">
              <li>Fiches PDF illimitees</li>
              <li>Tous les exercices interactifs</li>
              <li>Videos de cours</li>
              <li>Sequences completes</li>
            </ul>
            <a href="#" className="mt-8 block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600">
              Choisir Essentiel
            </a>
          </div>

          <div className="border-2 rounded-2xl p-8 text-center" style={{borderColor: "#1a2e5a"}}>
            <h3 className="text-xl font-bold text-gray-900">Premium</h3>
            <div className="mt-4 text-5xl font-bold" style={{color: "#1a2e5a"}}>14,90€</div>
            <p className="mt-2 text-gray-500">par mois</p>
            <ul className="mt-8 space-y-3 text-left text-gray-600">
              <li>Fiches PDF illimitees</li>
              <li>Tous les exercices interactifs</li>
              <li>Videos de cours</li>
              <li>Sequences completes</li>
              <li>Support prioritaire</li>
            </ul>
            <a href="#" className="mt-8 block text-white px-6 py-3 rounded-full font-semibold" style={{backgroundColor: "#1a2e5a"}}>
              Choisir Premium
            </a>
          </div>

        </div>
      </section>

      <footer className="text-center py-8 text-gray-400 border-t border-gray-100">
        2025 Classe et Astuces - Tous droits reserves
      </footer>

    </main>
  );
}