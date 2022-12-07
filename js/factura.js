function calcular(){
    const iva = 0.19;
    let precio = document.SimuladorFactura.precio.value;
    let cantidad = document.SimuladorFactura.cantidad.value;
    producto = document.getElementById('producto').value;


    //validar o aplicar una estructura condicional

    if(precio == 0 || precio == null ){
        alert('no se puede realizar la simulacion, intente de nuevo')   
    } else {
            let valorTotal = precio*cantidad;
            let valorIva = valorTotal*iva;
            let totalPagar = valorTotal+valorIva;

            //imprimir los resultados por pantalla
            document.getElementById('valorProd').innerHTML = producto;
            document.getElementById('valorT').innerHTML = valorTotal;
            document.getElementById('valorI').innerHTML = valorIva;
            document.getElementById('totalP').innerHTML = totalPagar;

    }

}
