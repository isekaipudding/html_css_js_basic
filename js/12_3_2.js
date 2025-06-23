// script 태그가 body 태그의 맨 마지막 줄에 있다면 선택자(태그)가 input인 element(요소)를 추출합니다.
// 예시로 <p name="hello" value="world">안녕하세요</p>가 있다면
// 요소(element) : <p name="hello" value="world">안녕하세요</p>
// 내용(content) : 안녕하세요
// 선택자(tag) : p
// 속성(attribute) : name, value
// 속성값(attribute value) : "hello", "world"
let button = document.querySelector("input");

button.addEventListener("input",
  function(e) {
    console.log(e.target.value);
  }
)

function hi() {
  alert("hi");
}