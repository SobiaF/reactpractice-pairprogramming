import React from 'react'
import Sidebar from "./Sidebar";


class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "johndoe"

        }
    }

    handleClick=() => {
        this.setState({username: "janedoe"})
    }

    render() {
        return (
            <Sidebar clicker={ this.handleClick } username = { this.state.username } />
        )

    }
}

export default Home