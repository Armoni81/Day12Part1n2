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
// add a player to the object thats already presented
// in this case were addding JOse Valim and his score of 486373

/*function addPlayer(object,name,score){
    object[name]= score 
    return object

}
console.log(addPlayer({ 'Dave Thomas': 0 }, 'José Valim' , 486373,)) */


//REMOVE PLAYER 

// create a function called removePlayer which takes two parameters 
//This function should remove the entry for the given player from 

/*the board and return the board afterwards. 
If the player was not on the board in the first place, 
nothing should happen to the board. It should be returned as is. */

/*function removePlayer(scoreboard,name){

delete scoreboard[name]

    return scoreboard
}
console.log(removePlayer({ 'Dave Thomas': 0 }, 'Dave Thomas')) */

// Increase a players score 

function updateScore(scoreboard,nameOfScorer,scoreToAdd){
    //let add = scoreboard[]
    scoreboard[nameOfScorer] = scoreboard[nameOfScorer] + scoreToAdd
    
    return scoreboard

}
console.log(updateScore({"Freyja Ćirić": 12771008}, "Freyja Ćirić", 10000000000000))