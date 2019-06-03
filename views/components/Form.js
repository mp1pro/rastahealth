/**
 * Created by mp1pro on 4/16/19.
 */
import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            publish: false
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    //updates title change on each keystroke
    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    //updates checkbox
    handleCheckChange(event) {
        const target = event.target;
        const value = target.checked;
        const name = target.name;

        this.setState({
            [name]: value
        });

        console.log('publish:',value);
    }

    //submit function
    submit() {
        /*this.props.onSubmit(this.state.title);*/
    }

    render() {
        return (
            <form className="Form">
                {/*<input placeholder="Enter Article Title" onChange={this.handleTitleChange} />*/}
                <label>
                    <input type="checkbox" name="publish" checked={this.state.publish} onChange={this.handleCheckChange} />
                </label>
                <br />
                <a onClick={this.submit}>SUBMIT</a>
            </form>
        );
    }
}

export default Form;