const ProfileCard = ({ perfil, onOpen }) => {
  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer flex flex-col h-full"
      onClick={onOpen}
    >
      {/* Cabeçalho do Card */}
      <div className="h-24 bg-gradient-to-r from-agro-600 to-green-400 rounded-t-xl relative">
        <img
          src={perfil.foto}
          alt={perfil.nome}
          className="w-20 h-20 rounded-full border-4 border-white dark:border-gray-900 absolute -bottom-10 left-4 object-cover bg-white"
        />
      </div>

      {/* Corpo do Card */}
      <div className="pt-12 pb-4 px-4 flex-grow">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white leading-tight">
          {perfil.nome}
        </h3>
        <p className="text-sm text-agro-600 dark:text-green-400 font-medium mb-2">
          {perfil.cargo}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
          📍 {perfil.localizacao}
        </p>

        {/* Tags de Skills (Mostra apenas as 3 primeiras) */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {perfil.habilidadesTecnicas.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-md font-medium"
            >
              {skill}
            </span>
          ))}
          {perfil.habilidadesTecnicas.length > 3 && (
            <span className="text-xs text-gray-400 self-center">
              +{perfil.habilidadesTecnicas.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Rodapé do Card */}
      <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
        <span className="text-xs text-gray-400">Ver perfil completo</span>
        <svg
          className="w-5 h-5 text-agro-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProfileCard;
