
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
            visor.notificar(modelo);
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

    notificar(text){
        this.text = text;
        super.notificar(this); //Se envia el objeto creado  con la clase
    }
}

//(1) Escucha el cambio en el campo y elvia la informacion al receptor del sujeto
$factura.addEventListener("input", (e)=>{
    $factura =  e.target.value;
    sujeto.notificar(e.target.value);
})

$porcentaje.addEventListener("input", (e)=>{
    $porcentaje = e.target.value;
    cleanActive();
    sujeto.notificar(e.target.value);
})

$porcentaje.addEventListener("click", (e)=>{
    cleanActive();
    if (e.target.id != "cantidad") {
        $porcentaje = e.target.childNodes[0].textContent;
        $valorCustom.value = "";
        e.target.classList.add("active");
        sujeto.notificar(e.target.childNodes[0].textContent);
    }
})

$empleados.addEventListener("input", (e)=>{
    $empleados = e.target.value;
    sujeto.notificar(e.target.value);
})

//Declaraciones

//Clases que recibe el objeto y extraen el texto y opera segun la funcion
class ObsA {
    notificar(sujeto) {
        tip.innerHTML = tipAmount();
    }
}

class ObsB {
    notificar(sujeto){
        total.innerHTML = totalAmount();
    }
}

let sujeto = new TextSujeto();

//Se inician los observadores
let obs1 = new ObsA();
let obs2 = new ObsB();

//Se agregan a la lista de observadores
sujeto.suscribete(obs1);
sujeto.suscribete(obs2);