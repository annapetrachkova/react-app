import React, {Component} from "react";
import './Modal.scss'
import {ReactComponent as Heart} from "../assets/heart.svg";


export default class Modal extends Component {
    state = {
        isOpen: false
    }

    stateTrueOrFalse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <>
                <button onClick={this.stateTrueOrFalse}>Click here!</button>
                {this.state.isOpen && (<div className='modal'>
                    <div className='modal-body'>
                        <h1>Nice to see you!</h1>
                        <span className='text'> I </span>
                        <Heart className="heart"/>
                        <span className='text'>You</span>
                        <div><button style={{marginTop: '40px'}} onClick={this.stateTrueOrFalse}>Bye-Bye!</button></div>
                    </div>
                </div>)}
            </>
        )
    }
}