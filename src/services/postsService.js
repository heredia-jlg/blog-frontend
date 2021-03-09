import axios from 'axios'


export const getAll = () => {
    return axios.get('http://localhost:8080/posts/showAll')
} 

export const insertNew = (data) => {
    console.log("axios.post - insertNew : " + JSON.stringify(data) )
    return axios.post('http://localhost:8080/posts/insertPost',JSON.stringify(data) , {
        headers: {
            'Content-Type': 'application/json',
        },
        data: {}
    })
} 