import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar';

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <h1>Desde Dashboard</h1>
            </div>
        )
    }
}

export default Dashboard
