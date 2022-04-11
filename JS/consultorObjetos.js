import { arrayItemsInventario } from "../JS/data/arrayObjetos.js";

document.getElementById("btnFormConsult").addEventListener("click", captureFormConsult);

function captureFormConsult() {
    let checked = Array.prototype.filter.call(document.getElementsByName("checkboxTipoForm"), (e) =>
        e.checked
    );
    const tipoFiltrados = checked.map((e) => e.value);//Este map está haciendo que se transfomre los objetos del DOM a solamente sus valores

    const resultsFilters = arrayItemsInventario.filter((e) =>
        tipoFiltrados.includes(e.tipo)//Funcion de los array que preguntan si el array contiene el parametro
        && !e.prestamo
    );

    document.getElementById("muestraResultado").innerHTML = resultsFilters.map((e) => e.nombreItem).join(", ");



}