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
    question: "Pergunta 1: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 2: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 3: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 4: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 5: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 6: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 7: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 8: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 9: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 10: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 11: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 12: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 13: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 14: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 15: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 16: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 17: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 18: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 19: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
    ]
  },
  {
    question: "Pergunta 20: Exemplo real da fase 1",
    answers: [
      { text: "Opção A", value: "v1" },
      { text: "Opção B", value: "v2" },
      { text: "Opção C", value: "v3" },
      { text: "Opção D", value: "v4" },
      { text: "Opção E", value: "v5" },
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
