// У нас є масив фільмів. Фільмів всього 7, а унікальних режисерів 3. Тому нам потрібно перетворити цей масив на об'єкт ключами якого будуть режисери, а їх властивостями - масиви фільмів. E.g. {'Christopher Nolan': ['Interstellar', 'Inception', 'The Dark Knight']}

const movies = [
  {director: 'Christopher Nolan', title: 'Interstellar'},
  {director: 'Quentin Tarantino', title:  'Pulp Fiction'},
  {director: 'Christopher Nolan', title: 'Inception'},
  {director: 'Christopher Nolan', title: 'The Dark Knight'},
  {director: 'Martin Scorsese', title: 'Taxi driver'},
  {director: 'Quentin Tarantino', title: 'Inglorious Basterds'},
  {director: 'Martin Scorsese', title: 'Silence'}
]

//solution 1
// // 1. масив з унікальними режисерами
// const directors = movies
// .filter((item, index, array) => array
// .findIndex((movie, ind, arr) => movie.director === item.director) === index)
// .map(item => item.director);
// console.log(directors);
// // 2. створюємо об"єкт
// const obj = {

// };
// for (const director of directors) {
//   obj[director] = [];
// };
// console.log(obj);
// // 3. заповнюємо масив фільмами
// for (const {director, title} of movies) {
// obj[director].push(title);
// }
// console.log(obj);

//solution 2
const obj = {};
movies.forEach(({director, title}, index) => {
  if (!obj[director]) {
    obj[director] = [];
  }
  obj[director].push(title)
})
