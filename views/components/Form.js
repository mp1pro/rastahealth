/**
 * Created by mp1pro on 4/16/19.
 */
import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    //updates title change on each keystroke
    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    //submit function
    submit() {
        this.props.onSubmit(this.state.title);
    }

    render() {
        return (
            <form className="Form">
                <input placeholder="Enter Article Title" onChange={this.handleTitleChange} />
                <a onClick={this.submit}>SUBMIT</a>
            </form>
        );
    }
}

export default Form;