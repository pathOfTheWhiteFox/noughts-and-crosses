import React from 'react'

const styles = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: 800,
    cursor: 'pointer',
    outline: 'none'
}

const Square = ({ onClick, value }) =>  (
    <button onClick={onClick} style={styles}>
        {value}
    </button>
)

export default Square
