import React, { Component } from 'react';
import './add-panel.css';
export default class AddPanel extends Component{
    state = {
        label:''
    }

    onChangeLabel = (e) =>  {
        this.setState({
            label:e.target.value
        })
    }
    
    onSubmit = (e) =>{
        e.preventDefault();
        if(this.state.label!==''){
        this.props.addItems(this.state.label);
        this.setState({
            label:''
        })
    }
    }

    render(){
        return(
        <form className="item-add-form d-flex"
        onSubmit={this.onSubmit}>
            <input type="text" 
            className="form-control"
            onChange={this.onChangeLabel}
            placeholder="What needs to be done"
            value={this.state.label}/>
            <button className="btn btn-outline-secondary">Add</button>
        </form>
    
        )
    }
}
