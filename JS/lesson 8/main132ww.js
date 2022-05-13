// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
// console.log(document.getElementById('content').innerText);
// // -- отримує текст з блоку з id "rules"
// console.log(document.getElementById('rules').innerText);


// / / -- замініть текст параграфа з id 'content' на будь-який інший
// let Element = document.getElementById('content')
// Element.innerText = 'hello ppl';


// -- замініть текст параграфа з id 'rules' на будь-який інший
// let rulles = document.getElementById('rules')
// rulles.innerText = "loremmmmmm"

// -- змініть кожному елементу колір фону на червоний
// let children = document.body.children
// for (const child of children){
// child.style.background = "red"
// }

// -- змініть кожному елементу колір тексту на синій
// let txt = document.body.children
// for (const txtElement of txt){
// txtElement.style.color = "blue"
// }


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// console.log(document.getElementById('rules').classList);


// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let wdwd = document.getElementsByClassName('fc_rules');
// for (const wdwdElement of wdwd) {
//     wdwdElement.style.color = 'red'
//
// }


//
//
//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :


// a) додає клас з назвою групи, елементу з ід main_header
// let wdw = document.getElementById('main_header')
// wdw.className = 'hello everyone'

// b) робить шириниу елементу ul 400px
// let scscscs = document.getElementsByTagName('ul')
// for (const scscs of scscscs) {
//     scscs.style.width = '400px'
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let cdcdcd = document.getElementsByClassName('linkList')
// for (const cdcdcdElement of cdcdcd) {
//     cdcdcdElement.style.width = "50%"
// }


// d) отримує текст який зберігається в елементі з класом listElement2
// let cxcxc = document.getElementsByClassName('listElement2')
// for (const cxcxcElement of cxcxc) {
//     console.log(cxcxcElement.innerText);
// }


// e) отримує всі елементи li та змінює ім колір фону на сірий
// let dcdcd = document.getElementsByTagName('li')
// for (const dcdcdElement of dcdcd) {
//    dcdcdElement.style.background = 'gray'
// }


// f) отримує всі елементи 'a' та додає їм клас anchor
// let bvbv = document.getElementsByTagName('a')
// for (const bvbvElement of bvbv) {
//     bvbvElement.className = 'anchor'
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let cxcxccwd = document.getElementsByTagName('a')
// for (const cxcxccwdElement of cxcxccwd) {
//     if (cxcxccwdElement.innerText === 'link3') {
//         cxcxccwdElement.style.fontSize = '40px'
//     }
//
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let oko = document.getElementsByTagName('a')
// for (const okoElement of oko) {
//     okoElement.classList.add(`element_${okoElement.innerText}`);
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let glad = prompt('where is my color?')
// let vfv= document.getElementsByClassName('sub-header')
// for (const vfvElement of vfv) {
//     vfvElement.style.background = glad
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let oiko = prompt('random color?')
// let bbfbv = document.getElementsByClassName('sub-header')
// for (const bbfbvElement of bbfbv) {
//     if (bbfbvElement.innerText === 'content 2 segment') {
//         bbfbvElement.style.color = oiko
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let vcv = prompt('random txt')
// let bvbvbvb = document.getElementsByClassName('content_1')
// for (const bvbvbvbElement of bvbvbvb) {
//    bvbvbvbElement.innerText = vcv
// }

// l) отримати елементи p та змінити їм padding на 20px
//  let bvbvbvb = document.getElementsByTagName('p')
// for (const bvbvbvbElement of bvbvbvb) {
//     bvbvbvbElement.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let vvvvvv = document.getElementsByClassName('text2')
// for (const vvvvvvElement of vvvvvv) {
//     vvvvvvElement.innerText = "13 march 2022 year"
// }


