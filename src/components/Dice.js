import { useState } from 'react';

function Dice () {
    function randomSix(){return Math.floor(Math.random()*5 + 1)}
    
    const [image, setImage] = useState('/img/dice' + randomSix() + '.png')
    console.log(image)
    const clickHandler = () => {
        setImage(image => {
          return '/img/dice-empty.png'
        });
        setTimeout(() => setImage(image => {
          return '/img/dice' + randomSix() + '.png'
        }), 1000)
      }

      // function randomSix() { return Math.floor(Math.random() * 5 + 1) }

      // const [image, setImage] = useState('/img/dice' + randomSix() + '.png')
      // console.log(image)
      // const clickHandler = () => {
      //   setImage('/img/dice-empty.png');
      //   setTimeout(() => setImage('/img/dice' + randomSix() + '.png'), 2000);
      // }
      
    return (
        <div>
        <img onClick={clickHandler}
        src={image}
        className="dicePic"
        alt="dice"
        />
        </div>
        );
    }
    
    export default Dice;