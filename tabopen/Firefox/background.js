/*
Open a new tab, and load "my-page.html" into it.
*/
function getDomain(name){
switch (name) {
    case "National Geographic":
      return "http://www.nationalgeographic.com/";
  case "Electronic Arts":
	return "http://www.ea.com/";
  case "Nintendo":
	return "http://www.nintendo.com/";

	}

}

function openMyPage(message) {
var domain = getDomain(message.name);
  chrome.tabs.create({
     "url": chrome.extension.getURL(domain)
   });
}






chrome.runtime.onMessage.addListener(openMyPage);

