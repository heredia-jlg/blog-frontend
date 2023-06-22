import React, { Component } from 'react'
import styles from '../styles.module.css'
import { motion } from 'framer-motion'

class HorizontalSection extends Component {
render(){
        return (

        <motion.div animate={ {x:0} } initial={{x:-200}} transition={{duration: 1}}>
            <div className={styles.horizontalSection}>
                <p> {this.props.text} </p>
                {/* <img src={this.props.imgSrc} alt=''/> */}
            </div>
        </motion.div>

        )
}   
}
export default HorizontalSection