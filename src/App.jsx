import { useState, useEffect } from 'react';
import perfisData from './data/perfis.json'; // mock de perfís
// Componentes principais
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ProfileCard from './components/ProfileCard';
import ProfileModal from './components/ProfileModal';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [busca, setBusca] = useState('');

  // verifica preferência do sistema ou carrega padrão ao iniciar
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  // Atualiza a classe no HTML quando o estado muda
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Filtra os 60 perfis pelo nome ou cargo
  const perfisFiltrados = perfisData.filter(
    (perfil) =>
      perfil.nome.toLowerCase().includes(busca.toLowerCase()) ||
      perfil.cargo.toLowerCase().includes(busca.toLowerCase()) ||
      perfil.area.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div className="min-h-screen flex flex-col bg-agro-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300 font-sans">
      {/* Cabeçalho */}
      <Header toggleTheme={toggleTheme} isDark={isDark} />

      {/* Conteúdo Principal */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-agro-800 dark:text-green-400 mb-2">
            Conecte-se ao Agro 4.0
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Encontre os melhores profissionais que unem campo e tecnologia.
          </p>
        </div>

        {/* Barra de Filtros (Passando a função de setBusca) */}
        <FilterBar busca={busca} setBusca={setBusca} />

        {/* Grid de Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {perfisFiltrados.map((perfil) => (
            <ProfileCard
              key={perfil.id}
              perfil={perfil}
              onOpen={() => setSelectedProfile(perfil)}
            />
          ))}
        </section>

        {/* Estado Vazio (caso o filtro não ache nada) */}
        {perfisFiltrados.length === 0 && (
          <div className="text-center py-20 text-gray-500 dark:text-gray-400">
            <p>Nenhum profissional encontrado com esses termos, sô!</p>
          </div>
        )}
      </main>

      <Footer />

      {/* Modal (Só renderiza se tiver perfil selecionado) */}
      {selectedProfile && (
        <ProfileModal
          perfil={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
}

export default App;
