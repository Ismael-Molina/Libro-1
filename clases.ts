class persona {
    nombre:string;
    //se recibe el nombre y se le asigna a la propiedad nombre
    //los constructores se llaman cada vez que se crea una instancia de la clase
    constructor(nom: string){
        this.nombre = nom;
    }
    introduccion(){
        console.log("Hola, yo soy " + this.nombre+ "!");
    }
}
let persona1 = new persona("l");
persona1.introduccion();