import React from 'react'
import PropTypes from 'prop-types'
import ClassNames from 'classnames'

import './styles.scss'

const Button = ({ title, callBackClick, isPrimary, isLink, isBlock, elementId }) => {
    const style = ClassNames('Button', {
        Button_primary: isPrimary,
        Button_link: isLink,
        Button_block: isBlock,
    })

    return (
        <button id={elementId} className={style} onClick={callBackClick} type="button">
            {title}
        </button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    callBackClick: PropTypes.func.isRequired,
    elementId: PropTypes.string.isRequired,

    isLink: PropTypes.bool,
    isPrimary: PropTypes.bool,
    isBlock: PropTypes.bool,
}

Button.defaultProps = {
    isPrimary: false,
    isLink: false,
    isBlock: false,
}

export default Button
