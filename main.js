const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


let perguntas = [
    {
        pergunta1: "texto da pergunta",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
{
        pergunta2: "texto da pergunta",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },

     {
        pergunta3: "texto da pergunta",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
     {
        pergunta4: "texto da pergunta",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },

];

let atual = 0;
let perguntaAtual;

Function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPergunta.textContent = perguntas.enunciado;

}

Function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = perguntas.alternativas;
        caixaAlternativas.appendChild(botaoAlternativas);

    }
}

mostraPergunta();