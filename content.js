chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "onerror-blocked") {
      const scriptContent = `
        window.hadi = window.hadi || {};
        window.hadi["onerror-blocked"] = window.hadi["onerror-blocked"] || [];
        window.hadi["onerror-blocked"].push(${JSON.stringify(message.url)});
      `;
      const script = document.createElement("script");
      script.textContent = scriptContent;
      (document.head || document.documentElement).appendChild(script);
      script.remove();
    }
  });
  