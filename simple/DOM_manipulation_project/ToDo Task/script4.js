let task = document.getElementById('data');
let add = document.getElementById('add');
let taskValue;
let ul=document.querySelector('ul');




add.addEventListener('click', function () {
    taskValue = task.value; // Store the value in a variable
    let li=document.createElement('li');
    let crossBtn=document.createElement('button');
    li.innerText=taskValue;
    crossBtn.innerHTML="&times";
    crossBtn.classList.add('cross');
    li.appendChild(crossBtn);
    ul.appendChild(li);
    task.value="";

    crossBtn.addEventListener('click',function(){
        ul.removeChild(li);
    });
    
});
