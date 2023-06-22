import React, { Component } from 'react'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'
import styles from '../styles.module.css'
import downArrow from '../images/arrow.png'

export class banner extends Component {
    switchDescription(currentPage){
        switch(currentPage){
            case 'home':
                return { title: 'Jorge Gonzalez Heredia', description: 'Full-Stack Software Engineer' };
            case 'blog':
                return { title: 'Blog.', description: 'Welcome to the place where I share my thoughts.' };
            case 'portfolio':
                return { title: 'Porfolio.', description: 'Coming soon!'};
            default:
                return ''; 
        }        
    }
    render() {
        return (
            <div id={styles.bannerContainer}>
                <motion.div id={styles.banner}>

                    <motion.div animate={ {x:0} } initial={{x:-200}} transition={{duration: 1}}>
                        <h1>{this.switchDescription(this.props.currentPage).title}</h1>
                    </motion.div>

                    <motion.div animate={ {x:0} } initial={{x:200}} transition={{duration: 1}}>
                        <p >{this.switchDescription(this.props.currentPage).description}</p>
                    </motion.div>
                    
                </motion.div>
                <motion.div animate={ {y:-10} } initial={{y:200}} transition={{duration: 1}}>
                    <img src={downArrow} id={styles.arrow}></img>
                </motion.div>
                    
            </div>
        )
    }
}

function mapStateToProps(state){
    const {currentPage} = state;
    return {
        currentPage: currentPage,
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(banner)
