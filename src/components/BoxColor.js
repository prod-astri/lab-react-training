import react from "react";

function BoxColor (props) {
    console.log(props)

    return (
        <div>
        <p style={{backgroundColor: "rgb(" + props.r + ', ' + props.g + ', ' + props.b, width: '10%', padding: '3em'}}>rgb{props.r},{props.g},{props.b}</p>
        </div>
        );
    }
    
    export default BoxColor;