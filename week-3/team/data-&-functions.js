var teamName ="Javascript";
var teamMembers =[ "Ebru", "Erdem","Esra" ];

// functions
function print_team_name(teamName){
    console.log("Welcome to the " + teamName + " project.");
}
function print_team_members(teamMembers){
    console.log("My team members are as follows:" );
    for(var i in teamMembers){
        console.log(teamMembers[i]);
    }
}
function introduce(teamName,teamMembers){
     print_team_name(teamName);
     print_team_members(teamMembers);
}
