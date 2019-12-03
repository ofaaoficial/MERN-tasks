import React, {Component} from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.min.css';
import Task from '../../components/task/Task';

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
                                <Task task={task} getTasks={this.getTasks}/>
                            </section>
                        )
                    }
                </article>
            </section>
        );
    }
}