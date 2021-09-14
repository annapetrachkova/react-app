import React, {Component} from "react";
import './Modal.css'
import {ReactComponent as Heart} from "../assets/heart.svg";


export default class Modal extends Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <>
                {/*вынести функцию onClick*/}
                <button onClick={() => this.setState({ isOpen: true})}>Click here!</button>

                {this.state.isOpen && (<div className='modal'>
                    <div className='modal-body'>
                        <h1>Nice to see you!</h1>
                        <span className='text'> I </span>
                        <Heart className="heart"/>
                        <span className='text'>You</span>
                        {/*вынести функцию onClick*/}
                        <div><button style={{marginTop: '40px'}} onClick={() => this.setState({ isOpen: false})}>Bye-Bye!</button></div>
                    </div>
                </div>)}
            </>
        )
    }
}