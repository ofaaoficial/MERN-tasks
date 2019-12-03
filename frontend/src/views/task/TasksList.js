import React, {Component} from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.min.css';
import {format} from 'timeago.js';

export default class TasksList extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        tasks: []
    };

    componentDidMount() {
        this.getTasks();
    }

    getTasks = async () => {
        const response = await axios.get('http://localhost:4000/api/tasks');
        this.setState({
            tasks: response.data
        });
    };

    render() {
        return (
            <section>
                <h1>Tasks list</h1>
                <article className="row">
                    {
                        this.state.tasks.map(task =>
                            <section className="col-md-4 p-2" key={task._id}>
                                <article className="card">
                                    <section className="card-header">
                                        <h2>{task.title}</h2>
                                    </section>
                                    <section className="card-body">
                                        <p>{task.content}</p>
                                    </section>
                                    <section className="card-footer">
                                        <span>{format(task.date)} - {task.author}</span>
                                    </section>
                                </article>
                            </section>
                        )
                    }
                </article>
            </section>
        );
    }
}