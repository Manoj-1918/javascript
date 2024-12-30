let open_button = document.getElementById('prompt');
let message= document.querySelector('#message');
let close_button=document.querySelector('#close');
let content=document.querySelector("p");

open_button.addEventListener('click',function(){
    message.style.display='block';
    message.style.display='flex';
})
close_button.addEventListener('click',function(){
    message.style.display='none';
})
window.addEventListener('click',function(e){
    if(e.target!=open_button && e.target!=content)
    message.style.display='none';
})
