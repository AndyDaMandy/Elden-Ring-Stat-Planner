function displayBaseStats(char) {
    document.getElementById('display-base').innerHTML = "";
    let holder = document.createElement("ul");
    let li  = document.createElement('li');
    let baseAt = document.createElement("h3");
    baseAt.innerText = "Base Attributes";
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
    document.getElementById('display-base').appendChild(baseAt);
    document.getElementById('display-base').appendChild(holder);
}
//the idea is to create an array that keeps track of the "state" of the character stats. If the player adds a level, it pushes that new state into the array. There will be a level "selector, that increases based on state". This is important because we want players to be able to go back.
//It adds 3 character slots.
let characterSlotOne = [];
let characterSlotTwo = [];
let characterSlotThree = [];
let slotOneState = 0;
let slotTwoState = 0;
let slotThreeState = 0;
function addStatOne(stat) {
    //for some reason the array does overwrrites the old ones??? Weird
   let newLevel = Object.assign({},characterSlotOne[slotOneState])
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
function addStatTwo(stat) {
    //for some reason the array does overwrrites the old ones??? Weird
    let newLevel = Object.assign({},characterSlotTwo[slotTwoState]);
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
    characterSlotTwo.push(newLevel);
    slotTwoState++;
    console.log(characterSlotTwo);
    displaySlotTwo(characterSlotTwo[slotTwoState]);
}
function addStatThree(stat) {
    //for some reason the array does overwrrites the old ones??? Weird
    let newLevel = Object.assign({}, characterSlotThree[slotThreeState]);
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
    characterSlotThree.push(newLevel);
    slotThreeState++;
    console.log(characterSlotThree);
    displaySlotThree(characterSlotThree[slotThreeState]);
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
         displaySlotTwo(characterSlotTwo[0]);
         document.getElementById('display-slot-two').hidden = false;
         document.getElementById('chooseClass-2').hidden = true;
         
     } else if (slot === 3){
         slotThreeState = 0;
         characterSlotThree.push(char);
         displaySlotThree(characterSlotThree[0]);
         document.getElementById('display-slot-three').hidden = false;
         document.getElementById('chooseClass-3').hidden = true;
     }
 }

function slotOneCheck(){
   let slotCopy = simpleStorage.get("slot-1");
   let slotStateCopy = simpleStorage.get("slot-1-state");
   if (slotCopy!== undefined){
       characterSlotOne = slotCopy;
       slotOneState = slotStateCopy;
       displaySlotOne(characterSlotOne[slotOneState]);
       document.getElementById('display-slot-one').hidden = false;
       document.getElementById('chooseClass-1').hidden = true;
   } else {
        if (characterSlotOne.length === 0){
        document.getElementById("chooseClass-1").hidden = false;
        } else {
          //  displaySlotOne.hidden = false;
        }
    }   
}
function slotTwoCheck(){
    let slotCopy = simpleStorage.get("slot-2");
    let slotStateCopy = simpleStorage.get("slot-2-state");
    if (slotCopy!== undefined){
        characterSlotTwo = slotCopy;
        slotTwoState = slotStateCopy;
        displaySlotTwo(characterSlotTwo[slotTwoState]);
         document.getElementById('display-slot-two').hidden = false;
         document.getElementById('chooseClass-2').hidden = true;
    } else {
         if (characterSlotTwo.length === 0){
         document.getElementById("chooseClass-2").hidden = false;
         } else {
           //  displaySlotTwo.hidden = false;
         }
     }   
 }
 function slotThreeCheck(){
    let slotCopy = simpleStorage.get("slot-3");
    let slotStateCopy = simpleStorage.get("slot-3-state");
    if (slotCopy!== undefined){
        characterSlotThree = slotCopy;
        slotThreeState = slotStateCopy;
        displaySlotThree(characterSlotThree[slotThreeState]);
         document.getElementById('display-slot-three').hidden = false;
         document.getElementById('chooseClass-3').hidden = true;
    } else {
         if (characterSlotThree.length === 0){
         document.getElementById("chooseClass-3").hidden = false;
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
function displaySlotTwo(char) {
    document.getElementById('display-slot-two').innerHTML = "";
    let intro = document.createElement("h3");
    intro.innerText = "Slot 2 Character Information:";
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
    document.getElementById('display-slot-two').appendChild(intro)
    document.getElementById('display-slot-two').appendChild(holder);
    document.getElementById('stat-boost-2').hidden = false;
}
function displaySlotThree(char) {
    document.getElementById('display-slot-three').innerHTML = "";
    let intro = document.createElement("h3");
    intro.innerText = "Slot 3 Character Information:";
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
    document.getElementById('display-slot-three').appendChild(intro)
    document.getElementById('display-slot-three').appendChild(holder);
    document.getElementById('stat-boost-3').hidden = false;
}

function saveData(){
    simpleStorage.set("slot-1", characterSlotOne);
    simpleStorage.set("slot-1-state", slotOneState);
    simpleStorage.set("slot-2", characterSlotTwo);
    simpleStorage.set("slot-2-state", slotTwoState);
    simpleStorage.set("slot-3", characterSlotThree);
    simpleStorage.set("slot-3-state", slotThreeState);
}
function clearData(){
    simpleStorage.flush();
    characterSlotOne = [];
    characterSlotTwo = [];
    characterSlotThree = [];
    slotOneState = 0;
    slotTwoState = 0;
    slotThreeState = 0;
    document.getElementById("display-slot-one").hidden = true;
    document.getElementById("stat-boost-1").hidden = true;
    document.getElementById("display-slot-two").hidden = true;
    document.getElementById("stat-boost-2").hidden = true;
    document.getElementById("display-slot-three").hidden = true;
    document.getElementById("stat-boost-3").hidden = true;
}