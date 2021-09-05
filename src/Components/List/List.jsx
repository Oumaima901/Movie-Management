import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, { useRef } from 'react'
import ListItems from '../ListItems/ListItems';
import "./List.scss";
const List = () => {
    const listRef = useRef()
    const handleClick=(direction)=>{
         let distance = listRef.current.getBoundingClientRect().x - 50
         if (direction === "left"){
             listRef.current.style.transform = `translateX (${ 230 + distance}px)`
         }
         if (direction === "right"){
            listRef.current.style.transform = `translateX (${-230 + distance}px)`
        }

    }
    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIosOutlined className="sliderArrow left" onClick={()=> handleClick("left")}/>
                <div className="container" ref={listRef}>
                <ListItems/>  
                <ListItems/>  
                <ListItems/>  
                <ListItems/>  
                <ListItems/>  
                <ListItems/>  
                <ListItems/>  
                <ListItems/>  
                <ListItems/>          
                </div>
                <ArrowForwardIosOutlined className="sliderArrow right" onClick={()=> handleClick("right")}/>
            </div>
        </div>
    )
}

export default List
