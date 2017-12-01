import React, {Component, PropTypes} from 'react';
import './movie-item.scss';

export default class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.type = props.item.fields.type;
        this.title = props.item.fields.title_ru;
        this.cover = props.item.fields.cover[0].thumbnails.large.url;
        this.id = props.item.fields.id;
        MovieItem.handleClick = MovieItem.handleClick.bind(this);
    }

    static handleClick(id) {
        return window.location.href = `#!/movie/${id}`
    }

    render() {
        return (
            <div className="movie-item">
                <div className="movie-item__poster">
                        <span className={`movie-item__type movie-item__type_${this.type}`}>
                            {this.type}
                        </span>
                    <img src={this.cover} />
                </div>
                <a className="movie-item__title"
                   onClick={() => MovieItem.handleClick(this.id)}>
                    {this.title}
                </a>
            </div>
        );
    }
}
