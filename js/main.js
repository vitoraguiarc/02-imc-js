'use strict';

function camposValidos() {
    return document.getElementById('formulario').reportValidity();
}

function calcularImc(peso, altura){
    return peso / (altura * altura);
}

function classificarImc(imc) {
    let mensagem
    if (imc < 18.5) {
        mensagem = "e você está abaixo do peso."
        } else if (imc < 25) {
        // const v = "e você está com peso ideal."
        // const cor = "Parabens!"
        // mensagem = v.replace(value + <span class="verde">cor</span>)
        mensagem = "e você está com peso ideal. Parabens"
        mensagem = mensagem.replace("Parabens", '<span class="verde">Parabens</span>')
        } else if (imc < 30) {
        mensagem = "e você está levemente acima do peso."
        } else if (imc < 35) {
        mensagem = "e você está com obesidade grau I."
        } else if (imc < 40) {
        mensagem = "e você está com obesidade grau II."
        } else {
        mensagem = "e você está com obesidade grau III. Cuidado!"
        }
        return mensagem;
}

function mostrarPeso() {
    let peso = document.getElementById('peso').value;
    document.getElementById('display').value = peso;
}

function mostrarResultado () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (camposValidos()){
            
        const imc = calcularImc(peso, altura);
    
            let mensagem = classificarImc(imc); 
            
            resultado.textContent =  `${nome} seu IMC é ${imc.toFixed(2)} ${mensagem}`;
    } else {
        resultado.textContent = 'Preencha todos os campos!';
    }
}

document.getElementById('calcular').addEventListener('click', mostrarResultado);