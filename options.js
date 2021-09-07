let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1", "50C878"];

// Reacts to a button click by marking the selected button and saving
// the selection
function handleButtonClick(event) {
    // Remove styling from the previously selectec color
    let current = event.target.parentElement.querySelector(
        `.${selectedClassName}`
    );
    if (current && current !== event.target) {
        current.classList.remove(selectedClassName);
    }

    // Mark the button as selected
    let color = event.target.dataset.color;
    event.target.classList.add(selectedClassName);
    chrome.storage.sync.set({ color });
}

// Add a button to the page for earch supplied color
function constructOptions(buttonColors) {
    chrome.storage.sync.get("color", (data) => {
        let currentColor = data.color;
        // For each color we were provided
        for (let buttonColor of buttonColors) {
            //... create button of that color...
            let button = document.createElement("button");
            button.dataset.color = buttonColor;
            button.style.backgroundColor = buttonColor;

            //...mark the curently selected color...
            if (buttonColor === currentColor) {
                button.classList.add(selectedClassName);
            }
            button.addEventListener("click", handleButtonClick);
            page.appendChild(button);
        }
    });
}

// Initialize the page by constructing the color options
constructOptions(presetButtonColors);