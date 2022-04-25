



let jogador = document.getElementById("entradaNome");
let container = document.getElementById("container");

let pergunta = document.createElement('p') 
let op1 = document.createElement('button')


/* <input type="radio" name="response" value="Luke" id="Luke" class="btn choice">
<label for="Twilek" style="opacity: 1;">Twilek</label> */

function iniciar(){

    let nomeJogador = jogador.value
    container.innerHTML = "leeesssss goooooooooooo <br>";
    container.innerHTML += `${nomeJogador}`;

}


console.log(quiz);