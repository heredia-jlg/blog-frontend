import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class home extends Component {
    componentDidMount()
    {
        this.props.dispatch({type: 'setCurrentPage', currentPage: 'home'})
    }

    render() {
        return (
            <div>
                <h1>This be {this.props.currentPage}</h1>
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
