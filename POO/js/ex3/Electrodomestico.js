class Electrodomestico{

    //Atributos de clase
    precioBase = 0.00;
    color = ''; 
    consumo = '';
    peso = 0.00;

    // Constructor de clase
    constructor(newConsumo, newColor){
        this.precioBase = PRECIO;
        this.color = this.comprobarColor(newColor);
        this.consumo = this.comprobarConsumoEnergetico(newConsumo);
        this.peso = PESO;
    }

    // Comportamiento
    getPrecio(){
        return this.precioBase;
    }

    getColor(){
        return this.color
    }

    comprobarConsumoEnergetico(letra){
        let consumo = ['A', 'B', 'C', 'D', 'E', 'F'];
        if(consumo.includes(letra)){
            return letra;
        }else{
            return 'F';
        }
    }

    comprobarColor(valorColor){
        let colorList = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
        if(colorList.includes(valorColor)){
            return valorColor;
        }else{
            return 'blanco';
        }
    }

    precioFinal(){
        let valorConsumo = this.consumo;
        let valorTam = this.peso;

        let tablaCon = {'A':100,'B':80,'C':60,'D':50,'E':30,'F':10};
        let incrConsum = this.precioBase + tablaCon[valorConsumo];

        if(valorTam > 0 && valorTam <= 19){
            return incrConsum += 10;
        }
        else if(valorTam >= 20 && valorTam <= 49){
            return incrConsum += 50;
        }
        else if(valorTam >= 50 && valorTam <= 79){
            return incrConsum += 80;
        }
        else if(valorTam >= 80){
            return incrConsum += 100;
        }

        
    }
}