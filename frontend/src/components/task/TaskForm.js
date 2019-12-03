import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import axios from "axios";

export default class TaskForm extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        tasks: [],
        users: [],

        title: '',
        content: '',
        author: '',
        date: new Date()
    };

    componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {
        const response = await axios.get('http://localhost:4000/api/users');
        this.setState({
            users: response.data.map(user => {
                return {
                    _id: user._id,
                    username: user.username
                }
            })
        });
    };

    onSubmit = async event => {
        event.preventDefault();

        const {title, content, author, date} = this.state;
        const {redirect} = this.props;

        const response = await axios.post('http://localhost:4000/api/tasks', {
            title,
            content,
            author,
            date
        });

        if(response.status === 201) redirect();
        else alert(' No get data ');
    };

    handleDate = date => {
        this.setState({date});
    };

    handleInput = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <section className="form-group">
                    <label htmlFor="author">User</label>
                    <select
                        name="author"
                        id="author"
                        required
                        className="form-control"
                        onChange={this.handleInput}
                    >
                        <option value="">-- Select user --</option>
                        {
                            this.state.users.map(user => <option key={user._id}
                                                                 value={user.username}>{user.username}</option>)
                        }
                    </select>
                </section>
                <section className="form-group">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="form-control"
                        onChange={this.handleInput}
                        value={this.state.title}
                        required
                        placeholder="Title"/>
                </section>
                <section className="form-group">
                            <textarea
                                value={this.state.content}
                                name="content"
                                id="content"
                                className="form-control"
                                onChange={this.handleInput}
                                placeholder="Content"
                                cols="30" rows="10"
                                required/>
                </section>
                <section className="form-group">
                    <DatePicker
                        className="form-control"
                        selected={this.state.date}
                        onChange={this.handleDate}
                    />
                </section>
                <section className="form-group">
                    <button className="btn btn-success btn-block">Register</button>
                </section>
            </form>
        )
    }
}