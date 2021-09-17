// Initialize button with user's preferred color

// Change button social to create dom node for our button.
let googleSearchBox = document.querySelector("input");

const container = document.querySelector("form");
const button = document.createElement("button");
const node = document.createTextNode("@@@");
button.appendChild(node);
container.appendChild(button);

button.addEventListener("click", async () => appendSocial());
// The body of this function will be executed as a content script inside the
// current page
function appendSocial() {
  // DATA ACCESS!! --> Background.js
  //pseudocode: append '@' to string searchQuery
  // chrome.search.
  googleSearchBox.value = googleSearchBox.value + "@";
}
function appendPrice() {
  // DATA ACCESS!! --> Background.js
  //pseudocode: append '@' to string searchQuery
  // chrome.search.
  googleSearchBox.value = googleSearchBox.value + "$";
}
