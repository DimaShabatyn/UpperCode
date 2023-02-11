//TODO:==============================================
const alertBtn = document.querySelector('#alertButton');
const alertInpt = document.querySelector('#alertInput');
alertBtn.addEventListener('click', () => {
    alert(alertInpt.value)
})

/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

//TODO:==============================================
const passwordInputRef = document.querySelector('#passwordInput');
const passwordBtnRef = document.querySelector('#passwordButton');

passwordBtnRef.addEventListener('click', togglePassword);

function togglePassword(event){
    if(passwordBtnRef.textContent === 'Hide'){
        passwordInputRef.type = 'password';
        passwordBtnRef.textContent = 'Show';
    } else if(passwordBtnRef.textContent === 'Show'){
        passwordInputRef.type = 'text';
        passwordBtnRef.textContent = 'Hide';
    }
}
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.
*/

//TODO:==============================================
/*
Завдання 5
Додайде слухач кліку і визначте, коли клік відбувається
всередині елемента з id "place" і коли клік припадає поза зоною елемента
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

//TODO:==============================================
/*
Завдання 8
При натисканні на кожну з кнопок підсумовуються значення з data-атрибутів.
За натисканням на кнопку "Вивести результат" виводиться сума значення, а також статистика з
інформацією про те, яка кнопка була натиснута скільки разів.
*/

//TODO:==============================================
const refs = {
    formRef: document.querySelector('.checkboxForm'),
}
refs.formRef.addEventListener('submit', (e) => {
e.preventDefault();
console.log(e.target.elements)
for(const el of e.target.elements){
    if(el.checked) el.parentNode.remove();
}})
/*
Завдання 9
Видалити зі списку елементи, які позначені.
*/

//TODO:==============================================
const nameBtn = document.querySelector('#sortByNameButton');
const lastnameBtn = document.querySelector('#sortByLastNameButton');
const peopleList = document.querySelectorAll('.person');
const peopleUl = document.querySelector('.people');
const newArray = [];
peopleList.forEach(item => newArray.push(item))

nameBtn.addEventListener('click', () => {
    newArray.sort((a,b) => a.innerHTML == b.innerHTML
    ? 0
    : (a.innerHTML > b.innerHTML ? 1 : -1));
    console.log(newArray)
    peopleUl.innerHTML = '';
    newArray.forEach(el => peopleUl.append(el));
});
lastnameBtn.addEventListener('click', () => {
    newArray.sort((a,b) => a.innerHTML.split(' ')[1] == b.innerHTML.split(' ')[1]
    ? 0
    : (a.innerHTML.split(' ')[1] > b.innerHTML.split(' ')[1] ? 1 : -1));
    console.log(newArray)
    newArray.forEach(el => {
        console.log(el)
        console.log(el.innerHTML)
        console.log(el.innerHTML.split(' '))
        console.log(el.innerHTML.split(' ')[1])
    })
    peopleUl.innerHTML = '';
    newArray.forEach(el => peopleUl.append(el));
});


// lastnameBtn.addEventListener('click', );
/*
Завдання 10
Наведено список студентів. Зробіть можливість сортування списку на ім'я та на прізвище.
*/

//TODO:==============================================
/*
Завдання 11
Наведено список персонажів. Зробіть фільтр на ім'я/прізвище.
*/

//TODO:==============================================
/*
Завдання 12
Клік по кнопці замінює символ першого поля введення
символ з другого поля введення в усьому тексті.
Якщо одне з полів порожнє, викликай alert із проханням заповнити їх.
*/

//TODO:==============================================
/*
Завдання 13
Коло має зникати при наведенні на нього.
При цьому позиція сусідніх кіл має залишатися незмінною.
*/