let potionAdjective = ["Dirty", "Smelly", "Moldy", "Lumpy", "Shiny", "Wrinkly", "Slow", "Fast", "Old", "Youthful", "Hairy", "Scary", "Horny", "Spicy", "Salty", "Sweet", "Buttery", "Crunchy"]
let potionFirstNoun = ["Armadillo", "Bat", "Newt", "Dragon", "Rabbit", "Unicorn", "Skeleton", "Turtle", "Centaur", "Goblin", "Orc", "Weasel", "Djinni", "Minotaur", "Rock", "Cricket", "Sponge", "Shark", "Goat", "Tucan"]
let potionSecondNoun = ["Spleen", "Skin", "Scale", "Tail", "Eye", "Rib", "Heart", "Brain", "Lung", "Toe", "Penis", "Anus", "Leg", "Intestine", "Ear", "Lip", "Tongue", "Nose", "Tendon", "Finger", "Liver", "Bladder", "Stomach", "Oil"]


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function generatePotion() {
    document.getElementById('potion-description').innerHTML =
        `Potion of 
    ${potionAdjective[getRandomInt(potionAdjective.length)]}
    ${potionFirstNoun[getRandomInt(potionFirstNoun.length)]}
    ${potionSecondNoun[getRandomInt(potionSecondNoun.length)]}`
}