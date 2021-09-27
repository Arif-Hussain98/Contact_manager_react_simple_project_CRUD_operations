import React from "react";

class AddContact extends React.Component{
    state = {
        name: "",
        email: ""
    };

    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory!")
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",  email:"" });
        this.props.history.push("/");
    }

    render(){
        return(
            <div className="ui main" style={{marginTop:"60px"}}>
                 <h2>Add Contact</h2>
                 <form className="ui form" onSubmit={this.add}>
                     <div className="field">
                         <label>Enter Name</label>
                         <input type="text"
                         name="name" 
                         placeholder="Enter Name"
                         value={this.state.name} 
                         onChange={(e) => this.setState({name:e.target.value})}></input>
                     </div>

                     <div className="field">
                         <label>Enter Email</label>
                         <input type="text"
                          name="email" 
                          placeholder="Enter Email"
                          value={this.state.email} 
                          onChange={(e) => this.setState({email:e.target.value})}></input>
                     </div>
                     <button className="ui button blue">ADD</button>
                 </form>
            </div>
        )
    }
}
export default AddContact;