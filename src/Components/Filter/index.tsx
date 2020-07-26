import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Button from 'Components/Button'

const StyledFilter = styled.div`
    margin-bottom: 30px;
`

const FilterItem = styled(NavLink)`
    margin-right: 20px;
`

const Filter = ({ items, onClick }) => {
    return (
        <StyledFilter>
            {items.map(item => {
                return (
                    <FilterItem to={item.pathname} key={item.id}>
                        <Button
                            elementId={`movies-${item.id}-button`}
                            title={item.title}
                            onClick={() => onClick(item.id)}
                            isPrimary={item.isSelect}
                        />
                    </FilterItem>
                )
            })}
        </StyledFilter>
    )
}

Filter.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            pathname: PropTypes.string,
            title: PropTypes.string,
            isSelect: PropTypes.bool,
        }),
    ).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Filter
