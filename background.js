chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === "complete")
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files:  ["inject.js"]
    })
})
