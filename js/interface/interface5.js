var globin2 = {
    tamaño: 50,
    vida: 100,
    rango: 10,
    daño: 15
};
var globindaño = function (globin2, dañorecibido) {
    globin2.vida -= dañorecibido;
    return globin2.vida;
};
globindaño(globin2, 50);
console.log(globin2);
