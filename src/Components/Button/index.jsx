import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import styleVaribles from '../styles/variables'

const styles = {
    Button: {
        display: 'inline-block',
        fontWeight: '300',
        cursor: 'pointer',
        height: styleVaribles.baseSize * 8,
        fontSize: '14px',
        padding: '0 16px',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        userSelect: 'none',
        border: '0',
        borderRadius: styleVaribles.baseSize,
        transition: 'background-color 0.1s linear 0s',
        outline: 'none',
        background: 'transparent',
        color: 'black',

        '& + &': {
            margin: {
                left: styleVaribles.baseSize * 4,
            },
        },
    },
    link: {
        padding: {
            left: 0,
            right: 0,
        },

        '&:hover': {
            color: 'gray',
        },
    },
    isPrimary: {
        background: styleVaribles.primaryColor,
        color: styleVaribles.primaryLighter,

        '&:hover': {
            background: styleVaribles.primaryDark,
        },
    },
    isBlock: {
        width: '100%',
        display: 'block',
    },
}

const Button = ({ classes, title, callBackClick, link, isPrimary, isBlock, elementId }) => (
    <button
        id={elementId}
        className={`${classes.Button} ${link && classes.link} ${isPrimary &&
            classes.isPrimary} ${isBlock && classes.isBlock}`}
        onClick={callBackClick}
        type="button"
    >
        {title}
    </button>
)

Button.propTypes = {
    title: PropTypes.string.isRequired,
    callBackClick: PropTypes.func.isRequired,
    link: PropTypes.bool,
    isPrimary: PropTypes.bool,
    isBlock: PropTypes.bool,
    elementId: PropTypes.string.isRequired,
}

Button.defaultProps = {
    link: false,
    isPrimary: false,
    isBlock: false,
}

export default injectSheet(styles)(Button)
