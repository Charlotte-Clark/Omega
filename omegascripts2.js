window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("main").className = "fixed";
    } else {
        document.getElementById("main").className = "";
    }
}

/*function window_onload() {
  window.addEventListener("scroll",navbarFixed);
}

var nav_scrolled = 200;

function navbarFixed()  {
    var offset = window.scrollY;
    if (offset > nav_scrolled)  { 
    document.getElementsById("main").className = "scroll";
    }
}*/


var profilePairs = [["images/harold.jpg", "harold"], ["images/jill.jpg", "jill"], ["images/bob.jpg", "bob"], ["images/jane.jpg", "jane"], ["images/zebra.jpg", "zebra"]];

var profilePics = document.getElementsByClassName("quarter-profiles-pic");

function assignPics()   {
for (var i = 0; i <= 3; i++)    {
   profilePics[i].src = profilePairs[i][0];    
    }  
}

assignPics();

function profilePairsShift()   {
    profilePairs.push(profilePairs.shift());
    assignPics();
}

function profilePairsUnshift()   {
    profilePairs.unshift(profilePairs.pop());
    assignPics();
}



var picDivs = document.getElementsByClassName("quarter-profiles");
var profileContent = document.getElementsByClassName("profile-content");
                                              
for (var i = 0; i < picDivs.length; i++)    {
        
    var selectedPic = picDivs[i];
    
    selectedPic.onclick = function() {

        for (var j = 0; j < picDivs.length; j++) {
            picDivs[j].classList.remove("active");
        }

        this.className += " active";
        
        for (var k = 0; k < profileContent.length; k++){
        
                profileContent[k].classList.remove("active");
        }
        
        var targetId = this.getAttribute('data-content-id');
        
        var targetContent = document.getElementById(targetId);

        targetContent.className += ' active';
    }
}

var circleIcons = document.getElementsByClassName("circle");

        for (var i = 0; i < circleIcons.length; i++)    {
                 circleIcons[i].classList.remove("active");
        
            var selectedCircle = circleIcons[i];
            
                selectedCircle.onmouseover = function() {
                    for (var j = 0; j < circleIcons.length; j++)    {
                        circleIcons[j].classList.remove("active");
                    }
                    this.className += " active";
                }
            }
       

/********* Parallax*********/

 
            
            (function() {
                var parallaxImages = document.getElementsByClassName("parallax-bg");
                
            window.onscroll = function()   {
                for (var i = 0; i < parallaxImages.length; i++){
                var offset = window.pageYOffset;
                var parallaxImage = parallaxImages[i];
                parallaxImage.style.backgroundPosition = "50% " + (offset * 0.2) + "px";
            }
            }
        })();
            
