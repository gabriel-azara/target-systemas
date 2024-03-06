function ehFibonacci(num) {
  let f1 = 0;
  let f2 = 1;

  if (num === f1 || num === f2) return true;

  let c = f1 + f2;
  while (c <= num) {
    if (c === num) {
      return true;
    }

    f1 = f2;
    f2 = c;
    c = f1 + f2;
  }

  return false;
}

const numero = 34;
const resultado = ehFibonacci(numero) ? 'pertence' : 'não pertence';

console.log(`O número ${numero} ${resultado} à sequência de Fibonacci.`); // Neste caso vai sair que pertence, já que 34 pertence
