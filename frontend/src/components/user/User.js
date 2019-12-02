import React, {Component} from 'react';
import axios from "axios";

export default class User extends Component {
    constructor(props) {
        super(props);
    }

    deleteUser = async id => {
        const {getUsers} = this.props;
        const response = await axios.delete(`http://localhost:4000/api/users/${id}`);

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