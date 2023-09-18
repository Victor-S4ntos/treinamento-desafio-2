const operacoes = {
  ADICAO: '+',
  SUBTRACAO: '-',
  MULTIPLICACAO: 'x',
  DIVISAO: '/'
}

//classe calculadora ---------------------------------------------
class Calculadora {
  constructor(valorA, operacao, valorB) {
    this._valorA = valorA
    this._operacao = operacao
    this._valorB = valorB
  }

  conta() {
    if (this._operacao === operacoes.ADICAO) {
      return this._valorA + this._valorB
    }
    else if (this._operacao === operacoes.SUBTRACAO) {
      return this._valorA - this._valorB
    }
    else if (this._operacao === operacoes.MULTIPLICACAO) {
      return this._valorA * this._valorB
    }
    else if (this._operacao === operacoes.DIVISAO) {
      return this._valorA / this._valorB
    } else {
      throw new Error('Falha ao fazer a operação');
    }
  }
}

const campoDeExibicao = document.querySelector('.display');//campo do display da calculadora -----------------------
const botoesOperadores = document.querySelectorAll('.operator');//botões de operação como: +, -, x e / --------------------------
const botoesNumeradosEVirgula = document.querySelectorAll('.operator_');//botões de numeros do 0 ao 9 e a virgula(,) ---------------------------
const botaoIgual = document.getElementById('igual');//botão para exibir o resultado de toda a operação, o igual(=) -------------------------------

//exbir no campo ------------------------------------------------------
botoesOperadores.forEach((botao) => {
  botao.addEventListener("click", () => {
    const textoBotao = botao.innerHTML;
    campoDeExibicao.innerHTML += textoBotao;
  });
});

botoesNumeradosEVirgula.forEach((botao) => {
  botao.addEventListener("click", () => {
    const textoBotao = botao.innerHTML;
    campoDeExibicao.innerHTML += textoBotao;
  });
});

//apagar digito --------------------------------------------------------
const botaoApagarDigito = document.getElementById('apagar');
botaoApagarDigito.addEventListener("click", () => {
  if (campoDeExibicao.innerHTML.length > 0) {
    const deletar = campoDeExibicao.innerHTML.slice(0, -1);
    campoDeExibicao.innerHTML = deletar
  }
});

//limpar campo ----------------------------------------------------------
const botaoLimpar = document.getElementById('limpar');
botaoLimpar.addEventListener("click", () => {campoDeExibicao.innerHTML = ""});

//fazer o calculo e exibir resultado da conta ----------------------------------------------
botaoIgual.addEventListener("click", () => {
  const operadores = ['+', '-', 'x', '/'];
  const operacao = campoDeExibicao.innerHTML.split('').find(operar => operadores.includes(operar));
  const expressao = campoDeExibicao.innerHTML.replace(/\./g, ',');
  const [valorA, valorB] = expressao.split(operacao).map(item => item.replace(/,/g, '.')); 
  if(isNaN(valorA) || isNaN(valorB)) {
    campoDeExibicao.innerHTML = `erro ao fazer a operação`
    return
  }
  const resultado = new Calculadora(parseFloat(valorA), operacao, parseFloat(valorB)).conta();
  console.log("resultado da conta:", resultado);
  campoDeExibicao.innerHTML = resultado.toString().replace(/\./g, ',');
});