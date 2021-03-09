import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap'
import styles from '../styles.module.css'


class Navigation extends Component {
    render() {
        return(
                <Nav defaultActiveKey="/home" 
                    id={styles.navigation} 
                    bg="dark" variant="dark" 
                    className="flex-column">

                    <Navbar.Brand className={styles.link} href="/">Home</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link className={styles.link} href="/new">new</Nav.Link>
                    <Nav.Link className={styles.link} href="/blog">Blog</Nav.Link>
                    <Nav.Link className={styles.link} href="">new</Nav.Link>
                    <Nav.Link className={styles.link} href="">Blog</Nav.Link>
                    </Nav>
                </Nav>
        )

    }
}
function mapStateToProps(state) {
    const {user} = state;
    return {
        user: user
    }
}
export default connect(mapStateToProps)(Navigation);
