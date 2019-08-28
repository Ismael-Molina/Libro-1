//propiedad de solo lectura (se asigna una vez y ya no se cambia) para las  propiedades
//con el uso de readonly
interface enemigo {
    readonly tamaño: number,
    vida: number,
    rango: number,
    readonly daño: number

}
let globin2: enemigo = {
    tamaño: 50,
    vida: 100,
    rango: 10,
    daño: 15
}

//interfaces y  funciones (Se reduce la vida del enemigo)
interface enemigodaño {
    (name: enemigo, dañorecibido: number): number;
}
let globindaño: enemigodaño = function(globin2:enemigo,dañorecibido:number){
    globin2.vida -= dañorecibido;
    return globin2.vida;
}
globindaño(globin2,50);
console.log(globin2);