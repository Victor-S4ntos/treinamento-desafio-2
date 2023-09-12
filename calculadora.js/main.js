//classe calculadora -----------------------------------
class Calculadora {
    constructor(valorA, valorB, operacao) {
      this._valorA = valorA;
      this._operacao = operacao;
      this._valorB = valorB;
    }
    
    conta() {
      if(this._operacao === '+') {
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
      else {
        alert('operador(es) inexistente(es)')
      }
    }
}

const contar = new Calculadora (20, 10, '+')
console.log(contar, "  resultado da conta:", contar.conta())

//exbir no campo -----------------
const camposDeExibicao = document.querySelector('.display')
const botoes = document.querySelectorAll('.botoes')

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {

   const textoBotao = botao.innerHTML; 

    camposDeExibicao.innerHTML += textoBotao; 
  })
})

//limpar campo ----------------
const botaoLimpar = document.getElementById('clear')
botaoLimpar.addEventListener("click", () => {camposDeExibicao.innerHTML=""})