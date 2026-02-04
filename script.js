let selectedImg = null;
let selectedCell = null;

document.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    selectedImg = e.target;
    selectedCell = selectedImg.parentElement;
    document.querySelectorAll("td").forEach(td => {
      td.style.outline = "none";
    });
    selectedCell.style.outline = "3px solid red";
  }
  else if (e.target.tagName === "TD" && selectedImg) {
    if (e.target.classList.contains("num")) return;
    e.target.appendChild(selectedImg);
    selectedCell.style.outline = "none";
    selectedImg = null;
    selectedCell = null;
  }
});
