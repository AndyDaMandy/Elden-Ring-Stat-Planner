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
   if (newLevel.lvl >= 713){
      return alert("You've hit the level cap in Elden Ring")
   } else {
    if (stat === "Vigor"){
        if (newLevel.vig >= 99){
          return  alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.vig++;
        }
    }
    if (stat === "Endurance"){
        if (newLevel.end >= 99){
          return  alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.end++;
        }
    }
    if (stat === "Mind"){
        if (newLevel.mnd >= 99){
           return alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.mnd++;
        }
    }
    if (stat === "Strength"){
        if (newLevel.str >= 99){
           return alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.str++;
        }
    }
    if (stat === "Dexterity"){
        if (newLevel.dex >= 99){
           return alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.dex++;
        }
    }
    if (stat === "Intelligence"){
        if (newLevel.int >= 99){
          return  alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.int++;
        }
    }
    if (stat === "Faith"){
        if (newLevel.fth >= 99){
           return alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.fth++;
        }
    }
    if (stat === "Arcane"){
        if (newLevel.arc >= 99){
           return alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.arc++;
        }
    }
    newLevel.lvl ++;
    characterSlotOne.push(newLevel);
    slotOneState++;
    displaySlotOne(characterSlotOne[slotOneState]);
    }
}
function addStatTwo(stat) {
    let newLevel = Object.assign({},characterSlotTwo[slotTwoState]);
    if (newLevel.lvl >= 713){
        alert("You've hit the level cap in Elden Ring")
    } else {
    if (stat === "Vigor"){
        if (newLevel.vig >= 99){
           return alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.vig++;
        }
    }
    if (stat === "Endurance"){
        if (newLevel.end >= 99){
           return alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.end++;
        }
    }
    if (stat === "Mind"){
        if (newLevel.mnd >= 99){
           return alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.mnd++;
        }
    }
    if (stat === "Strength"){
        if (newLevel.str >= 99){
           return alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.str++;
        }
    }
    if (stat === "Dexterity"){
        if (newLevel.dex >= 99){
        return    alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.dex++;
        }
    }
    if (stat === "Intelligence"){
        if (newLevel.int >= 99){
         return   alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.int++;
        }
    }
    if (stat === "Faith"){
        if (newLevel.fth >= 99){
         return   alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.fth++;
        }
    }
    if (stat === "Arcane"){
        if (newLevel.arc >= 99){
          return  alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.arc++;
        }
    }
    newLevel.lvl ++;
    characterSlotTwo.push(newLevel);
    slotTwoState++;
    displaySlotTwo(characterSlotTwo[slotTwoState]);
}
}
function addStatThree(stat) {
    //for some reason the array does overwrrites the old ones??? Weird
    let newLevel = Object.assign({}, characterSlotThree[slotThreeState]);
    if (newLevel.lvl >= 713){
       return alert("You've hit the level cap in Elden Ring")
    } else {
    if (stat === "Vigor"){
        if (newLevel.vig >= 99){
         return   alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.vig++;
        }
    }
    if (stat === "Endurance"){
        if (newLevel.end >= 99){
         return   alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.end++;
        }
    }
    if (stat === "Mind"){
        if (newLevel.mnd >= 99){
          return  alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.mnd++;
        }
    }
    if (stat === "Strength"){
        if (newLevel.str >= 99){
          return  alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.str++;
        }
    }
    if (stat === "Dexterity"){
        if (newLevel.dex >= 99){
            alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.dex++;
        }
    }
    if (stat === "Intelligence"){
        if (newLevel.int >= 99){
          return  alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.int++;
        }
    }
    if (stat === "Faith"){
        if (newLevel.fth >= 99){
          return  alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.fth++;
        }
    }
    if (stat === "Arcane"){
        if (newLevel.arc >= 99){
          return  alert("You cannot level an attribute past 99, please select a new one")
        } else {
        newLevel.arc++;
        }
    }
    newLevel.lvl ++;
    characterSlotThree.push(newLevel);
    slotThreeState++;
    displaySlotThree(characterSlotThree[slotThreeState]);
    }
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
    if (slotOneState <= 0){
        alert("You can't go below your starting level!");
    } else {
    characterSlotOne.splice(slotOneState, 1);
    slotOneState--;
    displaySlotOne(characterSlotOne[slotOneState]);
    }
}
function backTwo(){
    if (slotTwoState <= 0){
        alert("You can't go below your starting level!");
    } else {
    characterSlotTwo.splice(slotTwoState, 1);
    slotTwoState--;
    displaySlotTwo(characterSlotTwo[slotTwoState]);
    }
}
function backThree(){
    if (slotThreeState <= 0){
        alert("You can't go below your starting level!");
    } else {
    characterSlotThree.splice(slotThreeState, 1);
    slotThreeState--;
    displaySlotThree(characterSlotThree[slotThreeState]);
    }
}

function showVigor(stat){
    let hp = 0;
    if (stat === 1){
        hp = 300;
    }
    if (stat === 2){
        hp = 304;
    }
    if (stat === 3) {
        hp = 312;
    }
    if (stat === 4){
        
    }
    if (stat === 5){

    }
    if (stat === 6){

    }
    if (stat === 7){

    }
    if (stat === 8){

    }
    if (stat === 10){

    }
    if (stat === 11){

    }
    if (stat === 12){

    }
    if (stat === 13){

    }
    if (stat === 14){

    }
    if (stat === 15){

    }
    if (stat === 16){

    }
    if (stat === 17){

    }
    if (stat === 18){

    }
    if (stat === 19){

    }
    if (stat === 20){

    }
    if (stat === 21){
        hp = 300;
    }
    if (stat === 22){
        hp = 304;
    }
    if (stat === 23) {
        hp = 312;
    }
    if (stat === 24){

    }
    if (stat === 25){

    }
    if (stat === 26){

    }
    if (stat === 27){

    }
    if (stat === 28){

    }
    if (stat === 29){

    }
    if (stat === 30){

    }
    if (stat === 31){

    }
    if (stat === 32){

    }
    if (stat === 33){

    }
    if (stat === 34){

    }
    if (stat === 35){

    }
    if (stat === 36){

    }
    if (stat === 37){

    }
    if (stat === 38){

    }
    if (stat === 39){

    }
    if (stat === 40){
        hp = 300;
    }
    if (stat === 41){
        hp = 304;
    }
    if (stat === 42) {
        hp = 312;
    }
    if (stat === 43){

    }
    if (stat === 44){

    }
    if (stat === 45){

    }
    if (stat === 46){

    }
    if (stat === 47){

    }
    if (stat === 48){

    }
    if (stat === 49){

    }
    if (stat === 50){

    }
    if (stat === 51){

    }
    if (stat === 52){

    }
    if (stat === 53){

    }
    if (stat === 54){

    }
    if (stat === 55){

    }
    if (stat === 56){

    }
    if (stat === 57){

    }
    if (stat === 58){

    }
    if (stat === 59){
        hp = 300;
    }
    if (stat === 60){
        hp = 304;
    }
    if (stat === 61) {
        hp = 312;
    }
    if (stat === 62){

    }
    if (stat === 63){

    }
    if (stat === 64){

    }
    if (stat === 65){

    }
    if (stat === 66){

    }
    if (stat === 67){

    }
    if (stat === 68){

    }
    if (stat === 69){

    }
    if (stat === 70){

    }
    if (stat === 71){

    }
    if (stat === 72){

    }
    if (stat === 73){

    }
    if (stat === 74){

    }
    if (stat === 75){

    }
    if (stat === 76){

    }
    if (stat === 77){

    }
    if (stat === 78){
        hp = 300;
    }
    if (stat === 79){
        hp = 304;
    }
    if (stat === 80) {
        hp = 312;
    }
    if (stat === 81){

    }
    if (stat === 82){

    }
    if (stat === 83){

    }
    if (stat === 84){

    }
    if (stat === 85){

    }
    if (stat === 86){

    }
    if (stat === 87){

    }
    if (stat === 88){

    }
    if (stat === 89){

    }
    if (stat === 90){

    }
    if (stat === 91){

    }
    if (stat === 92){

    }
    if (stat === 93){

    }
    if (stat === 94){

    }
    if (stat === 95){

    }
    if (stat === 96){

    }
    if (stat === 97){

    }
    if (stat === 98){

    }
    if (stat >= 99){

    }
};
function showMind(stat){
    let hp = 0;
    if (stat === 1){
        hp = 300;
    }
    if (stat === 2){
        hp = 304;
    }
    if (stat === 3) {
        hp = 312;
    }
    if (stat === 4){

    }
    if (stat === 5){

    }
    if (stat === 6){

    }
    if (stat === 7){

    }
    if (stat === 8){

    }
    if (stat === 10){

    }
    if (stat === 11){

    }
    if (stat === 12){

    }
    if (stat === 13){

    }
    if (stat === 14){

    }
    if (stat === 15){

    }
    if (stat === 16){

    }
    if (stat === 17){

    }
    if (stat === 18){

    }
    if (stat === 19){

    }
    if (stat === 20){

    }
    if (stat === 21){
        hp = 300;
    }
    if (stat === 22){
        hp = 304;
    }
    if (stat === 23) {
        hp = 312;
    }
    if (stat === 24){

    }
    if (stat === 25){

    }
    if (stat === 26){

    }
    if (stat === 27){

    }
    if (stat === 28){

    }
    if (stat === 29){

    }
    if (stat === 30){

    }
    if (stat === 31){

    }
    if (stat === 32){

    }
    if (stat === 33){

    }
    if (stat === 34){

    }
    if (stat === 35){

    }
    if (stat === 36){

    }
    if (stat === 37){

    }
    if (stat === 38){

    }
    if (stat === 39){

    }
    if (stat === 40){
        hp = 300;
    }
    if (stat === 41){
        hp = 304;
    }
    if (stat === 42) {
        hp = 312;
    }
    if (stat === 43){

    }
    if (stat === 44){

    }
    if (stat === 45){

    }
    if (stat === 46){

    }
    if (stat === 47){

    }
    if (stat === 48){

    }
    if (stat === 49){

    }
    if (stat === 50){

    }
    if (stat === 51){

    }
    if (stat === 52){

    }
    if (stat === 53){

    }
    if (stat === 54){

    }
    if (stat === 55){

    }
    if (stat === 56){

    }
    if (stat === 57){

    }
    if (stat === 58){

    }
    if (stat === 59){
        hp = 300;
    }
    if (stat === 60){
        hp = 304;
    }
    if (stat === 61) {
        hp = 312;
    }
    if (stat === 62){

    }
    if (stat === 63){

    }
    if (stat === 64){

    }
    if (stat === 65){

    }
    if (stat === 66){

    }
    if (stat === 67){

    }
    if (stat === 68){

    }
    if (stat === 69){

    }
    if (stat === 70){

    }
    if (stat === 71){

    }
    if (stat === 72){

    }
    if (stat === 73){

    }
    if (stat === 74){

    }
    if (stat === 75){

    }
    if (stat === 76){

    }
    if (stat === 77){

    }
    if (stat === 78){
        hp = 300;
    }
    if (stat === 79){
        hp = 304;
    }
    if (stat === 80) {
        hp = 312;
    }
    if (stat === 81){

    }
    if (stat === 82){

    }
    if (stat === 83){

    }
    if (stat === 84){

    }
    if (stat === 85){

    }
    if (stat === 86){

    }
    if (stat === 87){

    }
    if (stat === 88){

    }
    if (stat === 89){

    }
    if (stat === 90){

    }
    if (stat === 91){

    }
    if (stat === 92){

    }
    if (stat === 93){

    }
    if (stat === 94){

    }
    if (stat === 95){

    }
    if (stat === 96){

    }
    if (stat === 97){

    }
    if (stat === 98){

    }
    if (stat >= 99){

    }
};
function showStamina(stat){
    let hp = 0;
    if (stat === 1){
        hp = 300;
    }
    if (stat === 2){
        hp = 304;
    }
    if (stat === 3) {
        hp = 312;
    }
    if (stat === 4){

    }
    if (stat === 5){

    }
    if (stat === 6){

    }
    if (stat === 7){

    }
    if (stat === 8){

    }
    if (stat === 10){

    }
    if (stat === 11){

    }
    if (stat === 12){

    }
    if (stat === 13){

    }
    if (stat === 14){

    }
    if (stat === 15){

    }
    if (stat === 16){

    }
    if (stat === 17){

    }
    if (stat === 18){

    }
    if (stat === 19){

    }
    if (stat === 20){

    }
    if (stat === 21){
        hp = 300;
    }
    if (stat === 22){
        hp = 304;
    }
    if (stat === 23) {
        hp = 312;
    }
    if (stat === 24){

    }
    if (stat === 25){

    }
    if (stat === 26){

    }
    if (stat === 27){

    }
    if (stat === 28){

    }
    if (stat === 29){

    }
    if (stat === 30){

    }
    if (stat === 31){

    }
    if (stat === 32){

    }
    if (stat === 33){

    }
    if (stat === 34){

    }
    if (stat === 35){

    }
    if (stat === 36){

    }
    if (stat === 37){

    }
    if (stat === 38){

    }
    if (stat === 39){

    }
    if (stat === 40){
        hp = 300;
    }
    if (stat === 41){
        hp = 304;
    }
    if (stat === 42) {
        hp = 312;
    }
    if (stat === 43){

    }
    if (stat === 44){

    }
    if (stat === 45){

    }
    if (stat === 46){

    }
    if (stat === 47){

    }
    if (stat === 48){

    }
    if (stat === 49){

    }
    if (stat === 50){

    }
    if (stat === 51){

    }
    if (stat === 52){

    }
    if (stat === 53){

    }
    if (stat === 54){

    }
    if (stat === 55){

    }
    if (stat === 56){

    }
    if (stat === 57){

    }
    if (stat === 58){

    }
    if (stat === 59){
        hp = 300;
    }
    if (stat === 60){
        hp = 304;
    }
    if (stat === 61) {
        hp = 312;
    }
    if (stat === 62){

    }
    if (stat === 63){

    }
    if (stat === 64){

    }
    if (stat === 65){

    }
    if (stat === 66){

    }
    if (stat === 67){

    }
    if (stat === 68){

    }
    if (stat === 69){

    }
    if (stat === 70){

    }
    if (stat === 71){

    }
    if (stat === 72){

    }
    if (stat === 73){

    }
    if (stat === 74){

    }
    if (stat === 75){

    }
    if (stat === 76){

    }
    if (stat === 77){

    }
    if (stat === 78){
        hp = 300;
    }
    if (stat === 79){
        hp = 304;
    }
    if (stat === 80) {
        hp = 312;
    }
    if (stat === 81){

    }
    if (stat === 82){

    }
    if (stat === 83){

    }
    if (stat === 84){

    }
    if (stat === 85){

    }
    if (stat === 86){

    }
    if (stat === 87){

    }
    if (stat === 88){

    }
    if (stat === 89){

    }
    if (stat === 90){

    }
    if (stat === 91){

    }
    if (stat === 92){

    }
    if (stat === 93){

    }
    if (stat === 94){

    }
    if (stat === 95){

    }
    if (stat === 96){

    }
    if (stat === 97){

    }
    if (stat === 98){

    }
    if (stat >= 99){

    }
};