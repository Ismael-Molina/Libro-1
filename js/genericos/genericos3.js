//usando any- sin importar el tipo de dato del array
function element_rnd(miarray) {
    var randomindex = Math.floor(Math.random() * miarray.length);
    return miarray[randomindex];
}
var posicion1 = [1, 2, 3, 4, 5];
var posicion1_rnd = element_rnd(posicion1);
var colores1 = ["azul", "rojo", "verde"];
var color1_rnd = element_rnd(colores1);
console.log(posicion1_rnd);
console.log(color1_rnd);
