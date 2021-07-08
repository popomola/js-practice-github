
/* 1회차 -> Array, push, append, appendChild를 사용해봤다*/
// const container = document.getElementById("container");
// const listContainer = document.getElementById("listContainer");
// const li = document.createElement("li");
// const myArray = ["Tom", "James","Jane"];
// const yourArray = new Array();

// const myObject = {
//     name1:"Minne",
//     name2:"Wanda",
// }
// //push함수는 Array오브젝트의 함수다. 
// //오브젝트를 array에 추가할 수 있다. 그런데 그냥 오브젝트 통째로 넣으면 오브젝트 안의 값들이 그대로 하나의 인덱스 안에 담긴다.
// myArray.push(myObject);
// //하지만 오브젝트에서 key를 통해 특정 값만을 추가할 수 있다. 
// //때문에 오브젝트로서가 아니라 하나의 값으로서 array에 추가가 된다.
// myArray.push(myObject.name1);

// li.append(myArray);
// //appendChild는 오직 node만을 매개변수로 받을 수 있다. 즉, 타입이 node가 아니라 예를 들면 위에서처럼 선언된 array라면
// //appendChild를 통해 html element에다가 값을 붙여넣을 수 없다.
// //appendChild에서 말하는 Child는 html elements를 말한다.
// listContainer.appendChild(li);

/*---------------------------------------------------------------------------------------------------*/

/* 2회차 ->unshift를 사용했다 */
// const container = document.getElementById("container");
// const listContainer = document.getElementById("listContainer");
// const li = document.createElement("li");
// const myArray = ["Tom", "James","Jane"];
// const yourArray = new Array();

// const myObject = {
//     name1:"Minne",
//     name2:"Wanda",
// }

// //unshift를 통해 array의 맨 앞에다가 새롭게 값을 추가할 수 있다.
// //다만  unshift는 새로운 값을 맨 앞에 추가하기 위해 array리스트 안에 있는 값들을
// //하나씩 뒤로 밀기 때문에 array안에 있는 모든 값들을 한 칸씩 뒤로 밀어야 해서 오래 걸린다.
// //그래서 대부분 맨 뒤에다가 값을 추가하는 push함수를 사용한다고 한다. 
// myArray.unshift(myObject.name1);
// li.append(myArray);
// listContainer.appendChild(li);

/*---------------------------------------------------------------------------------------------------*/

/* 3회차 ->array 안에다가 function을 포함한 object를 추가하면 어떻게 될까 해본다. */
// const container = document.getElementById("container");
// const listContainer = document.getElementById("listContainer");
// const btn = document.getElementById("btn");
// const li = document.createElement("li");
// const myArray = ["Tom", "James","Jane"];
// const yourArray = new Array();

// const myObject = {
//     name1:"Minne",
//     name2:"Wanda",
//     //오브젝트 안에서 함수를 설정할 수 있다.
//     //키값이 함수의 이름이 되고, 함수 정의는 array function의 형식을 취한다.
//     //심지어 매개변수도 받을 수 있다. 당연한 건가?
//     meme : (name)=> {
//         console.log("Hello "+name);
//     },
    
//     //똑같은 오브젝트 안에 속해있는데 meme를 함수로 받지 못한다. 왜징?
//     //youyou : btn.addEventListener("click",meme),
// }
// //오브젝트 안에서 정의된 함수에 접근하는 방식이다.
// //당연히 이런식으로 호출하면 함수가 실행된다.
// myObject.meme("Tom!");
// //얘는 실행은 된다. 그런데 매개변수로서 클릭이벤트를 받기 때문에 쓸모가 없다.
// //즉, 클릭이벤트로 실행할 함수는 그냥 오브젝트에 있는 함수를 쓰는 게 아니라
// //바깥에다가 독립적으로 만들어주는 게 나을 것 같다.
// btn.addEventListener("click",myObject.meme);

/*---------------------------------------------------------------------------------------------------*/

/* 4회차 ->이번에는 class를 활용해본다. 사실 javascript에서 class개념이 내게 너무 애매하게 다가온다. */
// class MyClass{
//     //constructor없이 this 이 지랄을 하니 안 된다고 한다. 
//     //this.age

//     //하나 중요한 걸 알아냈다. 처음에 constructor를 정의할 때 매개변수를 설정하지 않고,
//     //그냥 this.age, this.name만 constructor 함수 안에다가 입력하기만 했다.
//     //그렇게 하니까 이 MyClass 클래스의 객체가 매개변수를 데이터로 받지 못하더라.
//     //즉, construnctor 함수의 매개변수를 설정하지 않고, 
//     //this.age=age이런 식으로 할당을 해주지 않으니 새롭게 만든 객체가 제대로 생성되지 못했다.
//     //즉, class의 새로운 객체를 생성할 때, 각각의 객체마다 다른 값을 할당해주고 싶다면
//     //constructor함수의 매개변수를 통해 지정을 해주고,
//     //this.age=age 이렇게 할당을 해줘야 한다.
//     //한편 this는 객체를 의미한단다.
//     //this.age라면 새로 생성된 객체의 age를 의미한다.
//     constructor(age, name){
//         this.age = age; // 매개변수 age를 this.age에 할당한다. 즉, 객체의 age에 객체 최초 선언 시 매개변수로 할당한 age값을 집어넣는다.
//         this.name = name;
//     }

//     greeting(){
//         console.log("Hello " + "your age is" + this.age + this.name);
//     }
    
//     secondGreeting(name){
//         //여기서 name은 this.name과도 다르고,
//         //constructor의 매개변수로 입력받은 name과도 전혀 다르다.
//         //여기서의 name은 순전히 class 내부의 secondGreeting 함수가 받는 매개변수다.
//         console.log("Hello " + name); 
//     }
// }
// //Array를 객체로 만들 때랑 색이 다르다. Array는 object라는데... class랑은 어케 다르지?
// //const array = new Array();
// //new키워드를 통해 객체를 생성한다.
// const me = new MyClass(10, "Tom");
// //객체가 생성되었다면, class내부의 함수를 사용하고 싶다면 이런식으로 ".함수이름"해서 함수를 호출할 수 있다. 
// me.greeting();
// me.secondGreeting("Jannie");
/*---------------------------------------------------------------------------------------------------*/

/* 5회차 -> 문득 궁금해졌다. class의 함수를 addEventListner에다가 쓸 수 있나? */
// const btn = document.getElementById("btn");
// class MyClass{

//     constructor(name){; 
//         this.name = name;
//     }

//     greeting(){
//         console.log("Hello " + this.name);
//     }
    
//     secondGreeting(name){
//         console.log("Hello " + name); 
//     }
// }

// //class의 function에 접근하는 방법이 객체생성밖에는 없으니 일단 객체를 생성한다.
// const me = new MyClass("Tom");
// //얘는 분명하게 객체에게 할당된 매개변수를 인식한다.
// me.greeting();
// //그런데 얘는 처음 객체를 생성할 때 할당했던 초기값을 전혀 인지하지 못한다.
// //확실한 건 addEventListner로 함수를 이상한데서 끌어다 쓰면 안 될 것 같다.
// //그냥 arrow function을 사용하든지, 따로 생성된 function을 사용하든지 해야 할 것 같다.
// btn.addEventListener("click", me.greeting);

/*---------------------------------------------------------------------------------------------------*/

/* 6회차 -> addEventListner를 좀 다뤄봐야겠다. */
const btn = document.getElementById("btn");
//const img = document.getElementById("img");
const array = ["tom","jasmine","mickey"];

//그냥 이렇게 하면 drag가 될 줄 알았는데 안 된다. 다른 방법이 필요한가보다.
// img.addEventListener("drag",()=>{console.log("drag")});
// img.addEventListener("dragstart",()=>{console.log("drag Start")});
// img.addEventListener("dragend",()=>{console.log("drag End")});
//-->일단 drag event는 나중에 하는 걸로.

function greet(){
    console.log(`Hello!`);
}

btn.addEventListener("click",()=>{
    //forEach는 array리스트에 있는 값(인덱스) 하나하나에 대해서 매개변수 안의 함수를
    //실행하는 함수다.
    //이게 실행은 되는 데 다 실행하고 나서 TypeError가 뜬다.아마 greet함수에 매개변수를
    //할당하는 방식에 문제가 있는 듯 한디..
    //callbackfunction의 형식으로 할당해야 하는데 괄호를 넣어서 함수를 호출해버리는 게 문젠 거 같기는 하다.
    //array.forEach(greet(array));
    
    //얘는 잘 실행 된다. 괄호 넣어서 함수를 호출하는 게 아니라 콜백 함수 형식으로 넣어주니 잘 된다.
    array.forEach(greet);
    //-->그런데 문제는 어떻게 array의 값들을 하나하나 매개변수로서 가져오냐다.
    

});

