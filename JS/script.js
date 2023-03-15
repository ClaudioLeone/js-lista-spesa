const shoppingList = ["farina", "biscotti", "lievito", "acqua", "formaggio"];
const listElement = document.querySelector("ul");

let i = 0;
let listItems = "";

while (i < shoppingList.length){
    listItems += `<li>${shoppingList[i]}</li>`;
    i++;
}

listElement.innerHTML = listItems;