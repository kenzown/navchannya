// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let oi = 'hello world'
let oi1 = 'lorem ipsum'
let oi2 = 'javascript is cool'
console.log(oi.length);
console.log(oi1.length);
console.log(oi2.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let w = 'hello world'
let e = 'lorem ipsum'
let r = 'javascript is cool'
console.log(w.toUpperCase())
console.log(e.toUpperCase())
console.log(r.toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let t = 'HELLO WORLD'
let y = 'LOREM IPSUM'
let u = 'JAVASCRIPT IS COOL'
console.log(t.toLowerCase())
console.log(y.toLowerCase())
console.log(u.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str)
let trim = str.trim()
console.log(trim)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str21 = 'Ревуть воли як ясла повні';
let stringToArray = (str32) => str32.split(' ');
console.log(stringToArray(str21));

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let mimi = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
console.log(mimi.map(value => value.toString()));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let SortArr = (array) => array.sort((a, b) => b.monthDuration - a.monthDuration)
console.log(SortArr(coursesAndDurationArray));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterArr = (array) =>array.filter(value => value.monthDuration >5)
console.log(filterArr(coursesAndDurationArray));


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }