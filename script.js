document.addEventListener('DOMContentLoaded', () => {
    // Manejo del formulario de contacto
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Evitar el envío del formulario

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            alert(`Gracias, ${name}! Hemos recibido tu mensaje.`);
            form.reset(); // Reiniciar el formulario
        });
    }

    // Manejo del carrito de compras
    const buyButtons = document.querySelectorAll('.buy-button');
    let cart = [];

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = button.getAttribute('data-price');
            cart.push({ name, price });
            alert(`${name} ha sido agregado al carrito.`);
        });
    });

    // Manejo del formulario de reseñas
    const reviewForm = document.getElementById('review-form');
    const reviewContainer = document.getElementById('review-container');

    if (reviewForm) {
        reviewForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const reviewerName = document.getElementById('reviewer-name').value;
            const reviewText = document.getElementById('review-text').value;

            const reviewDiv = document.createElement('div');
            reviewDiv.innerHTML = `<strong>${reviewerName}</strong><p>${reviewText}</p>`;
            reviewContainer.appendChild(reviewDiv);
            reviewForm.reset(); // Reiniciar el formulario de reseñas
        });
    }

    // Manejo de inicio de sesión y registro
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            alert('Funcionalidad de inicio de sesión aún no implementada.');
        });
    }

    if (signupButton) {
        signupButton.addEventListener('click', () => {
            alert('Funcionalidad de registro aún no implementada.');
        });
    }

    // Mostrar la sección de contacto si el usuario hace clic en "Contacto"
    const contactoLinks = document.querySelectorAll('a[href="#contacto"], a[href="compra.html#contacto"], a[href="reparacion.html#contacto"], a[href="atencion.html#contacto"]');
    
    contactoLinks.forEach(contactoLink => {
        contactoLink.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar el comportamiento por defecto del enlace solo para contacto
            const contactoSection = document.querySelector('#contacto');
            contactoSection.classList.remove('hidden');

            // Ocultar otras secciones si es necesario
            const sections = document.querySelectorAll('main section');
            sections.forEach(section => {
                if (section !== contactoSection) {
                    section.classList.add('hidden');
                }
            });
        });
    });
});
