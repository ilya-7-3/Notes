import { render } from '@testing-library/react';
import React , {Component} from 'react';


export default class ItemStatusFilter extends Component{
  

  
  render(){
    const {onClickActive,onClickAll,onClickDone}=this.props;
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info"
                onClick={onClickAll}>All</button>
        <button type="button "
                onClick={onClickActive}
                className="btn btn-outline-secondary">Active</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={onClickDone}>Done</button>
      </div>
    );
  }
}