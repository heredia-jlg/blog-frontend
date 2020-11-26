import React from 'react';
import Post from './Post.js'
import Router from './routing'

export default function Dashboard()
{
    
        return(
            <div>
                <h1>Dashboard</h1>
                <Post></Post>
                <Router></Router>
            </div>
        );
    
}