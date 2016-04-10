var teamIndex = 0;

var profilePics = document.getElementsByClassName("quarter-profiles");
var profileContent = document.getElementsByClassName("profile-content");


for (var i = 0; i < profilePics.length; i++)    {
        
    var profilePic = profilePics[i];
    
    profilePic.onclick = function() {

        for (var i = 0; i < profilePics.length; i++) {
            profilePics[i].classList.remove("active");
        }

        this.className += " active";
        for (var i = 0; i < profileContent.length; i++ )    {
            profileContent[i].classList.remove("active");
        }

        var targetId = this.getAttribute('data-content-id');

        var targetContent = document.getElementById(targetId);

        targetContent.className += ' active';
    }
}

function hideAllTeam()  {
    for (i = 0; i < profilePics.length; i++) {
        profilePics[i].className += ' hidden';
    }
}

hideAllTeam();
showVisibleTeamMembers(); 

function incrementTeamIndex() {
    teamIndex++; 
    hideAllTeam();
    showVisibleTeamMembers();
}

function decrementTeamIndex() {
    teamIndex--;
    hideAllTeam();
    showVisibleTeamMembers();
}

function showVisibleTeamMembers() {
    
    for (var i = teamIndex; i < profilePics.length; i++)    {
        
        if (i <= 3) {
            profilePics[i].classList.remove("hidden");
        }
        else    {
            if (profilePics[i].classList.contains("hidden") === false){
            profilePics[i].className += " hidden";
            }
        }
        
        /*if (i <= (teamIndex + 3)) {
            profilePics[i].classList.remove("hidden");
        } else {
            profilePics[i].className += " hidden";
        }*/

    }
    
    if (teamIndex + 3 === profilePics.length) {
        document.getElementById("galleryRight").className += " hidden";
        document.getElementById("galleryLeft").classList.remove("hidden")
    } else if (teamIndex === 0) {
        document.getElementById("galleryLeft").className += " hidden";
        document.getElementById("galleryRight").classList.remove("hidden")
    }
    
    movePic();


    /*if (teamIndex >= (profilePics.length-2))   {
    var cln = profilePics.cloneNode(true);
    document.getElementById("profilepics").appendChild(cln);*/
    
}

function movePic()  {
    var cln = profilePics[0].cloneNode(true);
    //document.getElementById("profilePics").appendChild(cln);
    profilePics[profilePics.length] = cln;
    console.log(profilePics);
}

 /*var toSplice = profilePics[teamIndex].splice();
            profilePics.push(profilePics);*/

