// - Создать произвольный елемент с id = text.  Используя JavaScript,
// сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// const elementById = document.getElementById('text');
// const buttonElement = document.createElement('button');
// buttonElement.innerText = 'Click me';
// document.body.appendChild(buttonElement);
// buttonElement.addEventListener('click',() => {
//     elementById.remove()
// } )


//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача
// const input = document.createElement('input');
// input.type = 'number';
// const buttonElement1 = document.createElement('button');
// buttonElement1.innerText = 'Accept';
// document.body.append(buttonElement1, input);
// buttonElement1.addEventListener("click", function () {
//     if (input.value >= 18) {
//         alert("u are welcome")
//     }
//     else alert("u are blocked")
//
//     input.value = ''
// })


//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль
// інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const button = document.getElementById('button');
// button.addEventListener("click", function (){
//     console.log(document.forms.node.inputOne.value);
//     console.log(document.forms.node.inputTwo.value);
//     console.log(document.forms.nodeTwo.inputThree.value);
//     console.log(document.forms.nodeTwo.inputFour.value);
// })


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const inputOne = document.createElement('input');
const inputTwo = document.createElement('input');
const inputThree = document.createElement('input');
const htmlButtonElement = document.createElement('button');
htmlButtonElement.innerText = "Click";
document.body.append(inputOne, inputTwo, inputThree, htmlButtonElement);
htmlButtonElement.addEventListener("click", function (){
    const tr = inputOne.value;
    const td = inputTwo.value;
    const InputText = inputThree.value;

    function create(tr, td , text){
        const table = document.createElement("table");
        document.body.appendChild(table);
        for (let i = 0; i < tr; i++) {
            const tableRowElement = document.createElement("tr");
            table.appendChild(tableRowElement)


            for (let j = 0; j < td; j++) {
                const td = document.createElement("td");
                td.innerText = `${text}`;
                td.style.border = '1px solid black';
                tableRowElement.appendChild(td);


            }


        }
    }
    create(tr, td, InputText);
})