chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: './new-tab.html', active: true });
});