/*window.onscroll = function() {


    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("main").className = "fixed";
    } else {
        document.getElementById("main").className = "";
    }

};

function window_onload() {
  window.addEventListener("scroll",navbarFixed);
}

var nav_scrolled = 200;

function navbarFixed()  {
    var offset = window.scrollY;
    if (offset > nav_scrolled)  { 
    document.getElementsById("main").className = "scroll";
    }
}*/

    


var profilePairs = [["images/harold.jpg", "content1"], ["images/jill.jpg", "content2"], ["images/bob.jpg", "content3"], ["images/jane.jpg", "content4"], ["images/zebra.jpg", "content5"]];

var profilePics = document.getElementsByClassName("quarter-profiles-pic");

function assignPics()   {
for (var i = 0; i <= 3; i++)    {
    var id = profilePairs[i][1];
    var elem = profilePics[i];
    console.log(id);
    elem.src = profilePairs[i][0];
    elem.setAttribute('data-content-id', id);
    }  
}

assignPics();

function profilePairsUnshift()   {
    profilePairs.unshift(profilePairs.pop());
    assignPics();    
}

function profilePairsShift()   {
    profilePairs.push(profilePairs.shift());
    assignPics();
    
    // find the div.quarter-profiles with .active class
    var activePic = document.querySelector('div.quarter-profiles.active').previousElementSibling;
    
    console.log(activePic);
    // find the sibling element before that element
    activePic.click();
    // programmatically trigger the 'onclick' event on that element
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
                
                

                var fixedNav = document.getElementById("main");


                function fixNav() {
                    if (document.documentElement.scrollTop || document.body.scrollTop > 400)   {
                        fixedNav.className += " fixed";
                    }   else    {
                        fixedNav.className = "";
                    } 
                }
                
            window.onscroll = function()   {
                var w = window,
                    d = document,
                    e = d.documentElement,
                    g = d.getElementsByTagName('body')[0],
                    x = w.innerWidth || e.clientWidth || g.clientWidth,
                    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
                
                var windowBasePos = window.pageYOffset + window.innerHeight;
                
                for (var i = 0; i < parallaxImages.length; i++){
                    var parallaxImage = parallaxImages[i];
                    
                    var elemOffset = parallaxImage.offsetTop - windowBasePos;
                    
                    console.log(windowBasePos, parallaxImage.offsetTop, elemOffset);
                    
                    parallaxImage.style.backgroundPositionY = "" + (20 + elemOffset * 0.2) + "px";
                }
                
                fixNav();
            }
            
            fixNav();
        })();
            

function loadSkills()   {
    var width
}
