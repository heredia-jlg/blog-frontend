import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'

class PostComponent extends Component {
    constructor(props)
    {
        super(props)
        console.log("Post created")
        console.log(this.props.post.title)
        console.log(this.props.post.id)
    }
    render() {
        return (
            <div>
                <Card style={{ width: '25rem', margin: '20px', height: '20rem'}}>
                {console.log("Render method")}
                
                <Card.Img variant="top" src="holder.js/100px180" />


                        <Card.Body>
                            <Card.Title>{ this.props.post.title }</Card.Title>
                                <Card.Text>
                                    {this.props.post.text}
                                </Card.Text>

                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>


                </Card> 
                
            </div>
        )
    }
}


export default PostComponent