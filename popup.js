// Initialize button with user's preferred color
let buttonChangeColor = document.getElementById("buttonChangeColor");
let buttonSocial = document.getElementById("buttonSocial");

let googleSearchBox = document.querySelector("input");

// DATA ACCESS --> Background.js
chrome.storage.sync.get("color", ({ color }) => {
  buttonChangeColor.style.backgroundColor = color;
});

chrome.storage.sync.get("buttonSocialColor", ({ buttonSocialColor }) => {
  buttonSocial.style.backgroundColor = buttonSocialColor;
});

// When the button is clicked, inject setPageBackgroundColor into current page
// When the button is clicked, '@' is appended before the search query
buttonSocial.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: appendSocial
  });
});

// The body of this function will be executed as a content script inside the
// current page
function appendSocial() {
  // DATA ACCESS!! --> Background.js
  //pseudocode: append '@' to string searchQuery
  // chrome.search.
  googleSearchBox.value = googleSearchBox.value + "@";
}

// When the button is clicked, inject setPageBackgroundColor into current page
buttonChangeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  // DATA ACCESS!! --> Background.js
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
