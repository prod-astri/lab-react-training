function IdCard (props) {
    return (
        <div className="rowFlex borderOne">
        <img
        src={props.picture}
        className="profile"
        alt="profile pic"
        />
        <div className="tinyMargin">
            <p><b>First Name: </b>{props.firstName} </p>
            <p><b>Last Name: </b>{props.lastName} </p>
            <p><b>Gender: </b>{props.gender} </p>
            <p><b>Height: </b>{props.height} </p>
            <p><b>Birth: </b>{props.birth.toLocaleDateString()} </p>
            </div>
        </div>
        );
    }
    
    export default IdCard;