import React, {Component} from 'react';
import './Count.css'
//function Count({count})  {
function Count(props)  {

    return (
      <div className="myClass">
        <h1>{props.count}</h1>
      </div>
    );

}

export default Count;
