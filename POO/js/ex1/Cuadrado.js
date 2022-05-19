class Cuadrado extends Figura {

    // Atributos de clase
    material = '';

    // Constructor de clase
    constructor(lados, newMaterial, nombre='Cuadrado'){
        super(nombre,lados);
        this.material = newMaterial;
    }

    // Comportamiento
    getArea(valorLado){
         this.area = valorLado * valorLado;
    }

    // getters y setters
    getMaterial(){
        return this.material;
    }

    setMaterial(newMaterial){
        this.material = newMaterial;
    }




}