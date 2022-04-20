let x = +prompt("give me some X");
if (x === 0) {
    console.log('Virno');
} else {
    console.log('Ne Virno');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('random number')
if (time >= 0 && time <= 15) {
    console.log('first quarter')
}
if (time > 15 && time <= 30) {
    console.log('second quarter')
}
if (time > 30 && time <= 45) {
    console.log('third quarter')
}
if (time > 45 && time <= 59) {
    console.log('quat quarter')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 5
if (day >= 1 && day <= 11) {
    console.log('first decade')
} else if (day > 11 && day <= 22) {
    console.log('second decade')
} else if (day > 22 && day <= 31) {
    console.log('third decade')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
switch (+prompt('day of weakend')) {
    case 1:
        console.log('monday')
        break
    case 2:
        console.log('tuesday')
        break
    case 3:
        console.log('wensday')
        break
    case 4:
        console.log('thursday')
        break
    case 5:
        console.log('friday')
        break
    case 6:
        console.log('saturday')
        break
    case 7:
        console.log('sunday')
        break

}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 4
let b = 3
if (a > b) {
    console.log(a)
} else if (a < b) {
    console.log(b)}

   else if (a === b) {
       console.log('equal')

}
