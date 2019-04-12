import axios from 'axios'

export const writePost = ({ title, body, tags }) => axios.post('/api/v1/posts', { title, body, tags })
export const getPost = (id) => axios.get(`/api/v1/posts/${id}`)