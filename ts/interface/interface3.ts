//añadir nuevas propiedades a un objeto mediante firmas de indice
interface lago {
    nombre: string;
    area: number;
    longitud: number;
    profundidad: number;
    aguadulce: boolean;
    pais: string[];
    [extrapropiedad: string]: any
}
let lago4: lago = {
    nombre: "Caspian sea",
    area: 371000,
    profundidad: 2015,
    longitud: 1199,
    pais: ["Russia","Iran","USA"],
    aguadulce:false,
    temperatura: "sabe"
}
console.log(lago4);