import FechaNacimiento from "./fecha-nacimiento.js";
import Nombre from "./nombre.js";
import Persona from "./persona.js";
import Estudiante from "./estudiante.js";
import Maestro from "./maestro.js";
import Grupo from "./grupo.js";

class Main {
  constructor() {
    this.fecha = new FechaNacimiento(16, 11, 2005);
    this.nombre = new Nombre("Edgar", "Gonzalez", "Montelongo");
    this.persona = new Persona(this.nombre, this.fecha, "Masculino");
  }

  testGrupo() {
    let e1 = new Estudiante(
      new Nombre("Gonzalo", "Uno", "Dos"),
      new FechaNacimiento(3, 3, 3333),
      "Masculino",
      20146666,
      "gonzalo@ucol.mx",
      "Facultad de Medicina"
    );
    let e2 = new Estudiante(
      new Nombre("Ricardo", "Ricky", "Ricon"),
      new FechaNacimiento(1, 1, 1111),
      "Maquina de Guerra",
      20035577,
      "ricky@ucol.mx",
      "Facultad de Letras"
    );
    let e3 = new Estudiante(
      new Nombre("Ricardo", "Ricky", "Ricon"),
      new FechaNacimiento(1, 1, 1111),
      "Maquina de Guerra",
      20035577,
      "ricky@ucol.mx",
      "Facultad de Letras"
    );
    let grupo = new Grupo(2, "G");
    console.log(grupo.registrar(e1));
    console.log(grupo.registrar(e1));
    console.log(grupo.registrar(e1));
    console.log(grupo.registrar(e2));
    console.log(grupo.registrar(e3));
    grupo.getEstudiantes();
    console.log(grupo._encontrarEstudiante(e1));
    console.log(grupo._encontrarEstudiante(e2));
  }

  testMaestro() {
    let m = new Maestro(
      new Nombre("Maistro", "Jirafales", "Del 8"),
      new FechaNacimiento(14, 4, 1977),
      "Masculino",
      "$4500",
      192837465,
      "Tiempo completo"
    );
    m.print();
  }

  testEstudiante() {
    let e = new Estudiante(
      new Nombre("Mister", "Super", "Bean"),
      new FechaNacimiento(3, 3, 1995),
      "Masculino",
      20163388,
      "exmple@ucol.mx",
      "Facultad de Telematica"
    );
    e.print();
  }

  testFechaNacimiento() {
    console.log(this.fecha.getFecha());

    console.log(this.fecha.setFecha(new Date(2007, 5, 2)));
    console.log(this.fecha.setFecha(new Date(2050, 5, 2)));

    console.log(this.fecha.getFormatoCorto());
    console.log(this.fecha.getFormatoExtendido());
    console.log(this.fecha.getEdad());
  }
  testNombre() {
    console.log(this.nombre.getCompleto());
    console.log(this.nombre.getInvertido());
    console.log(this.nombre.getIniciales());
    console.log(this.nombre.getNombre());
    console.log(this.nombre.setApellidoPaterno("Rodriguez"));
    console.log(this.nombre.getApellidoMaterno());
    console.log(this.nombre.setApellidoMaterno("Hernandez"));
    console.log(this.nombre.getApellidoMaterno());
  }
  testPersona() {
    console.log(this.persona.getPerfil());
  }
}

let tester = new Main();
tester.testGrupo();
