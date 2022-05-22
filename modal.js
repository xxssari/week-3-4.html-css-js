//html에 있는 modal 관련 도큐멘트들이 추가 버튼이 클릭됨에 따라 보였다가, 안 보였다가 할 수 있게 함.

document.getElementById("modal").style.display = "none";

document.getElementById("addItem").onclick = function() {
    document.getElementById("modal").style.display = "block";
}

document.getElementById("closeModal").onclick = function() {
    document.getElementById("modal").style.display = "none";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

//modal.js 정리
//(1) 모달창. 보이지 않게 해줘.
//(2) onclick 이벤트가 발생시, 보이게하는 함수를 실행해줘.
//(3) closemodal에 onclick 이벤트가 발생시, 보이지 않게 해줘.
//(4) function closeModal() 함수는 addItem에서 쓰일 예정..