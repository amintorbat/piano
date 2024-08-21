const keys = document.querySelectorAll(".key");
const note = document.querySelector(".nowplaying");
const hints = document.querySelectorAll(".hints");

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.k