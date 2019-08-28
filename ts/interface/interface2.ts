//crear una propiedad opcional con ?
interface lago {
    nombre: string;
    area: number;
    longitud: number;
    profundidad: number;
    aguadulce: boolean;
    pais: string[];
    congelar?: string[]
}
let lago2: lago = {
    nombre: "Caspian sea",
    area: 371000,
    profundidad: 2015,
    longitud: 1199,
    pais: ["Russia","Iran","USA"],
    aguadulce:false,
    congelar: ["diciembre","enero"]
}
let lago3: lago = {
    nombre: "Caspian sea",
    area: 371000,
    profundidad: 2015,
    longitud: 1199,
    pais: ["Russia","Iran","USA"],
    aguadulce:false

}
console.log(lago2);
console.log(lago3);