// Update Copyright year in footer automatically
let year = document.querySelector('.curYear');

const updateYr = new Date();
if (Number(year) !== updateYr.getFullYear()) {
  year.textContent = updateYr.getFullYear();
}



// Mobile Menu display/close
// const header = document.querySelector('.header');

// document.querySelector('.icon-mobile-nav').addEventListener('click', (e) => {

//   if (e.target.classList.contains('open')) {
//     header.classList.add('nav-open');
//   }

//   e.preventDefault();
// });

// document.querySelector('.close').addEventListener('click', (e) => {

//   if (e.target.classList.contains('close')) {
//     header.classList.remove('nav-open');
//   }

//   e.preventDefault();
// });

// More efficient version
const header = document.querySelector('.header');

document.querySelector('.btn-mobile-nav').addEventListener('click', (e) => {

  header.classList.toggle('nav-open');

});


// Smooth Scrolling Animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith('#')) {
      const sectionElem = document.querySelector(href);
      sectionElem.scrollIntoView({ behavior: "smooth" });
    }

    // Close Mobile navigation after click link
    if (link.classList.contains('main-nav-link')) {
      header.classList.toggle('nav-open');
    }

    e.preventDefault();
  });
});






// Sticky Navigation

const sectionHeroElem = document.querySelector('.section-hero');

const obs = new IntersectionObserver((entries) => {
  const ent = entries[0];
  if (ent.isIntersecting === false) {
    document.body.classList.add('sticky');
  } else {
    document.body.classList.remove('sticky');
  }

},
  {
    // In the viewport, null = viewport
    root: null,
    threshold: 0,  // when section-hero section is out of the viewport
    rootMargin: '-80px',  // refers to .sticky .header 'height' in px
  });
obs.observe(sectionHeroElem);





///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

