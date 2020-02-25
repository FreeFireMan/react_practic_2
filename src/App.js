import React from 'react';
import logo from './logo.svg';
import './App.css';
import Count from "./componets/count/Count";
import Button from "./componets/button/Button";

class App extends React.Component {
  constructor(props){
    super(props);
    console.log("constructor");

    this.state = {
      count: 0,
      data: null
    }
   // this.hadler = this.hadler.bind(this);
  }


  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUnmount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("prevProps");
    console.log(prevProps);
    console.log("prevState");
    console.log(prevState);

  }

  hadler =()=> {
    this.setState({
      count: this.state.count+1
    })
  }


  render() {
    console.log("render");
    const {count,data} = this.state;
    return (
      <div className="App">
        <Count count={count}/>
        <Button myFunc={this.hadler}/>

      </div>
    );

  }


}

export default App;
