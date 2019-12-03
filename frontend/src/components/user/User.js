import React, {Component} from 'react';
import {deleteUser} from '../../resources/Users';

export default class User extends Component {

    deleteUser = async id => {
        const {getUsers} = this.props;
        const response = await deleteUser(id);

        if (response.status === 200) getUsers();
        else alert("No get data");
    };

    render() {
        return (
            <li key={this.props.user._id}
                className="list-group-item list-group-item-action"
                onDoubleClick={() => this.deleteUser(this.props.user._id)}
            >
                {this.props.user.username}
            </li>
        )
    }
}