document.addEventListener("DOMContentLoaded", function () {
    const editBtn = document.getElementById("edit");
    const saveBtn = document.getElementById("save");

    editBtn.addEventListener("click", function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.runtime.sendMessage({ action: "editContentScript" });
        });
    });
    saveBtn.addEventListener("click", function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.runtime.sendMessage({ action: "saveContentScript" });
        });
    });
});
