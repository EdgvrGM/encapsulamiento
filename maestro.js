import Persona from "./persona.js";

export default class Maestro extends Persona {
  constructor(nombre, fechaNac, genero, sueldo, numT, tipo) {
    super(nombre, fechaNac, genero);
    this._sueldo = sueldo;
    this._numT = numT;
    this._tipo = tipo;
  }
  print() {
    console.log(this.getPerfil());
    console.log(this._sueldo);
    console.log(this._numT);
    console.log(this._tipo);
  }
}
