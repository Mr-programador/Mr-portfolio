function onloaded() {
    let titulos = document.querySelectorAll('.titulo');
    titulos.forEach(titulo => {
        titulo.addEventListener('mouseover', mudarTitulo, mudarCor);
        titulo.addEventListener('mouseout', restaurarTitulo);
        titulo.addEventListener('mouseover', colocarMaiusculo);
        titulo.addEventListener('mouseover', mudarCor);
        titulo.addEventListener('mouseout', restaurarCor);
    });
}

function mudarTitulo() {
    let a = this.querySelector('a');
    switch (a.innerHTML) {
        case 'OI, ':
            a.innerHTML = 'SOBRE';
            break;
        case 'EU SOU':
            a.innerHTML = 'PROJETOS';
            break;
        case 'MAICON':
            a.innerHTML = 'OBJETIVOS';
            break;
        case 'RODRIGUES':
            a.innerHTML = 'CONTATO';
            break;
    }
}

function restaurarTitulo() {
    let a = this.querySelector('a');
    switch (a.innerHTML) {
        case 'SOBRE':
            a.innerHTML = 'OI, ';
            break;
        case 'PROJETOS':
            a.innerHTML = 'EU SOU';
            break;
        case 'OBJETIVOS':
            a.innerHTML = 'MAICON';
            break;
        case 'CONTATO':
            a.innerHTML = 'RODRIGUES';
            break;
    }
}

function colocarMaiusculo() {
    this.querySelector('a').innerHTML = this.querySelector('a').innerHTML.toUpperCase();
}

function mudarCor() {
    let a = this.querySelector('a');
    a.style.color = '#B14AED';
}

function restaurarCor() {
    let a = this.querySelector('a');
    a.style.color = '#E4DFDA';
}
