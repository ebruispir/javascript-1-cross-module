 // data (variables)
 var project = { 
    name:"Javascript-1", 
    link:"https://github.com/ebruispir/javascript-1-homework",
    description:"My javascript homework on Github"
}
 // functions

 function print_deets(project) {
    for (let key in project){
        console.log(key +" : "+ project[key]);
    }
} 



