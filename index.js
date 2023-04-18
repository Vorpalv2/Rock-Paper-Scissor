//button click --> DoM update --> check if else condition
var choice = ["Rock","Paper","Scissor"];
var playerChoice = prompt("Enter your choice");

document.querySelector("#rockButton").addEventListener("click",function(){
    //alert("check");
    document.querySelector("#player").textContent = "Rock";
})


function computerChoice(){
    var RandomNum = Math.floor(Math.random()*3);
    var compChose = choice[RandomNum];
    // console.log(RandomNum);
    // console.log(compChose);
    return compChose;

}

function game (intake){
   // console.log(intake);
    if (intake==="Rock"){
        return "computer chose Rock"
    }
    else if (intake ==="Paper"){
        return "computer chose paper"
    }
    else{
        return "computer chose scissor"
    }
}

function playerChose(intakePlayer){
    var intaketoupper = intakePlayer.toUpperCase();
    console.log(intaketoupper);

    if(intaketoupper === "ROCK")
        console.log("Player chose Rock");

    else if (intaketoupper == "PAPER"){
        console.log("Player chose Paper");
    }
    else{
        console.log("Player chose Scissor");
    }
}

playerChose(playerChoice);

//game(computerChoice(choice));