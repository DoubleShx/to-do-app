import React, { Component } from 'react'
import './todo-list-item.css'


export default class TodoListItem extends Component {

    state = {
      done: false,
      important: false
    }

    workIsDone = () => {
      
      this.setState (({done}) => {
        return {
          done: !done
        }
      })
    }
    importantSet = () => {
      this.setState(({important}) => {
        return {
          important: !important
        }
      })
    }

    render() {
        const { label, onDeleted } = this.props;
        let styleLi = 'todoListItem'
        const {done, important} = this.state;
            if (done) {
              styleLi += ' done'
            }
            if (important) {
              styleLi += ' important'
            }    
        return (
        <div className="container">
        <div className="col-8 inlineblock">
              <span className={styleLi} 
              onClick={ this.workIsDone }>
                  { label }
              </span>
          </div>
        <div className="col-4 inlineblock rightButtons">
          <span>              
             <button type='button' 
             className="btn btn-outline-danger"
             onClick = { onDeleted } > 
                  <i className="fa fa-trash-o"></i></button>
             <button type='button' className="btn btn-outline-success button2" 
                onClick = { this.importantSet } >
                  <i className="fa fa-exclamation"></i>
              </button>              
          </span>
        </div>
      </div>
        )
    }
}


