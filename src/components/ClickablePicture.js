import react from "react";
import { useState } from 'react';


function ClickablePicture (props) {
    const setInitialValue = () => {
        console.log('set initial value');
        return false
    }
    
    const [clicked, setClicked] = useState(setInitialValue);
    
    const clickHandler = () => {
        setClicked(clicked => !clicked);
    }
    
    return (
        <div class="rowFlex borderOne">
        <img onClick={clickHandler}
        src={clicked ? props.img : props.imgClicked}
        className="profile"
        alt="profile pic"
        />
        </div>
    
        );
    }
    
    export default ClickablePicture;