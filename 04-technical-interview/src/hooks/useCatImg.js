import {IMG_API_URL} from '../constants'
import { useEffect, useState } from 'react'

export function useCatImg ({fact}) {
    const [imgUrl, setImgUrl] = useState()

    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(' ').slice(0, 1)
        fetch(`${IMG_API_URL}cat/says/${firstWord}?size=50`)
            .then(response => {
                const {url} = response
                setImgUrl(url)
            })    
    }, [fact])

    return {imgUrl}
}