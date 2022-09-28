import React, { Component } from 'react'

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      students: []
    }
  }
  
  componentDidMount(){
  }


  render() {
    return (
      <div>
        <h1>Hello Thieves</h1>
        <ul>
          <li>Student 1</li>
          <li>Student 2</li>
          <li>Student 3 {this.props.age123}</li>
        </ul>
      </div>
    )
  }
}
