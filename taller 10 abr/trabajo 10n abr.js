//definimos la clase que necesitamos la cual es Equipo

class almacen{
    //atributos - datos
    nombre = '';
    numeroEquipos = 0
    precioAlquiler = 0;
    precioVenta = 0;
    dineroRegistrado = false;
    tipoPersona = '';
//metodo constructor
    constructor(precioVenta,precioAlquiler,tipoPersona){;
    if(precioAlquiler == undefined){
    throw new Error(`Se requiere un valor para saber el precio del alquiler`);
}
    if(precioVenta){
    throw new Error(`Se requiere un valor para saber el precio de venta`);
}
    if(this.tipoPersona){
    throw new Error(`Se requiere saber si la persona es natural o juridica`);

    
}
   

    this._precioAlquiler = precioAlquiler;
    this.precioVenta = precioVenta;
    this.tipoPersona = tipoPersona;

    }
//Encapsulamiento: proteccion del atributo: metodo getter
get precioAlquiler() {
    return this._precioAlquiler;
    }

//Encapsulamiento: proteccion del atributo: metodo setter
set precioAlquiler(nuevoPrecioAlquiler){
    if(nuevoPrecioAlquiler < 0){
        throw new Error(`El valor del alquiler no puede ser negativo`);
    }
    this._precioAlquiler = nuevoPrecioAlquiler;



    }


AlquilerEquipos(){

    //Verificar si hay errores para poder retornar
    if(this.precioAlquiler < 0){
        this.motivoRechazoAlquiler = `El valor del aqluiler es invalido`;
        return;
    }

    if(this.precioAlquiler > 10000000){
        this.motivoRechazoAlquiler = `El alquiler es demasiado caro`;
        return;
    }

    console.info(`El alquiler ${this.precioAlquiler} el precio del alquiler es valido`);
    //No hubo ningun error
    this.dineroRegistrado = true;
    }


VentaEquipos(){

        //Verificar si hay errores para poder retornar
        if(this.precioVenta < 0){
            this.motivoRechazoVenta= `El valor de los equipos es invalido`;
            return;
        }

        if(this.precioVenta > 10000000){
            this.motivoRechazoVenta = `El precio de los equipos es demasiado elevado`;
            return;
        }

        console.info(`El valor de los equipos${this.precioVenta} el precio de venta es valido`);
        //No hubo ningun error
        this.dineroRegistrado = true;
    }

ingresosEmpresa(){

        //Verificar si hay errores para poder retornar
        if(this.ingresoVenta < 0){
            this.registroInvalidio= `El registro de la venta es invalido`;
            return;
        }

        if(this.ingresoVenta > 10000000){
            this.registroInvalidio = `El registro de la venta es demasiado elevado por lo tanto es invalido`;
            return;
        }

        console.info(`El resgistro de venta${this.ingresoVenta} el resgitro es valido`);
        //No hubo ningun error
        this.dineroRegistrado = true;
    }
    


}
    let equipo1 = new almacen(9000,8000,'juridica');
    let equipo2 = new almacen(10000,9000,'natural');
    let equipo3 = new almacen(7000,6000,'juridica');




