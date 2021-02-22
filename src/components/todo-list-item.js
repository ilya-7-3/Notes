import React, {Component} from 'react';
import './todo-list-item.css';
export default class TodoListItem extends Component{

    
    render(){
        const {label,onDeleted,
        onToggleDone,onToggleImportant,
        done,important} = this.props;
        let classNames = 'todo-list-item';
        if(done){
            classNames +=' done';
            
          }
        else{
          classNames.replace(/done/g, '');
        }
        if(important){
          classNames +=' important';
        }
        else{
          classNames.replace(/important/g, '');
        }
          
          
        return (
            <span className={classNames}>
              <span
                className="todo-list-item-label"
                onClick={onToggleDone}>
                {label}
                
              </span>
        
              <button type="button"
                      className="btn btn-outline-success  float-right"
                      onClick={onToggleImportant}>
                <i className="fa fa-exclamation" />
              </button>
        
              <button type="button"
                      className="btn btn-outline-danger  float-right"
                      onClick={onDeleted}>
                <i className="fa fa-trash-o" />
              </button>
            </span>
          );
    }
} 
    