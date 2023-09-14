//classe calculadora ------------------------------------------
class Calculadora {
    constructor(valorA, valorB, operacao) {
      this._valorA = valorA
      this._operacao = operacao
      this._valorB = valorB
    }

    conta() {

      const operadores = ['+', '-', 'x', '/']

      if(!operadores.includes(this._operacao)) {
        throw new Error('operador(es) invalido(os)')
      } 
      else if(this._operacao === '+') {
        return this._valorA + this._valorB 
      }
      else if (this._operacao === '-') {
        return this._valorA - this._valorB
      }
      else if(this._operacao === 'x') {
        return this._valorA * this._valorB
      }
      else if(this._operacao === '/') {
        return this._valorA / this._valorB
      }
    }

    apagarDigito(digito) {
      
    }
  }

//exbir no campo ----------------------------------------
const camposDeExibicao = document.querySelector('.display')
const botoesOperadores = document.querySelectorAll('.operator');
const botoesNumerados = document.querySelectorAll('.operator_');

botoesOperadores.forEach((botao) => {
  botao.addEventListener("click", () => {

  const textoBotao = botao.innerHTML; 


  camposDeExibicao.innerHTML += textoBotao; 
  })
})

botoesNumerados.forEach((botao) => {
  botao.addEventListener("click", () => {

   const textoBotao = botao.innerHTML; 

  camposDeExibicao.innerHTML += textoBotao; 
  })
})

//exibir conta ------------------------------------------
const botaoIgual = document.getElementById('equals');
const calculadora = new Calculadora() 
botaoIgual.addEventListener("click", () => {

});

//limpar campo ---------------------------------------------
const botaoLimpar = document.getElementById('clear');
botaoLimpar.addEventListener("click", () => {camposDeExibicao.innerHTML=""});

//apagar digito --------------------------------------------
const botaoApagarDigito = document.getElementById('apagar')
botaoApagarDigito.addEventListener("click", () => {

  if(camposDeExibicao.innerHTML.length > 0) {
    const deletar = camposDeExibicao.innerHTML.slice(0, -1)
    camposDeExibicao.innerHTML = deletar
  }
})