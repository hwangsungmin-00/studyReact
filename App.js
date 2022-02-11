/*import React from 'react';
import Say from './Say';
import EventPractice from './EventPractice';*/

//import React from 'react';

/*const App=() => {
  return <Say />;
};*/
/*
const App=()=>{
  return <EventPractice />;
};*/
//import MyComponent from './MyComponent';

/*const App=()=>{
  return 
  <MyComponent name="React" favoriteNumber={1}>
    리액트
  </MyComponent>;
};*/

/*import React, { Component } from 'react';
import ValidationSample from './ValidationSample';
class App extends Component {
  render() {
    return (
      <ValidationSample/>
    );
  }
}
export default App;*/
/*
import React, { Component } from 'react';
import IterationSample from './IterationSample';

class App extends Component {
  render(){
    return (
      <IterationSample/>
    );
  }
}

export default App;*/

import React from 'react';
import './App.css'

function App()
{
  const name='리액트';
  const style={
    backgroundColor: 'black',
    color:'aqua'
  };

  return <div style={style}>{name}</div>
}

export default App;