const shoppingList = ["farina", "biscotti", "lievito", "acqua", "formaggio"];
const listElement = document.querySelector("ul");

let i = 0;
let listItems = "";

while (i < shoppingList.length){
    console.log(shoppingList[i]);
    listItems += `<li>${shoppingList[i]}</li>`;
    i++;
}
console.log(listItems);
listElement.innerHTML = listItems;