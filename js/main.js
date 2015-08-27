var backgroundImages = [
  "url(css/images/1.jpg)"
];

var sections = [
  {
      id: 'one',
      im: backgroundImages[0]
  }
];

var slideshow;

    function init () {
      var wrapperEl = document.getElementById('wrapper');
      slideshow = document.createElement('div');
      slideshow.className = "slideshow";
      wrapperEl.appendChild(slideshow);


    for(var i=0; i<sections.length; i++){
        var newDiv = document.createElement('div');
        newDiv.id = sections[i].id;
        newDiv.className = "slide";
         newDiv.style.backgroundImage = sections[i].im;
        newDiv.style.backgroundImage.height = 300 + 'px';
        slideshow.appendChild(newDiv);
        sections[i].domElem = newDiv;
    }
    var nextButton = document.getElementById("nextButton");
    nextButton.addEventListener('click', nextSlide);
    var previousButton = document.getElementById("previousButton");
    previousButton.addEventListener('click', prevSlide);

}

var j = 2; //moved ths var outside of the function and it now works!
//My nextSlide Function
function nextSlide() {
  //var i = 2;
  if (j < 8) {
  var firstPhoto = document.getElementById("one");
    firstPhoto.setAttribute("style", "background-image: url(css/images/"+ j +".jpg)");
    j++;
  }
  else if (j == 8) {
    j = 1;
    //firstPhoto.setAttribute("style", "background-image: url(css/images/"+ j +".jpg)");
  }
}

//for the previousSlide function, how do i assign the 'current photo' to a variable that i can then decrement?
//Idea: since i'm only changing out the photo number in the first image with an id of "one" i could potentially
//grab the current photo number from that id?


function prevSlide() {
  var prevPhoto = document.getElementById("one");
  var firstPhotoAttr = prevPhoto.attributes[2]
  var nextAttrVal = firstPhotoAttr.value
  var nextAttrValArray = nextAttrVal.split("");
  var currentPhoto = nextAttrValArray[33]; //seems to be ahead by one
  var previousPhoto = currentPhoto - 1;
  if (currentPhoto > 1) {
    prevPhoto.setAttribute("style", "background-image: url(css/images/"+ previousPhoto +".jpg)");
    console.log(currentPhoto)
  }
  else if (currentPhoto == 1) { //starts the animation from zero once last pic is reached. slight bug though, have to click twice.
    prevPhoto.setAttribute("style", "background-image: url(css/images/"+ 7 +".jpg)");
  }
}

// call init on document ready
$(init);



//
// //options
// //1
// place them on top of eachother and fade them out
// //2
// alter the css left, or right, offsets
// //3
