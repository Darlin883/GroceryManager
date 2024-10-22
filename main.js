// let properLoc = document.getElementById("item-list-id")
// properLoc.addEventListener("click", function() { clickCheck(); });

function addItem() {
  let ele = document.getElementById("item");
  let textValue = ele.value;

  if (textValue === "") { // fix is 
    console.log("test");
  } else {
    let loc = document.getElementById("item-list-id"); 
    let fList = document.createElement("p");
    fList.setAttribute("id", textValue)
    fList.textContent = textValue; 
    fList.classList.add("full-item-list"); // Adds the CSS element to the tag

      // ---> Add click listener directly to the created p tag
      fList.addEventListener("click", function() {
        clickCheck(textValue); // ---> Pass textValue to clickCheck
      });

    loc.appendChild(fList);
    ele.value = "";
  }
}

function clickCheck(textValue) {
  let newEle = document.getElementById(textValue);

  if (newEle === null) {
    console.log("default")
    return;
  } 
    let tagName = newEle.tagName;
    console.log(tagName);

  if (tagName === 'P') {
    strikethrough(textValue);
  } else if (tagName === 'S') {
    unStrikethrough(textValue);
  }
}

function strikethrough(id) {
  let newElement = document.createElement('s');
  newElement.setAttribute("id", id)
  newElement.textContent = id;
  newElement.classList.add("fList-strike");

  newElement.addEventListener("click", function() {
    clickCheck(id);  // ---> Ensure re-attached element calls clickCheck
  });
  
  let oldElement = document.getElementById(id);
  oldElement.replaceWith(newElement);
}

function unStrikethrough(id) {
  let newElement = document.createElement('p');
  newElement.setAttribute("id", id)
  newElement.textContent = id;
  newElement.classList.add("fList-strike");

  // ---> Re-attach the click listener to the p tag
  newElement.addEventListener("click", function() {
    clickCheck(id);  // ---> Ensure re-attached element calls clickCheck
  });

  let oldElement = document.getElementById(id);
  oldElement.replaceWith(newElement);
}
  
