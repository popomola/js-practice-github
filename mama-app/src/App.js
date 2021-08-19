import React, { useState } from 'react';
import Modal from 'react-modal';
import MyStoreUplaod from './MyStoreUplaod';
import LogOut from './LogOut';
import ShowStore from './ShowStore';
import StoreInfo from './StoreInfo';


// 컴포넌트 간에 데이터를 주고받을 수 있는 방법을 알아내야 한다.
// 그래서, BasicInfo컴포넌트에서 입력된 값이 이 App 컴포넌트에서 사용될 수 있도록
const App = ()=>{
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [start, setStart] = useState("")
  return(
    <div>
      <ShowStore/>
      <button onClick={()=>{setIsModalOpen(true)}}>정보 살피기</button>
      <Modal 
      isOpen={isModalOpen}
      ariaHideApp={false}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
          position: 'absolute',
          top: '40px',
          left: '40px',
          right: '40px',
          bottom: '40px',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px'
        }
      }}
      >
        영천문화
        <StoreInfo/>
        <button onClick={()=>{setIsModalOpen(false)}}>창 닫기</button>
        </Modal>
        
        <button onClick={()=>{setStart("start")}}>기업 로그인</button>
        {start == "start" && <MyStoreUplaod/>}
        {start == "start" && <LogOut/>}

    </div>
  )
}

export default App;
