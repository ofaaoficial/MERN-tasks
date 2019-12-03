import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import {getTaskById, updateTask, newTask} from '../../resources/Tasks';
import {getUsers} from "../../resources/Users";

export default class TaskForm extends Component {

    state = {
        tasks: [],
        users: [],

        title: '',
        content: '',
        author: '',
        date: new Date(),
        editing: false
    };

    async componentDidMount() {
        if(this.props.id){
            const {title, content, author, date} = await this.getTaskById(this.props.id);

            this.setState({
                editing: true,
                title,
                content,
                author,
                date: new Date(date)
            });
        }

        this.getUsers();
    }

    getTaskById = async id => {
        const response = await getTaskById(id);
        return response.data;
    };

    getUsers = async () => {
        const response = await getUsers();
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
        const {redirect, id} = this.props;
        let response;

        if(this.state.editing){
            response = await updateTask(id, {
                title,
                content,
                author,
                date
            });
        }else{
            response = await newTask({
                title,
                content,
                author,
                date
            });
        }

        if(response.status === 201 || response.status === 200) redirect();
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
                        value={this.state.author}
                        onChange={this.handleInput}
                    >
                        <option value="">-- Select user --</option>
                        {
                            this.state.users.map(user => <option key={user._id}
                                                                 value={user.username}
                            >{user.username}</option>)
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