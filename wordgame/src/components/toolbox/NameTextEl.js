import React, { Component } from 'react'
import { Toast,ToastHeader, ToastBody} from 'reactstrap';
import '../../styles/nameText.css';

export default class NameTextEl extends Component {

    render() {
        return (

            <div className="p-3 bg-dark my-2 rounded ">
                <Toast className="wordInput ">
                <ToastHeader>
                    <h1>{this.props.name?this.props.name:'Name'}</h1>
                </ToastHeader>
                <ToastBody>
                   <h1> {this.props.name?this.props.name.slice(-1):'Char'}</h1>
                </ToastBody>
                </Toast>
            </div>
           
        )
    }
}
