import React, { Component } from 'react';
import './serch-panel.css';
export default class SerchPanel extends Component{
  
  onChange = (e) => {
    this.props.onSearchItem(e.target.value);
  }

  render(){
    return(
      <input type="text"
              className="form-control search-input"
              placeholder="type to search" 
              onChange={this.onChange}/>
    ) 
  }
}
