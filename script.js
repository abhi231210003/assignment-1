const btn=document.getElementById("colorbutton").addEventListener("click",()=>{
    document.body.style.backgroundColor=randcolor();
    let color=randcolor();
    document.getElementById("colorcheck").textContent=color;
})
function randcolor(){
    letter="0123456789ABCDEF";
    let color="#"
    for(let i=0;i<6;i++){
        color=color+letter[Math.floor((Math.random())*15)];
    }
    return color;
}
