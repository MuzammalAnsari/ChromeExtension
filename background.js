// console.log("bg is running");
// console.log(this);

// chrome.runtime.onInstalled.addListener(()=>{
//     chrome.tabs.create({
//         url: 'https://www.google.com'
//     })
// })



// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     console.log(request);
//     console.log(sender);
//     console.log(sendResponse);
//     sendResponse({farewell: 'goodbye'});
// })

chrome.contextMenus.create({
    id: 'copy',
    title: 'Copy',
    contexts: ['all']
}) 

chrome.contextMenus.create({
    id: 'copy 1',
    title: 'Copy 1',
    contexts: ['all']
}) 


// remove
chrome.contextMenus.remove('copy 1')

chrome.contextMenus.onClicked.addListener(function (info, tab) {
        console.log(info);
        console.log(tab);
        
        // if (info.menuItemId === 'copy') {
        //     chrome.scripting.executeScript({
        //         target: {tabId: tab.id},
        //         func: copyText
        //     })
        // }
})


//   chrome.runtime.onInstalled.addListener(()=>{
//     // chrome.tabs.create({
//     //     url: 'https://www.google.com'
//     // })

//     chrome.tabs.query({active: true, currentWindow: true}, (tabs) =>{
//         console.log(tabs[0])
//     })
// })


// chrome.tabs.onCreated.addListener((tab)=>{
//     console.log('tab created'),
//     console.log(tab)
//     // chrome.tabs.sendMessage(tab.id, {message: 'new tab created'})
// })

//tab update
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    console.log('tab updated'),
    console.log(tabId)
    console.log(changeInfo)
    console.log(tab)
    // chrome.tabs.sendMessage(tab.id, {message: 'new tab updated'})
})