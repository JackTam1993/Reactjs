import { Api } from './api/Api';
import React from 'react'

class Zhihu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data:''
        }
    }

    componentDidMount() {
        Api.getZhihuLatest().then((result)=>{
            this.setState({
                data:result.query.results.json.stories
            });
        });

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

