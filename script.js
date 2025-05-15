document.addEventListener('DOMContentLoaded', function() {
    const tarjeta = document.querySelector('.tarjeta');

    tarjeta.addEventListener('click', function() {
        tarjeta.classList.toggle('active');
    });
});