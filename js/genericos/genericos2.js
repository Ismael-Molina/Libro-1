//usando cadenas
function elementorandom(miarray) {
    var randomindex = Math.floor(Math.random() * miarray.length);
    return miarray[randomindex];
}
var colores = ["rojo", "azul", "verde"];
var color_rnd = elementorandom(colores);
console.log(color_rnd);
