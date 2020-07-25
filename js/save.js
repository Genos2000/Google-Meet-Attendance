document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".save-attendance");
  btn.addEventListener("click", function (tab) {
    chrome.tabs.executeScript(tab.id, { file: "js/saveAttendance.js" });
  });
});
