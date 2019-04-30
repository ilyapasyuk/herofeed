import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from 'Components/Button'

import './styles.scss'

const Filter = ({ items, onClick }) => {
    return (
        <div className="Filter">
            {items.map((item) => {
                return (
                    <NavLink
                        activeClassName="Filter__item_active"
                        className="Filter__item"
                        to={{
                            pathname: item.pathname,
                        }}
                        key={item.id}
                    >
                        <Button
                            elementId={`movies-${item.id}-button`}
                            title={item.title}
                            callBackClick={() => onClick(item.id)}
                        />
                    </NavLink>
                )
            })}
        </div>
    )
}

Filter.propTypes = {
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Filter
