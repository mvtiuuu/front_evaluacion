document.addEventListener('DOMContentLoaded', function () {
    const colorOptions = document.querySelectorAll('.color-option');
    const carImage = document.getElementById('color-preview');
    const colorNameElement = document.getElementById('color-name');
    const colorPriceElement = document.getElementById('color-price');

    const colorNames = {
        'white': 'Blanco',
        'black': 'Negro',
        'red': 'Rojo'
    };

    const colorFiles = {
        'white': 'blanco',
        'black': 'negro',
        'red': 'rojo'
    };

    colorOptions.forEach(option => {
        option.addEventListener('click', function () {
            const color = this.getAttribute('data-color');
            const price = this.getAttribute('data-price');

            carImage.src = `imagenes/${colorFiles[color]}.jpg`;
            carImage.alt = `Automóvil color ${colorNames[color].toLowerCase()}`;

            colorNameElement.textContent = `Color: ${colorNames[color]}`;

            const formattedPrice = new Intl.NumberFormat('es-CL', {
                style: 'currency',
                currency: 'CLP',
                minimumFractionDigits: 0
            }).format(price).replace('CLP', '$');

            colorPriceElement.textContent = `Costo adicional: ${formattedPrice}`;
            colorOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});