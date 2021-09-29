import logo from './logo.svg';
import './App.css';

import React,{Component} from 'react';
import FirstComponent from './components/FirstComponent'
import SecondComponent from './components/SecondComponent/'
import ThirdComponent from './components/ThirdComponent'

import Counter from './components/counter/counter'

class App extends Comment {
  render (){
    return (
      <div className="App" >
        <LearningComponents></LearningComponents>
      </div>
    );
  }
}

class LearningComponents extends Component{
  render (){
    return (
      <div className="LearningComponents"
      >
        My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

export default App;
