class Figura{
    // Atributos de clase
    nombre = '';
    lados = 0;
    area = 0.00;

    // Constructor de clase
    constructor(newNombre, newLados){
        this.nombre = newNombre;
        this.lados = newLados;
        this.area = AREA;
    }

    // Comportamiento
    mostrar(){
        console.log('Objeto creado');
    }

}

