
// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards


let playerDetails ={name:"Irah", chips:230}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl =document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = playerDetails.name+" "+": $"+playerDetails.chips

function getRandomCard(){

    
    let randomNumber = Math.floor(Math.random() * 13) +1
    if (randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else
        return randomNumber
   

}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    
    if (sum <= 20){
        message = "Do you want to draw a new card? "
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack! "
        hasBlackJack = true
    }else{
        message = "You're out of the game! "
        isAlive = false
    
    }
    messageEl.textContent = message
    cardsEl.textContent = "Cards : "
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i]+" "
    }

    sumEl.textContent  = "Sum :"+" "+sum
}

function newCard(){

        if(isAlive == true && hasBlackJack ===false){

        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()

        }

}


// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation


