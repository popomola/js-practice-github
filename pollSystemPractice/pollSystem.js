let poll = {
    question:"이 옷이 괜찮나요?",
    answers:[
      "예","아니오"
    ],
    pollCount:20, // 이 값을 전체 참여자 수로 할당할 수 있으면 좋겠다. 그런데 그러려면 온라인 DB에 연결을 해야 한다.
    answersWeight:[5,15], // 이 값 또한 실제 유저들이 선택한 비율대로 유동적으로 바뀌면 좋겠다만 DB에 연결해야 한다.
    selectedAnswer:-1
  };
  
let pollDOM = {
question:document.querySelector(".poll .question"),
answers:document.querySelector(".poll .answers")
};
        //--> 얘네들을 오브젝트 안에다가 넣어놓은 이유는 굳이 하나하나 
        //    변수를 일일이 설정해주는 것보다 편하기 때문.


//html에서 element를 찾아서 해당 요소 안에다가 값을 넣어준다.
pollDOM.question.innerText = poll.question;
//html에서 answer element를 찾아서 안에다가 얘네를 넣어준다. 
//이때 map은 array에 저장된 값들에 대해 하나하나씩 함수를 실행시키고, 실행시킨 결과 값을 새로운 array에 담아주는 함수
//또한 innerHtml이라고 쓴 덕분에 return값이 html로서 기능을 수행할 수 있게 된다.
//만약 innerText를 썼다면 return값이 html로 표현되는 게 아니라 저 문장 그대로 string이 반환됐을 것이다.
pollDOM.answers.innerHTML = poll.answers.map((answer,i)=>{
    return (
    `
        <div class="answer" onclick="markAnswer('${i}')">
            ${answer}
            <span class="percentage-bar"></span>
            <span class="percentage-value"></span>
        </div>
    `
    );
}).join(""); //join함수는 array에 있는 값들을 구분자를 기준으로 분류하여 새로운 string값을 반환함.
             //map은 새로운 array를 만들어내기 때문에 join을 당연히 쓸 수 있다.

function markAnswer(i){
    poll.selectedAnswer = +i;
    try {
      document.querySelector(".poll .answers .answer.selected").classList.remove("selected");
    } catch(msg){}
    document.querySelectorAll(".poll .answers .answer")[+i].classList.add("selected");
    showResults();
  }
  
function showResults(){
    let answers = document.querySelectorAll(".poll .answers .answer");
    for(let i=0;i<answers.length;i++){
      let percentage = 0;
      if(i == poll.selectedAnswer){
        percentage = Math.round(
          (poll.answersWeight[i]+1) * 100 / (poll.pollCount+1)
        );
      } else {
        percentage = Math.round(
          (poll.answersWeight[i]) * 100 / (poll.pollCount+1)
        );
      }
      
      answers[i].querySelector(".percentage-bar").style.width = percentage + "%";
      answers[i].querySelector(".percentage-value").innerText = percentage + "%";
    }
}
