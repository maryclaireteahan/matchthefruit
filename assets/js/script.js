

function instructionsBtnClick(event) {

    document.getElementById("instructions-btn").disabled = true;
    // Create the a Div
    let instructions = document.createElement('div');

    // Put the Div inside the HTML element instructions-div
    let instructionsDiv = document.getElementById('instructions-div');
    instructionsDiv.appendChild(instructions);

    // Put a h3 element inside the new Div
    let instructionsHeading = document.createElement("h3");
    instructionsHeading.innerHTML = "Instructions:";
    instructions.appendChild(instructionsHeading);

    // Create and put an ordered list under the h3 element
    let instructionsList = document.createElement("ol");

    let listItems = ['Click 2 cards to turn them over and reveal their monsters.',
        'If the monsters match, they stay turned over.', 'If they do not match the cards are turned back.',
        'You must try remember where you have seen which monsters, so you can use them to make a match.'
    ]
    for (let i = 0; i < listItems.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = listItems[i];
        instructionsList.appendChild(listItem);
    };

    instructions.appendChild(instructionsList);

    //create the button
    let closeBtn = document.createElement('button');
    closeBtn.classList.add("close-btn");
    instructions.appendChild(closeBtn);
    closeBtn.innerHTML = "Close";
}

// select HTML button element and assign an event listener
let instructionsBtn = document.getElementById('instructions-btn');

instructionsBtn.addEventListener('click', instructionsBtnClick);

function closeBtnClick(event) {
    let closeBtn = document.getElementsByClassName('close-btn');
    let instructionsDiv = document.getElementById('instructions-div');

    instructionsDiv.style.display = "none";
}
let closeBtn = document.getElementsByClassName('close-btn');
closeBtn.addEventListener('click', closeBtnClick);
