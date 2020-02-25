import React, {Component} from 'react';

class Button extends Component  {

  myClick = ()=>{
    this.props.myFunc()
    console.log('click');
  };
    render() {
      return (
        <div>
          <button onClick={this.myClick}>ADD1</button>
        </div>
      );
    }
}

export default Button;
