function cotizadorVeterinaria() {
    alert("Clinicas Vet Mascotas ¡Cotizá Servicios de Veterinaria!");

    let servicios = [
        { nombre: "Consulta veterinaria por mascota", precio: 25000 },
        { nombre: "Vacuna antirrábica", precio: 15000 },
        { nombre: "Otras vacunas", precio: 12000 },
        { nombre: "Esterilización", precio: 128000 },
        { nombre: "Análisis de sangre", precio: 15000 },
        { nombre: "Baño y peluquería", precio: 12500 }
    ];

    let seleccionServicios = [];
    let continuar = true;
    let total = 0;

    // seleccionar servicios
    while (continuar) {
        let mensajeServicios = "Elige el servicios que necesita tu mascota:\n";
        for (let i = 0; i < servicios.length; i++) {
            mensajeServicios += `${i + 1}. ${servicios[i].nombre} ($${servicios[i].precio})\n`;
        }
        mensajeServicios += `${servicios.length + 1}. Finalizar cotización`;

        let opcion = parseInt(prompt(mensajeServicios));

        if (opcion === servicios.length + 1) {
            continuar = false;
            
        } else if (opcion >= 1 && opcion <= servicios.length) {
            let cantidad = parseInt(prompt(`¿Cuántos servicios de "${servicios[opcion - 1].nombre}" necesitas?`));
            total += servicios[opcion - 1].precio * cantidad;
            seleccionServicios.push({
                servicio: servicios[opcion - 1].nombre,
                cantidad: cantidad,
                precioPorUnidad: servicios[opcion - 1].precio,
                totalPorServicio: servicios[opcion - 1].precio * cantidad
            });
        } else {
            alert("Opción no válida. Intenta de nuevo.");
        }
    }
    // Preguntar por los descuentos
    let aplicarDescuento = prompt("¿Deseas aplicar un descuento? (1) Visa Santander 20% (2) Pago en efectivo 10% (3) Ninguno");

    switch (aplicarDescuento) {
        case "1":
            total = total - (total * 0.20); // Aplica 20% de descuento con visa Santander
            alert("¡Obtiviste un descuento del 20% por pago con Visa Santander!");
            break;
        case "2":
            total = total - (total * 0.10); // Aplica 10% de descuento por pago en efectivo
            alert("¡Obtuvuste un descuento del 10% por pago en efectivo!");
            break;
        case "3":
            alert("No se aplicó ningún descuento.");
            break;
        default:
            alert("Opción no válida. No se aplicará ningún descuento.");
            break;
    }   
    //mostrar total de la cotizacion
    for (let i = 0; i < seleccionServicios.length; i++) {
        console.log(`${seleccionServicios[i].cantidad} x ${seleccionServicios[i].servicio} = $${seleccionServicios[i].totalPorServicio}`);
    }

    console.log(`Costo total de los servicios: $${total}`);
    alert(`El costo total por los servicios seleccionados es $${total}`);
}
cotizadorVeterinaria();
