function elementorandom(miarray) {
    var randomindex = Math.floor(Math.random() * miarray.length);
    return miarray[randomindex];
}
var posicion = [1, 2, 3, 4, 5];
var posicion_rnd = elementorandom(posicion);
console.log(posicion_rnd);
