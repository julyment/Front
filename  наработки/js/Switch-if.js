let browser = prompt("Какой браузер?");
if (browser == "Edge") {
  alert("You've got Edge!");
} else if (
  (browser == "Chrome",
  browser == "Firefox",
  browser == "Safari",
  browser == "Opera")
) {
  alert("Okay, we support this browsers too");
} else {
  alert("We hope that this page looks ok!");
}
