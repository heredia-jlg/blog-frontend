import axios from 'axios'


axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";

export const getAll = () => {
    return axios.get('http://127.0.0.1:8000/blog/posts/all')
} 

export const insertNew = (data) => {
    console.log("axios.post - insertNew : " + JSON.stringify(data) )
    return axios.post('http://127.0.0.1:8000/blog/posts/insertPost',JSON.stringify(data) , {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {}
    })
} 