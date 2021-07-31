import React, {useState} from "react";
const words = [
    `양 대변인은 "안 선수에 대한 비이성적 공격에 반대하고 함께 싸우겠다고 해왔다"면서 "제가 이야기하는 것은 이 논쟁의 발생에서 '쇼트커트'만 취사선택해 '여성에 대한 혐오다'라고 치환하는 일부 정치인에 대한 비판"이라고 설명했습니다`,
    `이는 지난 28일 같은 매장 직원 1명이 처음으로 확진자로 판정받은 후 이와 관련해 나온 11번째 사례다. 첫 확진자가 나온 후 29일 백화점 직원 2명, 30일 직원 2명, 직원의 지인 5명이 확진 판정을 받았다. 이에 해당 백화점 매장 관련 확진자는 직원 6명, 직원의 지인 5명으로 총 11명이다.`,
    `지난해 만들어져 올 초 뜨거운 열풍을 일으켰던 오디오 플랫폼 '클럽하우스'(ClubHouse)가 다양한 오디오 플랫폼 경쟁 속에 존재감이 작아지고 있다. 여러 플랫폼이 경쟁에 뛰어들고, 크리에이터들에게 수익을 나눠주는 방향으로 이용자들을 모으는 곳도 생겼다. 이에 클럽하우스는 상징처럼 여겨진 '초대장' 시스템을 없애며 이용에 빗장을 풀었다.`,

]


const App = () => {
    const [num, setNum] = useState(0);
    const [word, setWord] = useState("시작을 눌러주세요");
    const [userinput, setInput] = useState("");

    function start(){
        setWord(words[num]);
        setNum(num+1);
        console.log(num);
        if(num === words.length){
            console.log("out");
            setNum(num-words.length);
        }
    }
    function getValue(e){
        setInput(e.target.value);
    }
    if(word === userinput){
        return <h1>정답</h1>

    }

    return(
        <div>
            <button 
            onClick={start}
            >
            시작
            </button>

            <p><span>{word}</span></p>

            <p>
            <input
            type="text" 
            value={userinput}
            onChange={getValue}
            placeholder="단어입력"
            >
            </input>
            </p>

            <hr/>
            <span
            >
            {userinput}
            </span>
            <p>
            <span>틀린 부분이 있어요... 빨리 쓰세요!</span>
            </p>
        </div>
    )
}

export default App