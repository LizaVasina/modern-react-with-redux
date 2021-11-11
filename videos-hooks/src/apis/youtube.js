import axios from "axios";

const KEY = 'AIzaSyD4lY-lKbF8OX8u9JHotT1lr4pEnjswqJI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});