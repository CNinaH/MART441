class Slide
{
    constructor(title, image, description, author, year)
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }
}

 let slide1 = new Slide(
    "Australia Fires",
    "images/fire.png",
    "The fires in Australia and fifrefighters working to control them. The climate change causes more fires to break out, leading to more damge to nature and civilization.",
    "National Interagency Fire Center", //https://wodnesprawy.pl/en/fires-in-australia-a-climate-extreme-on-the-other-side-of-the-world/
    "2020"
 );

 let slide2 = new Slide(
    "Uk Protest for Freedom of Speech",
    "images/UKprotest.jpg",
    "Civilians protesting against the Government because of loss of freedom of speech in the work place. Freedom of speech is important, each person should be allowed to speak their opinions without backlash from the government or work place.",
    "Nick Efford", //https://www.opendemocracy.net/en/transformation/real-cancel-culture/
    "2011"
 );

 let slide3 = new Slide(
    "USA Protest for Indigenous Rights",
    "images/USAprotest.jpg",
    "Indigenous citizens protesting for the hundreds of missing women. Many missing and not a lot of media coverage to help find them. This is important because it brings the attention of why are there not more media showing the importance of the indigenous women missing.",
    "Unkown", // https://www.culturalsurvival.org/publications/cultural-survival-quarterly/indigenous-peoples-march-captures-worlds-ear
    "2019"
 );

 let slide4 = new Slide(
    "Ireland Protest for the Disability",
    "images/irelandprotest.jpg",
    "Ireleand citizens protesting foor the rights of the disabled, calling for more income. It is important that someone who is disabled and cannot work to be able to make enough to live off of.",
    "Unknown", //https://www.rte.ie/news/2026/0228/1560855-disability-protest-dublin/
    "2026"
 );

 let slide5 = new Slide(
    "Uruguay Protest for Womens Rights",
    "images/uruguay.png",
    "The women of Latin America protesting for their rights as women. They protest against the violence and sexual harrasment in the work forece. This is important that no one feels threaten because of their gender.",
    "UN Women,", // https://www.flickr.com/photos/unwomen/27076938759
    "2017"
 )

let slides = [slide1, slide2, slide3, slide4, slide5]

 function nextSlide()
{
    let randomIndex = Math.floor(Math.random() * slides.length);

    let selectedSlide = slides[randomIndex];

    document.getElementById("slideImage").src = selectedSlide.image;
    document.getElementById("slideTitle").innerHTML = selectedSlide.title;
    document.getElementById("slideDescription").innerHTML = selectedSlide.description;
    document.getElementById("slideAuthor").innerHTML = "Author: " + selectedSlide.author;
    document.getElementById("slideYear").innerHTML = "Year: " + selectedSlide.year;
}

nextSlide();