// Day 12 new excersizes 
// High ScoreBoard https://exercism.org/tracks/javascript/exercises/high-score-board  from  Excercism 

// Create  FUNCTION that creates an object 
//  the keys will be the players name ,  vlaue will be score 
// initial entry should consist of THe  best ever as player name and 1,000,000 as score

/*function createScoreboard(){
    return  obj = {
        theBestPlayer:1000000,
    }
}
console.log(createScoreboard()) */


// Add a player to the score board above 
// define the fucntion addPlayer that accepts 3 parameters 

function addPlayer(objec,name,score ){
let z = name
    let object = {
    z:score,
    name:score
}
    return object
}
console.log(addPlayer({ 'Dave Thomas': 0 }, 'José Valim' , 486373))