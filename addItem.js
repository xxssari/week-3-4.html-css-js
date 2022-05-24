//사용자가 추가한 내용 (이름, 사진, 내용) 이 html에 반영되어 화면에 출력될 수 있게 함.
function addItem(name,image,content) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
            <img src="${image}" alt="${name}" />
            <span>${content}</span>
        `;
    document.querySelector("#container").appendChild(div);

    const span = document.createElement("span");
    span.innerHTML = name;
    document.querySelector("#sidebar").appendChild(span);
}

function addItemHandle(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
    const content = document.getElementById("content").value;
    addItem(name, image, content);
    closeModal();
}

document.getElementById("addItemForm").addEventListener("submit",addItemHandle);

//정리
//(1)인풋의 내용이 html에 추가되는 기능을 가진 함수를 만듦.
//(2)모달창의 값들이 지정이 제대로 되지 않거나, modal.js에서 만든 closeModal 함수가 실행되지 않을 경우 다른 이벤트가 실행되지 않도록 하는 함수를 만듦. (closeModal 함수의 기능 : modal창을 보이지 않게 함.)
//(3) 밑밥을 다 깔아서 최종으로 실행할 이벤트를 만듦.
//제출 버튼 클릭시, addItemHandle이라는 함수가 실행됨.
//(addItemHandle이라는 함수 실행 = addItem 함수와 closeModal 함수가 순서대로 실행 됨.)