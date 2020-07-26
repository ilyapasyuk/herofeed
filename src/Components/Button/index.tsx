import React from 'react'
import styled from 'styled-components'

interface StyledButtonProps {
    isPrimary: boolean
}

const StyledButton = styled.button`
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    padding: 0.75rem 2rem;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border-radius: 0.25rem;
    transition: background-color 0.1s linear 0s;
    outline: none;
    color: ${(props: StyledButtonProps) => (props.isPrimary ? 'white' : '#212529')};
    background: ${(props: StyledButtonProps) => (props.isPrimary ? '#5867dd' : 'white')};
    box-shadow: ${(props: StyledButtonProps) =>
        props.isPrimary
            ? '0px 5px 10px 2px rgba(88, 103, 221, 0.19)'
            : '0 3px 20px 0 rgba(113, 106, 202, 0.17)'};
    border: 1px solid ${(props: StyledButtonProps) => (props.isPrimary ? '#5867dd' : 'white')};
`

interface ButtonProps {
    title: string
    onClick: () => void
    elementId: string
    isPrimary?: boolean
}

const Button = ({ title, onClick, isPrimary = false, elementId }: ButtonProps) => {
    return (
        <StyledButton id={elementId} isPrimary={isPrimary} onClick={onClick} type="button">
            {title}
        </StyledButton>
    )
}
export default Button
