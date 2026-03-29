export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-navy-800" style={{color: "#1a2e5a"}}>
          Classe & Astuces
        </h1>
        <div className="flex gap-4">
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
            Connexion
          </a>
          <a href="#" className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600">
            Essai gratuit
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="flex flex-col items-center text-center px-8 py-24 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-5xl font-bold text-gray-900 max-w-3xl leading-tight">
          Tout ce qu'il faut pour <span style={{color: "#f97316"}}>apprendre</span> et <span style={{color: "#1a2e5a"}}>enseigner</span>
        </h2>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Fiches, séquences, vidéos et exercices interactifs pour les enseignants, les parents et les élèves du CP au CM2.
        </p>
        <div className="flex gap-4 mt-10">
          <a href="#" className="bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-600">
            Commencer gratuitement
          </a>
          <a href="#" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400">
            Voir les ressources
          </a>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Pour qui ?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-blue-50 text-center">
            <div className="text-5xl mb-4">👩‍🏫</div>
            <h4 className="text-xl font-bold mb-2" style={{color: "#1a2e5a"}}>Enseignants</h4>
            <p className="text-gray-600">Séquences prêtes à l'emploi, fiches différenciées, outils de programmation de classe.</p>
          </div>
          <div className="p-8 rounded-2xl bg-orange-50 text-center">
            <div className="text-5xl mb-4">👨‍👩‍👧</div>
            <h4 className="text-xl font-bold mb-2" style={{color: "#f97316"}}>Parents</h4>
            <p className="text-gray-600">Accompagnez vos enfants avec des ressources claires, simples et efficaces.</p>
          </div>
          <div className="p-8 rounded-2xl bg-yellow-50 text-center">
            <div className="text-5xl mb-4">🎒</div>
            <h4 className="text-xl font-bold mb-2" style={{color: "#ca8a04"}}>Élèves</h4>
            <p className="text-gray-600">Exercices interactifs, vidéos et fiches pour progresser à son rythme du CP au CM2.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-400 border-t border-gray-100">
        © 2025 Classe & Astuces — Tous droits réservés
      </footer>

    </main>
  );
}