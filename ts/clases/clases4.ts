//uso del modificador protected (proteje el objeto sobre el que se puso
//este no puede ser usado fuera de la clase mas que en derivados de esta clase donde esta el objeto protejido)
//Herencia
class humano1 {
    protected nombre:string;
    //se recibe el nombre y se le asigna a la propiedad nombre
    //los constructores se llaman cada vez que se crea una instancia de la clase
    protected constructor(nom: string){
        this.nombre = nom;
    }
    introduccion(){
        console.log(this.nombre);
    }
}
class mutante1 extends humano1 {
    t_expo_radiacion: number;
    constructor(nom:string,t_expo_radiacion: number){
        super(nom);
        this.t_expo_radiacion = t_expo_radiacion;
    }
    frase1(){
        console.log("¡Aplasta!")
    }
}
let p2 = new mutante1("hulk",6);
p2.nombre="Thor";
p2.introduccion();
p2.frase1();
let p3 = new humano1("doom",5);