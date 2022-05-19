
let f1 = new Figura('triangulo',3);
console.log(f1);

let f2 = new Figura('rectangulo',4);
f2.area=25;
console.log(f2);

let f3 = new Figura('rombo',4);
f3.area = 98;
console.log(f3);


let c1 = new Cuadrado(4,'madera');
console.log(c1);
c1.mostrar();

c1.area = 325;
c1.material = 'vidrio';
console.log(c1.material);
// c1.getArea(5);

console.log(c1);