const operacoes = {
  ADICAO: '+',
  SUBTRACAO: '-',
  MULTIPLICACAO: 'x',
  DIVISAO: '/'
}

//classe calculadora -------------------------------------------
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

const camposDeExibicao = document.querySelector('.display');//campo do display da calculadora ----------------------
const botoesOperadores = document.querySelectorAll('.operator');//botões de operação como: +, -, x e / --------------------------
const botoesNumerados = document.querySelectorAll('.operator_');//botões de numeros do 0 ao 9 e a virgula(,) ---------------------------
const botaoIgual = document.getElementById('equals');//botão para exibir o resultado de toda a operação, o igual(=) -------------------------------

//exbir no campo ---------------------------------------------------
botoesOperadores.forEach((botao) => {
  botao.addEventListener("click", () => {
    const textoBotao = botao.innerHTML;
    camposDeExibicao.innerHTML += textoBotao;
  });
});

botoesNumerados.forEach((botao) => {
  botao.addEventListener("click", () => {
    const textoBotao = botao.innerHTML;
    camposDeExibicao.innerHTML += textoBotao;
  });
});

//apagar digito -------------------------------------------------------
const botaoApagarDigito = document.getElementById('apagar');
botaoApagarDigito.addEventListener("click", () => {
  if (camposDeExibicao.innerHTML.length > 0) {
    const deletar = camposDeExibicao.innerHTML.slice(0, -1);
    camposDeExibicao.innerHTML = deletar
  }
});

//limpar campo --------------------------------------------------------
const botaoLimpar = document.getElementById('clear');
botaoLimpar.addEventListener("click", () => {camposDeExibicao.innerHTML = ""});

//exibir resultado da conta -------------------------------------------
botaoIgual.addEventListener("click", () => {
  const operadores = ['+', '-', 'x', '/'];
  const operacao = camposDeExibicao.innerHTML.split('').find(operar => operadores.includes(operar)) || '';
  const expressao = camposDeExibicao.innerHTML.replace(/\./g, ',');
  const [valorA, valorB] = expressao.split(operacao).map(item => item.replace(/,/g, '.')); 
  const resultado = new Calculadora(parseFloat(valorA), operacao, parseFloat(valorB)).conta();
  console.log("resultado da conta:", resultado);
  camposDeExibicao.innerHTML = resultado.toString().replace(/\./g, ',');
});