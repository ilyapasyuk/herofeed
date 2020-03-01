import React from 'react'

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

const SplashScreen = () => (
    <div style={styles.splashScreen} key="SplashScreen">
        Loading...
    </div>
)

export default SplashScreen
