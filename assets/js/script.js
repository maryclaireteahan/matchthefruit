// INSTRUCTION BUTTON
function instructionsBtnClick(event) {

    //disable instruction button after one click
    document.getElementById("instructions-btn").disabled = true;

    // Create the a Div
    let instructions = document.createElement("div");

    // Put the Div inside the HTML element instructions-div
    let instructionsDiv = document.getElementById("instructions-div");
    instructionsDiv.appendChild(instructions);

    // Put a h3 element inside the new Div
    let instructionsHeading = document.createElement("h3");
    instructionsHeading.innerHTML = "Instructions:";
    instructions.appendChild(instructionsHeading);

    // Create and put an ordered list under the h3 element
    let instructionsList = document.createElement("ol");

    let listItems = ["Click 2 cards to turn them over and reveal their monsters.",
        "If the monsters match, they stay turned over.", "If they do not match the cards are turned back.",
        "You must try remember where you have seen which monsters, so you can use them to make a match."
    ]
    for (let i = 0; i < listItems.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = listItems[i];
        instructionsList.appendChild(listItem);
    };

    instructions.appendChild(instructionsList);

    //create the button
    let closeBtn = document.createElement("button");
    closeBtn.classList.add("close-btn");
    instructions.appendChild(closeBtn);
    closeBtn.innerHTML = "Close";

    //remove element when close button clicked and reenable instructions button
    function closeBtnClick(event) {
        instructionsDiv.removeChild(instructions);
        document.getElementById("instructions-btn").disabled = false;
    }
    closeBtn.addEventListener("click", closeBtnClick);
}

// select HTML button element and assign an event listener
let instructionsBtn = document.getElementById("instructions-btn");

instructionsBtn.addEventListener("click", instructionsBtnClick);

// GRID

let gridContainerDiv = document.getElementById("grid-container-div");

let gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
gridContainerDiv.appendChild(gridContainer);

//add monsters to the grid
let monsters = [
    { src: "./assets/images/demon.png", alt: "Demon" },
    { src: "./assets/images/frankenstein.png", alt: "Frankenstein" },
    { src: "./assets/images/goblin.png", alt: "Goblin" },
    { src: "./assets/images/mummy.png", alt: "Mummy" },
    { src: "./assets/images/vampire.png", alt: "Vampire" },
    { src: "./assets/images/werewolf.png", alt: "Werewolf" },
    { src: "./assets/images/witch.png", alt: "Witch" },
    { src: "./assets/images/zombie.png", alt: "Zombie" },
    { src: "./assets/images/demon.png", alt: "Demon" },
    { src: "./assets/images/frankenstein.png", alt: "Frankenstein" },
    { src: "./assets/images/goblin.png", alt: "Goblin" },
    { src: "./assets/images/mummy.png", alt: "Mummy" },
    { src: "./assets/images/vampire.png", alt: "Vampire" },
    { src: "./assets/images/werewolf.png", alt: "Werewolf" },
    { src: "./assets/images/witch.png", alt: "Witch" },
    { src: "./assets/images/zombie.png", alt: "Zombie" },
]

const shuffleMonsters = monsters => {
    for (let i = monsters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = monsters[i];
        monsters[i] = monsters[j];
        monsters[j] = k;
    }
}
shuffleMonsters(monsters);

for (let monster of monsters) {
    // Create an image element with the url and alt attributes for the front of the car
    let card = document.createElement("div");
    card.classList.add("card");

    let monsterImg = document.createElement("img");
    monsterImg.src = monster.src;
    monsterImg.alt = monster.alt;
    monsterImg.classList.add("card-front");

    card.appendChild(monsterImg);

    // Append the image element to the gridContainer div
    gridContainer.appendChild(card);

    // Create an image element with the url and alt attributes for the back of the card

    let backImg = document.createElement("img");
    backImg.src = "./assets/images/pumpkin-face.png";
    backImg.alt = "scary face";
    backImg.classList.add("card-back");

    card.appendChild(backImg);
}

let cards = document.getElementsByClassName("card");

let hasFlippedCard = false;
let firstCard, secondCard;



function flipCard() {
    this.classList.toggle("flipCard");
}
for (let card of cards) {
    card.addEventListener("click", flipCard);
}
