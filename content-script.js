
let color = '#3aa757';
const searchPage = 'www.google.com';
const pathName= '/search';
const handler = () => {
    if (window.location.host === searchPage && window.location.pathname === pathName){
        //put svg on page
    }
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
};
chrome.runtime.onInstalled.addListener(handler);