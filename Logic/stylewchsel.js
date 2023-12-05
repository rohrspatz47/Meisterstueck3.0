var stylez = document.getElementById("stylesheet");
var currentSheet = document.getElementById("stylesheet"),
switcher = document.getElementById("styleswitcher");

function loadStyle () {
  currentSheet.href = stylez;
}

switcher.addEventListener("click", function (ev) {
  var b = ev.target; // button

  if (b && b.hasAttribute("data-stylesheet")) {
    stylez = b.getAttribute("data-stylesheet");
  } 

  loadStyle();
});
function aenderung () {
    currentSheet.href = styles;
}
window.addEventListener("DOMContentLoaded") function aenderung () {
    currentSheet.href = stylez;
}
function aenderung () {
    currentSheet.href = styles;
}
aenderung.addEventListener("click", function (ev) {
    var b = ev.target;
    if (b && b.hasAttribute("data-stylesheet")) {
        stylez = b.getAttribute("data-stylesheet");
    }
});