import react from "react";

function Greetings (props) {
    console.log(props)
    let greeting ='';
    if (props.lang === 'fr'){
        greeting = 'Halôôôôôôôô'
    } else if (props.lang === 'de'){
        greeting = 'Guten Tag'
    } else if (props.lang === 'es'){
        greeting = 'Ola'
    } else {
        greeting = 'Hi'
    }
    return (
        <div>
        <p>{greeting} {props.children}</p>
        </div>
        );
    }
    
    export default Greetings;