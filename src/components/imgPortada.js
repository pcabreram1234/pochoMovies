import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Navbar from "../components/navBar"

class Imgportada extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            id: '',
            movieOverview: '',
            language: '',
            popularity: '',
            fecha_estreno: ''
        }
        this.renderMovie = this.renderMovie.bind(this)

        let url = `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=c50d79a1be71f939801067e8b8618d6f`
        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
            .then(response => {
                let pathImg = JSON.stringify(response.poster_path)
/*                 console.log(response) */
                let pathString = pathImg.toString().replace(/"/g, "")
                this.setState({
                    url: `https://image.tmdb.org/t/p/w400${pathString}`,
                    id: response.id,
                    movieOverview: response.overview,
                    language: response.original_language,
                    popularity: response.popularity,
                    fecha_estreno: response.release_date
                })
            }).catch(error => console.log(error))
    }

    renderMovie = (e) => {
        e.preventDefault()
        ReactDOM.render(
            <React.StrictMode>
                <Navbar />
                <div className="container my-3">
                    <div className="row">
                        <div className="col">
                            <img src={this.state.url} alt="" className="img-thumbnail" />
                        </div>
                        <div className="col">
                            <div className="border border-2 rounded-2 bg bg-light  ">
                                <span className="">
                                    {this.state.movieOverview}
                                </span>
                            </div>

                            <div className="row my-2 justify-content-center align-content-center text-center">
                                <div className="col-md-4">
                                    <span className="text-light">
                                        Popularidad:
                                    </span>
                                    <span className="mx-1 text-info">
                                        {this.state.popularity}
                                    </span>
                                </div>

                                <div className="col-md-4">
                                    <span className="mx-1 text-light">
                                        Idioma:
                                    </span>
                                    <span className="text-info">
                                        {this.state.language.toUpperCase()}
                                    </span>
                                </div>

                                <div className="col-md-4">
                                    <span className="mx-1 text-light">
                                        Fecha de estreno:
                                    </span>
                                    <span className="text-info">
                                        {this.state.fecha_estreno}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </React.StrictMode>,
            document.getElementById('root')
        )
    }

    render() {
        const imgCardStyle = {
            width: '200px',
            height: '300px'
        }

        return (
            <a href='?' onClick={this.renderMovie}><img src={this.state.url} className="img-thumbnail" alt="..." style={imgCardStyle} /></a>
        )
    }
}


export default Imgportada