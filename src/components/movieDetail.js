import React, { Component } from 'react'

class MovieDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            url: '',
            id: '',
            movieOverview: '',
            language: '',
            popularity: '',
            fecha_estreno: ''
        }
        this.returnMovieSelect = this.returnMovieSelect.bind(this)
    }


    returnMovieSelect = () => {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.id}?api_key=c50d79a1be71f939801067e8b8618d6f`, {
            method: 'GET'
        }).then(response => response.json())
            .then(response => {
                let pathImg = JSON.stringify(response.poster_path)
                let pathString = pathImg.toString().replace(/"/g, "")
                this.setState({
                    url: `https://image.tmdb.org/t/p/w400${pathString}`,
                    id: response.id,
                    movieOverview: response.overview,
                    language: response.original_language,
                    popularity: response.popularity,
                    fecha_estreno: response.release_date,
                    title: response.original_title
                })
            }).catch(error => console.log(error))
    }

    render() {
        this.returnMovieSelect.call(this.props.id)
        return (
            <div className="container" >
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
            </div>
        )
    }
}

export default MovieDetail