import React, { Component } from 'react'
import { movies } from "../Asset/movie_ids_04_04_2021.json"
import Imgportada from "../components/imgPortada"


class MovieCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            movieList: movies,
            url: ''
        }
    }

    render() {
        const cardStyle = {
            width: '280px',
            height: '400px',
        }

        const movieActual = this.state.movieList.map((e, i) => {
            return (
                <div className="card d-inline-flex my-1 mx-1" style={cardStyle} key={e.id}>
                    <div className="text-reset text-black-50">
                        {e.original_title}
                    </div>
                    <div className="card-body">
                        <Imgportada id={e.id} />
                    </div>
                </div>
            )
        })

        return (
            <div className="container align-content-center justify-content-center text-center my-2" >
                { movieActual}
            </div>

        )
    }
}

export { MovieCard }