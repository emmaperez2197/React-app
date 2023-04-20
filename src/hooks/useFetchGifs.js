import { useState, useEffect } from "react";

import { getGif } from '../helpers/getGifs'

const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    console.log(isLoading);

    const getImages = async () => {

        const newImages = await getGif(category)
        setImages(newImages)
        setIsLoading(false)
    }


    useEffect(() => {
        getImages()
    }, [])


    return {
        images,
        isLoading
    }


}

export default useFetchGifs;