
//(3) Recibe el objeto y se los envia a todos los participantes de la lista
class Sujeto{
    constructor(){
        this.observadores = []
    }

    suscribete (visor){
        this.observadores.push(visor)
    }

    dejarSuscripcion (visor){
        this.observadores = this.observadores.filter(e => e!=0)
        //retorna el array sin el valor recibido
    }

    notificar(modelo,origen){ //Informa a cada uno de la lista
        this.observadores.forEach(visor =>{
            visor.notificar(modelo,origen);
        })
    }
}
//(2) Recibe el texto y ejecuta el notificar de la clase padre y 
//envia el objeto textsujeto
class TextSujeto extends Sujeto{ //receptor de informacion
    constructor () {
        super();//Ejecuta el constructor del padre
        this.text = "";
    }

    notificar(text,origen){
        this.text = text;
        super.notificar(this,origen); //Se envia el objeto creado  con la clase
    }
}

//(1) Escucha el cambio en el campo y elvia la informacion al receptor del sujeto
$factura.addEventListener("input", (e)=>{
    $factura =  e.target.value;
    sujeto.notificar(e.target.value,1);
})

$porcentaje.addEventListener("input", (e)=>{
    $porcentaje = e.target.text;
    sujeto.notificar(e.target.text,2);
})

$porcentaje.addEventListener("click", (e)=>{
    $porcentaje = e.target.childNodes[0].textContent;
    sujeto.notificar(e.target.childNodes[0].textContent,2)
})

$empleados.addEventListener("input", (e)=>{
    $empleados = e.target.value;
    sujeto.notificar(e.target.value,3);
})

//Declaraciones

//Clases que recibe el objeto y extraen el texto y opera segun la funcion
class ObservadorA {
    notificar(sujeto,origen) {
        if ($empleados < 100 && $empleados != "" && $factura != "" && typeof($porcentaje) != "object") { 
            this.result =  ($factura * ($porcentaje / 100)) / $empleados;
        } else {
            this.result =  '0.00'
        }
        tip.innerHTML = Math.round(this.result * 100) /100;
    }
}

class ObservadorB {
    notificar(sujeto,origen){
        if ($empleados < 100 && $empleados != "" && $factura != "") {        
            if (typeof($porcentaje) != "object") {
                this.result =  ($factura * (($porcentaje / 100) + 1)) / $empleados;
            } else {
                this.result =  $factura / $empleados;
            } 
        }
        else {
            this.result =  $factura;
        }
    total.innerHTML = Math.round(this.result * 100) /100;
    }
}

let sujeto = new TextSujeto();

//Se inician los observadores
let obsUno = new ObservadorA();
let obsDos = new ObservadorB();

//Se agregan a la lista de observadores
sujeto.suscribete(obsUno);
sujeto.suscribete(obsDos);