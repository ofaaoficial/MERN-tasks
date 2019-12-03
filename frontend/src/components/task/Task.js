import React, {Component} from 'react';
import {format} from "timeago.js";
import {Link} from "react-router-dom";
import {deleteTask} from '../../resources/Tasks';

export default class Task extends Component {

    deleteTask = async id => {
        const {callGetTasks} = this.props;
        const response = await deleteTask(id);

        if(response.status === 200) callGetTasks();
    };


    render() {
        return (
            <article className="card">
                <section className="card-header">
                    <Link className="btn btn-outline-success float-right" to={`/edit/${this.props.task._id}`}>Edit</Link>
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