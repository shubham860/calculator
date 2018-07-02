var exp =  document.getElementById("ip").value;

function display(n1){
   document.getElementById("ip").value = document.getElementById("ip").value + n1;
}

function equal(){
  var exp =  document.getElementById("ip").value;
  if(exp){
    document.getElementById("ip").value = eval(exp);
}
}

function clean(){
   document.getElementById("ip").value = "";
}

function back(){
  var exp =  document.getElementById("ip").value;
  document.getElementById("ip").value = exp.substring(0,exp.length-1);
}
