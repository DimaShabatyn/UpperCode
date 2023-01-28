// У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

// const min = 42;
// if(min > 0 && min <= 15){
//     console.log("Перша чверть")
// } else if (min > 15 && min <= 30){
//     console.log("Друга чверть")
// } else if (min > 30 && min <= 45){
//     console.log("Третя чверть")
// } else console.log("Четверта чверть");

const min = 0;
switch (true) {
    case min > 0 && min <= 15:
        console.log("Перша чверть");
        break;
    case min > 15 && min <= 30:
       console.log("Друга чверть");
        break;
    case min > 30 && min <= 45:
        console.log("Третя чверть");
        break;
    case min > 45 && min <= 59 || min === 0:
        console.log("Четверта чверть");
        break;
}