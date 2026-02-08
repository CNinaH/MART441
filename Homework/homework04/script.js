function storylineFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    var answer3 = document.getElementById("choice3").innerHTML;
    if (choice == 1 && answer1 == "Forward") {
        document.getElementById("storyline").innerHTML = "<p> You continue through your normal walking path and nothing new appears. As you head back out of the hiking trail you find the new path is no longer there. You head home and try to forget about the path.";
    } else if (choice == 2 && answer2 == "New Path") {
        document.getElementById("storyline").innerHTML = "<p>As you take the new path everything starts to warp. You feel overwhelmed, fear hits and you start to run. Then suddenly there is a bright light. You wake up in your own bed as if it was a dream? Though you feel you have slept for far too long.</p>"
    } else if (choice == 3 && answer3 == "Head Home") {
        document.getElementById("storyline").innerHTML = "<p>You decided to head home and continue your day as normal. Nothing out of the ordinary happens, it is just a normal day.</p>"
    }
}