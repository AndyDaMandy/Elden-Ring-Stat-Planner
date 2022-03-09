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
    li.textContent = `Endurance: ${char.end}`;
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
    //for some reason the array does overwrrites the old ones??? Weird
    let newLevel = characterSlotOne[slotOneState];
    if (stat === "Vigor"){
        newLevel.vig++;
    }
    if (stat === "Endurance"){
        newLevel.end++;
    }
    if (stat === "Mind"){
        newLevel.mnd++;
    }
    if (stat === "Strength"){
        newLevel.str++;
    }
    if (stat === "Dexterity"){
        newLevel.dex++;
    }
    if (stat === "Intelligence"){
        newLevel.int++;
    }
    if (stat === "Faith"){
        newLevel.fth++;
    }
    if (stat === "Arcane"){
        newLevel.arc++;
    }
    newLevel.lvl ++;
    characterSlotOne.push(newLevel);
    slotOneState++;
    console.log(characterSlotOne);
    displaySlotOne(characterSlotOne[slotOneState]);
}

function startCreation() {
    //checks if simple storage keys are empty or not first
    //else
    document.getElementById("planner").hidden = false;
    document.getElementById("new-char").hidden = true;
}

function generateChar(char, slot){   
    if (slot === 1) {
        slotOneState = 0;
        characterSlotOne.push(char)
        displaySlotOne(characterSlotOne[0]);
        document.getElementById('display-slot-one').hidden = false;
        document.getElementById('chooseClass-1').hidden = true;
     } else if (slot === 2) {
         slotTwoState = 0;
         characterSlotTwo.push(char)
     } else if (slot === 3){
         slotThreeState = 0;
         chararacterSlotThree.push(char);
     }
 }

function slotOneCheck(){
   let slotCopy = simpleStorage.get("slot-one");
   if (slotCopy!== undefined){
       characterSlotOne = slotCopy;
   } else {
        if (characterSlotOne.length === 0){
        document.getElementById("chooseClass-1").hidden = false;
        } else {
          //  displaySlotOne.hidden = false;
        }
    }   
}
function slotTwoCheck(){
    let slotCopy = simpleStorage.get("slot-two");
    if (slotCopy!== undefined){
        characterSlotTwo = slotCopy;
    } else {
         if (characterSlotTwo.length === 0){
         document.getElementById("chooseClass-2").hidden = false;
         } else {
           //  displaySlotTwo.hidden = false;
         }
     }   
 }


function displaySlotOne(char) {
    document.getElementById('display-slot-one').innerHTML = "";
    let intro = document.createElement("h3");
    intro.innerText = "Slot 1 Character Information:";
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
    li.textContent = `Endurance: ${char.end}`;
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
    document.getElementById('display-slot-one').appendChild(intro)
    document.getElementById('display-slot-one').appendChild(holder);
    document.getElementById('stat-boost-1').hidden = false;
}