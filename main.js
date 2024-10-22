document.addEventListener("click", function() { clickCheck(); });

function clickCheck() {
  let ele = document.getElementById("item");
  let textValue = ele.value;
  let newEle = document.getElementById(textValue);

  if (newEle === null) {
    newEle = "deafult";
  } 
    let tagName = null;
    tagName = newEle.tagName;
    console.log(tagName);

  if (tagName === 'P') {
    strikethrough(textValue);
  } else if (tagName === 'S') {
    unStrikethrough(textValue);
  }
}
// document.getElementById(textValue).addEventListener("click", function() { strikethrough(textValue); });
// document.getElementById(id).addEventListener("click", function() { unStrikethrough(id); });

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
  }
}

function strikethrough(id) {
  let newElement = document.createElement('s');
  newElement.setAttribute("id", id)
  newElement.textContent = id;
  newElement.classList.add("fList-strike");
  let oldElement = document.getElementById(id);
  oldElement.replaceWith(newElement);
}

function unStrikethrough(id) {
  let newElement = document.createElement('p');
  newElement.setAttribute("id", id)
  newElement.textContent = id;
  newElement.classList.add("fList-strike");
  let oldElement = document.getElementById(id);
  oldElement.replaceWith(newElement);
}
  