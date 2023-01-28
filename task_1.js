//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.

const genres = ['Jazz', 'Blues', 'Rock n Roll', 'Reggae', 'Rap']

function logItems(array) {
  for(let i=0, num=1; i<genres.length; i+=1, num+=1){
    console.log(`${num} - ${genres[i]}`)
  }
}
logItems(genres)