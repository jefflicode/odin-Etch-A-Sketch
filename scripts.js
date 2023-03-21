// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

btn.addEventListener("click", () => {
  removeAllChildNodes(container);

  let width = prompt("Enter the width");
  if (width > 100) {
    width = prompt("Width can't be bigger than 100, please enter a new value");
  }

  let height = prompt("Enter the height");
  if (height > 100) {
    height = prompt("Height can't be bigger than 100, please enter a new value");
  }

  const singleGridSize = 900 / width;

  container.setAttribute(
    "style",
    "display: flex; flex-direction: column;align-items: center;"
  );

  for (let i = 0; i < height; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.setAttribute("style", "display: flex; flex-direction: row;");
    for (let j = 0; j < width; j++) {
      const grid = document.createElement("div");
      grid.setAttribute(
        "style",
        `height: ${singleGridSize}px; width: ${singleGridSize}px; border: solid 1px; border-color: black;`
      );
      rowContainer.appendChild(grid);
    }
    // Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
    rowContainer.addEventListener("mouseover", (e) => {
      e.target.style.background = "#00A86B";
    });
    rowContainer.addEventListener("mouseout", (e) => {
      setTimeout(function () {
        e.target.style.background = "white";
      }, 330);
    });
    container.appendChild(rowContainer);
  }
});
