import React, { Component } from 'react'
import Contact from './views/Contact'
import Home from './views/Home'
import Nav from './components/Nav'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import News from './views/News'
import Feed from './views/Feed'
import SignUp from './views/SignUp'
import Login from './views/Login'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user: {},
      name: 'Christian',
      age: 27
    }
  }

  logMeIn = (user) => {
    this.setState({
      user: user
    })
  }

  addToAge = () => {
    this.setState({age: this.state.age + 1})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
          <Routes>
            <Route path='/' element={<Home age123={this.state.age}/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<Login logMeIn={this.logMeIn}/>}/>
          </Routes>   
          <p className='m-3'>Loading...</p>
        </div>
      </BrowserRouter>
    )
  }
}

