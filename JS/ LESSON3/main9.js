// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write(`<div>`)

for (let i = 0; i < 10; i++) {

    document.write(`<li>hello</li>`)
}


document.write(`</div>`)
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<div>`)

for (let i = 0; i < 10; i++) {

    document.write(`<li>hello ${i}</li>`)
}


document.write(`</div>`)
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write(`<ul>`)
i = 0
while (i < 20) {
    document.write(`<h1>hello often</h1>`)
    i++
}

document.write(`</ul>`)

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write(`<ul>`)
i = 0
while (i < 20) {
    document.write(`<h1>hello often ${i}</h1>`)
    i++
}

document.write(`</ul>`)
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
let listOfItems = ['html',
    'css',
    'javascript',
    'mysql',
    'mongodb',
    'react',
    'angular',
    'node.js'];

document.write(`<ul>`)
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li >${listOfItems[i]} </li>`)
}


document.write(`</ul>`)


//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let product = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write(`<div>`)
for (let i = 0; i < product.length; i++) {

    document.write(`<div class="product-title">${product.title}<h3 class="product-price">${product.price}</h3><img src="${product.image} " alt ="" class="product-image"></div>`)
}

document.write(`</div`)