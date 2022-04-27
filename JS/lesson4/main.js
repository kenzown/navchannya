// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function S(a, b) {
    return a * b;

}

let answer = S(20, 30)
console.log(answer)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function Scitcle(p, r) {
    return p * (r * r);

}

let answer1 = Scitcle(3.14, 6);
console.log(answer1)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function Stututut(p, h, r) {
    return 2 * p * r * h;

}

let answer2 = Stututut(3.14, 8, 3)
console.log(answer2)
// - створити функцію яка приймає масив та виводить кожен його елемент
let users = [
    {name: "Stepan", age: 15, status: true},
    {name: "olya", age: 11, status: false},
    {name: "Maks", age: 19, status: true},
    {name: "Petro", age: 12, status: false}
]

function elements(array) {
    for (const item of array)
        console.log(item)
    {

    }


}

elements(users);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(sometext) {
    document.write(`<div>${sometext}</div>`)

}

paragraf('dwqounfnqfwonqwfnqvwnuewonenjevwjnvewjnevjkvekjvekjergimgmioegrmggrmigimrergegrmekmeklr')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulsame(txt) {
    document.write(`<ul>
        <li>${txt}</li>
        <li>${txt}</li>
        <li>${txt}</li>
    </ul>`)

}

ulsame('SAME TEXT')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function sometxtulli(txt, num) {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${txt}</li>`)

    }
    document.write(`</ul>`)
}

sometxtulli('some txt', 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let idk = [12, 'hello', true]

function primitive(numstringbull) {
    document.write(`<ul>`)
    for (let items of numstringbull)
        document.write(`<li>${items}</li>`)
    {

    }

    document.write(`</ul>`)


}

primitive(idk);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let userss = [
    {id: 5, name: 'Jane', age: 15},
    {id: 8, name: 'Artur', age: 42},
    {id: 11, name: 'Jonh', age: 25}

]
console.log(userss)

function namess(users) {
    for (let item of users) {
        document.write(`<div>${item.id}, ${item.name}, ${item.age}</div>`)

    }


}

namess(userss)

// - створити функцію яка повертає найменьше число з масиву
let nums = [1, 5, 7, 8, -2]

function numbers(array) {
    let min = array[0];
    for (const item of array) {
        if (item < min)
            min = item

    }
    return min

}

console.log(numbers(nums));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arr = [1, 3, 5, 7]
debugger
function numbuers(array) {
    let sum = 0;
    for (const item of array)
        sum += item
    {
        return sum
    }

}

console.log(numbuers(arr));