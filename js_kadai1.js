let timer = 0;

function count_start(){
  document.getElementById("btn1").disabled = true;
  timeID = setInterval("count_up()", 100);
  $(document).ready(function(){
    $("#btn1").css("background-color","red");
  });
}


function count_stop(){
  document.getElementById("btn1").disabled = false;
  clearInterval(timeID);
  $(document).ready(function(){
    $("#btn1").css("background-color","#fff");
  });
}


function count_reset(){
  timer = 0;
  document.sw_form.counter.value = "00:00:00";
}


function count_up(){
  timer++;
  document.sw_form.counter.value = format(timer);
}


function format(num){
  let s = num / 10;
  let m = Math.floor(s / 60);
  s = (s % 60).toFixed(1);
  let h = Math.floor(m / 60);
  if(s < 10) s = "0"+s;
  if(m < 10) m = "0"+m;
  if(h < 10) h = "0"+h;
  return h+":"+m+":"+s;
}
