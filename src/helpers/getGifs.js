export const getGifs =async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Lg0iOHgJXGXVWBAChVdfp2LVG3o7WrY3&limit=20&q=${category}`;
    const response = await fetch(url); 
    const { data = [] }= await response.json();
    
    const gifs = data.map(img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}