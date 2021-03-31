import React, { Component } from 'react'
import linkedInLogo from '../images/linkedinLogo.png'
import githubLogo from '../images/githubLogo.png'
import {ListGroup} from 'react-bootstrap'
import styles from '../styles.module.css'

export class Footer extends Component {
    render() {
        return (
            <div style={{position: 'absolute',float: 'right', bottom: '0'}}>
                
                <ListGroup horizontal>
                    <ListGroup.Item action
                        style={{backgroundColor: 'black'}}>
                        <a href="https://www.linkedin.com/in/jorge-gonzalez-heredia" target="blank">
                        <img src={linkedInLogo}/></a>
                        </ListGroup.Item>
                    <ListGroup.Item 
                        style={{backgroundColor: 'black'}}>
                        <a href="https://github.com/heredia-jlg" target="blank">
                        <img src={githubLogo}/></a>
                        </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default Footer
