var tname = document.getElementById("team-name");
tname.onclick=function(){
    print_team_name(teamName);
}
var tmember = document.getElementById("team-member" );
tmember.onclick=function(){
    print_team_members(teamMembers);
}
var int = document.getElementById("intro");
int.onclick=function(){
    introduce(teamName,teamMembers);
}
