const slider = document.getElementById("slider"),
  wrapper = document.querySelector(".wrapper"),
  sliderItems = document.querySelector(".feedbacks__list"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  firstCardWidth = sliderItems.querySelector(".slide").offsetWidth,
  carouselChildrens = [...sliderItems.children];


const columnGap = parseInt(getComputedStyle(sliderItems).columnGap);
const translateWidth = `${firstCardWidth + columnGap}px`


let cardPerView = Math.round(sliderItems.offsetWidth / firstCardWidth);
let direction;

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    sliderItems.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  sliderItems.insertAdjacentHTML("beforeend", card.outerHTML);
});

prev.addEventListener("click", function () {
  direction = -1;
  wrapper.style.transform = `translate(${translateWidth})`;
});

next.addEventListener("click", function () {
  direction = 1;
  wrapper.style.transform = `translate(-${translateWidth})`;
});

// Transition events
slider.addEventListener("transitionend", () => {
  if (direction === -1) {
    sliderItems.prepend(sliderItems.lastElementChild);
  } else {
    sliderItems.append(sliderItems.firstElementChild);
  }

  wrapper.style.transition = "none";
  wrapper.style.transform = "translate(0)";
  setTimeout(() => {
    wrapper.style.transition = "all 0.5s";
  });
});
