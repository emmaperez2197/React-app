
export const getGif = async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=XIRSr9TKV9u10buvdkOrwKZWAG6QJXwP&q=${category}&limit=10 `
    
    const response = await fetch(url)
    const {data} = await response.json();


    //tomamos la data del fetch y armamos un nuevo objeto con las propiedades que necesitamos
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
        
    }))


    return gifs;
}


