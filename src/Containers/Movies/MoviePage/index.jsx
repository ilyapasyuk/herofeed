import React, { Component } from 'react'
import MoviesService from '../../../Services/Movies'

export default class MoviePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
        }
    }

    componentDidMount() {
        MoviesService.getMovie(this.state.id).then((response) => {
            this.setState({
                title: response.title_ru,
                cover: response.cover[0].thumbnails.large.url,
                dateRealise: response.date_realise,
                universe: response.universe,
                type: response.type,
            })
        })
    }

    render() {
        const { title, cover, dateRealise, universe, type } = this.state

        return (
            <div className="Movie-page row">
                <div className="col-sm-3">
                    <div className="Movie-page__cover">
                        <img src={cover} alt={title} />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="Movie-page__item">
                        <b>Релиз</b>
                        <span>{dateRealise}</span>
                    </div>
                    <div className="Movie-page__item">
                        <b>Вселенная</b>
                        <span>{universe}</span>
                    </div>
                    <div className="Movie-page__item">
                        <b>Тип</b>
                        <span>{type}</span>
                    </div>
                    <div className="Movie-page__item">
                        <b>Оригинальное название</b>
                        <span>{title}</span>
                    </div>
                </div>
            </div>
        )
    }
}
