import React, {Component} from 'react';
import injectSheet from 'react-jss';
import MovieItem from '../MovieItem';
import MoviesService from '../movies.service';
import Button from '../../../UI/Button';
import styleVariables from '../../../UI/styles/variables';

const styles = {
    MoviesList: {
        paddingTop: styleVariables.baseSize * 2,
        paddingBottom: styleVariables.baseSize * 2,
    },
    MoviesFilter: {
        padding: '0 20px',
        marginBottom: styleVariables.baseSize * 2,
    },
};

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
        const classes = this.props.classes;

        return (
            <div className={classes.MoviesList}>
                <div className={classes.MoviesFilter}>
                    <Button
                        title="Movie"
                        link
                        callBackClick={() => this.filterByType('movie')}
                    />
                    <Button
                        title="Show"
                        link
                        callBackClick={() => this.filterByType('serial')}
                    />
                    <Button
                        title="Animation"
                        link
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

export default injectSheet(styles)(MovieList);
