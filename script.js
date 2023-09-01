let meme = document.getElementById("meme");
let title = document.getElementById("title");
let btn = document.getElementById("btn");


let url = " https://meme-api.com/gimme/dankmemes";

async function getmemes(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    let memeImg = new Image();
    memeImg.onload = ()=>{
        meme.src = data.url;
        title.innerHTML = data.title;
    };
    memeImg.src = data.url;
    
}
getmemes(url);