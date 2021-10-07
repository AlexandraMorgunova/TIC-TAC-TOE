import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props)
     this.state={
     squer:Array(9).fill(null),
     count:0
     }
     this.winner=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
     ]
  }
  isWinner=()=>{
    let s=(this.state.count%2===0)?'X':'O';
    for(let i=0; i<8;i++){
      let line=this.winner[i];
      if(this.state.squer[line[0]]===s && 
        this.state.squer[line[1]]===s&&
      this.state.squer[line[2]]===s){
        alert(s+ '  WIN')
        setTimeout(()=>{
          this.setState({squer:Array(9).fill(null)})
          this.setState({count:0})
        },300)
      }
    }
  }

  clickHendler=(event)=>{
    //data-номер квадрата по которому кликнули
  let data=event.target.getAttribute('data');
  let currentSquer=this.state.squer;//состояние игрового поля
  if(currentSquer[data]===null){
  currentSquer[data]=(this.state.count % 2===0)?'X':'O';
  this.setState({
    count:this.state.count+1
  })
  this.setState({
    squer:currentSquer
  })
  this.isWinner()
}
else{
  alert('так нельзя')
}
  }

  render(){
  return (
  
    <div className="tic-tac">
     <div className="ttt" onClick={this.clickHendler} data="0">{this.state.squer[0]}</div>
     <div className="ttt" onClick={this.clickHendler} data="1">{this.state.squer[1]}</div>
     <div className="ttt" onClick={this.clickHendler} data="2">{this.state.squer[2]}</div>
     <div className="ttt" onClick={this.clickHendler} data="3">{this.state.squer[3]}</div>
     <div className="ttt" onClick={this.clickHendler} data="4">{this.state.squer[4]}</div>
     <div className="ttt" onClick={this.clickHendler} data="5">{this.state.squer[5]}</div>
     <div className="ttt" onClick={this.clickHendler} data="6">{this.state.squer[6]}</div>
     <div className="ttt" onClick={this.clickHendler} data="7">{this.state.squer[7]}</div>
     <div className="ttt" onClick={this.clickHendler} data="8">{this.state.squer[8]}</div>
    </div>
 
  );
  }
}

export default App;
