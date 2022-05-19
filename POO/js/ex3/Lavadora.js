
class Lavadora extends Electrodomestico{
    
    //Atributos de clase
    carga = 0;

    // Constructor de clase
    constructor(newConsumo, newColor){
        super(newConsumo, newColor);
        this.carga = 50;
    }

    // Comportamiento
    getCarga(){
        return this.carga;
    }

    precioFinal(){
        let precioLava = super.precioFinal();
        if(this.carga > 30){
            return precioLava += 50;
        }else{
            return precioLava;
        }
    }
}