
document.getElementById("open-youtube").addEventListener("click", () => {
  chrome.tabs.create({
    url: chrome.runtime.getURL("player.html")
  });
});
