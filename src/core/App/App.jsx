import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../Menu/Menu.jsx';
import Main from '../Main/Main.jsx';
import './app.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Menu />
                <Main />
          </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(App);
