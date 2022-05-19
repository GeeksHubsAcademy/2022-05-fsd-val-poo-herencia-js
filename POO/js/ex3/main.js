
let e1 = new Electrodomestico('W', 'blanco');
let e2 = new Electrodomestico('W', 'blanco');
let e3 = new Electrodomestico('W', 'blanco');

let l1 = new Lavadora('W', 'azul');
let l2 = new Lavadora('W', 'azul');
let l3 = new Lavadora('W', 'azul');
let l4 = new Lavadora('W', 'azul');

let tv1 = new Tele('W', 'azul');
let tv2 = new Tele('W', 'azul');
let tv3 = new Tele('W', 'azul');

let elecList = [e1, e2, e3];

elecList.push(l1); 
elecList.push(l2); 
elecList.push(l3); 
elecList.push(l4); 

elecList[7]=tv1;
elecList[8]=tv1;
elecList[9]=tv1;



