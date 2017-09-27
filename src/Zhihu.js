import { Api } from './api/Api';
import React from 'react'

class Zhihu extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        Api.getZhihuLatest();
        // console.log(data);
    }

    render() {
        return (
                <div>
                    <span>1</span>
                </div>
        )
    }
}

export default Zhihu;

