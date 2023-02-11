let playerScore= 0
let compScore= 0

// playerChoice() is called when user clicks an option. Also compChoice() is called when this function runs.  
// By taking both choices calcScore() is called

function playerChoice(choice) {
    let comp= computerChoice()
    calcScore(choice.value, comp)
}

function computerChoice() {
    let arr= ["Rock", "Scissor", "Paper"]
    let choice= Math.floor(Math.random()*3)

    if(choice === 0){
        document.getElementById("comp_option_1").style.visibility= "visible"
        document.getElementById("comp_option_2").style.visibility= "hidden"
        document.getElementById("comp_option_3").style.visibility= "hidden"
    }
    if(choice === 1){
        document.getElementById("comp_option_1").style.visibility= "hidden"
        document.getElementById("comp_option_2").style.visibility= "visible"
        document.getElementById("comp_option_3").style.visibility= "hidden"
    }
    if(choice === 2){
        document.getElementById("comp_option_1").style.visibility= "hidden"
        document.getElementById("comp_option_2").style.visibility= "hidden"
        document.getElementById("comp_option_3").style.visibility= "visible"
    }

    return arr[choice]
}

// calcScore() compares choices and evaluate result

function calcScore(player, computer) {
    let myScore
    let computerScore

    if(player==="Rock" && computer==="Scissor"){
        myScore= 1
        computerScore= 0
    }
    else if(player==="Scissor" && computer==="Paper"){
        myScore= 1
        computerScore= 0
    }
    else if(player==="Paper" && computer==="Rock"){
        myScore= 1
        computerScore= 0
    }
    else if(player===computer){
        myScore= 0
        computerScore= 0
    }
    else{
        computerScore= 1
        myScore= 0
    }
    
    displayResult(myScore, computerScore)

}

// displayResult() function display the result in the fields

function displayResult(myScore, computerScore) {
    
    playerScore+=myScore
    compScore+=computerScore

    if(playerScore<0){
        playerScore=0
    }
    if(compScore<0){
        compScore=0
    }

    document.getElementById('player_score').value= playerScore
    document.getElementById('comp_score').value= compScore
}

// reset() empty the fields and hide all the compOptions 

function reset() {
    playerScore=0
    compScore=0
    document.getElementById('player_score').value= ""
    document.getElementById('comp_score').value= ""
    document.getElementById("comp_option_1").style.visibility= "hidden"
    document.getElementById("comp_option_2").style.visibility= "hidden"
    document.getElementById("comp_option_3").style.visibility= "hidden"

}

// Adding event listeners

function startGame() {

    let myOptions= document.querySelectorAll('.my_options button')

    myOptions.forEach(option => option.onclick = () =>{
        playerChoice(option)    
    })

    document.querySelectorAll('#reset_btn').forEach(option => option.onclick= () =>{
        reset()
    })

}

startGame() 