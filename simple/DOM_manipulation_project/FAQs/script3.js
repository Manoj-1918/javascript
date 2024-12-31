const accordion = document.querySelectorAll('.content-container');
accordion.forEach((item) => {
    item.addEventListener('click', function () {
        accordion.forEach((other) => {
            if (other !== this) {
                other.classList.remove('active');
            }
        });
        this.classList.toggle('active');
    });
});
// window.addEventListener('click',function(e){
//     accordion.forEach((item)=>{
//         if(!e.targe.closest('.content-container'))
//         item.classList.remove('active');
//     })
// });


