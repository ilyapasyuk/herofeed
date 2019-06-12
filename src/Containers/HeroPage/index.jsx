import React, { Component } from 'react'

export default class HeroPage extends Component {
    constructor(props) {
        super(props)
        this.data = props.data
    }

    render() {
        return <div className="Hero-page">{this.data.title_ru}</div>
    }
}
