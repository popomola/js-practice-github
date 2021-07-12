import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <info/>
    </div>
  );
}
 
function info(){
  const title = "This is my title"; // 변수를 return 이전에 선언을 한다.
  const isShowing = false; // 얘도 사용 가능하다.
  
  //-->기본적으로 결국 react도 js기반이다. js문법을 사용 가능하다.
  //--> jsx는 html 속에서 js문법을 사용할 수 있게 해준다. 
  //--> 다만 사용하려면 {}이 괄호 안에서 사용해야 하는 듯 하다.

  return(
    <div>
      <h1>{isShowing ? title : ""}</h1>
      <p>Write your name</p>
    </div>
  );
}

export default App;
