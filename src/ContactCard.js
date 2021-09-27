import React from "react"
import {Link} from 'react-router-dom'
import user from "../src/images/user.png"
const ContactCard = (props) =>{
    const {id, name, email} = props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" /> 
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px", float:"right"}}
            onClick={()=> props.clickHandler(id)}
            ></i>
            <Link 
            to={{pathname:`/edit`,state: {contact:props.contact}}}>
            <i className="edit alternate outline icon" style={{color:"blue", marginTop:"7px", marginRight:"8px", float:"right"}}
            ></i>
            </Link>
         </div>
    );
}

export default ContactCard;