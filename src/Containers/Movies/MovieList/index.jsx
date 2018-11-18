import React, { Component } from 'react'
import injectSheet from 'react-jss'
import MovieItem from '../MovieItem'
import MoviesService from '../movies.service'
import Button from '../../../UI/Button'
import styleVariables from '../../../UI/styles/variables'

const styles = {
    MoviesList: {
        paddingTop: styleVariables.baseSize * 2,
        paddingBottom: styleVariables.baseSize * 2,
    },
    MoviesFilter: {
        padding: '0 20px',
        marginBottom: styleVariables.baseSize * 2,
    },
}

class MovieList extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
        }
        this.filterByType = this.filterByType.bind(this)
        this.handleLoadMore = this.handleLoadMore.bind(this)
        this.setLastItemforPagination = this.setLastItemforPagination.bind(this)
    }

    componentDidMount() {
        const defaultQuery = {
            sort: [
                {
                    field: 'date_realise',
                    direction: 'desc',
                },
            ],
        }

        MoviesService.getList(defaultQuery).then((response) => {
            const lastItem = response[response.length - 1]
            this.setLastItemforPagination(lastItem.fields.date_realise)

            this.setState({
                items: response,
            })
        })
    }

    filterByType(type) {
        const query = {
            filterByFormula: `{type} = "${type}"`,
            sort: [
                {
                    field: 'date_realise',
                    direction: 'desc',
                },
            ],
        }

        MoviesService.getList(query).then((response) => {
            const lastItem = response[response.length - 1]
            this.setLastItemforPagination(lastItem.fields.date_realise)

            this.setState({
                items: response,
            })
        })
    }

    handleLoadMore(date) {
        const query = {
            filterByFormula: `IS_BEFORE({date_realise}, DATETIME_PARSE('${date}'))`,
            sort: [
                {
                    field: 'date_realise',
                    direction: 'desc',
                },
            ],
        }

        MoviesService.getList(query).then((response) => {
            const date = [...this.state.items, ...response]

            const lastItem = response[response.length - 1]
            this.setLastItemforPagination(lastItem.fields.date_realise)

            this.setState({
                items: date,
            })
        })
    }

    setLastItemforPagination(date) {
        this.setState({
            dateRealiseLastItem: date,
        })
    }

    render() {
        const classes = this.props.classes

        return (
            <div className={classes.MoviesList}>
                <div className={classes.MoviesFilter}>
                    <Button title="Movie" link callBackClick={() => this.filterByType('movie')} />
                    <Button title="Show" link callBackClick={() => this.filterByType('serial')} />
                    <Button
                        title="Animation"
                        link
                        callBackClick={() => this.filterByType('animation')}
                    />
                </div>
                {this.state.items.map((item) => (
                    <div className="col-sm-3" key={item.id}>
                        <MovieItem data={item.fields} />
                    </div>
                ))}

                <Button
                    isPrimary
                    isBlock
                    callBackClick={() => this.handleLoadMore(this.state.dateRealiseLastItem)}
                    title="Load more"
                />
            </div>
        )
    }
}

export default injectSheet(styles)(MovieList)
