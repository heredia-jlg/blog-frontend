import React, { Component } from 'react';
import styles from '../styles.module.css'

export class SectionWithPhoto extends Component {
    constructor(props){
        super(props)
    }

    sideRender(){
        console.log('sideRender, side: ' + this.props.side)

        
        if(this.props.side === 'right'){
            return (            
            <div className={ styles.sectionWithPhotoLeft }>
                <div className={styles.subSectionText}>
                    <p> {this.props.text} </p>
                </div>  
                <div className={styles.subSectionImg}>
                    <img src={this.props.imgSrc} alt=''/>
                </div>
            </div>
                )
        }
        else if(this.props.side === 'left'){
            return(
            <div className={ styles.sectionWithPhotoLeft }>
                <div className={styles.subSectionImg}>
                    <img src={this.props.imgSrc} alt=''/>
                </div>
                <div className={styles.subSectionText}>
                    <p> {this.props.text} </p>
                </div>
            </div>
            )
        }
    }

    render() {
        return (
            this.sideRender()
        )
    }
}

export default SectionWithPhoto
