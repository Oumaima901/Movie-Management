import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React from 'react'
import ListItems from '../ListItems/ListItems';
import "./List.scss";
const List = () => {
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined/>
                <div className="container">

                 <ListItems/>          
                </div>
                <ArrowForwardIosOutlined/>
            </div>
        </div>
    )
}

export default List