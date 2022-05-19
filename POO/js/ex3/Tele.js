class Tele extends Electrodomestico{
    
    //Atributos de clase
    resolucion = 0;
    hd = true;

    // Constructor de clase
    constructor(newConsumo, newColor){
        super(newConsumo, newColor);
        this.resolucion = 20;
        this.hd = false;
    }

    // Comportamiento
    getResol(){
        return this.resolucion;
    }

    getHd(){
        return this.hd;
    }

    precioFinal(){
        let precioTv = super.precioFinal();
        
        if(this.resolucion >= 40){
            precioTv = precioTv*1.30;
        }

        if(this.hd == true){
            precioTv += 50;
        }

        return precioTv;
    }
}