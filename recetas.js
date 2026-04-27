document.addEventListener("DOMContentLoaded", () => {
    fetch("recetas.json")
        .then(res => res.json())
        .then(datos => {
            const tbody = document.querySelector("#tablaRecetas tbody");

            datos.forEach(r => {
                const fila = document.createElement("tr");

                fila.innerHTML = `
                    <td>${r.codigo}</td>
                    <td>${r.nombre}</td>
                    <td>${r.categoria}</td>
                    <td>${r.tiempo} min</td>
                    <td>${r.dificultad}</td>
                `;

                tbody.appendChild(fila);
            });
        });
});