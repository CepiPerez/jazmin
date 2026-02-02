const fechaObjetivo = new Date(2026, 2, 20, 21, 30, 0).getTime();

const contenedor_dia = document.getElementById('dias');
const contenedor_hor = document.getElementById('horas');
const contenedor_min = document.getElementById('minutos');
const contenedor_seg = document.getElementById('segundos');


function actualizarCounter(contenedor, nuevoValor) {
    const actual = contenedor.querySelector('.counter-number');

    const items = contenedor.children;

    while (items.length > 1) {
        items.firstElementChild?.remove()
    }

    if (actual && (actual.innerHTML == nuevoValor)) return;
    
    const nuevo = document.createElement('span');
    nuevo.className = 'counter-number enter';
    nuevo.innerHTML = nuevoValor;

    contenedor.appendChild(nuevo);

    if (actual) {
        actual.classList.add('exit');
        actual.classList.remove('enter');
        actual.addEventListener('animationend', () => actual.remove(), { once: true });
    }
}

function actualizarCountdown() {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    const hh = String(horas).padStart(2, '0');
    const mm = String(minutos).padStart(2, '0');
    const ss = String(segundos).padStart(2, '0');

    contenedor_dia.innerHTML = dias;
    contenedor_hor.innerHTML = hh;
    contenedor_min.innerHTML = mm;
    contenedor_seg.innerHTML = ss;
    //actualizarCounter(contenedor_dia, dias);
    //actualizarCounter(contenedor_hor, hh);
    //actualizarCounter(contenedor_min, mm);
    //actualizarCounter(contenedor_seg, ss);

    if (diferencia < 0) {
        clearInterval(intervalo);
        console.log("¡Tiempo finalizado!");
    }
}

actualizarCountdown();

const intervalo = setInterval(actualizarCountdown, 1000);