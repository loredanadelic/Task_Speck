const div = document.getElementById("technologies");
const addButton = document.getElementById("btn");
const removeButton = document.getElementById("btn2");
const addNewTechnology = (event) => {
  event.preventDefault();
  const input = document.getElementById("technology");
  const text = input.value;
  if (text === "") {
    return;
  }
  const newItem = document.createElement("div");
  const newText = document.createElement("p");
  newText.innerText = text;
  newItem.setAttribute("class", "technologyItem");
  newItem.appendChild(newText);
  div.appendChild(newItem);
  input.value = "";
};
const removeAllTechnologies = (event) => {
  event.preventDefault();
  div.replaceChildren();
};
addButton.addEventListener("click", addNewTechnology);
removeButton.addEventListener("click", removeAllTechnologies);
