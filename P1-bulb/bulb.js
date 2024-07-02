var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var isOn = false;

btn.addEventListener("click", function () {
  if (isOn == 0) {
    bulb.style.backgroundColor = "yellow";
    btn.innerHTML = "OFF";
    isOn = true;
  } else {
    bulb.style.backgroundColor = "white";
    btn.innerHTML = "ON";
    isOn = false;
  }
});
