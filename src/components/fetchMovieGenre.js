import React, { Component } from "react"
import { movies } from "../Asset/moviesResul.json"
import Navbar from '../components/navBar'
import MovieDetail from "./movieDetail"
import ReactDOM from 'react-dom';
class FetchMovieGenero extends Component {

    constructor(props) {
        super(props)
        this.state = ({
            movies: movies,
            contador: 0
        })
        this.renderMovie = this.renderMovie.bind(this)

    }

    renderMovie = (e) => {
        ReactDOM.render(
            <React.StrictMode>
                <Navbar />
                <MovieDetail id={e.target.id} />
            </React.StrictMode>,
            document.getElementById('root')
        )
    }



    render() {
        const cardStyle = {
            width: '280px',
            height: '400px',
        }

        const imgStyle = {
            width: '200px',
            height: '300px'
        }


        const fetchGenero = this.state.movies.map((el, i) => {
            let contenedor
            let genero = el.genres
            for (const i of genero) {
                if (i.name === this.props.genero) {
                    let imgUrl = `https://image.tmdb.org/t/p/w185${el.poster_path}`
                    contenedor = (
                        <div className="card d-inline-flex my-1 mx-1" key={el.id} style={cardStyle}>
                            <div className="text-reset text-black-50">
                                {el.original_title}
                            </div>
                            <div className="card-body">
                                <img src={imgUrl} alt="" className="img-fluid" style={imgStyle} role="button" onClick={this.renderMovie} id={el.id} />
                            </div>
                        </div>
                    )
                }
            }
            return (contenedor)
        })


        return (
            <div className="container-fluid" >
                <Navbar />
                <div className="container align-content-center justify-content-center text-center my-2">
                    {fetchGenero}
                </div>
            </div>
        )
    }
}

export default FetchMovieGenero