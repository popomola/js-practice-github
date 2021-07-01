//이미지를 추가할 수 있어야 한다.
//이미지 파일을 불러올 수 있어야 한다.
//Add버튼을 눌렀을 때 이미지 파일을 가져올 수 있는 창을 하나 띄운다.
//이미지가 파일 형태가 아닌 이미지 그 자체로 들어온다. 이미지의 크기는 가로세로 100으로 맞춘다.
//이미지가 특정 array나 list안에 다 들어가게 만드는 게 나을 것이다. 즉, 파일을 하나씩 추가할 때마다
//이미지를 담고 있는 array나 list에 값이 하나씩 추가되어 증가한다.
//가장 최근에 업로드 된 이미지 파일이 가장 맨 앞으로 추가되도록 한다.

/*//여러 개의 파일 중 첫 번째 파일에 접근할 수 있는 방법.
const selectedFile = document.getElementById("fileSelect").files[0];

//input을 숨기고 input 대신에 예쁘게 꾸며진 다른 element가 input의 일을 대신하는 것처럼 꾸미기
const fileSelectBtn = document.getElementById("fileSelectBtn"),
fileSelect = document.getElementById("fileSelect");

//input이 아닌 다른 element에다가 click이벤트를 넣어주고, 그 안에서는 사실 input element의 click이벤트를 실행시킨다.
fileSelectBtn.addEventListener("click", (e)=>{
    if(fileSelect){
        fileSelect.click();
    }
});*/ //=> 파일을 선택할 수 있는 방법일 뿐이다. 파일을 선택하는 것이지, 그것들을 가져오는 게 아니란 뜻.

/* 문제는 여러 개의 파일을 어떻게 화면에 나타나게(로딩) 하느냐다. */

// const add = document.querySelector(".add");
// const fileSelectBtn = document.getElementById("fileSelectBtn"),
// fileSelect = document.getElementById("fileSelect");

// //input이 아닌 다른 element에다가 click이벤트를 넣어주고, 그 안에서는 사실 input element의 click이벤트를 실행시킨다.
// fileSelectBtn.addEventListener("click", (e)=>{
//     if(fileSelect){
//         fileSelect.click();
//     }
// });
// //mdn사이트에 썸네일 볼 수 있게 해주는 기능은 소개가 되어 있다. 근데 어떻게 쓰는지 모르겠다...
// //다른 건 얘가 다 알아서 해주니까 file을 list로 만들 수 있는 방법을 아는 게 중요하다.
// function handleFiles(files) {
//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
  
//       if (!file.type.startsWith('image/')){ continue }
//       //img element를 만들어주고 그 안에다가 파일의 내용을 넣어준다.
//       const img = document.createElement("img");
//       img.classList.add("pic");
//       img.file = file;
//       add.appendChild(img);
  
//       const reader = new FileReader();
//       reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
//       reader.readAsDataURL(file);
//     }
//     //-->지금 이 상태로는 아무것도 아니다. 함수를 사용해야 한다. 매개변수로서 file list를 넣어줘야 한다.
// }   //   문제는 file 을 list에 담는 걸 어떻게 하는 지 모르겠다는 것이다.

// /* ************ */
// var fileInput = document.getElementById('fileSelect').files;
// var selectedFile;

// for (let i = 0; i < fileInput.length; i++) {
//     selectedFile = fileInput[i];   
//     handleFiles(selectedFile);
// }

const selectedFiles = document.getElementById("fileSelect");
const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    //버튼을 클릭하는 이벤트를 넣어줘야 console.log를 통해 file의 값들을 받아올 수 있다.
    //왜 그냥은 못 받아오지?
    console.log(selectedFiles.files);
});
