document.addEventListener('DOMContentLoaded', function() {
  const actionButton = document.getElementById('actionButton');
  
  actionButton.addEventListener('click', async () => {
    // Get the active tab
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Example: Send a message to the active tab
    chrome.tabs.sendMessage(tab.id, {
      action: "performAction"
    });
  });
});
