//***************************ASSIGN PROFILE PICS & CONTENT IDS FROM ARRAY************//

var profilePairs = [["images/harold.jpg", "content1"], ["images/jill.jpg", "content2"], ["images/bob.jpg", "content3"], ["images/jane.jpg", "content4"], ["images/zebra.jpg", "content5"]];

var profilePics = document.getElementsByClassName("quarter-profiles-pic");
var picDivs = document.getElementsByClassName("quarter-profiles");

function assignPics()   {
for (var i = 0; i <= 3; i++)    {
   
    var id = profilePairs[i][1];
    var eachPic = profilePics[i];
    var eachDiv = picDivs[i];
    
    eachPic.src = profilePairs[i][0];
    
    eachDiv.setAttribute('data-content-id', id); 
    
    }  
}

assignPics();

//******************** ARROWS - SHIFT/UNHIFT PROFILEPAIRS ARRAY ******************8

var profileArrows = document.getElementsByClassName("profiles-arrow");

function profilePairsUnshift()   {
    profilePairs.unshift(profilePairs.pop());
    assignPics();
    var activeTriangle = document.querySelector('.triangle-after.active');

    var nextProfile = activeTriangle.nextElementSibling;
    
    nextProfile.click();
    
    initProgressBars();  

    }

function profilePairsShift()   {
    
    profilePairs.push(profilePairs.shift());    
    assignPics();
    var activeTriangle = document.querySelector('.triangle-after.active');
    
 //   var node = activeTriangle.parentElement.children;
 //   console.log(node.indexOf(activeTriangle));
    
 //   if (node.indexOf(activeTriangle) > 0)   {
    
    var previousProfile = activeTriangle.previousElementSibling;
    previousProfile.click();

  //  }   else {};
  
    initProgressBars();
}


profileArrows[0].onclick = profilePairsUnshift;

profileArrows[1].onclick = profilePairsShift;


//************************ PICS ACTIVE / NOT********************************

var profileContent = document.getElementsByClassName("profile-content");
var triangles = document.getElementsByClassName("triangle-after")
                                              
for (var i = 0; i < picDivs.length; i++)    {
        
    var selectedPic = triangles[i];
    
    selectedPic.onclick = function() {

        for (var j = 0; j < picDivs.length; j++) {
            triangles[j].classList.remove("active");
        }

        this.className += " active";
        
        for (var k = 0; k < profileContent.length; k++){
        
                profileContent[k].classList.remove("active");
        }

        var target = this.childNodes[1];

        var targetId = target.getAttribute('data-content-id');
        
        var targetContent = document.getElementById(targetId);

        targetContent.className += ' active';
        
     
    }
}


//******************LIGHTBOX*****************************//

var lightboxCover = document.getElementById('cover');
var close = document.querySelector("#lightbox i")

lightboxCover.onclick = function()   {
    this.classList.add("hide");
}

close.onclick = function()  {
    lightbox.classList.add("hide");
    lightboxCover.classList.add("hide");
}

var picHover = document.getElementsByClassName("wrapper");
var lightbox = document.getElementById("lightbox");
var lightboxImage = document.querySelector("#lightbox img");

for (var j = 0; j < picHover.length; j++)   {
    
    activeHover = picHover[j];
    
    activeHover.onclick = function()    {
        
        lightboxCover.classList.remove("hide");
        var image = this.parentNode.childNodes[3];
        var imageSrc = image.src;
        lightboxImage.src = imageSrc;
        lightbox.classList.remove("hide");
        
    }
}


//*****************  CIRCLES ACTIVE / NOT****************

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
       

/********* PARALLAX & FIXED NAV*********/

 
            
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



//******************* PROGRESS BARS*****************
            

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

