import React from 'react';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './App.css';

class ItemList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }

    render() {
        const data = this.props.data;
        const numbers = data.map((number)=>
            <Col span={6} key={number.id}>
                <Link to={'/zhihuDaily/' + number.id}>
                <div className='Zhihu-item'>
                    <img src={number.images} alt="" className='Zhihu-item-pic'/>
                    <span className='Zhihu-item-text'>{number.title}</span>
                </div>
                </Link>
            </Col>
        );
        return (
                <Row gutter={16} type='flex'>
                    {numbers}
                </Row>
        )
    }
}

export default ItemList;