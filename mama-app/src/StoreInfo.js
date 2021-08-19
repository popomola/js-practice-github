import React, { useState } from 'react';

const StoreInfo = (props)=>{

    return(
        <div>
            <span>{props.name}</span>
            <span>{props.fields}</span>
            <span>{props.menu}</span>
        </div>
    )
}

export default StoreInfo
