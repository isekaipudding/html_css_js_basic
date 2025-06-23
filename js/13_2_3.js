document.addEventListener("DOMContentLoaded",
  function(e) {
    let input = document.querySelector("input");
    input.addEventListener("click",
      function (e) {
        if (e.target.getAttribute("type") === "button") {
          e.target.setAttribute("type", "text");
        }
      }
    )

    input.addEventListener("keydown",
      function (e) {
        if (e.key === "=") {
          e.target.setAttribute("type", "button");
        }
      }
    )
  }
)