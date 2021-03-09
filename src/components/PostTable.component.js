import React, { Component } from 'react';
import { Button, Table, Row } from 'reactstrap';
import  {getAll}  from '../services/postsService.js';
import { connect } from 'react-redux';
import PostComponent from './Post.component.js'

class postTable extends Component {
    constructor(props){
        super(props)
    }

    // getPosts()
    // {
    //     console.log("Before")
    //     getAll().then(
    //         (response) => {
    //             this.props.dispatch({type: 'showAll', posts: response.data})
    //         }
    //     )
    //     .catch(error => {
    //         console.log( error );
    //       });
    //     console.log('-------')
    //     console.log("Changed")
    // }
    componentDidMount(){
        console.log("postTable.component - componentDidMount")
        getAll().then(
            (response) => {
                this.props.dispatch({type: 'showAll', posts: response.data})
            }
        )
    }
    render() {
        return (
            <div>
                
                <Table style={{margin: 'auto',
                            width: '30%'}}>
                    {console.log("Table created")}
                    {console.log(this.props.posts)}
                    {
                    this.props.posts.map(
                        (post) => {
                            return(
                                <Row>
                                    {console.log("Row")}
                                    {console.log(post.id)}
                                    <PostComponent
                                    key={post.id}
                                    post={post} />
                                </Row>
                                )
                            }
                        )
                    }
                </Table>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {posts} = state;
    return {posts: posts};
}

export default connect(mapStateToProps)(postTable)
