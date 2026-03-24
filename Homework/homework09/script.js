$(document).ready(function () {

    let images = [
        "images/field.jpg",
        "images/trees.jpg",
        "images/blossom.jpg"
    ];

    let imgIndex = 0;

    function changeImage() {
        $("#image").fadeOut(2000, function () {

            imgIndex = (imgIndex + 1) % images.length;

            $("#image").attr("src", images[imgIndex]);

            let x = Math.random() * 500;
            let y = Math.random() * 300;

            $("#image").css({ left: x})

            $("#image").fadeIn(2000).animate({
            left: "+=50"   
            }, 2000); 

            changeImage();

        });
    }

    setInterval(changeImage, 4000);

    let texts = [
        "Yearning for Spring",
        "for it is",
        "Beautiful",
        "Calm",
        "and new Beginnings"
    ];

    let textIndex = 0;

    function changeText() {
        textIndex = (textIndex + 1) % texts.length;

        $("#text-container").fadeOut(500, function () {
            $(this).text(texts[textIndex]).fadeIn(500).animate({
                left: "+=50"
            }, 1000);
        });
    }

    setInterval(changeText, 3000);


    let colors = ["pink", "lightblue", "lightgreen"];
    let shapeIndex = 0;
    let shapes = ["square", "circle", "triangle"];

    function moveShape() {
        shapeIndex = (shapeIndex + 1) % shapes.length;

        let shape = shapes[shapeIndex];


        $("#shape").css({
            "width": "200px",
            "height": "200px",
            "background-color": colors[shapeIndex],
            "border-radius": "0",
            "border": "none",
            "border-left": "none",
            "border-right": "none",
            "border-bottom": "none"
        });

        if (shape === "square") {
    
        }

        if (shape === "circle") {
            $("#shape").css({
                "border-radius": "50%"
            });
        }

        if (shape === "triangle") {
            $("#shape").css({
                "width": "0",
                "height": "0",
                "background-color": "transparent",
                "border-left": "100px solid transparent",
                "border-right": "100px solid transparent",
                "border-bottom": "200px solid " + colors[shapeIndex]
            });
        }

        $("#shape").animate({ left: "+=50" }, 2000);
    }

    setInterval(moveShape, 2500);

});