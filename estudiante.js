import Persona from "./persona.js";

export default class Estudiante extends Persona {
  constructor(nombre, fechaNac, genero, numCuenta, correo, escuela) {
    super(nombre, fechaNac, genero);
    this._numCuenta = numCuenta;
    this._correo = correo;
    this._escuela = escuela;
  }

  print() {
    console.log(this.getPerfil());
    console.log(this._numCuenta);
    console.log(this._correo);
    console.log(this._escuela);
    return true
  }

  getPerfil() {
      return `${this._numCuenta} ${this._nombre.getCompleto()}`
  }
}
