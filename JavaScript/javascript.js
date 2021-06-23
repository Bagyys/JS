console.log('Labas as krabas');

var pasisveikinimas = "laba diena";
console.log(pasisveikinimas);
console.log(typeof pasisveikinimas)


var person = {
    name: "Jonas",
    methods: function(){
        return "Jonas turi du obuolius";
    }
}

console.log(pasisveikinimas)

var Masyvas = ["vienas", "du", " trys"]

Masyvas[1]='Pakeiciau i 100';
console.log(Masyvas)

var number = 4;
var sNumber = 5;
number += sNumber;
console.log(number)
number= number+sNumber;
console.log(number)

if(5>2 && 2>1){
    console.log("yess");
}

var result = 9;

if(result >=9){
    console.log("nicee");
} else if ((result >= 5) && (result <= 8)){
    console.log("Sveikinimai")
} else {
    console.log("Try agian")
}

var trueVar = false;

if(trueVar){
    console.log("yess")
} else{console.log("Nee")}
//Shorthand
trueVar ? console.log('Taipppp') : console.log("Nop")


//Uzduotis
var x = 3
var y = 6 
var Maryte = x;
var Jonukas = y;

var obuoliai = Maryte + Jonukas
console.log(obuoliai)

var skaicius = 1
obuoliai += skaicius;
console.log(obuoliai);

obuoliai -= skaicius;
console.log(obuoliai);

if(Maryte > Jonukas){
    console.log('Maryte turi daugiau obuoliu negu Jonas')
}else if ( Maryte < Jonukas){
    console.log("Jonukas turi daugiau obuoliu negu Maryte")
}else {console.log('Atiduokim obuolius Editai')}

switch(obuoliai){
    case x:
        console.log("Jus turite " + x  + "obuolius");
        break;
    case y:
        console.log("Jus turire " + y  + "obuolius");
        break;
    default:
        console.log("Obuoliu yra arba nere")
}

var vaisiai = ["bananas", "obuoliai", "uogos", "braskes", "vysnios", "tresnes"];
console.log(vaisiai.entries(2,4)) //aray Methonds


for(i=0; i< vaisiai.length; i++){
    console.log(vaisiai[i]);
}

/* end */

function prekesKaina( kaina, prekes){
    console.log(kaina, 'prekes kaina'),
    console.log(prekes, "prekes pavadinimas")
}
prekesKaina(2, "kibinas");
prekesKaina(4, "Kiauliena");
prekesKaina(1, "ledai");

/* uzduotis */

var element = document.createElement("div");
element.setAttribute("id", "moku" );

var tekstas = document.getElementById("moku");
var newElement = document.createElement("h1");
var valio = document.createTextNode("Valio pavyko");

var mouseover1 = document.getElementById("moku");
mouseover1.addEventListener("mouseover", function(e){
    e.target.style.color = "green";
})
function(e);
newElement.appendChild(valio);
element.appendChild(newElement)

console.log(newElement," start")
console.log(element)
