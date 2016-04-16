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
var picDivs = document.getElementsByClassName("quarter-profiles");

function assignPics()   {
for (var i = 0; i <= 3; i++)    {
    var id = profilePairs[i][1];
    var eachPic = profilePics[i];
    var eachDiv = picDivs[i];
   // console.log(id);
    eachPic.src = profilePairs[i][0];
    
   eachDiv.setAttribute('data-content-id', id); 
    }  
}

assignPics();

function profilePairsUnshift()   {
    profilePairs.unshift(profilePairs.pop());
    assignPics();
    initProgressBars();
    
}

function profilePairsShift()   {
    var activePic = document.querySelector('div.quarter-profiles.active');
    activePic.click();
    profilePairs.push(profilePairs.shift());    
    assignPics();
    initProgressBars();
    
    // find the div.quarter-profiles with .active class
   
    
    //var previousPic = activePic.previousElementSibling;
    
    //console.log(activePic);
    // find the sibling element before that element
    //NOT WORKING
    // programmatically trigger the 'onclick' event on that element
}


// PICS ACTIVE / NOT

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


//CIRCLES ACTIVE / NOT

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
                        fixedNav.className = " fixed";
                    }   else    {
                        fixedNav.className = "";
                    } 
                }
                
            window.onscroll = function()   {
              
                var windowBasePos = window.pageYOffset + window.innerHeight;
                
                for (var i = 0; i < parallaxImages.length; i++){
                    var parallaxImage = parallaxImages[i];
                    
                    var elemOffset = parallaxImage.offsetTop - windowBasePos;
                    
                   // console.log(windowBasePos, parallaxImage.offsetTop, elemOffset);
                    
                    parallaxImage.style.backgroundPositionY = "" + (20 + elemOffset * 0.2) + "px";
                }
                
                fixNav();
            }
            
            fixNav();
        })();



// PROGRESS BARS
            

function initProgressBars()   {
    var progressContainer = document.getElementsByClassName("progressContainer")[0];
    var progressBars = document.getElementsByClassName("progressBar");
    
    for (var i = 0; i < progressBars.length; i++)    {
       var percent = progressBars[i].getAttribute("data-skill-level");
        load(progressBars[i], percent)
    }
    var screenScroll = window.pageYOffset;
    var containerOffset =  progressContainer.offsetTop;
          //  console.log(screenScroll);
        //    console.log(containerOffset);
    
    
    function load(progressBar, percent)  {
    
            if (true)  {
                var id = setInterval(frame, 15);
                var progressWidth = 1;
                function frame() {
                    if (progressWidth >= percent)   {
                        clearInterval(id);           
                    }
                    else    {
                        progressWidth++;
                        progressBar.style.width = progressWidth + "%";
                    }
                }
            }
    }
    
 
} 

//document.getElementsByClassName("profile-content"[0]).onmouseover = initProgressBars();

