// -створити форму з інпутами для name та age.
// const {name, age} = document.forms.form;
// const button = document.getElementById('button');
// const keyyy = 'keyyy'
// const hide = (name, age) => {
//     const object = {
//         name,
//         age
//     }
//     localStorage.setItem(keyyy, JSON.stringify(object));
// }
// button.onclick = () => {
//     hide(name.value, age.value)
// }
//     При відправці форми записати об'єкт в localstorage


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
const {model, type, volume} = document.forms.car;
const button = document.getElementById('button');
const key = 'key';
const hide = (model, type, volume) => {
    const store = JSON.parse(localStorage.getItem(key)) || [];
    store.push({model, type, volume});
    localStorage.setItem(key, JSON.stringify(store));
}
button.onclick = () => {
    hide(model.value, type.value, volume.value)
}