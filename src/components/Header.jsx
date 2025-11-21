import logo from '../assets/logo-FiapIn.png';

const Header = ({ toggleTheme, isDark }) => {
  return (
    <header className="bg-agro-800 dark:bg-gray-950 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo e Identidade */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="FiapIn Caipira"
            className="h-12 w-12 rounded-full border-2 border-yellow-400 bg-white object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              FiapIn<span className="text-yellow-400">.</span>
            </h1>
            <p className="text-xs text-gray-300 font-light hidden sm:block">
              O Futuro do Trabalho no Campo
            </p>
          </div>
        </div>

        {/* Botão Dark Mode */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-agro-600 dark:bg-gray-800 hover:bg-agro-500 transition-all shadow-md focus:outline-none ring-2 ring-transparent focus:ring-yellow-400 cursor-pointer"
          title="Alternar Tema"
          aria-label="Alternar Tema Escuro"
        >
          {isDark ? (
            // Ícone de Sol (Para voltar ao Claro)
            <svg
              className="w-6 h-6 text-yellow-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            // Ícone de Lua (Para ir ao Escuro)
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
