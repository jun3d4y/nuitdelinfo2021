var i =0;
var jinn = new Audio('jingle/jin1.mp3');
var glee = new Audio('jingle/ble1.mp3');
var bell = new Audio('jingle/bell1.mp3');
var siuu = new Audio('jingle/siu.mp3');
var waaaa = new Audio('jingle/waa.mp3');
var wile = new Audio('jingle/wil.mp3');
var ooof = new Audio('jingle/oof.mp3');

function jin(){
    if (i==0 || i==3){
        i++;
    
    }
    else{
        i=0;
    }
    jinn.play()
}

function gle(){
    if (i==1 || i==4){
        i++;
    }
    else{
        i=0;
    }
    glee.play()
}

function bells(){
    bell.play()
    if (i==2){
        i++;
    }
    else if (i==5){

        switchpage();

    }
    else{
        i=0;
    }
    
}
function siu(){
    i=0;
    
    siuu.play();
}
function waa(){
    i=0;
    
    waaaa.play();
}
function oof(){
    i=0;
    
    ooof.play();
}
function wil(){
    i=0;
    
    wile.play();
}
function swapcloche(){
    document.getElementById("Cloche").src="img/ptitclocher.png"

}
function swapcloche1(){
    document.getElementById("Cloche").src="img/ptitcloche.png"

}

async function switchpage() {
    setTimeout(()=>{
        document.location.href="easteregg2/jeu.html"; 
  },500)
}
async function fermerbouche() {
    setTimeout(()=>{
    document.getElementById("BoyDo").src="img/boy1shut.png" // 20
  },2000)
}
async function fermerbouche1() {
    setTimeout(()=>{
    document.getElementById("GirlRe").src="img/girl1shut.png" // 20
  },500)
}
async function fermerbouche2() {
    setTimeout(()=>{
    document.getElementById("BoyMi").src="img/boy2shut.png" // 20
  },3000)
}
async function fermerbouche3() {
    setTimeout(()=>{
    document.getElementById("GirlFa").src="img/girl2shut.png" // 20
  },500)
}
async function fermerbouche4() {
    setTimeout(()=>{
    document.getElementById("BoySol").src="img/boy1shut.png" // 20
  },1000)
}
async function fermerbouche5() {
    setTimeout(()=>{
    document.getElementById("GirlLa").src="img/girl1shut.png" // 20
  },500)
}
async function fermerbouche6() {
    setTimeout(()=>{
    document.getElementById("BoySi").src="img/boy1shut.png" // 20
  },500)
}
function swapdo(){
    
    document.getElementById("BoyDo").src="img/boy1open.png"
    fermerbouche()
    swapcloche1()
}

function swapre(){
    document.getElementById("GirlRe").src="img/girl1open.png"
    fermerbouche1()
    swapcloche()

}
function swapmi(){
    document.getElementById("BoyMi").src="img/boy2open.png"
    fermerbouche2()
    swapcloche1()

}
function swapfa(){
    document.getElementById("GirlFa").src="img/girl2open.png"
    fermerbouche3()
    swapcloche()

}
function swapsol(){
    document.getElementById("BoySol").src="img/boy1open.png"
    fermerbouche4()
    swapcloche1()

}
function swapla(){
    document.getElementById("GirlLa").src="img/girl1open.png"
    fermerbouche5()
    swapcloche()

}
function swapsi(){

    document.getElementById("BoySi").src="img/boy1open.png"
    fermerbouche6()
    swapcloche1()
}
