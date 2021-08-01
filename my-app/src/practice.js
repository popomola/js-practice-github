import React from "react";
import {useState} from "react";

function Practice() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);

    const makeConosole = ()=>{
        console.log(name);
        console.log(number);
    }

    return (
      <div>
          <form>
              <label htmlFor="input-name">이름</label>
              <input
                id="input-name"
                type="text"
                value={name} 
                onChange={(e)=>{
                    setName(e.target.value)
                    }}></input>
              <label htmlFor="input-number">숫자</label>
              <input 
              id="input-number" 
              type="number" 
              value={number} 
              onChange={(e)=>{
                  setNumber(e.target.value)
                  }}></input>
              <button type="button" onClick = {makeConosole}>제출</button>
          </form>
          <p>Name:{name}</p>
          <p>Name:{number}</p>
      </div>
    );
}
  
export default Practice;