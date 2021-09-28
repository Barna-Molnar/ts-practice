export {};
function add(n1: number, n2: number, showResult: boolean) {
  if (showResult) {
    return n1 + n2;
  }
}

const number1 = 112;
const number2 = 12;
const showResult = true;

const result = add(number1, number2, showResult);
console.log(result);
