function addItem() {
  let ele = document.getElementById("item");

  let textValue = ele.value;

  if (textValue === "") { // Come back to, fix if you put a space itll add it to the list
    console.log("test");
  } else {
    let loc = document.getElementById("item-list-id"); 
    let fList = document.createElement("li");
    fList.textContent = textValue; 
    fList.classList.add("full-item-list"); // Adds the CSS element to the tag
    loc.appendChild(fList); // Puts message onto screen
  }
}
  