import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from 'Components/Button'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    filter: {
        marginBottom: 30,
    },
    item: {
        marginRight: 20,
    },
})

const Filter = ({ items, onClick }) => {
    const styles = useStyles()

    return (
        <div className={styles.filter}>
            {items.map(item => {
                return (
                    <NavLink className={styles.item} to={item.pathname} key={item.id}>
                        <Button
                            elementId={`movies-${item.id}-button`}
                            title={item.title}
                            callBackClick={() => onClick(item.id)}
                            isPrimary={item.isSelect}
                        />
                    </NavLink>
                )
            })}
        </div>
    )
}

Filter.propTypes = {
    items: PropTypes.shape({
        id: PropTypes.string,
        pathname: PropTypes.string,
        title: PropTypes.string,
        isSelect: PropTypes.bool,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Filter
