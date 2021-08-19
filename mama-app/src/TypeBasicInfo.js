import React, { useState } from 'react';
import StoreInfo from './StoreInfo';

const TypeBasicInfo = ()=>{
    const [name, setName] = useState("")
    const [fields, setFields] = useState("")
    const [menu, setMenu] = useState("")
    return(
        <div>
            <label htmlFor="storeName">가게 이름 입력</label>
            <input className="storeName" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <label htmlFor="fields">가게 업종 입력</label>
            <input className="fields" value={fields} onChange={(e)=>{setFields(e.target.value)}}></input>
            <label htmlFor="storeMenu">가게 메뉴 입력</label>
            <input className="storeMenu" value={menu} onChange={(e)=>{setMenu(e.target.value)}}></input>
            <StoreInfo name={name} fields={fields} menu={menu} />
        </div>
    )
}

export default TypeBasicInfo