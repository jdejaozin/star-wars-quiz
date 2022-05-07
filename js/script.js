/* DECLARAÇÃO DAS VARIÁVEIS DE AMBIENTE*/
let main = document.getElementById("principal"); /* tela completa */
let botao = document.getElementsByClassName('quizbtn'); /* botões de escolha */
let tela = document.getElementById("quizDiv"); /* container de pergunta e opções */

/* DECLARAÇÃO DAS VARIÁVEIS UTILIZADAS PARA O QUIZ */
let pergunta = document.getElementById("pergunta"); /* pergunta */
let op1 = document.getElementById("op1B"); /* opção 1 */
let op2 = document.getElementById("op2B"); /* opção 2 */
let op3 = document.getElementById("op3B"); /* opção 3 */
let op4 = document.getElementById("op4B"); /* opção 4 */

/* DEFINIÇÃO DAS VARIÁVEIS DE CONTROLE */
let vetorQuestao = [];
let pontos = 0;
let resposta = "";
let respostaCerta = "";

/* FUNÇÃO PARA RANDOMIZAR AS QUESTÕES */
function randomQuestao(){

    /* 
    Math.random para randomizar um número de 0 até 2 
    Math.floor para arredondar o número
    Linha de retorno para chamar a função em outra
    */
    let questao = Math.floor(Math.random() * 3);
    return questao;

}

/* FUNÇÃO PARA OPERAR O QUIZ */
function starQuiz(){
    
    /* chamada da função de ramdomizar um número */
    let questao = randomQuestao();
    /* definindo o ponto de parada */
    let parada = 0;

    while(parada !== 1){
        /* for com o tamanho do vetor que recebe o número das questões */
        for(let i = 0; i < vetorQuestao.length; i++){
            /* virificação se o número já existe dentro do vetor */
            if(vetorQuestao[i] === questao){
                /* se existir o ponto de parada é definido como 1 e o for termina */
                parada = 1;
            }
        }
        break;
    }

    /* se a parada continuar igual a 0 então não existe nenhum valor repetido */
    if(parada === 0){
        /* numero sorteado inserido no vetor de questões */
        vetorQuestao.push(questao);
        /* viariável pergunta recebendo a pergunta do quiz */
        pergunta.innerHTML = quiz[questao].question;
        /* variáveis de opção recebendo as opções do quiz */
        op1.value = quiz[questao].choices[0];
        op2.value = quiz[questao].choices[1];
        op3.value = quiz[questao].choices[2];
        op4.value = quiz[questao].choices[3];
        /* variável global resposta certa recebendo a resposta do quiz para comparação */
        respostaCerta = quiz[questao].answer;
        
    /* Se o ponto de parada for 1 e o vetor de questões do mesmo tamanho que o quiz signfica
    que acabou, para o caso de escrevermos mais perguntas podemos fazer o ponto  de parada com
    vetorQuesao.length === numeroDeQuestoesQueQuizermos */
    }else if(parada === 1 && vetorQuestao.length === quiz.length){
        /* Chamada da função de fim */
        fim();
    /* se a parada for 1 então o número sorteado é repetido */
    }else if(parada === 1){
        /* recursividade da função para continuar executando até sortear um número ainda não sorteado */
        starQuiz();
    }
    
}

/* Função para confirmar se a resposta está certa */
function confirmarResposta(){
    
    /* comparação das duas variáveis globais de resposta */
    if(resposta === respostaCerta){
        /* caso as duas respostas sejam iguais o ponto aumenta */
        pontos += 1;
    }

}

/* função para mostrar a tela de fim */
function fim(){
    /* botão de reiniciar */
    tela.innerHTML = `<a href="home.html"><input class="quizbtn" type="button" value="Reiniciar Quiz"></input></a>`
    /* mensagem com os pontos */
    tela.innerHTML += `<p id="final"> Você acertou ${pontos} de ${quiz.length}</p>`

    /* Condicional para condicionar a frase do Yoda */
    if(pontos <= 5){
        /* mensagem */
        tela.innerHTML += "<p id='mensagem'>Você deve desaprender o que aprendeu</p>"
        /* imagem */
        tela.innerHTML +=`<img class="yodinha" src="../img/yoda1.png">`
        /* redefinição do fundo para ficar cinza */
        main.style.backgroundImage = "none";
        main.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }else{
        /* mensagem */
        tela.innerHTML += "<p id='mensagem'>Um Jedi usa a forca para conhecimento e defesa, nunca para ataque</p>"
        /* imagem */
        tela.innerHTML +=`<img class="yodinha" src="../img/yoda2.png">`
        /* redefinição do fundo para ficar cinza */
        main.style.backgroundImage = "none";
        main.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    }

}

/* event listener no window para quando carregar a página carregar o quiz */
window.addEventListener("load", starQuiz);

/* for para definir para cada botão um evento */
for(let i = 0; i < botao.length; i++){

    /* função para pegar o valor do botão que está sendo clicado */
    botao[i].onclick = function(){
        /* resposta recebendo o valor do botão */
        resposta = botao[i].value;
        /* chamada da função para confirmar a resposta certa */
        confirmarResposta();
    }

    /* event listener para chamar a função do quiz */
    botao[i].addEventListener("click", starQuiz);

}
