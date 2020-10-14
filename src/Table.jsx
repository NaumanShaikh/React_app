import React, { Component } from "react";
import './App.css';

import { useEffect, useState } from 'react';
import Menus from './menu.jsx';
import PopUp from './PopUp.js';
class Table extends Component {
   constructor(props) {
      super(props); 
      this.state = { 
         seen: false,
         count:4,
         students: [
            { id: 1, name: 'Wasif', Username: 'wasif', email: 'wasif@email.com' ,Action:true},
            { id: 2, name: 'Ali', Username: 'ali', email: 'ali@email.com' ,Action:true},
            { id: 3, name: 'Saad', Username: 'saad', email: 'saad@email.com' , Action:true},
            { id: 4, name: 'Asad', Username: 'asad', email: 'asad@email.com' ,Action:true}
         ]
      }
   }

  
    togglePop = () => {
      this.setState({
        seen: !this.state.seen
      });
    };

   renderTableHeader() {
      let header = Object.keys(this.state.students[0])
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

  

  increment()
  {
   this.setState({
      count:this.state.count+1
   });
     
  }

   addTableData(data)  {

      this.setState({
         students:this.state.students.concat(data)
      });


   }

   handleClick() {
      return(
         <div>
   <Menus/>
   </div>
      );
    }
  
   renderTableData() {
      return this.state.students.map((student, index) => {
         const { id, name, Username, email } = student ;
         return (
            
            <tr key={id}>
               <td>{id}</td>
               <td>{name}</td>
               <td>{Username}</td>
               <td>{email}</td>
               <td><button onClick={this.togglePop}>Edit</button></td>
            </tr>
         )
      })
   }

       render() {
      return (
         <div className="table-content">
            <h1 id='title'>Employee Table</h1>
            <table id='students'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
            <div>
            {this.state.seen ? <PopUp toggle={this.togglePop}
            count={this.state.count}
            increment={this.increment.bind(this)}
            Student={this.state.students}
            addTableData={this.addTableData.bind(this)}
          /> : null}
               </div>
         </div>
      )
   }

}

export default Table;