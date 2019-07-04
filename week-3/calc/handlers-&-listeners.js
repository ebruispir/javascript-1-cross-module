/*   handlers  */
function display_handler(){
    print_vals(a,b)
}

function new_a_handler(){
    var new_a = Number(document.getElementById("new_a").value);
    a = new_a;
    console.log("a: " + a)
}
function new_b_handler(){
    var new_b = Number(document.getElementById("new_b").value);
    b = new_b;
    console.log("b: " + b)
}
function add_handler(){
    do_math(a, b, add);
}

function subt_handler(){
    do_math(a, b, subtract);
}
function multp_handler(){
    do_math(a, b, multiply);
}

function divide_handler(){
    do_math(a, b, divide);
}

/*   event listeners  */

var display = document.getElementById("print");
display.addEventListener("click",display_handler);

var change_a = document.getElementById("change-a");
change_a.addEventListener("click",new_a_handler);

var chance_b = document.getElementById("change-b");
chance_b.addEventListener("click",new_b_handler);

var add_ = document.getElementById("add");
add_.addEventListener("click",add_handler);

var subt_ = document.getElementById("subt");
subt_.addEventListener("click",subt_handler);

var multp_ = document.getElementById("multp");
multp_.addEventListener("click",multp_handler);

var divide_ = document.getElementById("div");
divide_.addEventListener("click",divide_handler);
