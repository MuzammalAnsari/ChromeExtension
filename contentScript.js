// alert("im from contentScript")


// chrome.runtime.sendMessage({greetings: "hello"}, function(response){
//     console.log(response.farewell);
// })


//local storage extension get
chrome.storage.local.set({'name': 'ansari'}).then(()=>{
    console.log("value set")
})

chrome.storage.local.get(['name']).then((result)=>{
    console.log("value currently is" + result.name)
});



