// script 태그가 body 태그의 맨 마지막 줄에 있다면 선택자(태그)가 input인 element(요소)를 추출합니다.
// 하지만 12_3_4.html 문서(document)에서 script 태그 이전에 input 요소가 없으므로 button = null로 저장됩니다.
let button = document.querySelector("input");

// null은 "요소가 없다"는 뜻이므로 addEventListener를 사용할 수 없어 여기서 오류 발생합니다.
button.addEventListener("input",
  function(e) {
    console.log(e.target.value);
  }
)

// 하지만 이건 그냥 함수를 생성하는 것이므로 여기에는 오류가 발생하지 않습니다.
// 따라서 클릭하면 알림창이 정상적으로 출력됩니다.
function hi() {
  alert("hi");
}