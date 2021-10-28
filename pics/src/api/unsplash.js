import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID mAO9wpuyzHpxUtOPGHEou4fB8lwXZEjRKbLbDy039MM'
    }
})