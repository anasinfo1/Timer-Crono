var heur = document.getElementById('heur');
var minut = document.getElementById('min');
var second = document.getElementById('second');
var milisecond = document.getElementById('milisecond');
var Startbtn = document.getElementById('start');
var Stopbtn = document.getElementById('stop');
var Resetbtn = document.getElementById('reset');


var interval
var heurinc=1;
var mininc=1;
var secondinc=1;
var milisecinc=1;


Startbtn.onclick= function(){

      clearInterval(interval);
      interval = setInterval(incfun,10);




}
//date.toLocaleTimeString()
function incfun(){
if (milisecinc<=9){
  milisecond.innerHTML="0"+milisecinc++;
}else if (milisecinc<100){
  milisecond.innerHTML=milisecinc++;
}else{
  milisecinc=1;
  if (secondinc<=9){
    second.innerHTML="0"+secondinc++;
  }
  else if (secondinc<60){
    second.innerHTML=secondinc++;
  }else{
    secondinc=1;
    if (mininc<=9){
      minut.innerHTML="0"+ mininc++;
    }
    else if (mininc<60) {
      minut.innerHTML = mininc++;

    }
    else{
      mininc=1;
      if (heurinc<=9){
        heur.innerHTML="0"+heurinc++;
      }
      else if (heurinc<24){
        heur.innerHTML=heurinc++;
      }else{
        heurinc=1;
      }


    }

  }
}

}

Stopbtn.onclick = function (){
  clearInterval(interval);

}


Resetbtn.onclick=function (){
  clearInterval(interval);

  heurinc=1;
  mininc=1;
  secondinc=1;
  milisecinc=1;
  heur.innerHTML="00";
  second.innerHTML="00";
  minut.innerHTML="00";
  milisecond.innerHTML="00";

}
