//usando any- sin importar el tipo de dato del array
function element_rnd(miarray: any []):number {
    let randomindex = Math.floor(Math.random()*miarray.length);
    return miarray[randomindex];
}
let posicion1 = [1,2,3,4,5];
let posicion1_rnd = element_rnd(posicion1);

let colores1 = ["azul","rojo","verde"];
let color1_rnd = element_rnd(colores1);

console.log(posicion1_rnd);
console.log(color1_rnd);
