import { Component } from "react";
import "./emploees-list-item.css"

const EmploeesListItem = (props) => {


    const { name, salary, onDelete, onToogleProp, increase, like } = props;
    return (
        <li className={`list-group-item d-flex justify-content-between ${increase ? "increase" : ""} ${like ? "like" : ""}`}>
            <span className={`list-group-item-label`} onClick={onToogleProp} data-toggle="like">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToogleProp}
                    data-toggle="increase">
                    <i className="fas fa-cookie"></i>

                </button>

                <button type="button"
                    onClick={onDelete}
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                {like ? <i className="fas fa-star"></i> : ""}
            </div>
        </li >
    )


}

export default EmploeesListItem;