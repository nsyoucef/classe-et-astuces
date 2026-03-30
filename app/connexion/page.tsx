export default function Connexion() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">

      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white">
        <a href="/" className="text-2xl font-bold" style={{color: "#1a2e5a"}}>
          Classe et Astuces
        </a>
      </header>

      <div className="flex flex-1 items-center justify-center px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">

          <h2 className="text-3xl font-bold text-center mb-2" style={{color: "#1a2e5a"}}>
            Connexion
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Pas encore de compte ?{" "}
            <a href="/inscription" className="font-semibold" style={{color: "#f97316"}}>
              Creer un compte
            </a>
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-400"
              />
            </div>

            <a href="#" className="text-sm text-right font-medium" style={{color: "#f97316"}}>
              Mot de passe oublie ?
            </a>

            <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold text-lg hover:bg-orange-600 mt-2">
              Se connecter
            </button>
          </div>

        </div>
      </div>

      <footer className="text-center py-6 text-gray-400 text-sm">
        2025 Classe et Astuces - Tous droits reserves
      </footer>

    </main>
  );
}