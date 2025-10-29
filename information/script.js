  function toggleInfo() {
    var infoBox = document.getElementById("infoBox");
    var arrowIcon = document.getElementById("arrowIcon");

    if (infoBox.style.display === "block") {
      infoBox.style.display = "none";
      arrowIcon.classList.remove("up");
    } else {
      infoBox.style.display = "block";
      arrowIcon.classList.add("up");
    }
  }
