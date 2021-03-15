import React, { Component } from 'react'
import './search-panel.css'

export default class SearchPanel extends Component {
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="search" />
                <div className="input-group-append">
                    <button className="btn btn-info rounded button1" type="button">All</button>
                    <button className="btn btn-outline-secondary rounded" type="button">Active</button>
                    <button className="btn btn-outline-secondary rounded" type="button">Done</button>
                </div>
            </div>
        )
        }
    }   
