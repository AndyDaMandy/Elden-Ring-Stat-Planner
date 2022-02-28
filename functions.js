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
