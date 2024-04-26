export const fadeIn = (element) => {
  let opacity = 0;
  const fadeInAnimation = () => {
    opacity += 0.05;
    element.style.opacity = opacity;
    if (opacity < 1) {
      requestAnimationFrame(fadeInAnimation);
    }
  };
  requestAnimationFrame(fadeInAnimation);
};

export const fadeOut = (element) => {
  let opacity = 1;
  const fadeOutAnimation = () => {
    opacity -= 0.05;
    element.style.opacity = opacity;
    if (opacity > 0) {
      requestAnimationFrame(fadeOutAnimation);
    } else {
      element.style.display = "none";
    }
  };
  requestAnimationFrame(fadeOutAnimation);
};

export const animate = (options) => {
  const { duration, timing, draw } = options;
  const start = performance.now();

  const animateFrame = (time) => {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animateFrame);
    }
  };

  requestAnimationFrame(animateFrame);
};
