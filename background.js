chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "editContentScript") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id, { file: "edit.js" });
        });
    } else if (message.action === "saveContentScript") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id, { file: "save.js" });
        });
    }
});
