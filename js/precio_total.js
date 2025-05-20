document.addEventListener('DOMContentLoaded', function () {
    const adicionales = document.querySelectorAll('input[name="adicionales"]');
    const basePrice = 3500000; 
    let totalPrice = basePrice;
    let colorPrice = 0;

    function actualizarPrecioTotal() {
        totalPrice = basePrice + colorPrice;

        adicionales.forEach(function (adicional) {
            if (adicional.checked) {
                totalPrice += parseInt(adicional.value);
            }
        });

        let precioTotalElement = document.getElementById('precio-total');
        if (!precioTotalElement) {
            precioTotalElement = document.createElement('div');
            precioTotalElement.id = 'precio-total';
            precioTotalElement.className = 'text-center mt-4 h3';
            document.getElementById('car-configurator').appendChild(precioTotalElement);
        }

        const formattedPrice = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0
        }).format(totalPrice);

        precioTotalElement.textContent = `Precio Total: ${formattedPrice}`;
    }

    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.addEventListener('click', function () {
            colorPrice = parseInt(this.getAttribute('data-price'));
            actualizarPrecioTotal();
        });
    });

    adicionales.forEach(function (adicional) {
        adicional.addEventListener('change', actualizarPrecioTotal);
    });

    actualizarPrecioTotal();
});
