let startBtn=document.getElementById('start');
let resetBtn=document.getElementById('reset');
let timer=document.getElementById('timer')

let second=0;
let minute=0;
let hour=0;

let leadingsec=0;
let leadingmin=0;
let leadinghr=0;

function stopwatch(){
    second++;
    if(second%60==0){
        minute++;
        second=0;
        if(minute%60==0){
            minute=0;
            hour++;
        }
    }
    if(second<10)        leadingsec="0"+second.toString();
    else                 leadingsec=second;
    if(minute<10)        leadingmin="0"+minute.toString();
    else                 leadingmin=minute;
    if(hour<10)          leadinghr="0"+hour.toString();
    else                 leadinghr=hour;
    timer.innerText=leadinghr + ":" + leadingmin + ":" + leadingsec;
}
let timeconter="off";
let timeinterval=null;
startBtn.addEventListener("click",function(){
    if(timeconter==="off"){
    timeinterval=window.setInterval(stopwatch,1000);
    startBtn.innerHTML=`<i class="fa-solid fa-pause" id="pause"></i>`;
    timeconter="on";
    }
    else{
        window.clearInterval(timeinterval);
        startBtn.innerHTML=`<i class="fa-solid fa-play" id="startBtn"></i>`;
        timeconter="off";
    }
})

resetBtn.addEventListener("click",function(){
     second=0;
     minute=0;
     hour=0;
    window.clearInterval(timeinterval);
    timer.innerText="00:00:00";
    startBtn.innerHTML=`<i class="fa-solid fa-play" id="startBtn"></i>`;
})