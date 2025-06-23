// 이 쯤이면 눈치챘겠지만 매개변수 e는 해당 선택자의 요소(element)인 것을 알 수 있습니다.
document.addEventListener("DOMContentLoaded",
  function(e) {
    let button = document.querySelector("input");
    button.addEventListener("input",
      function(e) {
        console.log(e.target.value);
      }
    )
  }
)

function hi() {
  alert("hi");
}