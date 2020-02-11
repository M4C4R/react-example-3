import React, {Component} from 'react';
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            borderBottom: '1px #000 dotted',
            padding: '2px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.toggleComplete.bind(this, id)} checked={completed} />&nbsp;
                    {title}
                    <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
