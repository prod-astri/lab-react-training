import react from "react";
import { useState } from 'react';

function LikeButton() {
    const setInitialValue = () => {
      console.log('set initial value');
      return 0
    }
  
    const [count, setCount] = useState(0);
  
    const clickHandler = () => {
      setCount(count => count + 1);
    }
  
    return (
      <div className="Likebutton">
          <button onClick={clickHandler}> {count} likes</button>
      </div>
    );
  }
  
  export default LikeButton;