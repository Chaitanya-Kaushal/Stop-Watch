let count =0;
let hr= 0;
let min= 0;
let sec= 0;

let timer = false;

function start(){
    timer=true;
    stopwatch();
}

function stop(){
    timer = false;

}

function reset(){
    timer = false;
  count =0;
  hr= 0;
  min= 0;
  sec= 0;
  document.querySelector("#count").textContent="0"+count;
  document.querySelector("#sec").textContent="0"+sec;
  document.querySelector("#min").textContent="0"+min;
  document.querySelector("#hr").textContent="0"+hr;

}

function stopwatch(){
 if(timer==true){
    count++;
    if(count==99){
        sec++;
        count=0;
        if(sec==59){
            min++;
            sec=0
            if(min==60){
                hr++;
                min=0;
                sec=0;

               
            }
        }
    }
    let shr =hr
    let smin =min
    let ssec =sec
    // let scount =count

    if(sec<10){
        ssec="0"+ssec;
    }
    if(hr<10){
        shr="0"+shr;
    }
    if(min<10){
        smin="0"+smin;
    }
    document.querySelector("#count").textContent=count;
    document.querySelector("#sec").textContent=ssec;
    document.querySelector("#min").textContent=smin;
    document.querySelector("#hr").textContent=shr;

    setTimeout("stopwatch()",10);
 }

  
}