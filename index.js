//button click --> DoM update --> check if else condition
var choice = ["Rock","Paper","Scissor"];
var playerChoice = prompt("Enter your choice");
var playerChoiceforShow = playerChose(playerChoice);
var computerChoiceforShow = computerChoice();

console.log("Player Choice: " + playerChoiceforShow);
console.log("Computer Choice: "+computerChoiceforShow);

//document.querySelector("#rockButton").addEventListener("click",function(){
    //alert("check");
  
//})

document.querySelector("#player").textContent = playerChoiceforShow;
document.querySelector("#computer").textContent = computerChoiceforShow;

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
    //console.log(intaketoupper);

    if(intaketoupper === "ROCK"){
       // console.log("Player chose Rock");
        return "Rock";
    }
    else if (intaketoupper === "PAPER"){
      //  console.log("Player chose Paper");
        return "Paper";
    }
    else if(intaketoupper === "SCISSOR")
    {
      //  console.log("Player chose Scissor");
        return "Scissor";
    }
    else{
        alert("wrong input");
    }
}


//game(computerChoice(choice));