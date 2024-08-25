// alert("im from contentScript")
chrome.runtime.sendMessage({greetings: "hello"}, function(response){
    console.log(response.farewell);
})