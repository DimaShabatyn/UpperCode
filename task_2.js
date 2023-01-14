//За допомогою циклу for напишіть код,
// який буде виводити в консоль всі парні числа від min до max
const max = 50;
const min = 0;
for (let i = min; i <= max; i += 1) {
if (i % 2 === 0 && i !== 0) {
    console.log(i);
}
}