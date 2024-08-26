alert('hello World')
// console.log(this);

chrome.action.setBadgeText({text: 'ON'});

chrome.action.setBadgeTextColor({color: '#fff'})

chrome.action.getBadgeText({}, (result) => {
  console.log(result)
});