document.addEventListener('DOMContentLoaded', () => {

    let counter = 0;
    
    const combo = document.querySelector('select');
    button = document.querySelector('.boton'),
    ev = new Event('optionSelected');

    // Escuchar el evento 'change' y despachar el evento personalizado 'optionSelected'
    combo.addEventListener('change', () => { 
        document.dispatchEvent(ev);
    });

    button.addEventListener('click', () => { 
        counter++;
        console.log(`click: ${ counter }`)})

    // Manejador para el evento personalizado 'optionSelected'
    document.addEventListener('optionSelected', () => {
        const selectedIndex = combo.selectedIndex;
        console.log(`Elemento ${ selectedIndex + 1 } seleccionado`);
    });

});