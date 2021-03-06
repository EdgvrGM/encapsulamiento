import FechaNacimiento from "./fecha-nacimiento.js"
import Nombre from "./nombre.js"

export default class Persona{
/**
 * 
 * @param {Nombre} nombre 
 * @param {FechaNacimiento} fechaNac 
 * @param {string} genero 
 */
    constructor(nombre, fechaNac, genero){
        this._nombre = nombre
        this._fechaNac = fechaNac
        this._genero = genero
    }

    getPerfil(){
        return `${this._genero} ${this._fechaNac.getFormatoCorto()} ${this._nombre.getCompleto()}`
    }

    getNombre(){return this._nombre}

    getFechaNac(){return this._fechaNac}

    getGenero(){return this._genero}


    setNombre(x){this._nombre = x}

    setFechaNac(x){
        if(x <= Date.now()){
            this._fechaNac = x
            return true
            }
    
            return false
    }

    setGenero(x){this._genero = x}

}