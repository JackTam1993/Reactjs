import { Api } from '../api/Api';
import React from 'react';

class ZhihuNewsDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        Api.getZhihuNew(id).then((result)=>{
            let css = result.query.results.json.css;
            this.setState({
                data:result.query.results.json.body + `<link href=${css} rel='stylesheet' type='text/css' />`
            });
        });

    }

    render() {
        return (
            <div
                dangerouslySetInnerHTML={{
                    __html: this.state.data
                }}>
            </div>
        )
    }
}

export default ZhihuNewsDetail;