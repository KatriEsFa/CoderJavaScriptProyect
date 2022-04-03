const arrayElementosInventario = [];

function capturar() {
    function Elemento(tipo, estado, prestamo) {
        this.tipo = tipo;
        this.estado = estado;
        this.prestamo = prestamo;
    }
    let tipoCapturar = document.getElementById("tipo").value;
    let estadoCapturar = document.getElementById("estado").value;

    let prestamoCapturar = document.getElementById("prestamo")

    nuevoElemento = new Elemento(tipoCapturar, estadoCapturar, prestamoCapturar);
    console.log(nuevoElemento);
    agregar();
}
function agregar() {
    arrayElementosInventario.push(nuevoElemento);
    console.log(arrayElementosInventario)
}
function consultDisp() {
    arrayElementosInventario.filter(prestamo = off)
    document.getElementById("nrosPrimos").innerHTML = numerosPrimos
}

