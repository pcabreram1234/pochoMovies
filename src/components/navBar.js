import pmicon from '../Asset/img/pmIcon.png'
import React, { Component } from "react"
import ReactDOM from 'react-dom';
import FetchMovieGenero from "./fetchMovieGenre"
import App from "../App"
class Navbar extends Component {
    render() {

        const renderActionMovie = (e) => {
            e.preventDefault()
            let movieType = e.target.name
            ReactDOM.render(
                <React.StrictMode>
                    <FetchMovieGenero genero={movieType} />
                </React.StrictMode>,
                document.getElementById('root')
            )
        }

        const renderStartPage = (e) => {
            e.preventDefault()
            ReactDOM.render(
                <React.StrictMode>
                    <App />
                </React.StrictMode>,
                document.getElementById('root')
            )
        }
        return (
            <nav className="navbar navbar-expand-xl navbar-light bg-light sticky-top" >
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="?" className="navbar-brand mx-1">
                            <img src={pmicon} alt="" width="50px" height="50px" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="?" role="button" onClick={renderStartPage}>Inicio</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="?" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Generos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="?" role="button" onClick={renderActionMovie} name="Action" >Acción</a></li>
                            <li><a className="dropdown-item" href="?" role="button" onClick={renderActionMovie} name="Drama">Drama</a></li>
                            <li><a className="dropdown-item" href="?" role="button" onClick={renderActionMovie} name="Comedy">Comedia</a></li>
                        </ul>
                    </li>
                </ul>
            </nav >
        )
    }
}

export default Navbar