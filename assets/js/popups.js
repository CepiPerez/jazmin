// JS para manejar los popups
// --------------------------

// Variables popup confirmar asistencia
const openBtnConfirmacion = document.getElementById('openModalConfirmacion');
const modalConfirmacion = document.getElementById('modalConfirmacion');
const modalContentConfirmacion = document.getElementById('modalConfirmacionContent');
const closeBtnConfirmacion = document.getElementById('closeModalConfirmacion');
const overlayConfirmacion = document.getElementById('modalConfirmacionOverlay');
const formConfirmacion = document.getElementById('formConfirmacion');
const sendBtnConfirmacion = document.getElementById('btnEnviarConfirmacion');

// Abrir popup confirmar asistencia
function openModalConfirmacion() {
    modalConfirmacion.classList.remove('hidden');
    modalConfirmacion.classList.add('flex');

    requestAnimationFrame(() => {
        modalContentConfirmacion.classList.remove('scale-95', 'opacity-0');
        modalContentConfirmacion.classList.add('scale-100', 'opacity-100');
    });
}

// Cerrar popup confirmar asistencia
function closeModalConfirmacion() {
    modalContentConfirmacion.classList.add('scale-95', 'opacity-0');
    modalContentConfirmacion.classList.remove('scale-100', 'opacity-100');

    setTimeout(() => {
        modalConfirmacion.classList.add('hidden');
        modalConfirmacion.classList.remove('flex');
    }, 300);
}

// Listeneres popup confirmar asistencia
openBtnConfirmacion.addEventListener('click', (e) => {
    e.preventDefault();
    openModalConfirmacion();
});

closeBtnConfirmacion.addEventListener('click', closeModalConfirmacion);
overlayConfirmacion.addEventListener('click', closeModalConfirmacion);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModalConfirmacion();
});

window.addEventListener("load", () => {
    formConfirmacion.addEventListener("submit", function (e) {
        e.preventDefault();

        sendBtnConfirmacion.disabled = true;
        sendBtnConfirmacion.classList.add('pointer-events-none', 'opacity-50');

        const data = new FormData(formConfirmacion);
        const action = formConfirmacion.action;

        fetch(action, {
            method: 'POST',
            body: data,
            mode: 'no-cors' // IMPORTANTE para Google Forms
        })
        .then(() => {
            alert("Tu confirmación fue enviada correctamente.");
            formConfirmacion.reset();
            closeModalConfirmacion();
        })
        .catch(() => {
            alert("Error al enviar. Intentá nuevamente.");
        });

        sendBtnConfirmacion.disabled = false;
        sendBtnConfirmacion.classList.remove('pointer-events-none', 'opacity-50');
    });
});



// Variables popup sugerir canciones
const openBtnCanciones = document.getElementById('openModalCanciones');
const modalCanciones = document.getElementById('modalCanciones');
const modalContentCanciones = document.getElementById('modalCancionesContent');
const closeBtnCanciones = document.getElementById('closeModalCanciones');
const overlayCanciones = document.getElementById('modalCancionesOverlay');
const formCanciones = document.getElementById('formCanciones');
const sendBtnCanciones = document.getElementById('btnEnviarCanciones');

// Abrir popup sugerir canciones
function openModalCanciones() {
    modalCanciones.classList.remove('hidden');
    modalCanciones.classList.add('flex');

    requestAnimationFrame(() => {
        modalContentCanciones.classList.remove('scale-95', 'opacity-0');
        modalContentCanciones.classList.add('scale-100', 'opacity-100');
    });
}

// Cerrar popup sugerir canciones
function closeModalCanciones() {
    modalContentCanciones.classList.add('scale-95', 'opacity-0');
    modalContentCanciones.classList.remove('scale-100', 'opacity-100');

    setTimeout(() => {
        modalCanciones.classList.add('hidden');
        modalCanciones.classList.remove('flex');
    }, 300);
}

// Listeners popup sugerir canciones
openBtnCanciones.addEventListener('click', (e) => {
    e.preventDefault();
    openModalCanciones();
});

closeBtnCanciones.addEventListener('click', closeModalCanciones);
overlayCanciones.addEventListener('click', closeModalCanciones);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModalCanciones();
});


window.addEventListener("load", () => {
    formCanciones.addEventListener("submit", function (e) {
        e.preventDefault();

        sendBtnCanciones.disabled = true;
        sendBtnCanciones.classList.add('pointer-events-none', 'opacity-50');

        const data = new FormData(formCanciones);
        const action = formCanciones.action;

        fetch(action, {
            method: 'POST',
            body: data,
            mode: 'no-cors' // IMPORTANTE para Google Forms
        })
        .then(() => {
            alert("Tus sugenencias fueron enviadas correctamente.");
            formCanciones.reset();
            closeModalCanciones();
        })
        .catch(() => {
            alert("Error al enviar. Intentá nuevamente.");
        });

        sendBtnCanciones.disabled = false;
        sendBtnCanciones.classList.remove('pointer-events-none', 'opacity-50');
    });
});