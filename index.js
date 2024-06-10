document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.boton');
    let counter = 0;

    button.addEventListener('click', () => {
        counter++
        console.log(`click: ${ counter }`)
    })
})