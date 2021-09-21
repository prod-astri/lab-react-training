function Random (props) {
    console.log(props)
    const range = parseInt(props.max) - parseInt(props.min) ;
    const randomNumber = Math.floor(parseInt(props.min) + Math.random()*range);
    return (
        <div>
        <p>Random value between {props.min} and {props.max} =&gt; {randomNumber}</p>
        </div>
        );
    }
    
    export default Random;