// console.log("bg is running");
// console.log(this);

chrome.runtime.onInstalled.addListener(()=>{
    chrome.tabs.create({
        url: 'https://www.google.com'
    })
})