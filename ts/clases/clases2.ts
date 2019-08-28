//modificadores privados y publicos
class person {
    private nombre:string;
    //se recibe el nombre y se le asigna a la propiedad nombre
    //los constructores se llaman cada vez que se crea una instancia de la clase
    constructor(nom: string){
        this.nombre = nom;
    }
    introduccion(){
        console.log("Hola, yo soy " + this.nombre+ "!");
    }
}
let persona2 = new person("leono");
persona2.nombre="tigro"; //no se permite alterar ya solo se permite dentro de la clase
persona2.introduccion();
