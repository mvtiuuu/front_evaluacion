document.addEventListener('DOMContentLoaded', function() {
    const precioBase = 3500000; // Precio base del automóvil en blanco
    const colorOptions = document.querySelectorAll('.color-option');
    const adicionales = document.querySelectorAll('input[name="adicionales"]');

    function actualizarPrecioTotal() {
        let precioTotal = precioBase;
        
        const colorSeleccionado = document.querySelector('.color-option.selected');
        if (colorSeleccionado) {
            precioTotal += parseInt(colorSeleccionado.getAttribute('data-price') || 0);
        }
        
        adicionales.forEach(adicional => {
            if (adicional.checked) {
                precioTotal += parseInt(adicional.value || 0);
            }
        });

        const precioFormateado = new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0
        }).format(precioTotal).replace('CLP', '$');
        
        document.getElementById('precio-total').innerHTML = `Precio Total: <span>${precioFormateado}</span>`;
    }
    
    colorOptions.forEach(option => {
        option.addEventListener('click', actualizarPrecioTotal);
    });
    
    adicionales.forEach(adicional => {
        adicional.addEventListener('change', actualizarPrecioTotal);
    });
    
    actualizarPrecioTotal();
});