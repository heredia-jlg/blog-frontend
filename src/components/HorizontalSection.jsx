import React, { Component } from 'react'
import styles from '../styles.module.css'
import { motion } from 'framer-motion'

export const HorizontalSection = (props) => {

        return (
        
        <motion.div animate={ {x:0} } initial={{x:-200}} transition={{duration: 1}}>
            <div className={styles.horizontalSection}>
                <p> {props.text} </p>
                <img src={props.imgSrc} alt=''/>
            </div>
        </motion.div>

        )   
}
