import axios from 'axios'

const KEY = 'AIzaSyARqGAj_agrQQtAEoCky60m0dmkS122VWc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})