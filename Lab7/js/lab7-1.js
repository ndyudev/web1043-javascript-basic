let holderItem;

function dStart(event) {
  holderItem = event.target;
}

function nDrop(event) {
  event.preventDefault(); // Cho phép thả
}

function dDrop(event) {
  event.preventDefault();
  if (event.target.classList.contains("box")) {
    event.target.appendChild(holderItem);
  }
}
