document.getElementById("submitBtn").addEventListener("click", function () {
    let numInicial = parseInt(document.getElementById("numInicial").value)
    let numFinal = parseInt(document.getElementById("numFinal").value)
    let numerosPrimos = "Los numeros primos entre A y B son: "
    if (isNaN(numInicial) || isNaN(numFinal)) {
        document.getElementById("nrosPrimos").innerHTML = "Debes ingresar un numero"
    }
    else if ((numInicial <= 1) || (numFinal <= 1)) {
        document.getElementById("nrosPrimos").innerHTML = "El numero ingresado no es correcto, ingrese un numero mayor a 1"

    }
    else {
        for (let i = numInicial; i <= numFinal; i++) {
            let esPrimo = true
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    esPrimo = false;
                    break;
                }
            }
            if (esPrimo) {
                numerosPrimos += i + ", "
            }

        }
        document.getElementById("nrosPrimos").innerHTML = numerosPrimos
    }
})