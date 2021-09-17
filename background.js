// background.js

let myColor = "#3aa757";
let myButtonSocialColor = "#800080";
const handler = () => {
  // get color
  chrome.storage.sync.set({ color: myColor });
  // console.log('Default background color set to %cgreen', `color: ${color}`);

  // get buttonSocialColor
  chrome.storage.sync.set({ buttonSocialColor: myButtonSocialColor });
  // console.log('Default background color set to %cpurple', `buttonSocialColor: ${buttonSocialColor}`);
};
chrome.runtime.onInstalled.addListener(handler);
