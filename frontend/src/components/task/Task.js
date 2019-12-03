import React, {Component} from 'react';
import {format} from "timeago.js";
import axios from 'axios';

export default class Task extends Component {
    constructor(props) {
        super(props)
    }

    deleteTask = async id => {
        const {getTasks} = this.props;
        const response = await axios.delete(`http://localhost:4000/api/tasks/${id}`);

        if(response.status === 200) getTasks();

    };

    editTask = id => {
        console.log('edit');
    };

    render() {
        return (
            <article className="card">
                <section className="card-header">
                    <button
                        className="btn btn-outline-success float-right"
                        onClick={() => this.editTask(this.props.task._id)}>
                        Edit
                    </button>
                    <h2>{this.props.task.title}</h2>
                </section>
                <section className="card-body">
                    <p>{this.props.task.content}</p>
                    <p><i>{this.props.task.author}</i></p>
                </section>
                <section className="card-footer">
                    <button
                        className="btn btn-outline-danger float-right"
                        onClick={() => this.deleteTask(this.props.task._id)}>
                        Delete
                    </button>
                    <span>{format(this.props.task.date)}</span>
                </section>
            </article>
        )
    }
}