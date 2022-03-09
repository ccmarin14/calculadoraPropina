const tipAmount = () => {
    if ($empleados < 100 && $empleados != "" && typeof($factura) != "object" && typeof($porcentaje) != "object") { 
        this.result =  ($factura * ($porcentaje / 100)) / $empleados;
    } else {
        this.result = "0";
    }
    return (Math.round(this.result * 100)/100);
}

const totalAmount = () => {
    if ($empleados < 100 && $empleados != "" && typeof($factura) != "object") {        
        if (typeof($porcentaje) != "object") {
            this.result =  ($factura * (($porcentaje / 100) + 1)) / $empleados;
        } else {
            this.result =  $factura / $empleados;
        } 
    }
    else {
        this.result = "0";
    }
    return (Math.round(this.result * 100) /100);
}

const cleanActive = () => {
    $porcentajes.forEach(valor => {
        valor.classList.remove("active");
    })
}

const cleanView = () => {
    cleanActive();
    $porcentaje = 0;
    $empleados = 0;
    $factura = 0;
    $factura__valor.value = "";
    $empleados__cantidad.value = "";
    $valorCustom.value = "";
    $tip.innerHTML = "0.00";
    $total.innerHTML = "0.00";
}