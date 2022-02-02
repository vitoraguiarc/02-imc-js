'use strict';

//importando o js do range
import {iniciarRange} from "./input-range.js"

//utilizando  arrow function
const camposValidos = () => document.getElementById('formulario').reportValidity();

const calcularImc = (altura,peso) => peso / (altura * altura);

function classificarImc(imc) {
    let mensagem
    if (imc < 18.5) {
        mensagem = "e você está abaixo do peso."
        } else if (imc < 25) {
        mensagem = "e você está com peso ideal. <span id='verde'>Parabéns!!</span>"
        // mensagem = mensagem.replace('Parabens', 'Parabens'.fontcolor("red"))
        } else if (imc < 30) {
        mensagem = "e você está levemente acima do peso."
        } else if (imc < 35) {
        mensagem = "e você está com obesidade grau I."
        } else if (imc < 40) {
        mensagem = "e você está com obesidade grau II."
        } else {
        mensagem = "e você está com obesidade grau III. <span id='vermelho'>Cuidado!!</span>"
        }
        return mensagem;
}


function mostrarResultado () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (camposValidos())
    {        
        const imc = calcularImc(altura, peso);
        let mensagem = classificarImc(imc); 
            
        resultado.innerHTML =  `${nome} seu IMC é ${imc.toFixed(2)} ${mensagem}`;
    } else 
    {
        resultado.innerHTML = 'Preencha todos os campos!';
    }
}


document.getElementById('calcular').addEventListener('click', mostrarResultado);


//iniciando a função 
iniciarRange('altura')
iniciarRange('peso')

