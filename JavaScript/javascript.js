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
console.log(element);


var newElement = document.createElement("h1");
var valio = document.createTextNode("Valio pavyko");


var mouseover1 = document.getElementById("moku");
element.addEventListener("mouseover", function(e) {
    e.target.style.background="green";
});

newElement.appendChild(valio);
element.appendChild(newElement);

var newDiv = document.createElement("div");
newDiv.style.background = "red";
newDiv.innerHTML = " Labas";

document.body.appendChild(newDiv);
document.body.appendChild(element);

console.log(newDiv);
console.log(newElement," start")
console.log(element)





document.getElementById("moku").style.width="100px";
document.getElementById("moku").style.height = "100px";
document.getElementById("moku").style.margin = " 0 auto";

/* uzduotis 2*/
var divas = document.createElement("div");
divas.setAttribute("id", "asMoku");
var hvienas = document.createElement("h1");
var valio2 = document.createTextNode("Valio pavykoooo");



hvienas.appendChild(valio2);
divas.appendChild(hvienas);
console.log(divas)


var btn = document.createElement("button");
btn.setAttribute("id", "spaudaliukas");



console.log(btn);

document.body.appendChild(divas);
document.body.appendChild(btn);



document.getElementById("asMoku").style.width="300px";
document.getElementById("asMoku").style.height = "300px";
document.getElementById("asMoku").style.margin = " 0 auto";
document.getElementById("asMoku").style.background = "seagreen";
document.getElementById("asMoku").style.textAlign = "center";


document.getElementById("spaudaliukas").style.width = "100px";
document.getElementById("spaudaliukas").style.height = "100px";

var deleteP = document.getElementById("spaudaliukas");
deleteP.addEventListener('click', function deleteTheDiv(){
    var deleteDiv = document.getElementById("asMoku");
    deleteDiv.remove();
    btn.remove();
})

console.log(deleteP)

/* uzduotis 3  */


document.getElementById("KARAMBA").addEventListener('click', function create(){
    var frame1 = document.createElement("IFRAME");
    console.log("frame1")
    console.log(frame1)
    frame1.setAttribute("id", "frame5555");
    frame1.setAttribute( "src", "https://www.youtube.com/embed/0EQyG1Yjlgw");

    document.body.appendChild(frame1);
    document.getElementById("frame5555").style.display="block";
    document.getElementById("frame5555").style.width="300px";
    document.getElementById("frame5555").style.height = "300px";
    document.getElementById("frame5555").style.margin = " 0 auto";
});




// var frame1 = document.createElement("IFRAME");
// frame1.setAttribute("id", "frame5555");
// frame1.setAttribute( "src", "https://www.youtube.com/embed/0EQyG1Yjlgw");

// document.body.appendChild(frame1);


// console.log(frame1);


/* 4 uzduotis */
let vaisius = "Bananas";
let  kiekis = 10;
let kaina = 2;
function preke (kaina, kiekis, pavadinimas){
    console.log("kiekis")
    console.log(kiekis)
    console.log(kaina)
    console.log(kaina)
    return x = kaina * kiekis + pavadinimas
}
preke(2,5, "Bananas");
console.log(x);
/* uzduotis 5 */



const herojai = ["betmenas", "supermeneas", " zmogusVoras", " zmogusAmerika", "halkas"];

herojai.forEach(function(zmones){
    console.log(herojai)
});

var naujas = document.createElement('div');
naujas.setAttribute("id", " naujas");
naujas.innerHTML = (herojai);
console.log(herojai)
document.body.appendChild(naujas);
console.log(naujas);

herojai.forEach(function g(item, index){
    if(index % 2 === 0){
        '<p class="asd">'+item+'</p>'
    } else {
        '<p class="dsa">'+item+'</p>'
    }
})
console.log(herojai)
console.log(herojai[1])
// const myAwesomeArray1 = [5, 4, 3, 2, 1]

// myAwesomeArray1.map(x => x * x)
// console.log(myAwesomeArray1)

// const myAwesomeArray = [1, 2, 3, 4, 5]
// myAwesomeArray.forEach(x => x * x)
// //>>>>>>>>>>>>>return value: undefined

// myAwesomeArray.map(x => x * x)
// //>>>>>>>>>>>>>return value: [1, 4, 9, 16, 25]
// console.log(myAwesomeArray.map);

// const myAwesomeArray5 = [1, 2, 3, 4, 5]

// const startForEach = performance.now()
// myAwesomeArray5.forEach(x => (x + x) * 10000000000)
// const endForEach = performance.now()
// console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`)

// const startMap = performance.now()
// myAwesomeArray5.map(x => (x + x) * 10000000000)
// const endMap = performance.now()
// console.log(`Speed [map]: ${endMap - startMap} miliseconds`)

var divas100 = document.createElement('div');
divas100.className = "red blue";

divas100.setAttribute("id","divas");
console.log(divas100)
document.body.appendChild(divas100)

// const p =
// document.getElementById("divas").background = "red"; 
// document.getElementById("divas").color = "seagreen"; 

const s = 
document.querySelector('.red').style.background = "yellow";
document.querySelector('.red').style.color = "seagreen";
document.querySelector('.red').style.width = "300px";
document.querySelector('.red').style.height = "300px";
const b = 

document.querySelector('.blue').style.color = "black";
document.querySelector('.blue').style.width = "300px";
document.querySelector('.blue').style.height = "300px";
console.log(divas100)

var out = "";
var getSpan = function (i) {
    return [
        '<span class="', (i % 2 === 0 ? 'red' : 'blue'), '">', i, '</span>'
    ].join('');
}

for (var i = 1, l = 100; i <= l; i++) {
    if (i % 10 === 0) {
        out += getSpan(i) + '<br/>';
    } else {
        out += getSpan(i) + '&nbsp;';
        if (i <= 10) out += '&nbsp;&nbsp;';
    }
}
divas100.insertAdjacentHTML('beforeEnd', out);
console.log(out)