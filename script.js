
function updateMotorSpeed(value) {
  document.getElementById("motorSpeedValue").innerText = value;
  fetch(`/motor?speed=${value}`);
}

function switchMode(mode) {
  if (mode === "color") {
    document.getElementById("colorControls").classList.remove("hidden");
    document.getElementById("blinkControls").classList.add("hidden");
    fetch("/led?mode=color");
  } else {
    document.getElementById("colorControls").classList.add("hidden");
    document.getElementById("blinkControls").classList.remove("hidden");
    fetch("/led?mode=blink");
  }
}

function setColor(color) {
  fetch(`/led?color=${encodeURIComponent(color)}`);
}

function setBlinkSpeed(speed) {
  document.getElementById("blinkSpeedValue").innerText = speed + "ms";
  fetch(`/led?blinkSpeed=${speed}`);
}
