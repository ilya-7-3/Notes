import React, { Component } from 'react';
import './add-panel.css';
export default class AddPanel extends Component{
    state = {
        label:'',
        edit:null
    }    
    componentDidMount(){
       
    }
    componentDidUpdate(prevProps){
        if(prevProps.todoEdit!==this.props.todoEdit){
            const input = document.querySelectorAll('.form-control')[1];
            input.value=this.props.todoEdit[0].label;
            this.setState({
                edit:this.props.todoEdit,
                label:this.props.todoEdit[0].label
            });
        }
    }
    
    

    onChangeLabel = (e) =>  {
        this.setState({
            label:e.target.value
        })
    }
    
    onSubmit = (e) =>{
        e.preventDefault();
        if(this.state.label!==''){
            if(this.state.edit!==null){
                const arr = this.state.edit;
                arr[0].label=this.state.label;
                this.props.editTodoList(arr);
                this.setState({
                    label:'',
                    edit:null
                })
                return ;
            }
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
