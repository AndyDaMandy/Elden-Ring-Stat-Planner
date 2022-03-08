function displayBaseStats(char) {
    document.getElementById('display-base').innerHTML = "";
    let holder = document.createElement("ul");
    let li  = document.createElement('li');
    li.textContent = `Class: ${char.className}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Level: ${char.lvl}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Vigor: ${char.vig}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Mind: ${char.mnd}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Strength: ${char.str}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Dexterity: ${char.dex}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Intelligence: ${char.int}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Faith: ${char.fth}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Arcane: ${char.arc}`;
    holder.appendChild(li);
    document.getElementById('display-base').appendChild(holder);
}
//the idea is to create an array that keeps track of the "state" of the character stats. If the player adds a level, it pushes that new state into the array. There will be a level "selector, that increases based on state". This is important because we want players to be able to go back.
//It adds 3 character slots.
let characterSlotOne = [];
let characterSlotTwo = [];
let chararacterSlotThree = [];
let slotOneState = 0;
let slotTwoState = 0;
let slotThreeState = 0;
function addStatOne(stat) {
    //adds a stat to SlotOne;
    if (stat === "Vigor"){

    }
    if (stat === "Endurance"){

    }
    if (stat === "Mind"){
        
    }
    if (stat === "Strength"){

    }
    if (stat === "Dexterity"){

    }
    if (stat === "Intelligence"){

    }
    if (stat === "Faith"){

    }
    if (stat === "Arcane"){
        
    }
}

function startCreation() {
    //checks if simple storage keys are empty or not first
    //else
    document.getElementById("planner").hidden = false;
    document.getElementById("new-char").hidden = true;
}

function slotOneCheck(){
   let slotCopy = simpleStorage.get("slot-one");
   if (slotCopy.length != 0){
       characterSlotOne = slotCopy;
   } else {
        if (characterSlotOne.length === 0){
        document.getElementById("chooseClass-1").hidden = false;
        } else {
            displaySlotOne.hidden = false;
        }
    }   
}
function generateChar(char, slot){   
   if (slot === 1) {
       slotOneState = 0;
       characterSlotOne.push(char)
       displaySlotOne(0);
       document.getElementById('display-slot-one').hidden = false;
    } else if (slot === 2) {
        slotTwoState = 0;
        characterSlotTwo.push(char)
    } else if (slot === 3){
        slotThreeState = 0;
        chararacterSlotThree.push(char);
    }
}

function displaySlotOne(char) {
    document.getElementById('display-slot-one').innerHTML = "";
    let holder = document.createElement("ul");
    let li  = document.createElement('li');
    li.textContent = `Class: ${char.className}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Level: ${char.lvl}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Vigor: ${char.vig}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Mind: ${char.mnd}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Strength: ${char.str}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Dexterity: ${char.dex}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Intelligence: ${char.int}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Faith: ${char.fth}`;
    holder.appendChild(li);
    li  = document.createElement('li');
    li.textContent = `Arcane: ${char.arc}`;
    holder.appendChild(li);
    document.getElementById('display-base').appendChild(holder);
}