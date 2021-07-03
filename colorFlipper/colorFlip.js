const body = document.querySelector("body");
const flipBtn = document.querySelector(".colorChangeBtn");
const colors = ["#5c6bc0","#8e99f3","#e65100","#afb42b","#fff59d"];

function changeColor(){   
    flipBtn.addEventListener("click", ()=>{
        const colorIndex = getRandomInt(0,colors.length);
        body.style.backgroundColor = colors[colorIndex];
        flipBtn.innerText = `Flip! ${colors[colorIndex]}`;
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

changeColor(); 
        //=> 한 번만 실행되고 버튼을 계속 눌러도 실행이 안 된다. 왜 그러지?
        //=> 왜 안 되는지 알았다. 처음에 colorIndex를 클릭이벤트 함수 밖에서 설정했다.
        // 그런데 그렇게 하면 함수는 한 번만 실행되고, 때문에 colorIndex값도 한 번만 설정된다.
        // 즉, 버튼을 누를 때마다 값이 바뀌는 게 아니라, 브라우저가 한 번 실행되고 나면 새로고침
        // 할 때까지 값이 변하지 않고 고정되는 것이다.
        // 그래서 colorIndex의 할당을 버튼이 눌릴 때마다 즉, 클릭이벤트 함수 안에다가 넣으니 
        // 클릭을 할 때마다 colorIndex의 값이 바뀌면서 배경색도 변하게 되었다.

        //=> 그런데 왜 getElementByClassName 하면 실행이 안 되지>
        // 걔로 flipBtn을 가져오면 addEventListener가 실행이 안 된다.
        // 아, getElement로 가져오면 array-like로 가져온단다. 즉, 여러 개를 가져온단다. 맞나?