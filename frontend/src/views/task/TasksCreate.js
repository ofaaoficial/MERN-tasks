import React, {Component} from 'react';
import TaskForm from '../../components/task/TaskForm';

export default class TasksCreate extends Component {

    constructor(props) {
        super(props);
    }

    redirect = () => this.props.history.push('/');

    render() {
        return (
            <section className="col-md-4 mx-auto">
                <article className="card card-body">
                    <h4>Create task</h4>
                    <TaskForm redirect={this.redirect}/>
                </article>
            </section>
        );
    }
}