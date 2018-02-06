import React, {Component} from 'react';
import './movie-page.scss';

export default class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render() {
        return (
            <div className="movie-page container">
                <div className="col-sm-3">
                    <div className="movie-page__cover">
                        <img
                            src={this.data.cover[0].thumbnails.large.url}
                            alt={this.data.title_ru}
                        />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="movie-page__item">
                        <b>Релиз</b>
                        <span>{ this.data.date_realise }</span>
                    </div>
                    <div className="movie-page__item">
                        <b>Вселенная</b>
                        <span>{ this.data.universe }</span>
                    </div>
                    <div className="movie-page__item">
                        <b>Тип</b>
                        <span>{ this.data.type }</span>
                    </div>
                    <div className="movie-page__item">
                        <b>Оригинальное название</b>
                        <span>{ this.data.title_en }</span>
                    </div>
                </div>
            </div>
        );
    }
}

