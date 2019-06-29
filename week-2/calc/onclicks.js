var display = document.getElementById("print");
display.onclick=function(){
    print_vals(x,y);
}
var add_ = document.getElementById("add");
add_.onclick = function(){
    do_math(x, y, add);
}
var subtract_ = document.getElementById("subt");
subtract_.onclick=function(){
    do_math(x, y, subtract);
}
var multiply_ = document.getElementById("multp");
multiply_.onclick=function(){
    do_math(x, y, multiply);
}
var divide_ = document.getElementById("div");
divide_.onclick=function(){
    do_math(x, y, divide);
}
