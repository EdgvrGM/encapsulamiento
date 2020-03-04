import FechaNacimiento from "./fecha-nacimiento.js";
import Nombre from "./nombre.js";
import Persona from "./persona.js";

class Main {
     constructor() {
         this.fecha = new FechaNacimiento(16, 11, 2005)
         this.nombre = new Nombre("Edgar", "Gonzalez", "Montelongo")
         this.persona = new Persona(this.nombre, this.fecha, "Masculino")
     }

     testFechaNacimiento(){
         console.log(this.fecha.getFecha())

         console.log(this.fecha.setFecha(new Date(2007, 5, 2)))
         console.log(this.fecha.setFecha(new Date(2050, 5, 2)))

         console.log(this.fecha.getFormatoCorto())
         console.log(this.fecha.getFormatoExtendido())
         console.log(this.fecha.getEdad())
     }
     testNombre(){
         console.log(this.nombre.getCompleto())
         console.log(this.nombre.getInvertido())
         console.log(this.nombre.getIniciales())
         console.log(this.nombre.getNombre())
         console.log(this.nombre.setApellidoPaterno("Rodriguez"))
         console.log(this.nombre.getApellidoMaterno())
         console.log(this.nombre.setApellidoMaterno("Hernandez"))
         console.log(this.nombre.getApellidoMaterno())
         
     }
     testPersona(){
         console.log(this.persona.getPerfil())
     }
}

let tester = new Main()
tester.testFechaNacimiento()
tester.testNombre()
tester.testPersona()