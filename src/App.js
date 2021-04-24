/* import logo from './logo.svg'; */
import React, { Component } from "react"
import { MovieCard } from './components/movieCard'
import './App.css';
import Navbar from './components/navBar'


class App extends Component {
  render() {
    return (
      <div className="container-fluid row d-xxl-flex">
        <Navbar />
        {<MovieCard />}
      </div>
    )
  }
}


export default App;