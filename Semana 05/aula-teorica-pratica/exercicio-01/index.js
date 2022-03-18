import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/posts'

const getPosts = async (value) => {
    try {
        const response = await axios.get(`${url}/${value ? value : ''}`)
        console.log(response.data)
    } catch (error) {
        console.log(error.message)
    }
}
getPosts()
getPosts(2)

const setPosts = async (data) => {
    try {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/`, data)
        console.log(response.data)
    } catch (error) {
        console.log(error.message)
    }
}

const user = {
    title: 'Luís',
    body: 'Lorem ipsum'
}
setPosts(user)

const patchPosts = async (data, value) => {
    try {
        const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${value}`, data)
        console.log(response.data)
    } catch (error) {
        console.log(error.message)
    }
}

const newPost = {
    title: 'Luís Pedro',
    body: 'Lorem ipsum klasdoas'
}
patchPosts(newPost, 1)

const deletePosts = async (value) => {
    try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${value}`)
        console.log(response.data)
    } catch (error) {
        console.log(error.message)
    }
}
deletePosts(3) 