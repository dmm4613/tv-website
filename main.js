let potionAdjective = ["Dirty", "Smelly", "Moldy", "Lumpy", "Shiny", "Wrinkly", "Slow", "Fast", "Old", "Youthful", "Hairy", "Scary", "Horny", "Spicy", "Salty", "Sweet", "Buttery", "Crunchy"]
let potionFirstNoun = ["Armadillo", "Bat", "Newt", "Dragon", "Rabbit", "Unicorn", "Skeleton", "Turtle", "Centaur", "Goblin", "Orc", "Weasel", "Djinni", "Minotaur", "Rock", "Cricket", "Sponge", "Shark", "Goat", "Tucan"]
let potionSecondNoun = ["Spleen", "Skin", "Scale", "Tail", "Eye", "Rib", "Heart", "Brain", "Lung", "Toe", "Penis", "Anus", "Leg", "Intestine", "Ear", "Lip", "Tongue", "Nose", "Tendon", "Finger", "Liver", "Bladder", "Stomach", "Oil"]
let naklakPhrase = ["'S good. You like! Make real strong.", "Very sweet. You like!"]

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

function generatePotion() {
    let adjective = potionAdjective[getRandomInt(potionAdjective.length)]
    let firstNoun = potionFirstNoun[getRandomInt(potionFirstNoun.length)]
    let secondNoun = potionSecondNoun[getRandomInt(potionSecondNoun.length)]
    let naklak = naklakPhrase[getRandomInt(naklakPhrase.length)]
    document.getElementById('speech-bubble').classList.remove('silent');
    document.getElementById('potion-description').innerHTML =
        `Potion of ${adjective} ${firstNoun} ${secondNoun}`;
    document.getElementById('naklak').innerHTML = `Oooh. ${secondNoun} from ${firstNoun}. ${naklak}`;
    document.getElementById('title').classList.add('title-change');
}
