import React from 'react'

const Sidebar=(props) => (
    <div>
        <h2>{ props.username }</h2>
        <button onClick={ props.clicker }>Click to change username</button>
    </div>
)

export default Sidebar