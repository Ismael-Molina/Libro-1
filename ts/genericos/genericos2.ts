//usando cadenas
function elementorandom(miarray: string []):string {
    let randomindex = Math.floor(Math.random()*miarray.length);
    return miarray[randomindex];
}
let colores: string[] = ["rojo","azul","verde"];
let color_rnd: string = elementorandom(colores);
console.log(color_rnd);