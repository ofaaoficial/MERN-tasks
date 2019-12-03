import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.min.css';
import Task from '../../components/task/Task';
import {getTasks} from '../../resources/Tasks';

export default class TasksList extends Component {

    state = {
        tasks: []
    };

    componentDidMount() {
        this.getTasks();
    }

    getTasks = async () => {
        const response = await getTasks();
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
                                <Task task={task} callGetTasks={this.getTasks}/>
                            </section>
                        )
                    }
                </article>
            </section>
        );
    }
}