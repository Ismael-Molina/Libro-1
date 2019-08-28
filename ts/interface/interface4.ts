//propiedad de solo lectura (se asigna una vez y ya no se cambia) para las  propiedades
//con el uso de readonly
interface enemigo {
    readonly tamaño: number,
    vida: number,
    rango: number,
    readonly daño: number

}
let globin: enemigo= {
    tamaño: 50,
    vida: 100,
    rango: 10,
    daño: 15
}
console.log(globin);