import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Jumbotron from '../../components/jumbotron/Jumbotron';
export class Landing extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
            </div>
        )
    }
}

export default Landing