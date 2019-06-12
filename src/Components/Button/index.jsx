import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    button: isPrimary => {
        const buttonStyle = {
            display: 'inline-block',
            cursor: 'pointer',
            fontSize: '14px',
            padding: '0.75rem 2rem',
            fontWeight: 400,
            textAlign: 'center',
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
            userSelect: 'none',
            borderRadius: '0.25rem',
            transition: 'background-color 0.1s linear 0s',
            outline: 'none',
            color: '#212529',
            background: 'white',
            boxShadow: '0px 3px 20px 0px rgba(113, 106, 202, 0.17) !important',
            border: '1px solid #ffffff',
        }

        if (isPrimary) {
            return {
                ...buttonStyle,
                ...{
                    backgroundColor: '#5867dd',
                    boxShadow: '0px 5px 10px 2px rgba(88, 103, 221, 0.19) !important',
                    border: '1px solid #5867dd',
                    color: '#fff',
                },
            }
        }

        return buttonStyle
    },
})

const Button = ({ title, callBackClick, isPrimary, elementId }) => {
    const styles = useStyles(isPrimary)
    return (
        <button id={elementId} className={styles.button} onClick={callBackClick} type="button">
            {title}
        </button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    callBackClick: PropTypes.func.isRequired,
    elementId: PropTypes.string.isRequired,
    isPrimary: PropTypes.bool,
}

Button.defaultProps = {
    isPrimary: false,
}

export default Button
