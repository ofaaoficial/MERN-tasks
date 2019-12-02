import React, {Component} from 'react';
import axios from 'axios';
import UserForm from '../../components/user/UserForm';
import User from '../../components/user/User';

export default class UserList extends Component {

    state = {
        users: [],
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = async () => {
        const response = await axios.get('http://localhost:4000/api/users');
        this.setState({users: response.data});
    };

    render() {
        return (
            <section className="row">
                <article className="col-md-4">
                    <UserForm username={this.state.username} getUsers={this.getUsers}/>
                </article>
                <section className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user =>
                                <User getUsers={this.getUsers} user={user}/>
                            )
                        }
                    </ul>
                </section>
            </section>
        )
    }
}