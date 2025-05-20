document.addEventListener('DOMContentLoaded', function() {
    const colorSeleccionado = localStorage.getItem("colorSeleccionado");
    const adicionalesSeleccionados = JSON.parse(localStorage.getItem("adicionalesSeleccionados")) || [];
    const precioTotal = localStorage.getItem("precioTotal");
    
    console.log("Datos recuperados:", {
        colorSeleccionado,
        adicionalesSeleccionados,
        precioTotal
    });
    
    document.getElementById("boleta-color").textContent = colorSeleccionado || "No especificado";
    
    const listaAdicionales = document.getElementById("boleta-adicionales");
    if (adicionalesSeleccionados.length === 0) {
        listaAdicionales.innerHTML = "<li>Sin adicionales seleccionados</li>";
    } else {
        adicionalesSeleccionados.forEach((adicional) => {
            const li = document.createElement("li");
            const precioFormateado = new Intl.NumberFormat('es-CL', {
                style: 'currency',
                currency: 'CLP',
                minimumFractionDigits: 0
            }).format(adicional.precio).replace('CLP', '$');
            
            li.textContent = `${adicional.nombre} - ${precioFormateado}`;
            listaAdicionales.appendChild(li);
        });
    }
    
    document.getElementById("boleta-total").textContent = precioTotal || "$0";
});