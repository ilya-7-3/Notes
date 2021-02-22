import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SerchPanel from './components/serch-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import AddPanel from './components/add-panel';

export default class App extends Component{
  maxId = 100;
  state = {
    todoData : [
      this.createNewItems('Drink Coffee'),
      this.createNewItems('Drink Tea'),
      this.createNewItems('Have a lunch')
    ],
    btnActive:'All',
    todoSearch:[],
    todoActive:[],
    todoDone:[]

  }
  onDeleted = (id) =>{
    this.setState(({todoData})=>{
      const newarray=[...todoData];
      newarray.map((item,i)=>{
        if(item.id === id){
           newarray.splice(i,1);
        }
        return newarray;
      })
      return{
        todoData:newarray
      }
    });
  }
createNewItems (label) {
  return{
    label:label,
    done:false,
    important:false,
    id:this.maxId++

  }
}

addItems = (text) => {
  const newItem = this.createNewItems(text);
  this.setState(({todoData})=>{
    const arr = [...todoData];
    arr.push(newItem);
    return{
      todoData:arr
    }
  });
}

onToggleImportant = (id) => {
  this.setState(({todoData})=>{
    const newarray=[...todoData];
    todoData.map((item,i)=>{
      if(item.id === id){
         newarray[i].important=!item.important;
      }
      return newarray;
    })
    return{
      todoData:newarray
    }
  });
}

onToggleDone = (id) => {
  this.setState(({todoData})=>{
    const newarray=[...todoData];
    todoData.map((item,i)=>{
      if(item.id === id){
         newarray[i].done=!item.done;
      }
      return newarray;
    })
    return{
      todoData:newarray
    }
  });
}

onSearchItem = (element) =>{
  if(element===''){
    this.setState({
      todoSearch:[]
    })
    return;
  }
  const {todoData,todoActive,todoDone}= this.state;
  let todos;
  switch(this.state.btnActive) {
    case 'All':
    todos = [...todoData];
      break
    case 'Active':  
    todos = [...todoActive];
      break
      case 'Done':    
      todos = [...todoDone];
      break
  
    default:
      break
    }
  const arr = todos.filter((el)=>{
    if(el.label.toUpperCase().indexOf(element.toUpperCase())===0){
      return true;
    }
  })
  this.setState({
    todoSearch:arr
  })
  console.log('Search',arr);
}

btnInfo=(e,i)=>{
  const btnGroup = document.querySelector('.btn-group').children;
  const btnArrray= Array.prototype.slice.call( btnGroup, 0 );
  btnArrray.forEach((item)=>{
    item.className = 'btn btn-outline-secondary';
  })  
    btnArrray[i].className='btn btn-info';  
  
}

onClickActive = (e) => {
  this.btnInfo(e,1);
  const arr = this.state.todoData.filter((el)=>{ 
    if(el.done===false) {
      return true;
    }
  });
  const btn='Active';
  this.setState({
    btnActive:btn,
    todoActive:arr,
    todoSearch:[]
    
  })
}
onClickAll = (e) => {
  this.btnInfo(e,0);
  const btn= 'All';
  this.setState({
    btnActive:btn,
    todoSearch:[]
  })
}
onClickDone = (e) => {
  this.btnInfo(e,2);
  const arr = this.state.todoData.filter((el)=>el.done);
  const btn= 'Done';
  this.setState({
    btnActive:btn,
    todoDone:arr,
    todoSearch:[]
  })
  
}

  render(){
    const doneCount = this.state.todoData.filter((el)=>el.done);
    const {todoData,todoSearch,todoActive,todoDone} = this.state;
    const todoCount = todoData.length - doneCount.length;
    let todos;
    console.log(this.state.btnActive);
    switch(this.state.btnActive) {
  case 'All':  
  todos = todoData;
  console.log(todos);
    break

  case 'Active':  
  todos = todoActive;
  console.log(todos);
    break
    case 'Done':  
  todos = todoDone;
  console.log(todos);
    break

  default:
    break
}

    
    return(
      <div className="container">
      <AppHeader toDo={todoCount} done={doneCount.length}/>
      <div className="top-panel d-flex">
        <SerchPanel 
        onSearchItem={this.onSearchItem}/>
        <ItemStatusFilter 
        onClickActive={this.onClickActive}
        onClickAll={this.onClickAll}
        onClickDone={this.onClickDone}/>
      </div>
      <TodoList todos={todos}
      todoSearch={todoSearch}
      onDeleted={this.onDeleted}
      onToggleDone={this.onToggleDone}
      onToggleImportant={this.onToggleImportant}/>
      <AddPanel
      addItems={this.addItems}/>  
    </div>          
    )
  }
}


ReactDOM.render(<App/>,document.getElementById('root'))