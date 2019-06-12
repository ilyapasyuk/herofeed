import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-grid-system'
import { getMovie } from 'Services/Movies'

const MoviePage = ({ match }) => {
    const [title, setTitle] = useState('')
    const [cover, setCover] = useState('')
    const [dateRealise, setDateRealise] = useState('')
    const [universe, setUniverse] = useState('')
    const [type, setType] = useState('')

    async function getData() {
        const movie = await getMovie(match.params.id)
        setTitle(movie.title_en)
        setCover(movie.cover[0].thumbnails.large.url)
        setDateRealise(movie.date_realise)
        setUniverse(movie.universe)
        setType(movie.type)
    }

    useEffect(() => {
        getData()
    })

    return (
        <Row>
            <Col sm={3}>
                <div>
                    <img src={cover} alt={title} />
                </div>
            </Col>
            <Col sm={4}>
                <div>
                    <b>Realise</b>
                    <span>{dateRealise}</span>
                </div>
                <div>
                    <b>Universe</b>
                    <span>{universe}</span>
                </div>
                <div>
                    <b>Type</b>
                    <span>{type}</span>
                </div>
                <div>
                    <b>Title</b>
                    <span>{title}</span>
                </div>
            </Col>
        </Row>
    )
}

export default MoviePage
