const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const el = entry.target;

        if (entry.isIntersecting) {

            // duration
            el.style.transitionDuration =
                (el.dataset.duration || 700) + 'ms';

            // delay
            el.style.transitionDelay =
                (el.dataset.delay || 0) + 'ms';

            // rotate (si existe)
            if (el.dataset.rotate) {
                el.style.setProperty('--rotate', el.dataset.rotate);
            }

            // scale (si existe)
            if (el.dataset.scale) {
                el.style.setProperty('--scale', el.dataset.scale);
            }

            // opacity (si existe)
            if (el.dataset.opacity) {
                el.style.setProperty('--opacity', el.dataset.opacity);
            }

            el.classList.add('in-view');
        } else {
            // LEAVE
            el.classList.remove('in-view');
        }
    });
}, {
    rootMargin: '0px',
    threshold: [0, 0.1, 1],
});

document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});
