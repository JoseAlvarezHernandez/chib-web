import React, { Component } from 'react'

import './App.scss'

import {LoginComponent, RegisterComponent} from './components/auth'
import {RightSide} from './components/side/rightSide'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isLogginActive: true
    }
  }

  render(){
    const { isLogginActive } = this.state
    const current = isLogginActive ? 'LoginComponent' : 'RegisterComponent'
    const currentActive = isLogginActive ? 'login' : 'register'

    return(
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && <LoginComponent containerRef={ref => (this.current = ref)} />}
            {!isLogginActive && <RegisterComponent containerRef={ref => (this.current = ref)} />}
          </div>
          <RightSide 
            current={current}
            currentActive={currentActive}
            containerRef={ref => this.RightSide = ref} 
            onClick={this.changeState.bind(this)}
            />
        </div>
      </div>
    )
  }

  changeState() {
    const { isLogginActive } = this.state;
    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }

    this.setState(state => ({ isLogginActive: !state.isLogginActive}))
  }
}
