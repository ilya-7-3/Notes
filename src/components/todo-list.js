import React from 'react';
import TodoListItem from './todo-list-item';
import './todo-list.css';
const TodoList = ({todos,onDeleted,todoSearch,
  onToggleDone,onToggleImportant,onEdit}) => {
    if(todoSearch.length!==0){
      todos=todoSearch;
      
    }
    
    const elements = todos.map((item) =>{
        return(
            <li key={item.id} className="list-group-item">
            <TodoListItem 
            {...item}
            onDeleted={()=>onDeleted(item.id)}
            onToggleDone={()=>onToggleDone(item.id)}
            onToggleImportant={()=>onToggleImportant(item.id)}
            onEdit={()=>onEdit(item.id,item.label)}/>
        </li>
        )
    })

    return(
        <ul className="list-group todo-list">
        { elements }
      </ul>
    )
  }

export default TodoList;  