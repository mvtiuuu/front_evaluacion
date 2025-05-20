document.addEventListener('DOMContentLoaded', function() {
    const botonFinalizar = document.querySelector('.boton-finalizar');
    
    if(botonFinalizar) {
        botonFinalizar.addEventListener('click', function(event) {
            event.preventDefault();
            
            const colorSeleccionado = document.querySelector('.color-option.selected');
            let nombreColor = "No especificado";
            
            if (colorSeleccionado) {
                nombreColor = colorSeleccionado.getAttribute('data-name');
            }
            
            localStorage.setItem("colorSeleccionado", nombreColor);
            
            const adicionalesChecked = document.querySelectorAll('input[name="adicionales"]:checked');
            const adicionalesSeleccionados = [];
            
            adicionalesChecked.forEach(function(adicional) {
                const nombre = adicional.parentElement.querySelector('.adicional-nombre').textContent;
                const precio = parseInt(adicional.value);
                adicionalesSeleccionados.push({
                    nombre: nombre,
                    precio: precio
                });
            });
            
            localStorage.setItem("adicionalesSeleccionados", JSON.stringify(adicionalesSeleccionados));
            
            const precioTotalElement = document.querySelector('#precio-total span');
            if (precioTotalElement) {
                localStorage.setItem("precioTotal", precioTotalElement.textContent);
            }
            
            window.location.href = "boleta.html";
        });
    }
});