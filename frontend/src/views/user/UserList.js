import React, {Component} from 'react';
import axios from 'axios';

export default class UserList extends Component {

    state = {
        users: [],
        username: ''
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getUsers()
    }

    async getUsers(){
        const response = await axios.get('http://localhost:4000/api/users');
        this.setState({users: response.data});
    }

    handleUsername = event => {
        event.preventDefault();
        this.setState({username: event.target.value});
    };

    onSubmit = async event => {
        event.preventDefault();
        const response = await axios.post('http://localhost:4000/api/users', {
            username: this.state.username
        });

        if(response.status === 201) this.getUsers();
        else alert("No get data");

        this.setState({
            username: ''
        })
    };

    deleteUser = async id => {
        const response = await axios.delete(`http://localhost:4000/api/users/${id}`);
        if(response.status === 200) this.getUsers();
        else alert("No get data");
    };

    render() {
        return (
            <section className="row">
                <article className="col-md-4">
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
                                           onChange={this.handleUsername}/>
                                </section>
                                <section className="form-group">
                                    <input type="submit" value="Register" className="btn btn-success"/>
                                </section>
                            </form>
                        </article>
                    </section>
                </article>
                <section className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user =>
                                <li key={user._id}
                                    className="list-group-item list-group-item-action"
                                    onDoubleClick={() => this.deleteUser(user._id)}
                                >
                                    {user.username}
                                </li>
                            )
                        }
                    </ul>
                </section>
            </section>
        )
    }
}