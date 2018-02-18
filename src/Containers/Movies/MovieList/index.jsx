import React, {Component} from 'react';
import MovieItem from '../MovieItem';
import './style.scss';
import MoviesService from '../movies.service';
import Button from '../../../UI/Button';

const Movies = new MoviesService();

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
        };
        this.filterByType = this.filterByType.bind(this);
    }

    componentDidMount() {
        const defaultQuery = {
            sort: [{
                field: 'date_realise',
                direction: 'desc',
            }],
        };

        Movies.getList(defaultQuery)
            .then((response) => {
                this.setState({
                    items: response,
                });
            });
    }

    filterByType(type) {
        const query = {
            filterByFormula: `{type} = "${type}"`,
            sort: [{
                field: 'date_realise',
                direction: 'desc',
            }],
        };

        Movies.getList(query)
            .then((response) => {
                this.setState({
                    items: response,
                });
            });
    }

    render() {
        return (
            <div className="movies-list">
                <div className="movies-list__filter">
                    <Button
                        title="Movie"
                        className="Button Button_link"
                        callBackClick={() => this.filterByType('movie')}
                    />
                    <Button
                        title="Show"
                        className="Button Button_link"
                        callBackClick={() => this.filterByType('serial')}
                    />
                    <Button
                        title="Animation"
                        className="Button Button_link"
                        callBackClick={() => this.filterByType('animation')}
                    />
                </div>
                {this.state.items.map((item) => (
                    <div
                        className="col-sm-3"
                        key={item.id}
                    >
                        <MovieItem data={item.fields} />
                    </div>
                ))}
            </div>
        );
    }
}

export default MovieList;
