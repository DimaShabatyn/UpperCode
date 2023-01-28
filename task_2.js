//Напишіть функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
const numbers = [7, 122, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallerNumber(numbers) {
  // let minNum = numbers[0];
  // for (let number of numbers) {
  //     if (minNum > number) {
  //       minNum = number;
  //   }
  // }
  // console.log(minNum);
  if (Array.isArray(numbers)) {
    console.log(Math.min(...numbers));
  }
}

findSmallerNumber(numbers);
