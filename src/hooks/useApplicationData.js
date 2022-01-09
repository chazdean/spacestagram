import { useEffect, useState } from 'react'
import axios from 'axios';

export default function useApplicationData() {

    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false);
    const API_KEY = process.env.REACT_APP_NASA_API_KEY

    useEffect(() => {
        setLoading(true)
        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-10-3&api_key=${API_KEY}`)
        .then((response) => {
            console.log(response.data)
            setPhotos(response.data.photos)
            setLoading(false)
        })
        .catch((error) => {
        console.log(error)
        })
    }, [API_KEY]);

    return { photos, loading }
}
