import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import {insertNew} from '../services/postsService.js'

export default class NewPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            text: '',
            tags: ''
        }
        this.setTitle = this.setTitle.bind(this)
        this.setContent = this.setContent.bind(this)
        this.insert = this.insert.bind(this)
        this.setTags = this.setTags.bind(this)
    }

    setTitle(event){
        this.setState( {title: event.target.value} );
    }

    setContent(event){
        this.setState( {text: event.target.value} );
    }

    setTags(event){
        this.setState( {tags: event.target.value} );
    }

    insert(){
        console.log('Insert function')
        console.log(this.state)
        insertNew(this.state).then((response) => {
            console.log(response)
            alert("New Post Created")
            this.setState({})
          }, (error) => {
            alert("Something Went Wrong: " + error);
            console.log(error)
          });
    }

    render() {
        return (
            <div>
                <Form style={{ width: '50rem', margin: 'auto'}}>

                <Form.Group controlId="formBasicEmail">
                    {/* <Form.Label>{this.state.title}</Form.Label> */}
                    <Form.Control type="text" placeholder="Title" onChange={this.setTitle}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    {/* <Form.Label>{this.state.text}</Form.Label> */}
                <Form.Control as="textarea" rows={3} placeholder='Content' onChange={this.setContent}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTags">
                    {/* <Form.Label>{this.state.tags}</Form.Label> */}
                <Form.Control as="textarea" placeholder='Tags' onChange={this.setTags}/>
                </Form.Group>


                <Button 
                    variant="primary" 
                    onClick={this.insert}>
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}
