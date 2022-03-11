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
       if (characterSlotOne.length === 0){
        document.getElementById("chooseClass-1").hidden = false;
       } else {
       displaySlotOne(characterSlotOne[slotOneState]);
       document.getElementById('display-slot-one').hidden = false;
       document.getElementById('chooseClass-1').hidden = true;
       }
   } else {
        if (characterSlotOne.length === 0){
            document.getElementById("chooseClass-1").hidden = false;
        } else {
            document.getElementById('display-slot-one').hidden = false;
        }
    }   
}
function slotTwoCheck(){
    let slotCopy = simpleStorage.get("slot-2");
    let slotStateCopy = simpleStorage.get("slot-2-state");
    if (slotCopy!== undefined){
        characterSlotTwo = slotCopy;
        slotTwoState = slotStateCopy;
        if (characterSlotTwo.length === 0){
            document.getElementById("chooseClass-2").hidden = false;    
        } else {
            displaySlotTwo(characterSlotTwo[slotTwoState]);
            document.getElementById('display-slot-two').hidden = false;
            document.getElementById('chooseClass-2').hidden = true;
        }
    } else {
         if (characterSlotTwo.length === 0){
            document.getElementById("chooseClass-2").hidden = false;
         } else {
            document.getElementById('display-slot-two').hidden = false;
         }
     }   
 }
 function slotThreeCheck(){
    let slotCopy = simpleStorage.get("slot-3");
    let slotStateCopy = simpleStorage.get("slot-3-state");
    if (slotCopy!== undefined){
        characterSlotThree = slotCopy;
        slotThreeState = slotStateCopy;
        if (characterSlotThree.length === 0){
            document.getElementById("chooseClass-3").hidden = false; 
        } else {
            displaySlotThree(characterSlotThree[slotThreeState]);
            document.getElementById('display-slot-three').hidden = false;
            document.getElementById('chooseClass-3').hidden = true;
        }
    } else {
         if (characterSlotThree.length === 0){
            document.getElementById("chooseClass-3").hidden = false;
         } else {
            document.getElementById('display-slot-three').hidden = false;
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
    alert("Your Data has been saved!");
}
function saveOne(){
    simpleStorage.set("slot-1", characterSlotOne);
    simpleStorage.set("slot-1-state", slotOneState);
    alert("Slot One has been saved!");
}
function saveTwo(){
    simpleStorage.set("slot-2", characterSlotTwo);
    simpleStorage.set("slot-2-state", slotTwoState);
    alert("Slot Two has been saved!");
}
function saveThree(){
    simpleStorage.set("slot-3", characterSlotThree);
    simpleStorage.set("slot-3-state", slotThreeState);
    alert("Slot Three has been saved!");
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
    alert("Your Data has been cleared!");
}
function clearOne(){
    simpleStorage.deleteKey("slot-1");
    simpleStorage.deleteKey("slot-1-state");
    characterSlotOne = [];
    slotOneState = 0;
    document.getElementById("display-slot-one").hidden = true;
    document.getElementById("stat-boost-1").hidden = true;
    alert("Slot One has been cleared!");
}
function clearTwo(){
    simpleStorage.deleteKey("slot-2");
    simpleStorage.deleteKey("slot-2-state");
    characterSlotTwo = [];
    slotTwoState = 0;
    document.getElementById("display-slot-two").hidden = true;
    document.getElementById("stat-boost-2").hidden = true;
    alert("Slot Two has been cleared!");
}
function clearThree(){
    simpleStorage.deleteKey("slot-3");
    simpleStorage.deleteKey("slot-3-state");
    characterSlotThree = [];
    slotThreeState = 0;
    document.getElementById("display-slot-three").hidden = true;
    document.getElementById("stat-boost-3").hidden = true;
    alert("Slot Three has been cleared!");
}

function backOne(){
    if (slotOneState === 0){
        alert("You can't go below your starting level!");
    } else {
    characterSlotOne.splice(slotOneState, 1);
    slotOneState--;
    displaySlotOne(characterSlotOne[slotOneState]);
    }
}
function backTwo(){
    if (slotTwoState === 0){
        alert("You can't go below your starting level!");
    } else {
    characterSlotTwo.splice(slotTwoState, 1);
    slotTwoState--;
    displaySlotTwo(characterSlotTwo[slotTwoState]);
    }
}
function backThree(){
    if (slotThreeState === 0){
        alert("You can't go below your starting level!");
    } else {
    characterSlotThree.splice(slotThreeState, 1);
    slotThreeState--;
    displaySlotThree(characterSlotThree[slotThreeState]);
    }
}