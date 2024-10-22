function addItem() {
  let ele = document.getElementById("item");

  let textValue = ele.value;

  if (textValue === "") { // Come back to, fix if you put a space itll add it to the list
    console.log("test");
  } else {
    let loc = document.getElementById("item-list-id"); 
    let fList = document.createElement("p");
    fList.setAttribute("id", textValue)
    fList.textContent = textValue; 
    fList.classList.add("full-item-list"); // Adds the CSS element to the tag
    loc.appendChild(fList);

    document.getElementById(textValue).addEventListener("click", function() { strikethrough(textValue); });
  }
}

function strikethrough(id) {
  let newElement = document.createElement('s');
  let oldElement = document.getElementById(id);
  oldElement.replaceWith(newElement);
}