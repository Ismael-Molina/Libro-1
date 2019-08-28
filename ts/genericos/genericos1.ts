function elementorandom(miarray: number []):number {
    let randomindex = Math.floor(Math.random()*miarray.length);
    return miarray[randomindex];
}
let posicion: number[] = [1,2,3,4,5];
let posicion_rnd: number = elementorandom(posicion);
console.log(posicion_rnd);