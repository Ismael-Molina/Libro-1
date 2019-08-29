interface persona {
    nom: string;
}
interface villano {
    nom: string;
    poder: string;
    ki: number;
}
interface heroe extends persona {
    poder: string;
    ki: number;
}
function printName<T extends persona>(entrada: T): void {
    console.log(`Mi nombre es ${entrada.nom}`); 
}
let heroe1: heroe = {
    nom: "kokun",
    poder: "kaio",
    ki: 5000
}
printName(heroe1);