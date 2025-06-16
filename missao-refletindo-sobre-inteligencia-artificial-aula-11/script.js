const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual desses vilões você prefere?",
        alternativas: [
            {
                texto: "Diavolo",
                afirmacao: "PSICOPATA!!"
            },
            {
                texto: "Dio",
                afirmacao: "Eu sei o porque você quer parar o tempo."
            }
        ]
    },
    {
        enunciado: "Qual desses stands vocẽ gostaria de ter?",
        alternativas: [
            {
                texto: "Notorious Big ",
                afirmacao: "Suicida!"
            },
            {
                texto: "Tip Trick",
                afirmacao: "Tu gosta de encher o saco né fi."
            }
        ]
    },
    {
        enunciado: "Você prefere ter hamon ou ser um vampiro?",
        alternativas: [
            {
                texto: "Hamon",
                afirmacao: "Quer tirar uma Thompson do rabo né?"
            },
            {
                texto: "Vampirismo",
                afirmacao: "Tu sentava muito no dio que eu sei."
            }
        ]
    },
    {
        enunciado: "Qual Jojo você prefere?",
        alternativas: [
            {
                texto: "Jotaro.",
                afirmacao: "Esse maluco não tem 17 ma nem fudendo."
            },
            {
                texto: "Johnny.",
                afirmacao: "Cadeirante cristão fodase"
            }
        ]
    },
    {
        enunciado: "Qual você acha que é mais forte? ",
        alternativas: [
            {
                texto: "Made in heaven.",
                afirmacao: "Cavalo reset"
            },
            {
                texto: "Gold experience requiem",
                afirmacao: "Reset "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
