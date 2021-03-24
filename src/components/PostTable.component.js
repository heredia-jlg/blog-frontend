import React, { Component } from 'react';
import { Button, Table, Row } from 'reactstrap';
import  {getAll}  from '../services/postsService.js';
import { connect } from 'react-redux';
import PostComponent from './Post.component.js'
import styles from '../styles.module.css'

class postTable extends Component {
    componentDidMount(){
        console.log("postTable.component - componentDidMount")
        this.props.dispatch({type: 'setCurrentPage', currentPage: 'blog'})

        getAll().then(
            (response) => {
                this.props.dispatch({type: 'showAll', posts: response.data})
            }
        )
    }
    render() {
        return (
                <Table id={styles.blogTable}>
                    {console.log("Table created")}
                    {
                    this.props.posts.map(
                        (post) => {
                            return(
                                <Row className={styles.row}>
                                    <PostComponent
                                    key={post.id}
                                    post={post} />
                                </Row>
                                )
                            }
                        )
                    }
                </Table>
            
        )
    }
}

function mapStateToProps(state) {
    const {posts, currentPage} = state;
    return {posts: posts,
            currentPage: currentPage}
}

export default connect(mapStateToProps)(postTable)
