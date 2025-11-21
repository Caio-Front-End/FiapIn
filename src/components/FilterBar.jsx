const FilterBar = ({ busca, setBusca }) => {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow-md mb-8 transition-colors duration-300 border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Input de Busca */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Busque por nome, cargo ou área..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-agro-600 focus:border-transparent outline-none transition-all"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        {/* Filtros Rápidos (Visual) */}
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
          {['Todos', 'Agronomia', 'Tecnologia', 'Gestão'].map((filtro) => (
            <button
              key={filtro}
              onClick={() => setBusca(filtro === 'Todos' ? '' : filtro)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                ${
                  busca === filtro || (filtro === 'Todos' && busca === '')
                    ? 'bg-agro-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {filtro}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
