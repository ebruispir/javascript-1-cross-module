/*   handlers  */
function t_name_handler(){
    print_team_name(teamName);
}

function t_members_handler(){
    print_team_members(teamMembers);
}

function t_intro_handler(){
    introduce(teamName,teamMembers);
}
function new_members_handler(){
    var newMember = document.getElementById("add-member").value;
    teamMembers.push(newMember);
    print_team_members(teamMembers);
}


/*   event listeners  */

var t_name = document.getElementById("team-name");
t_name.addEventListener("click",t_name_handler);

var t_members = document.getElementById("team-member");
t_members.addEventListener("click",t_members_handler);

var t_intro = document.getElementById("intro");
t_intro.addEventListener("click",t_intro_handler);

var new_member = document.getElementById("add");
new_member.addEventListener("click",new_members_handler);
