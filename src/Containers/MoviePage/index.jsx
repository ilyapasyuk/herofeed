import React, { PureComponent } from 'react'
import MoviesService from 'Services/Movies'

class MoviePage extends PureComponent {
    state = {
        title: '',
        cover: '',
        dateRealise: '',
        universe: '',
        type: '',
    }

    async componentDidMount() {
        const movie = await MoviesService.getMovie(this.props.match.params.id)
        this.setState({
            title: movie.title_ru,
            cover: movie.cover[0].thumbnails.large.url,
            dateRealise: movie.date_realise,
            universe: movie.universe,
            type: movie.type,
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

export default MoviePage
