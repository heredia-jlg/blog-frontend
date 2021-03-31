import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SectionWithPhoto from './SectionWithPhoto.component.js'
import image from '../images/me.jpg'

class home extends Component {
    componentDidMount()
    {
        this.props.dispatch({type: 'setCurrentPage', currentPage: 'home'})
    }

    helloWorld = 'Hello, World! This is my personal web application.'

    render() {
        return (
            <div>
                <SectionWithPhoto side='right' text={this.helloWorld} imgSrc={image}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {currentPage} = state;
    return {
        currentPage: currentPage

    }
}


export default connect(mapStateToProps)(home);
