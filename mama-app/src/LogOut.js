import React, { useState } from 'react';

const LogOut = ()=>{

    return(
        <div>
            <button onClick={()=>{alert("로그아웃")}}>로그아웃</button>
        </div>
    )
}

export default LogOut