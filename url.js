let btn =document.getElementById("Shorten");

btn.addEventListener('click', short);

 async function short(){
    let longURL = document.getElementById("longerurl").value;
    let shortURL = document.getElementById("shorturl");
    
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
    const data = await result.json();
    
    shortURL.value = data.result.short_link2;
    console.log(data.result.short_link2);
}
//To copy the shorten url

let copybtn = document.getElementById("Copy");
let newURL = document.getElementById("shorturl");
copybtn.onclick = ()=> {
        newURL.select();
        window.navigator.clipboard.writeText(newURL.value);
}



