//button click --> DoM update --> check if else condition

document.querySelector("#rockButton").addEventListener("click",function(){
    //alert("check");
    document.querySelector("#player").textContent = "Rock";
})



var choice = ["Rock","Paper","Scissor"];


function computerChoice(){
    var RandomNum = Math.floor(Math.random()*3);
    var compChose = choice[RandomNum];
    console.log(RandomNum);
    return compChose;
}