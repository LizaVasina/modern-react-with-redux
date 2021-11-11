import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = (term) => {
        youtube.get('/search', {
            params: {
                "q": term,
            }
        })
        .then(res => {
            setVideos(res.data.items);
            
        })
        .catch(err  => console.log(err));
    }

    return [videos, search];
}

export default useVideos;