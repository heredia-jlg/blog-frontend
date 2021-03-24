import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Portfolio extends Component {
    constructor(props){
        super(props)
        this.props.dispatch({type: 'setCurrentPage', currentPage: 'portfolio'})
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})


export default connect(mapStateToProps)(Portfolio)
