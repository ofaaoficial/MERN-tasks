import React, {Component} from 'react';
import TaskForm from '../../components/task/TaskForm';

export default class TasksEdit extends Component {

    redirect = () => this.props.history.push('/');

    render() {
        return (
            <section>
                <h1>Edit task</h1>
                <article className="col-md-4 mx-auto">
                    <TaskForm
                        id={this.props.match.params.id}
                        redirect={this.redirect}/>
                </article>
            </section>
        )
    }
}