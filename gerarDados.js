import fs from 'fs';

// Gerador de perfis - FiapIn

const nomes = [
  'Tião',
  'Jéssica',
  'Chico',
  'Ana',
  'Zé',
  'Mariana',
  'Bento',
  'Carla',
  'Tonho',
  'Fernanda',
  'João',
  'Beatriz',
  'Pedro',
  'Camila',
  'Raimundo',
  'Larissa',
  'Augusto',
  'Juliana',
  'Felipe',
  'Amanda',
];
const sobrenomes = [
  'da Soja',
  'do Milho',
  'Ferreira',
  'Silva',
  'Oliveira',
  'Santos',
  'Mendes',
  'Ribeiro',
  'Almeida',
  'Costa',
  'Pereira',
  'Rodrigues',
  'Gomes',
  'Martins',
  'Barbosa',
];
const cargos = [
  'Engenheiro Agrônomo de Dados',
  'Desenvolvedor IoT Rural',
  'Operador de Drone Agrícola',
  'Veterinário de Precisão',
  'Gestor de Fazenda 4.0',
  'Analista de Safra e Big Data',
  'Técnico em Irrigação Smart',
  'Consultor de Agrobusiness',
  'Especialista em GPS Agrícola',
  'Dev FullStack do Agro',
];
const locais = [
  'Ribeirão Preto/SP',
  'Sorriso/MT',
  'Uberaba/MG',
  'Londrina/PR',
  'Rio Verde/GO',
  'Petrolina/PE',
  'Chapecó/SC',
  'Luís Eduardo Magalhães/BA',
  'Piracicaba/SP',
  'Cascavel/PR',
];
const areas = [
  'Tecnologia',
  'Agronomia',
  'Gestão',
  'Veterinária',
  'Operacional',
];

const hardSkillsList = [
  'Python',
  'Análise de Solo',
  'Pilotagem de Drone',
  'React',
  'Gestão de Safra',
  'GPS Agrícola',
  'Irrigação Automatizada',
  'Power BI',
  'Node.js',
  'Sensores IoT',
  'Java',
  'Excel Avançado',
];
const softSkillsList = [
  'Resiliência',
  'Comunicação Rural',
  'Liderança',
  'Trabalho em Equipe',
  'Proatividade',
  'Negociação',
  'Visão Sistêmica',
  'Adaptabilidade',
];
const interessesList = [
  'Sustentabilidade',
  'Agricultura 4.0',
  'Pecuária de Corte',
  'Bioenergia',
  'Cafés Especiais',
  'Startups Agro',
  'Cooperativismo',
];

// Funções auxiliares:

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomSubArray = (arr, min, max) => {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * (max - min + 1)) + min);
};

const gerarPerfil = (id) => {
  const nome = `${randomItem(nomes)} ${randomItem(sobrenomes)}`;
  const cargo = randomItem(cargos);
  const area = randomItem(areas);

  return {
    id: id,
    nome: nome,
    foto: `https://ui-avatars.com/api/?name=${nome.replace(
      ' ',
      '+',
    )}&background=random&size=256`, // Gera avatar com iniciais
    cargo: cargo,
    resumo: `Profissional focado em ${area} com paixão por inovar no campo. Busco conectar tecnologia e tradição no FiapIn.`,
    localizacao: randomItem(locais),
    area: area,
    habilidadesTecnicas: randomSubArray(hardSkillsList, 3, 6),
    softSkills: randomSubArray(softSkillsList, 2, 4),
    experiencias: [
      {
        empresa: 'Fazenda Boa Esperança',
        cargo: 'Estagiário',
        inicio: '2020-01',
        fim: '2021-12',
        descricao: 'Apoio na gestão de maquinário e implementação de sensores.',
      },
      {
        empresa: 'AgroTech Solutions',
        cargo: cargo,
        inicio: '2022-01',
        fim: 'Atualmente',
        descricao:
          'Desenvolvimento de soluções tecnológicas para aumento de produtividade no campo.',
      },
    ],
    formacao: [
      {
        curso:
          area === 'Tecnologia'
            ? 'Sistemas para Internet'
            : 'Engenharia Agronômica',
        instituicao: 'FIAP',
        ano: 2023,
      },
    ],
    projetos: [
      {
        titulo: 'Monitoramento de Safra via Satélite',
        link: 'https://github.com/fiapin/projeto-agro',
        descricao: 'Sistema web para análise de índices de vegetação (NDVI).',
      },
    ],
    certificacoes: ['Piloto de Drone (ANAC)', 'Certificação IoT Rural'],
    idiomas: [
      { idioma: 'Português', nivel: 'Nativo' },
      { idioma: 'Inglês', nivel: 'Intermediário' },
    ],
    areaInteresses: randomSubArray(interessesList, 2, 4),
  };
};

// Gera os 60 perfís no arquivo novo ('perfis.json')

const perfis = [];
for (let i = 1; i <= 60; i++) {
  perfis.push(gerarPerfil(i));
}

const jsonContent = JSON.stringify(perfis, null, 2);

fs.writeFile('src/data/perfis.json', jsonContent, 'utf8', (err) => {
  if (err) {
    console.error('Erro ao salvar o arquivo:', err);
    return;
  }
  console.log(
    "Arquivo 'perfis.json' gerado com sucesso com 60 perfis do FiapIn!",
  );
});
