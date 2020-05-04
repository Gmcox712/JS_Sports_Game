const teamonebutton = document.querySelector("#teamone-shoot-button")
const teamtwobutton = document.querySelector("#teamtwo-shoot-button")
const resetbutton = document.querySelector("#reset-button")
const teamoneshots = document.querySelector("#teamone-numshots")
const teamonegoals = document.querySelector("#teamone-numgoals")
const teamtwoshots = document.querySelector("#teamtwo-numshots")
const teamtwogoals = document.querySelector("#teamtwo-numgoals")
const numresets = document.querySelector("#num-resets")

let team1shots = 0
let team1goals = 0
let team2shots = 0
let team2goals = 0
let num0resets = 0

teamonebutton.addEventListener("click", function(){
    console.log ("click")
    teamoneshots.innerHTML = team1shots += 1
    let random = Math.random()*10
    if (random<5) {
        teamonegoals.innerHTML = team1goals += 1
    }
})


teamtwobutton.addEventListener("click", function(){
    console.log ("click")
    teamtwoshots.innerHTML = team2shots += 1
    let random = Math.random()*10
    if (random<5) {
        teamtwogoals.innerHTML = team2goals += 1
    }
})


resetbutton.addEventListener("click", function(){
    console.log
    numresets.innerHTML = num0resets +=1
        teamoneshots.innerHTML = team1shots = 0
    
})