var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12"];

var blankImagePath = "images/Feild.jpeg";

var firstNumber = -1;
var secondNumber = -1;
var attempts = 0;
var allFound = 0;

var player = {"firstname":"", "lastname":"", "age":"", "score":0};

var actualImages = new Array();
    
function printBlanks()
{
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }    
}

function createRandomImageArray()
{
    var actualImagePath = ["images/BlueFlower.jpg", "images/YellowFlower.jpeg", "images/OrangeFlower.jpg", "images/PinkFlower.jpg", "images/PurpleFlower.jpg", "images/RedFlower.jpg"];
    var count = [0,0,0,0,0,0];
    while(actualImages.length < 12)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
         
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            
            count[randomNumber] = count[randomNumber] + 1;
        }
    }    
}

function flipImage(number)
{

    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = actualImages[secondNumber];
        
    }
    else if(firstNumber < 0) 
    {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];
    
    }

  
    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        attempts++;
        setTimeout(imagesDisappear, 1000); 
    }

    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        attempts++;
        allFound++;
        
        firstNumber = -1;
        secondNumber = -1;
        if(allFound == actualImages.length/2)
        {  
           var storedPlayer = JSON.parse(localStorage.getItem("playerInfo"));

            storedPlayer.score = attempts;

            localStorage.setItem("playerInfo", JSON.stringify(storedPlayer));

            window.location = "Info.html";
        }
    }
}

function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}


function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;
   
    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "Game.html";
}


function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
    "Age: " + player.age + "<br>" +
    "Attemps: " + player.score;
    if(document.getElementById("infoInformation") != null)
    {
        document.getElementById("infoInformation").innerHTML = str;
    }
    
   
}