function reverterString(entrada) {
  let stringInvertida = '';
  for (let i = entrada.length - 1; i >= 0; i--) {
    stringInvertida += entrada[i];
  }
  return stringInvertida;
}

console.log(reverterString('target systemas'));
