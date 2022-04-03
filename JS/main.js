const arrayElementosInventario = [];

function capturar() {
    function Elemento(tipo, estado, prestamo) {
        this.tipo = tipo;
        this.estado = estado;
        this.prestamo = prestamo;
    }
    let tipoCapturar = document.getElementById("tipo").value;
    let estadoCapturar = document.getElementById("estado").value;
    let prestamoCapturar = document.getElementById("prestamo").checked;

    nuevoElemento = new Elemento(tipoCapturar, estadoCapturar, prestamoCapturar);
    console.log(nuevoElemento);
    agregar();
}
function agregar() {
    arrayElementosInventario.push(nuevoElemento);
    console.log(arrayElementosInventario)
}
function consultDisp() {
    const listaDeDisponibles = arrayElementosInventario.filter((e) => e.prestamo === false);
    let stringListado = "";
    listaDeDisponibles.forEach(elementoInventario => {
        stringListado += elementoInventario.tipo + ", "
    });
    stringListado = stringListado.slice(0, -2);
    document.getElementById("elementosDisponibles").innerHTML = stringListado;
}
