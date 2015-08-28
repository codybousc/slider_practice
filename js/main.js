var backgroundImages = [
  "url(css/images/1.jpg)",
  "url(css/images/2.jpg)",
  "url(css/images/3.jpg)",
  "url(css/images/4.jpg)",
  "url(css/images/5.jpg)",
  "url(css/images/6.jpg)",
  "url(css/images/7.jpg)"
];

var sections = [
  {
      id: 'one',
      im: backgroundImages[0]
  },
  {
      id: 'two',
      im: backgroundImages[1]
  },
  {
      id: 'three',
      im: backgroundImages[2]
  },
  {
      id: 'four',
      im: backgroundImages[3]
  },
  {
      id: 'five',
      im: backgroundImages[4]
  },
  {
      id: 'six',
      im: backgroundImages[5]
  },
  {
      id: 'seven',
      im: backgroundImages[6]
  }
];

var slideshow,
    currSlide = 0;
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
        slideshow.appendChild(newDiv);
        sections[i].domElem = newDiv;
    }
    var nextButton = document.getElementById("nextButton");
    nextButton.addEventListener('click', nextSlide);
    var previousButton = document.getElementById("previousButton");
    previousButton.addEventListener('click', prevSlide);

    window.onresize = resize.bind(this);
    resize.call(this);

}



function gotoSlide(num) {
  currSlide = num;
  TweenMax.to(slideshow, 0.65, {left: (-num * window.innerWidth) + 'px', ease: Expo.easeInOUt})
}

function nextSlide() {
  gotoSlide((currSlide + 1)%sections.length);
}

function prevSlide() {
  gotoSlide((currSlide - 1)%sections.length);
}

function resize(){
    var w = window.innerWidth,
        h = window.innerHeight;

    for(var i = 0; i < sections.length; i++) {
      sections[i].domElem.style.width = w + 'px';
      sections[i].domElem.style.height = h + 'px';
      sections[i].domElem.style.left = (w * i) + 'px';
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
