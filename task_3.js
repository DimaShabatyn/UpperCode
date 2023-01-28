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