const animate = () => {
  const fadeIn = (element) => {
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

  const fadeOut = (element) => {
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
  return { fadeIn, fadeOut }; // Возвращаем объект с функциями fadeIn и fadeOut
};
export { animate };
