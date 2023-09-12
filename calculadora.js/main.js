class Calculadora {
    constructor(valorA, valorB, operacao) {
      this.valorA = valorA;
      this.operacao = operacao;
      this.valorB = valorB;
    }
    
    conta() {
      if(this.operacao === '+') {
        return this.valorA + this.valorB 
    
      }else if (this.operacao === '-') {
        return this.valorA - this.valorB
      }

      else if(this.operacao === 'x') {
        return this.valorA * this.valorB
      }

      else if(this.operacao === '/') {
        return this.valorA / this.valorB
      }
    }
  }      

const somar = new Calculadora (10, 10, "+")
console.log("resultado da soma:", somar.conta());

const subtrair = new Calculadora (10, 2, "-")
console.log("resultado da subtração:", subtrair.conta());

const multiplicar = new Calculadora (10, 10, "x") 
console.log("resultaod da multiplicação:", multiplicar.conta());

const dividir = new Calculadora (10, 2, "/")
console.log("resultado da divisão:", dividir.conta())