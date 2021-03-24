import React, { Component } from 'react'
import styles from '../styles.module.css'

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
                <div className={styles.postContainer}>
                
                {/*<Card.Img variant="top" src="holder.js/100px180" style={{width: '100%', height: '200px'}}/>*/}


                        <div className={styles.post}>
                            <div className={styles.postTitle} > 
                                <h2>{ this.props.post.title }</h2> 
                            </div>



                                <div>
                                    <p>{this.props.post.text}</p>
                                </div>

                            
                        </div>


                </div> 
            
        )
    }
}


export default PostComponent