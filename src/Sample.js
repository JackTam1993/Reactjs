import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

class Sample extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <DatePicker />
        )
    }
}

export default Sample;