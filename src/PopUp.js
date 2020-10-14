import React, { Component } from "react";
import { useEffect, useState } from 'react';
import './App.css';

export default class PopUp extends Component {
constructor()
{
    super();
    this.state={
        name:'name',
        userName:'userName',
        email:'Email'
    };
}
setName(event){
    this.setState({
        name:event.target.value
    });
}

setUserName(event){
    this.setState({
        userName:event.target.value
    });
}

setEmail(event){
    this.setState({
        email:event.target.value
    });
}
  handleClick = () => {
    this.props.toggle();
  };

    saveData()
    {
    
    var count=this.props.count;
    console.log(count);
     var data=  { id: count+1, name: this.state.name, Username: this.state.userName, email: this.state.email ,Action:true};
     console.log(data);
     this.props.increment();
     this.props.addTableData(data);
    }


 
  render(){
    return (
      <div className="modal">
        <div className="modal_content">
         <div className='edit-header'>
            <span className='Edit'>Edit</span>
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          </div>
          <form>
            <label className='label-name'>
              Name:
            </label >
              <input type="text" id="Name" value={this.state.name} onChange={this.setName.bind(this)} />
            
            <br />
            <br/>
            <label className='label-username'>
              UserName:
              </label>
              <input type="text" id="UserName" value={this.state.userName} onChange={this.setUserName.bind(this)} />
            
            <br/>
            <br/>
            <label className='label-email'>
              Email:
              </label>
              <input type="text" id="Email" value={this.state.email} onChange={this.setEmail.bind(this)} />
            <br />
            <br/>
          </form>
          <div className='edit-footer'>
          <button onClick={this.handleClick}>Cancel</button>
          <button onClick={this.saveData.bind(this)}>Save</button>
          </div>
        </div>
      </div>
    );
  }
}
