//Herencia
class humano {
    nombre:string;
    //se recibe el nombre y se le asigna a la propiedad nombre
    //los constructores se llaman cada vez que se crea una instancia de la clase
    constructor(nom: string){
        this.nombre = nom;
    }
    introduccion(){
        console.log(this.nombre);
    }
}
class mutante extends humano {
    t_expo_radiacion: number;
    constructor(nom:string,t_expo_radiacion: number){
        super(nom);
        this.t_expo_radiacion = t_expo_radiacion;
    }
    frase1(){
        console.log("¡Aplasta!")
    }
}
let p = new mutante("hulk",6);
p.introduccion();
p.frase1();