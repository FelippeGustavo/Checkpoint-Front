const form = document.querySelector('.sub');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.querySelector('#name');
    const ano = document.querySelector('#year');
    const sobre = document.querySelector('#inf');
    const link = document.querySelector('#link');

    document.body.innerHTML += `<div>${nome.value}</div>`
    document.body.innerHTML += `<div>${ano.value}</div>`
    document.body.innerHTML += `<div>${sobre.value}</div>`
    document.body.innerHTML += `<div>${link.value}</div>`
    
}); 
