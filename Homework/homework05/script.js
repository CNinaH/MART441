function getChoice1() {
    var myChoice = document.getElementById("choice").value;
    var myStoryline = document.getElementById("storyline");
    if(myChoice === "forward")
    {
        document.getElementById("heroimage").src = "image/forward.jpg";
        document.getElementById("choice").style.display="none";
        document.getElementById("btnSubmit").style.display="none";
                
        document.getElementById("choice2").style.display="block";
        document.getElementById("btnSubmit2").style.display="block";

        myStoryline.innerHTML = "<p>You continue through your normal walking path and nothing new appears. As you head back out of the hiking trail you find the new path is no longer there. Do you investigate or head home?</p>";
      
    }
    else if (myChoice === "new path") 
    {
        document.getElementById("heroimage").src = "image/newpath.jpeg";
        document.getElementById("choice").style.display="none";
        document.getElementById("btnSubmit").style.display="none";
                
        document.getElementById("choice3").style.display="block";
        document.getElementById("btnSubmit3").style.display="block";

        myStoryline.innerHTML = "<p>As you take the new path everything starts to warp. You feel overwhelmed, fear hits and you. Are you continuing, head back or restart?</p>";
       
    }


}
function getChoice2() 
{
    var answer = document.getElementById("choice2").value;
    var myStoryline = document.getElementById("storyline");
    if(answer ==="investigate")
        {
            document.getElementById("heroimage").src = "image/investigate.jpg";
            myStoryline.innerHTML = "<p>As you search for the path, you go futher into the forest. Loosing track of time, and night is approaching you are now lost.</p>";

            document.getElementById("choice2").style.display="none";
            document.getElementById("btnSubmit2").style.display="none";

            
            

        }
        else if(answer === "head home") {
            document.getElementById("heroimage").src = "image/headhome.jpg";
            myStoryline.innerHTML ="<p>You have decided to forget about this mysterious path and head home. You forget about this the next day as if it never existed.</p>";

            
        }
   
}
function getChoice3() {
    var answer = document.getElementById("choice3").value;
    var myStoryline = document.getElementById("storyline");
    if(answer === "continue")
    {
        document.getElementById("heroimage").src = "image/light.png";
        myStoryline.innerHTML = "<p>You start to run continuing down the New Path. Then suddenly there is a bright light. You wake up in your own bed as if it was a dream? Though you feel as if you have slept for far too long.</p>";
        
        document.getElementById("choice3").style.display="none";
        document.getElementById("btnSubmit3").style.display="none";

        
    }
    else if(answer === "head back") 
        {
        document.getElementById("heroimage").src = "image/headback.jpg";
        myStoryline.innerHTML = "<p>As you turn around there is nothing behind you.</p>";

        
    }
}
function restartStory() {
    location.reload();
}



