// let properLoc = document.getElementById("item-list-id")
// properLoc.addEventListener("click", function() { clickCheck(); });

function addItem() {
  let ele = document.getElementById("item");
  let textValue = ele.value;

  if (textValue === "") {
    return;
  } else {
    let loc = document.getElementById("item-list-id"); 
    let fList = document.createElement("p");
    fList.setAttribute("id", textValue)
    fList.style.textAlign = "center";// center align all p tag
    fList.innerHTML = textValue;
    fList.classList.add("full-item-list"); // Adds the CSS element to the tag

      // ---> Add click listener directly to the created p tag
      fList.addEventListener("click", function() {
        // also switched textvalue to fList since fList is the <p> tag
        // while textValue is just the id of the text
        clickCheck(fList); // ---> Pass fList(fList is <p>) to clickCheck
      });

    loc.appendChild(fList);
    ele.value = ""; // emptys textValue after append
  }
}

function clickCheck(ele) {
  // switched to querySelector since it targets specific elements like <s> && <p>
  if(ele.querySelector('s')) {
    // if <s> tag exists inside <p> remove the <s> tag (un-strikethrough)
    let unstrikedText = ele.querySelector('s').textContent;
    ele.innerHTML = unstrikedText; // changes the elements innerHTML to unstrikedText
    let unPurchased = document.getElementById('items-remaining-id');
    let newElementUn = document.createElement("p");
    newElementUn.textContent = unstrikedText;
    unPurchased.appendChild(newElementUn);

  } else {
      // if no <s> tag exist inside, add it to the text insid<p>(strikethrough)
      let text = ele.textContent;
      ele.innerHTML = `<p><s>${text}</s></p>` // Strikes it

      // Unpurchased items place
      let purchased = document.getElementById('items-left-id'); // Gets where to put the message
      let newElementP = document.createElement("p"); // Creates the message tag
      newElementP.textContent = text; // Places the text into the p tag
      purchased.appendChild(newElementP); // places the tag into the given container
  }



// everything after this can be deleted




  //queryselector is goated so dont need this for the tags since it does it already

  // if (newEle === null) {
  //   console.log("default")
  //   return;
  // } 
  //   let tagName = newEle.tagName;
  //   console.log(tagName);

  // if (tagName === 'P') {
  //   strikethrough(textValue);
  // } else if (tagName === 'S') {
  //   unStrikethrough(textValue);
  // }
}
     
// dont need this since querySelector does it for us 

// function strikethrough(id) {
//   let newElement = document.createElement('s');
//   newElement.setAttribute("id", id)
//   newElement.textContent = id;
//   newElement.classList.add("fList-strike");

//   newElement.addEventListener("click", function() {
//     clickCheck(id);  // ---> Ensure re-attached element calls clickCheck
//   });

//   let oldElement = document.getElementById(id);
//   oldElement.replaceWith(newElement);
// }

// function unStrikethrough(id) {
//   let newElement = document.createElement('p');
//   newElement.setAttribute("id", id)
//   newElement.textContent = id;
//   newElement.classList.add("fList-strike");

//   // ---> Re-attach the click listener to the p tag
//   newElement.addEventListener("click", function() {
//     clickCheck(id);  // ---> Ensure re-attached element calls clickCheck
//   });

//   let oldElement = document.getElementById(id);
//   oldElement.replaceWith(newElement);
// }
  