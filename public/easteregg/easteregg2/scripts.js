const santa = document.getElementById("santa");
const tree = document.getElementById("tree");

function jump(){
    if(gameOver.style.display != "block" && playerScore != 0){
        if(santa.classList != "jump"){
             santa.classList.add("jump");

            setTimeout(function(){
            santa.classList.remove("jump");
        },800)
    }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var isMoving = 0;
let oui = null;
function treeAttack(){
    
    if(getRandomInt(2)==0 ){
        if(isMoving==0)
        isMoving=1;
        tree.classList.add("blockActivation");
        setTimeout(function(){
            tree.style.visibility="visible";
        },50)
        setTimeout(function(){
            tree.classList.remove("blockActivation");
            tree.style.visibility="hidden";
            isMoving = 0;
         },850)
         
    }
    else{
        treeBis.classList.add("blockActivation");
        setTimeout(function(){
            treeBis.style.visibility="visible";
        },50)
        setTimeout(function(){
            treeBis.classList.remove("blockActivation");
            treeBis.style.visibility="hidden";
         },850)
    }
}



let isDead = setInterval(function (){
    let santaBottom= parseInt(window.getComputedStyle(santa).getPropertyValue("bottom"));
    console.log(santaBottom);
    let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
    let treeBisLeft = parseInt(window.getComputedStyle(treeBis).getPropertyValue("left"));

    if(((treeLeft<-150 && treeLeft >-250)||(treeBisLeft<-150 && treeBisLeft >-250)) && santaBottom<=110){

        
        gameOver.style.display = "block"
        tree.classList.remove("blockActivation");
        treeBis.classList.remove("blockActivation")
        clearInterval(interval);
        clearInterval(boucleTree);


    }
},10)

document.addEventListener("keydown", function (event) {
    if(event.code=="Space"){
    jump();
    }
});

let interval = null;
let playerScore = 0;
let score = document.querySelector("#score");

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}



//start game & gameOver

let gameOver = document.querySelector("#gameOver");

document.addEventListener("keydown", (start)=>{

    if(start.code == "Enter" && gameOver.style.display!="none"){
        gameOver.style.display = "none";
        

        playerScore = 0;
        interval = setInterval(scoreCounter,100);
        boucleTree = setInterval(treeAttack,1000);
    }


})
