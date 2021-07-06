/*
1일차 - 대충 만들었다.
2일차 - 최신기록이 표시는 되는데, 최신 순서로 되는 게 아니다. 최근에 눌렀던 순서대로 값을 가져와야 한다.
*/

const myList = document.getElementById("myList");
const urls = [];
//이렇게 해놓으면 리스트의 값들을 순서를 다 맞춰야 한다.
//애초에 딕셔너리를 쓰니까 키와 벨류로 이름과 url을 짝 지어도 될 거 같긴 한데... 
const urlList = {
    links : [
        "https://naver.com",
        "https://google.com",
        "https://facebook.com",
    ],
    linksName : [
        "네이버",
        "구글",
        "페이스북",
    ],
    count : {
        "https://naver.com":0,
        "https://google.com":0,
        "https://facebook.com":0,
    }
};

// 마우스 클릭 되는 대상을 가져와서 localstorage에 저장한다. 키값과 value값은 같다.
function saveValue(){
    document.addEventListener("click", (e)=>{
        //e.preventDefault()
        for (let i = 0; i < urls.length; i++) {
            if(urls[i] == e.target){
                //마우스로 누른 url을 localstorage에 저장한다.
                localStorage.setItem(urls[i],e.target);
                //마우스로 눌린 url을 카운트를 센다?
                if(e.target == "https://facebook.com"){
                    urlList.count["https://facebook.com"] +=1;
                    localStorage.setItem("facebookCount",urlList.count["https://facebook.com"]);
                }

                if(e.target == "https://naver.com"){
                    urlList.count["https://naver.com"] +=1;
                    localStorage.setItem("naverCount",urlList.count["https://naver.com"]);
                }
                

                if(e.target == "https://google.com"){
                    urlList.count["https://google.com"] +=1;
                    localStorage.setItem("googleCount",urlList.count["https://google.com"]);
                }
            }
        }
    });
}

// 키값을 매개변수로 받아서 localstorage에 저장된 value를 가져온다. 키 값은 해당 사이트의 url이다.
function displayRecentList(key){
    saveValue();
    const recentList = document.getElementById("recentList");
    const value = localStorage.getItem(key);
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = value;
    a.innerText = value;
    li.appendChild(a);
    recentList.append(li);
}

// 링크를 클릭했을 때, 클릭된 링크가 무엇인지 알아야 한다. 그리고 그 링크의 값을 가져와야 한다.
//-> 링크를 저장하는 것 까지는 된다. 문제는 이게 화면에 표시가 안 된다.
// 일단 사이트 링크를 js에서 저장하고, 화면에 표시할 것이다.
function showLinks(){
    for (let i = 0; i < urlList.links.length; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = urlList.links[i];
        a.innerText = urlList.linksName[i];
        li.appendChild(a);
        myList.appendChild(li);
        urls.push(a.href);
        displayRecentList(a.href); // 값이 localstorage를 통해 저장은 되는 것 같다. 그런데 화면에 표시가 안됨        
    }
}

function init(){
    showLinks();
}
init();

//--> 자주 왔다 갔다 한 건 어떻게 측정하는 거야. 잘 모르겠다. 얘는 그만 포기한다.