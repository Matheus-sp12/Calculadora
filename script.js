
function calculadora() {
    const operacao = Number(prompt('escolha uma operação:\n 1 - soma(+) \n 2 - subtração(-) \n 3 - multiplicação(*) \n 4 - divisão real(/) \n 5 - divisão inteira(%) \n 6 -potenciação(**)'));

    if (!operacao || operacao >= 7) {
        alert('erro operador invalido!');
        calculadora() 
    } else {

let n1 = Number(prompt('digite o primeiro valor'));
let n2 = Number(prompt('digite o segundo valor'));
let resultado;

if (!n1 || !n2) {
    alert(erro);
    calculadora() 
} else {

function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`)
    novaOperacao();

}

function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
    novaOperacao();

}

function multiplicacao() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`)
    novaOperacao();

}

function divisaoReal() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`)
    novaOperacao();

}

function divisaoInteira() {
    resultado = n1 % n2;
    alert(`${n1} % ${n2} = ${resultado}`)
    novaOperacao();

}

function potenciacao() {
    resultado = n1 ** n2;
    alert(`${n1} ** ${n2} = ${resultado}`)
    novaOperacao();

}

function novaOperacao() {
    let opcao = prompt('Deseja fazer outra operação?\n 1 - simn\n 2 - não')

    if (opcao == 1) {
        calculadora();
    } else if (opcao ==2){
        alert('ate mais!')
    } else {
        alert('digite uma opção valida')
        novaOperacao();
    }
}

}




if (operacao ==1) {
    soma();
}else if (operacao ==2) {
    subtracao();
}else if (operacao ==3) {
    multiplicacao();
}else if (operacao ==4) {
    divisaoReal();
}else if (operacao ==5) {
    divisaoInteira();
}else if (operacao ==6) {
    potenciacao();
}
}
}

calculadora();