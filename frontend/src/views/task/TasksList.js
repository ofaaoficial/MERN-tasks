import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css';

export default class TasksList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <h1>Tasks List</h1>
            </section>
        );
    }
}