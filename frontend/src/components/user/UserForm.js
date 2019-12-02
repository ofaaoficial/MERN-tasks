import React, {Component} from 'react';
import axios from "axios";

export default class UserForm extends Component {

    state = {
        username: ''
    };

    constructor(props) {
        super(props);
    }

    handleUsername = event => {
        event.preventDefault();
        this.setState({username: event.target.value});
    };

    onSubmit = async event => {
        const {getUsers} = this.props;

        event.preventDefault();
        const response = await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        });

        if(response.status === 201) getUsers();
        else alert("No get data");

        this.setState({
            username: ''
        })
    };

    render() {
        return (
            <section className="card">
                <article className="card-body">
                    <h3>Create new user</h3>
                    <form method="POST" onSubmit={this.onSubmit}>
                        <section className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text"
                                   name="username"
                                   id="username"
                                   className="form-control"
                                   value={this.state.username}
                                   onChange={this.handleUsername}
                            />
                        </section>
                        <section className="form-group">
                            <input type="submit" value="Register" className="btn btn-success"/>
                        </section>
                    </form>
                </article>
            </section>
        )
    }
}