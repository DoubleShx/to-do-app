import React, { Component } from 'react'
import './item-add-form.css'


export default class ItemAddForm extends Component {
    
    render() {
        const { onAddFunction, adding, addingChange } = this.props;
        return(
                <div className="input-group mb-3 itemAddForm">
                <input type="text" className="form-control" placeholder="add new work" value = { adding } onChange = { addingChange } />
                <button className="btn btn-primary" type="button" onClick = { onAddFunction.bind(this, adding) }>Button</button>
                </div>
        )
    }
}