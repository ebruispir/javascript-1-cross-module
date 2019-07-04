/*   handlers  */
function print_handler(){
    print_deets(project);
} 

/*   event listeners  */

var print = document.getElementById("print");
print.addEventListener("click",print_handler);
