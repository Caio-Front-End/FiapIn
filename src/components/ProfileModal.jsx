import { useEffect } from 'react';

const ProfileModal = ({ perfil, onClose }) => {
  // Fecha o modal com a tecla ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    // Bloqueia o scroll do body quando modal está aberto
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Função para evitar que o clique dentro do modal o feche
  const handleModalClick = (e) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={onClose} // Fecha ao clicar fora
    >
      <div
        className="bg-white dark:bg-gray-900 w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative animate-fade-in-up"
        onClick={handleModalClick}
      >
        {/* Botão de Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header do Modal */}
        <div className="h-32 bg-gradient-to-r from-agro-800 to-agro-600 flex-shrink-0"></div>

        <div className="px-8 -mt-12 flex flex-col sm:flex-row items-end sm:items-center gap-6 mb-6">
          <img
            src={perfil.foto}
            alt={perfil.nome}
            className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-900 bg-white object-cover shadow-lg"
          />
          <div className="mb-2 text-center sm:text-left">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              {perfil.nome}
            </h2>
            <p className="text-agro-600 dark:text-green-400 font-medium text-lg">
              {perfil.cargo}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center justify-center sm:justify-start gap-1">
              📍 {perfil.localizacao} • {perfil.area}
            </p>
          </div>
        </div>

        {/* Conteúdo 'Scrollável' */}
        <div className="px-8 pb-8 overflow-y-auto custom-scrollbar flex-grow space-y-8">
          {/* Sobre */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">
              Sobre
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {perfil.resumo}
            </p>
          </section>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">
                Habilidades Técnicas
              </h3>
              <div className="flex flex-wrap gap-2">
                {perfil.habilidadesTecnicas.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {perfil.softSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Experiência */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">
              Experiência Profissional
            </h3>
            <div className="space-y-4">
              {perfil.experiencias.map((exp, i) => (
                <div
                  key={i}
                  className="border-l-2 border-gray-200 dark:border-gray-700 pl-4"
                >
                  <h4 className="font-bold text-gray-800 dark:text-gray-100">
                    {exp.cargo}
                  </h4>
                  <p className="text-sm text-agro-600 dark:text-green-400">
                    {exp.empresa}
                  </p>
                  <p className="text-xs text-gray-400 mb-1">
                    {exp.inicio} - {exp.fim}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {exp.descricao}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Formação */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">
              Formação Acadêmica
            </h3>
            {perfil.formacao.map((form, i) => (
              <div key={i} className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-gray-100">
                    {form.curso}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {form.instituicao}
                  </p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  {form.ano}
                </span>
              </div>
            ))}
          </section>
        </div>

        {/* Footer do Modal com Ações */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex gap-4 bg-gray-50 dark:bg-gray-800/50">
          <button
            className="flex-1 bg-agro-600 hover:bg-agro-700 text-white font-bold py-3 px-4 rounded-xl transition-colors flex justify-center items-center gap-2 shadow-lg hover:shadow-agro-600/30"
            onClick={() => alert(`Mensagem enviada para ${perfil.nome}!`)}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
            Enviar Mensagem
          </button>
          <button
            className="flex-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white font-bold py-3 px-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors flex justify-center items-center gap-2"
            onClick={() => alert(`Você recomendou ${perfil.nome}!`)}
          >
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Recomendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
