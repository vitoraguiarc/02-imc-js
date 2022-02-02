'use strict'

const iniciarRange = (idRange) => {
    const range = document.getElementById(idRange)
    const span = document.getElementById(`valor-${idRange}`)
    // const atualizarValor = () => document.getElementById(`valor-${idRange}`).textContent = document.getElementById(idRange).value - forma sem declaração de variaveis
    const atualizarValor = () => span.textContent = range.value
    document.getElementById(idRange).addEventListener('input', atualizarValor);

}

//exportando o js do range
export {
    iniciarRange
}