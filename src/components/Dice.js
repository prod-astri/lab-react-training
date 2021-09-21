import react from "react";
import { useState } from 'react';

function Dice () {
    let randomDice = '../img/dice' + Math.floor(Math.random()*5 + 1) + '.png';
    const setInitialValue = () => {
        console.log('set initial value');
        return 2;
    }
    
    const [dice, clickIt] = useState(setInitialValue);
    
    const clickHandler = () => {
        clickIt(dice => {
            randomDice = '../img/dice-empty.png';
            setTimeout(function (){

                randomDice = '../img/dice' + Math.floor(Math.random()*5 + 1) + '.png'
              
              }, 5000);
        });
    }
    
    return (
        <div>
        <img onClick={clickHandler}
        src={randomDice}
        className="profile"
        alt="profile pic"
        />
        </div>
        );
    }
    
    export default Dice;