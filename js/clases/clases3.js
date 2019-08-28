var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Herencia
var humano = /** @class */ (function () {
    //se recibe el nombre y se le asigna a la propiedad nombre
    //los constructores se llaman cada vez que se crea una instancia de la clase
    function humano(nom) {
        this.nombre = nom;
    }
    humano.prototype.introduccion = function () {
        console.log(this.nombre);
    };
    return humano;
}());
var mutante = /** @class */ (function (_super) {
    __extends(mutante, _super);
    function mutante(nom, t_expo_radiacion) {
        var _this = _super.call(this, nom) || this;
        _this.t_expo_radiacion = t_expo_radiacion;
        return _this;
    }
    mutante.prototype.frase1 = function () {
        console.log("¡Aplasta!");
    };
    return mutante;
}(humano));
var p = new mutante("hulk", 6);
p.introduccion();
p.frase1();
