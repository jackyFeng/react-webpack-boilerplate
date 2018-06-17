import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hello World</h1>
        );
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;
