const quiz = [
  {
    question: `Em qual planeta Luke treinou para se tornar um Jedi?`,
    answer: `Dagobah`,
    choices: [`Naboo`, `Coruscant`, `Tatooine`, `Dagobah`],
  },
  {
    question: `Em qual planeta Anakain nasceu?`,
    answer: `Tatooine`,
    choices: [`Alderaan`, `Tatooine`, `Naboo`, `Coruscant`],
  },
  {
    question: `Qual o nome da mãe de Anakain?`,
    answer: `Shmi`,
    choices: [`Leia`, `Shmi`, `May`, `Emily`],
  },
  {
    question: `Quem matou Jabba the hutt?`,
    answer: `Leia`,
    choices: [`Luke`, `Han Solo`, `Boba Fett`, `Leia`],
  },
  {
    question: `Quem era Palpatine?`,
    answer: `Darth Sidious`,
    choices: [`Darth Vader`, `Darth Sidious`, `Darth Maul`, `Darth Tyranus`],
  },
  {
    question: `Quem treinou Darth Maul?`,
    answer: `Darth Sidious`,
    choices: [`Yoda`, `Darth Vader`, `Darth Sidious`, `Qui-Gon Jinn`],
  },
  {
    question: `A famosa frase "Guerra não faz grande ninguém." é dita por quem?`,
    answer: `Yoda`,
    choices: [`Leia`, `Qui-Gon Jinn`, `Yoda`, `Luke`],
  },
  {
    question: `Quem treinou Ahsoka Tano?`,
    answer: `Anakin Skywalker`,
    choices: [
      `Anakin Skywalker`,
      `Qui-Gon Jinn`,
      `Obi-Wan Kenobi`,
      `Mace Windu`,
    ],
  },
  {
    question: `O que o Luke Skywalker perdeu na luta com Darth Vader?`,
    answer: `Sua mão direita`,
    choices: [
      `Sua mão esquerda`,
      `Sua mão direita`,
      `Seu braco direito`,
      `Seu braco esquerdo`,
    ],
  },
  {
    question: `Quem adotou a filha de Padmé Amidala?`,
    answer: `Bail Organa`,
    choices: [`Owen Lars`, `Ruwee Naberrie`, `Mon Mothma`, `Bail Organa`],
  },
  {
    question: `Quem matou Darth Maul?`,
    answer: `Obi-Wan Kenobi`,
    choices: [`Darth Sidious`, `Luke`, `Obi-Wan Kenobi`, `Qui-Gon Jinn`],
  },
  {
    question: `"The Child" é conhecido como?`,
    answer: `Grogu, Baby Yoda`,
    choices: [`Yoda`, `Baby Yoda`, `Grogu, Baby Yoda`, `Grogu`],
  },
  {
    question: `Quem é o filho de Jango Fett?`,
    answer: `Boba Fett`,
    choices: [`Cad Bane`, `Boba Fett`, `Fennec Shand`, `O Mandaloriano`],
  },
  {
    question: `Em qual planeta Han Solo nasceu?`,
    answer: `Corellia`,
    choices: [`Alderaan`, `Kamino`, `Naboo`, `Corellia`],
  },
  {
    question: `Quem matou o Líder Supremo Snoke?`,
    answer: `Kylo Ren`,
    choices: [`Leia Organa`, `Kylo Ren`, `Luke Skywalker`, `Rey Skywalker`],
  },
  {
    question: `Qual dos planetas abaixo foi destruído pela Estrela da Morte?`,
    answer: `Alderaan`,
    choices: [`Klatooine`, `Coruscant`, `Naboo`, `Alderaan`],
  },
  {
    question: `Quem ensinou Lando Calrissian a pilotar uma nave?`,
    answer: `Han Solo`,
    choices: [`Han Solo`, `Qi'ra`, `Anakin`, `C-3PO`],
  },
  {
    question: `Quem abaixo nunca pilotou a Millennium Falcom?`,
    answer: `Leia`,
    choices: [`Leia`, `Chewbacca`, `Rey`, `Lando`],
  },
  {
    question: `Quem matou Han Solo?`,
    answer: `Kylo Ren`,
    choices: [`Kylo Ren`, `Qi'ra`, `Snoke`, `Darth Sidious/Palpatine`],
  },
  {
    question: `Quantos sabres de luz o General Grievous 
                 usa na sua luta com Obi-Wan Kenobi em Utapau?`,
    answer: `Quatro`,
    choices: [`Dois`, `Três`, `Quatro`, `Seis`],
  },
  {
    question: `Quem matou Jango Fett?`,
    answer: `Mace Windu`,
    choices: [`Qui-Gon Jinn`, `Mace Windu`, `Conde Dookan`, `Asajj Ventress`],
  },
  {
    question: `Qi'ra serviu quem?`,
    answer: `Darth Maul`,
    choices: [`Darth Plagueis`, `Darth Vader`, `Darth Sidious`, `Darth Maul`],
  },
  {
    question: `Qual, de acordo com o Yoda, é o caminho para o Lado Negro?`,
    answer: `Medo`,
    choices: [`Dor`, `Solidão`, `Medo`, `Ódio`],
  },
  {
    question: `Quem libertou Han Solo da carbonita?`,
    answer: `Leia`,
    choices: [`Qi'ra`, `Leia`, `Luke`, `Chewbacca`],
  },
  {
    question: `De quem era o sabre que Luke Skywalker recebeu de Obi-Wan?`,
    answer: `Anakin Skywalker`,
    choices: [`Anakin Skywalker`, `Yoda`, `Qui-Gon Jinn`, `Yaddle`],
  },
  {
    question: `Quem disse pro Luke que havia um outro Skywalker?`,
    answer: `Yoda`,
    choices: [`Yoda`, `Qui-Gon Jinn`, `Obi-Wan Kenobi`, `Darth Sidious`],
  },
  {
    question: `Como Obi-Wan Kenobi se sentia sobre voar?`,
    answer: `Odiava`,
    choices: [`Amava`, `Indiferente`, `Odiava`, `Dependia da situacão`],
  },
  {
    question: `O que o Yoda fala pro Obi-Wan depois que ele diz 
                que "aquele garoto é nossa última esperanca" (Anakin)?`,
    answer: `Não, há outro`,
    choices: [
      `Não, há outro`,
      `Retornar ele não vai`,
      `Muito rápido para enraivecer ele é`,
      `Sua visão clara não está`,
    ],
  },
  {
    question: `A tão famosa frase "Que a forca esteja com você" foi dita primeiro por quem?`,
    answer: `Obi Wan Kenobi `,
    choices: [`Yoda`, `Qui-Gon Jinn`, `Mace Windu`, `Obi Wan Kenobi`],
  },
  {
    question: `Qual robô abaixo é responsável pela manutencão e navegacão de astronaves?`,
    answer: `R2-D2`,
    choices: [`BB-8`, `R2-D2`, `C-3PO`, `D-0`],
  },
];
