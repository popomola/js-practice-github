import React, { useState } from 'react';
import Modal from 'react-modal';
import TypeBasicInfo from './TypeBasicInfo';


const MyStoreUplaod = ()=>{
    const [isModalOpen, setIsModalOpen] = useState(false)
    return(
        <div>
            <button onClick={()=>{setIsModalOpen(true)}}>내 가게 추가하기</button>
            <Modal 
            isOpen={isModalOpen}
            ariaHideApp={false}
            >
            <TypeBasicInfo/>
            <button onClick={()=>{setIsModalOpen(false)}}>마치기</button>
            </Modal>
        </div>
    )
}

export default MyStoreUplaod