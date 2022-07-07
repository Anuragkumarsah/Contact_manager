import React from 'react';

const cardContact = (props) =>{
    const {id, name, phoneNumber} = props.contacts;
    return(
        <div className="container">
                <div className="row">
                    <div className='col' style={{borderBottom: "0.5px solid grey"}}>
                        <div className="text-left">{name}</div>
                        <div className='text-left'>{phoneNumber}</div>
                    </div>
                    <div className='col-1' style={{borderBottom: "0.5px solid grey"}}>
                        <i
                         className='bi bi-trash text-end'
                         style={{margin: "0px 10px 0px 0px", fontSize:"25px", color:'red'}}
                         onClick = {()=>props.clickHandler(id)}
                         ></i>
                    </div>
                </div>
            </div>  
    );
}

export default cardContact;