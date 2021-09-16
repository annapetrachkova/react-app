import React, {Component} from "react";
import './Modal.scss'
import {ReactComponent as Heart} from "../assets/heart.svg";


export default class Modal extends Component {
    state = {
        isOpen: false
    }

    stateTrue = () => {
        this.setState({ isOpen: true});
    }
    stateFalse = () => {
        this.setState({ isOpen: false});
    }

    render() {
        return (
            <>
                <button onClick={this.stateTrue}>Click here!</button>
                {this.state.isOpen && (<div className='modal'>
                    <div className='modal-body'>
                        <h1>Nice to see you!</h1>
                        <span className='text'> I </span>
                        <Heart className="heart"/>
                        <span className='text'>You</span>
                        <div><button style={{marginTop: '40px'}} onClick={this.stateFalse}>Bye-Bye!</button></div>
                    </div>
                </div>)}
            </>
        )
    }
}