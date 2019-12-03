import React, {Component} from 'react';
import UserForm from '../../components/user/UserForm';
import User from '../../components/user/User';
import {getUsers} from "../../resources/Users";

export default class UserList extends Component {

    state = {
        users: [],
    };

    componentDidMount() {
        this.getUsers()
    }

    getUsers = async () => {
        const response = await getUsers();
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
                                <User key={user._id} getUsers={this.getUsers} user={user}/>
                            )
                        }
                    </ul>
                </section>
            </section>
        )
    }
}