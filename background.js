// Listen for any request errors:
// background.js
chrome.webRequest.onErrorOccurred.addListener(
  function (details) {
    if (details.error === "net::ERR_BLOCKED_BY_CLIENT") {
      console.log("hadi");
      chrome.tabs.sendMessage(details.tabId, {
        type: "onerror-blocked",
        url: details.url
      });
    }
  },
  { urls: ["<all_urls>"] }
);

// Optional: Listen for completed requests:
//   chrome.webRequest.onCompleted.addListener(
//     function (details) {
//       console.log("onCompleted:", details);
//     },
//     { urls: ["<all_urls>"] }
//   );
  