// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let midl = (array) => {
    let sum = 0;
    for (const item of array)
        sum += item / array.length;

    {
        return sum
    }
}
console.log(midl([2, 4, 5, 6, 7, 4, 16]));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let lowest = (array) => {
//     let losostnum = 0
//     for (const item of array)
//
//             }
// console.log(lowest([2, 4, 5, 6, 8]));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let calk12 = (max) => {
    return Math.round(Math.random() * 100);
}

console.log(calk12(100));


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let calk13 = (limit) => {
    return Math.round(Math.random() * limit)
}
console.log(calk13(170));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let calc22 = (array) => {
    const reversed = array.reverse()
    console.log(reversed)
}
console.log(calc22([1, 2, 3]));
//
//
//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let square = (a, b) => a * b;
console.log(square(10, 15))

// // - створити функцію яка обчислює та повертає площу кола з радіусом r
let square2 = (p, r) => p * r * r;
console.log(square2(3.14, 3))
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let square3 = (p, h, r) => 2 * p * h * r
console.log(square3(3.14, 3, 2))
// // - створити функцію яка приймає масив та виводить кожен його елемент
let calc = (array) => {
    for (const item of array)
        console.log(item)
    {

    }
}
(calc([1, 4, 6, 8]));
// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let calc2 = (paragraff) => {
    document.write(`<p>${paragraff}</p>`)

}
calc2('hello okten!!!!!!!!')
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let calc3 = (txt) => {
    document.write(`<ul>
        <li>${txt}</li>
        <li>${txt}</li>
        <li>${txt}</li>
//     </ul>`)
}
calc3('okten top')
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let calc4 = (smli, num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++)
        document.write(`<li>${smli}</li>`)
    {


        document.write(`</ul>`)


    }
}
calc4('okten hello', 3)
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let idk = [12, 'hello', true]
let calc5 = (array) => {
    document.write(`<ul>`)
    for (const item of array)
        document.write(`<li>${item}</li>`)
    document.write(`</ul>`)
    {

    }

}
calc5(idk)
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let userss7 = [
    {id: 5, name: 'Jane', age: 15},
    {id: 8, name: 'Artur', age: 42},
    {id: 11, name: 'Jonh', age: 25}

]
let calc6 = (array) => {
    for (const item of array)
        document.write(`<div>${item.id}, ${item.name}, ${item.age}</div>`)
    {

    }
}
calc6(userss7)
// // - створити функцію яка повертає найменьше число з масиву
let calc7 = (array) => {
    let min = array[0]
    for (const item of array)
        if (item < min)
            min = item
    {

    }
    return min
}
console.log(calc7([0, 5, 7, 8, 2, 1, -6]));
// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let calc9 = (array) => {
    let sum = 0
    for (const item of array)
        sum += item
    {
        return sum
    }

}
console.log(calc9([2, 6, 9, 11]));
//
// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
let userss = [
    {id: 5, name: 'Jane', age: 15},
    {id: 8, name: 'Artur', age: 42},]


let boo = (array) => {
    let reverse = array.reverse()
    console.log(reverse)


}
console.log(boo(userss));
//
//
//
//
//
//
