const hearts = document.querySelectorAll(".heart");
const emptySpaces = document.querySelectorAll(".empty-space");
let matchedCount = 0;

hearts.forEach((heart) => {
  heart.addEventListener("dragstart", dragStart);
});

emptySpaces.forEach((space) => {
  space.addEventListener("dragover", dragOver);
  space.addEventListener("drop", drop);
});

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.dataset.color);
  e.dataTransfer.effectAllowed = "move";
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
}

function drop(e) {
  e.preventDefault();
  const draggedColor = e.dataTransfer.getData("text/plain");
  const targetColor = e.target.dataset.color;

  if (draggedColor === targetColor && !e.target.hasChildNodes()) {
    const draggedElement = document.querySelector(
      `.heart[data-color="${draggedColor}"]`
    );
    e.target.appendChild(draggedElement);
    draggedElement.style.cursor = "default";
    draggedElement.setAttribute("draggable", "false");
    matchedCount++;

    if (matchedCount === 3) {
      showFullscreenAnimation();
    }
  }
}

function showFullscreenAnimation() {
  const fullscreenDiv = document.createElement("div");
  fullscreenDiv.classList.add("fullscreen-animation");
  fullscreenDiv.innerHTML = `<h1>Happy Independence Day</h1>`;
  document.body.appendChild(fullscreenDiv);
}
