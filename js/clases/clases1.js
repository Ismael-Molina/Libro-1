var persona = /** @class */ (function () {
    //se recibe el nombre y se le asigna a la propiedad nombre
    //los constructores se llaman cada vez que se crea una instancia de la clase
    function persona(nom) {
        this.nombre = nom;
    }
    persona.prototype.introduccion = function () {
        console.log("Hola, yo soy " + this.nombre + "!");
    };
    return persona;
}());
var persona1 = new persona("leono");
persona1.introduccion();
