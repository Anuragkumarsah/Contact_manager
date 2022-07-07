import React from "react";
import {Link} from 'react-router-dom';
class AddContact extends React.Component {
    state = {
        name: "",
        phoneNumber: ""
    }

    add = (e) =>{
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", phoneNumber: ""});
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <div>
                    <h2 style={{ fontWeight: "bold", margin: "15px" }}>Add Contact</h2>
                    <form onSubmit={this.add}>
                        <div className="col-auto">
                            <label className="form-label" style={{ fontWeight: "bold", margin: "15px" }}>Name</label>
                            <input type="text" name="name" placeholder="Input Name here" className="form-control" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                        </div>
                        <div className="col-auto">
                            <label className="form-label" style={{ fontWeight: "bold", margin: "15px" }}>Phone Number</label>
                            <input type="text" name="Number" placeholder="Input Phone Number here" className="form-control" value={this.state.phoneNumber} onChange={(e) => this.setState({ phoneNumber: e.target.value })} />
                        </div>
                        
                            <button className="btn btn-primary" style={{ margin: "15px" }}>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddContact;