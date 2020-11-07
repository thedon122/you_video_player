import axios from 'axios';

const KEY = 'AIzaSyA-jWLILDvAJvpRQoA84l1cyDC95udh4dU';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});