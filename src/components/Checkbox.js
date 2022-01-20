import React, { useState } from 'react';

export default function Checkbox (props){

    const [ checked, setChecked ] = useState (false)

   function  toggle () {
        setChecked(!checked)
    }


    const checkedClass = checked ?  'checked' : ' ';
    const containerClass = "checkbox ${checkedClass} ".trim()
    return (
        <div className={containerClass} onClick={toggle}/>
    )
}