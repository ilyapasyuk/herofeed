import React, { PureComponent } from 'react'
import { NavLink } from 'react-router-dom'
import MoviesService from 'Services/Movies'

import MovieItem from './Item'
import Button from 'Components/Button'

import MOVIE_FILTER from 'Constants/moviesFilter'
import MOVIE_TYPE from 'Constants/movieTypes'

import './styles.scss'

class MovieList extends PureComponent {
    state = {
        items: [],
        sortBy: this.props.match.params.type || undefined,
    }

    componentDidMount() {
        this.filterByType(this.state.sortBy)
    }

    filterByType(type) {
        this.setState(
            {
                sortBy: type,
            },
            () => {
                const query = {
                    sort: [
                        {
                            field: 'date_realise',
                            direction: 'desc',
                        },
                    ],
                }

                if (this.state.sortBy) {
                    query.filterByFormula = `{type} = "${this.state.sortBy}"`
                }

                if (this.state.sortBy === MOVIE_TYPE.ALL) {
                    delete query.filterByFormula
                }

                MoviesService.getList(query).then((response) => {
                    const lastItem = response[response.length - 1]
                    this.dateRealiseLastItem = lastItem.fields.date_realise

                    this.setState({
                        items: response,
                    })
                })
            },
        )
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

        console.log(query)

        MoviesService.getList(query).then((response) => {
            const date = [...this.state.items, ...response]

            const lastItem = response[response.length - 1]
            this.dateRealiseLastItem = lastItem.fields.date_realise

            this.setState({
                items: date,
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="MoviesList">
                <div className="MoviesList__filter">
                    {MOVIE_FILTER.map((item) => {
                        return (
                            <NavLink
                                activeClassName="MoviesList__filter_active"
                                to={{
                                    pathname: `/movies/list/${item.type}`,
                                }}
                            >
                                <Button
                                    elementId={`movies-${item.type}-button`}
                                    title={item.title}
                                    callBackClick={() => this.filterByType(item.type)}
                                />
                            </NavLink>
                        )
                    })}
                </div>

                <div className="row">
                    {this.state.items.map((item) => (
                        <div className="col-sm-3" key={item.id}>
                            <MovieItem data={item.fields} />
                        </div>
                    ))}
                </div>

                <div className="MovieList__more">
                    <Button
                        elementId="LoadMore"
                        isPrimary
                        callBackClick={() => this.handleLoadMore(this.dateRealiseLastItem)}
                        title="Load more"
                    />
                </div>
            </div>
        )
    }
}

export default MovieList
