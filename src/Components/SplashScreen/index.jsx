import React, { PureComponent } from 'react'
import posed from 'react-pose'

const Box = posed.div({
    visible: {
        opacity: 1,
        y: 0,
    },
    hidden: {
        opacity: 1,
        y: 0,
    },
})

const styles = {
    splashScreen: {
        display: 'flex',
        height: '100%',
        width: '100%',
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '30px',
    },
}

class SplashScreen extends PureComponent {
    state = {
        isShow: true,
    }

    componentWillUnmount() {
        this.setState({
            isShow: false,
        })
    }

    render() {
        return (
            <Box
                pose={this.state.isShow ? 'visible' : 'hidden'}
                style={styles.splashScreen}
                key="SplashScreen"
            >
                Loading...
            </Box>
        )
    }
}

export default SplashScreen
