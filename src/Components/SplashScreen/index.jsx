import React, { useState, useEffect } from 'react'
import posed, { Transition } from 'react-pose'

const Box = posed.div({
    enter: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
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

function SplashScreen() {
    const [isShow, setView] = useState(false)

    useEffect(() => {
        setView(true)
    })

    return (
        <Transition>
            {isShow && (
                <Box style={styles.splashScreen} key="SplashScreen">
                    Loading...
                </Box>
            )}
        </Transition>
    )
}

export default SplashScreen
