import { Api } from './api/Api';
import React from 'react';
import ItemList from './ItemList';

class Zhihu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            test:['123','1234']
        };
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
            <ItemList data={this.state.data}/>
        )
    }
}

export default Zhihu;

