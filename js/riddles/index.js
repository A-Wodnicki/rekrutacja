function reverseNumber(number) {
  return (
    parseFloat(number.toString().split("").reverse().join("")) *
    Math.sign(number)
  );
}

console.log("1.", reverseNumber(12345));

const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function addEven(array) {
  return array.reduce(
    (total, number) => (number % 2 == 0 ? total + number : total),
    0
  );
}

console.log("2.", addEven(tab));
