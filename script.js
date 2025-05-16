const startBtn = document.getElementById("start-btn");
const introScreen = document.getElementById("intro");
const phaseSummaryScreen = document.getElementById("phase-summary");
const quizContainer = document.getElementById("quiz-container");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultScreen = document.getElementById("result");
const summaryEl = document.getElementById("summary");
const continueBtn = document.getElementById("continue-btn");

const phases = [
  { title: "Fase 1: Conexão Emocional", description: "Explora o que une os nossos corações e mentes. Nesta fase, exploramos as emoções, a ternura e a ligação afetiva como casal. As perguntas são construídas para fortalecer o diálogo íntimo, a empatia e a valorização do “nós”. Cada resposta representa uma nuance emocional diferente." },
  { title: "Fase 2: Intimidade e Confiança", description: "Descobre como confiam, tocam e se entregam." },
  { title: "Fase 3: Desejo e Curiosidade", description: "Aprofunda a curiosidade e a vontade de mais." },
  { title: "Fase 4: Fantasias e Ousadia", description: "Liberta os desejos mais intensos e secretos." },
  { title: "Fase 5: Complicidade Total", description: "Sela o amor com visão de futuro e entrega." }
];

const questions = [
  {
    question: "1-O que mais te faz sentir amada?",
    answers: [
      { text: "Palavras de carinho", value: "v1" },
      { text: "Gestos inesperados", value: "v2" },
      { text: "Tempo de qualidade juntos", value: "v3" },
      { text: "Toques afetuososD", value: "v4" },
      { text: "Ajuda nas tarefas do dia a dia", value: "v5" },
    ]
  },
  {
    question: "2-O que mais fortalece a tua ligação emocional com o teu parceiro?",
    answers: [
      { text: "Conversas profundas", value: "v1" },
      { text: "Rituais românticos", value: "v2" },
      { text: "Escuta ativa", value: "v3" },
      { text: "Rir juntos", value: "v4" },
      { text: "Momentos de silêncio partilhado", value: "v5" },
    ]
  },
  {
    question: "3-Como gostarias que o teu parceiro te acarinhasse mais?",
    answers: [
      { text: "Com mais palavras doces", value: "v1" },
      { text: "Com mais mimos físicos", value: "v2" },
      { text: "Com mais surpresas", value: "v3" },
      { text: "Com mais atenção às tuas emoções", value: "v4" },
      { text: "Com mais presença no quotidiano", value: "v5" },
    ]
  },
  {
    question: "4-Quando te sentes mais conectada?",
    answers: [
      { text: "Durante uma troca de olhares sincera", value: "v1" },
      { text: "Num abraço apertado", value: "v2" },
      { text: "Após uma boa conversa", value: "v3" },
      { text: "Em momentos de silêncio cúmplice", value: "v4" },
      { text: "Ao dormir juntinhos", value: "v5" },
    ]
  },
  {
    question: "5-Qual destas situações te deixaria mais feliz?",
    answers: [
      { text: "Receber uma carta de amor", value: "v1" },
      { text: "Um jantar surpresa", value: "v2" },
      { text: "Uma massagem sem motivo", value: "v3" },
      { text: "Uma noite a dois longe de tudo", value: "v4" },
      { text: "Ouvir 'amo-te' sem ser esperado", value: "v5" },
    ]
  },
  {
    question: "6. Qual a tua linguagem do amor preferida?",
    answers: [
    { text: "Palavras de afirmação", value: "linguagem_palavras" },
    { text: "Toque físico", value: "linguagem_toque" },
    { text: "Tempo de qualidade", value: "linguagem_tempo" },
    { text: "Gestos de serviço", value: "linguagem_ajuda" },
    { text: "Presentes simbólicos", value: "linguagem_presentes" }
  ]
},
{
  question: "7. Sentes-te confortável a expressar emoções?",
  answers: [
    { text: "Sim, totalmente", value: "aberta" },
    { text: "Às vezes", value: "moderada" },
    { text: "Só com quem confio", value: "reservada" },
    { text: "Prefiro guardar para mim", value: "fechada" },
    { text: "Depende do dia", value: "variável" }
  ]
},
{
  question: "8. Como gostas de ser surpreendida?",
  answers: [
    { text: "Com palavras românticas", value: "surpresa_palavras" },
    { text: "Com um jantar especial", value: "surpresa_jantar" },
    { text: "Com um beijo inesperado", value: "surpresa_beijo" },
    { text: "Com uma escapadinha", value: "surpresa_viagem" },
    { text: "Com um presente simbólico", value: "surpresa_presente" }
  ]
},
{
  question: "9. Qual destas situações te traz mais proximidade?",
  answers: [
    { text: "Conversar sobre sentimentos", value: "proximidade_conversa" },
    { text: "Partilhar silêncios", value: "proximidade_silencio" },
    { text: "Rir juntos", value: "proximidade_riso" },
    { text: "Abraçar por minutos", value: "proximidade_abraco" },
    { text: "Cuidar um do outro", value: "proximidade_cuidado" }
  ]
},
{
  question: "10. Quando te sentes mais conectada com o teu parceiro?",
  answers: [
    { text: "Durante conversas profundas", value: "conexao_conversa" },
    { text: "Quando ele me escuta", value: "conexao_escuta" },
    { text: "Quando me toca com ternura", value: "conexao_toque" },
    { text: "Quando rimos juntos", value: "conexao_riso" },
    { text: "Quando me respeita nas decisões", value: "conexao_respeito" }
  ]
},
{
  question: "11. Qual destas frases te faz sentir mais segura?",
  answers: [
    { text: "Estou aqui para ti", value: "segura_apoio" },
    { text: "Admiro a tua força", value: "segura_respeito" },
    { text: "Confio em nós", value: "segura_confianca" },
    { text: "Gosto de ver-te crescer", value: "segura_crescimento" },
    { text: "A tua opinião é importante para mim", value: "segura_valor" }
  ]
},
{
  question: "12. Como te sentes quando o teu parceiro te ouve com atenção?",
  answers: [
    { text: "Compreendida", value: "compreendida" },
    { text: "Respeitada", value: "respeitada" },
    { text: "Amada", value: "amada" },
    { text: "Segura", value: "segura" },
    { text: "Inspirada", value: "inspirada" }
  ]
},
{
  question: "13. Qual destas ações aumenta a tua confiança na relação?",
  answers: [
    { text: "Partilhar medos", value: "confiança_medos" },
    { text: "Cumprir promessas", value: "confiança_promessas" },
    { text: "Estar presente", value: "confiança_presenca" },
    { text: "Apoiar nos desafios", value: "confiança_apoio" },
    { text: "Mostrar vulnerabilidade", value: "confiança_vulneravel" }
  ]
},
{
  question: "14. Que gesto romântico te toca mais fundo?",
  answers: [
    { text: "Carta de amor", value: "gesto_carta" },
    { text: "Olhar cúmplice", value: "gesto_olhar" },
    { text: "Declaração sincera", value: "gesto_declaracao" },
    { text: "Lembrança especial", value: "gesto_lembranca" },
    { text: "Música partilhada", value: "gesto_musica" }
  ]
},
{
  question: "15. O que é mais importante numa relação duradoura?",
  answers: [
    { text: "Comunicação", value: "relacao_comunicacao" },
    { text: "Respeito mútuo", value: "relacao_respeito" },
    { text: "Afeto constante", value: "relacao_afeto" },
    { text: "Apoio nos momentos difíceis", value: "relacao_apoio" },
    { text: "Admirar o outro", value: "relacao_admiracao" }
  ]
},
{
  question: "16. Como defines cumplicidade?",
  answers: [
    { text: "Olhares que dizem tudo", value: "cumplicidade_olhares" },
    { text: "Saber o que o outro sente", value: "cumplicidade_sensibilidade" },
    { text: "Estar presente sem pedir", value: "cumplicidade_presenca" },
    { text: "Rir dos mesmos disparates", value: "cumplicidade_riso" },
    { text: "Criar códigos próprios", value: "cumplicidade_codigos" }
  ]
},
{
  question: "17. Qual destes momentos te emociona mais?",
  answers: [
    { text: "Um abraço após discussão", value: "emocao_reconciliacao" },
    { text: "Uma partilha inesperada", value: "emocao_partilha" },
    { text: "Uma mensagem carinhosa", value: "emocao_mensagem" },
    { text: "Ser escutada em silêncio", value: "emocao_escuta" },
    { text: "Ver o outro feliz por ti", value: "emocao_orgulho" }
  ]
},
{
  question: "18. Como gostas de cuidar da vossa relação?",
  answers: [
    { text: "Conversando todos os dias", value: "cuidar_conversa" },
    { text: "Dedicando tempo a dois", value: "cuidar_tempo" },
    { text: "Sendo carinhosa/o", value: "cuidar_afeto" },
    { text: "Valorizando os detalhes", value: "cuidar_detalhes" },
    { text: "Apoiando os sonhos", value: "cuidar_sonhos" }
  ]
},
{
  question: "19. Qual destas rotinas diárias reforça a vossa união?",
  answers: [
    { text: "Café juntos", value: "rotina_cafe" },
    { text: "Desejar bom dia/boa noite", value: "rotina_boas" },
    { text: "Trocar mensagens", value: "rotina_mensagens" },
    { text: "Partilhar refeições", value: "rotina_refeicoes" },
    { text: "Assistir algo juntos", value: "rotina_serie" }
  ]
},
{
  question: "20. Que tipo de elogio mais te faz sorrir?",
  answers: [
    { text: "Sobre o teu olhar", value: "elogio_olhar" },
    { text: "Sobre a tua força", value: "elogio_forca" },
    { text: "Sobre o teu carinho", value: "elogio_carinho" },
    { text: "Sobre o teu corpo", value: "elogio_corpo" },
    { text: "Sobre quem és", value: "elogio_essencia" }
  ]
},
  {
    question: "Pergunta 21: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 22: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 23: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 24: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 25: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 26: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 27: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 28: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 29: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 30: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 31: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 32: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 33: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 34: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 35: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 36: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 37: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 38: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 39: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 40: Exemplo real da fase 2",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 41: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 42: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 43: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 44: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 45: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 46: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 47: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 48: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 49: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 50: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 51: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 52: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 53: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 54: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 55: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 56: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 57: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 58: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 59: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 60: Exemplo real da fase 3",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 61: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 62: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 63: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 64: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 65: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 66: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 67: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 68: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 69: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 70: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 71: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 72: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 73: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 74: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 75: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 76: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 77: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 78: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 79: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 80: Exemplo real da fase 4",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 81: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 82: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 83: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 84: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 85: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 86: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 87: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 88: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 89: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 90: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 91: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 92: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 93: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 94: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 95: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 96: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 97: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 98: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 99: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 100: Exemplo real da fase 5",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
];

let currentPhase = 0;
let currentQuestionIndex = 0;
let results = [];

startBtn.onclick = () => {
  introScreen.classList.add("hidden");
  showPhaseSummary();
};

continueBtn.onclick = () => {
  phaseSummaryScreen.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  showQuestion();
};

function showPhaseSummary() {
  const phase = phases[currentPhase];
  document.getElementById("phase-title").textContent = phase.title;
  document.getElementById("phase-description").textContent = phase.description;
  phaseSummaryScreen.classList.remove("hidden");
}

function showQuestion() {
  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach((a) => {
    const btn = document.createElement("button");
    btn.textContent = a.text;
    btn.onclick = () => {
      results.push(a.value);
      currentQuestionIndex++;
      if (currentQuestionIndex % 20 === 0 && currentQuestionIndex < questions.length) {
        currentPhase++;
        quizContainer.classList.add("hidden");
        showPhaseSummary();
      } else if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
    answersEl.appendChild(btn);
  });
}

function showResult() {
  quizContainer.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  summaryEl.textContent = "Obrigado pelo teu tempo, pela entrega e por esta partilha íntima. Que esta jornada nos aproxime muito mais.";
}
