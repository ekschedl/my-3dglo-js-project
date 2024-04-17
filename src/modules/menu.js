const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const handleMenu = () => {
    //   if (!menu.style.transform) {
    //     menu.style.transform = "translateX(0)";
    //   } else menu.style.transform = "";
    // или так
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);

  closeBtn.addEventListener("click", handleMenu);

  // можно так
  // for (let i = 0; i < menuItems.length; i++) {
  //   console.log(menuItems[i]);
  //   menuItems[i].addEventListener("click", handleMenu); // }

  // а можно так
  menuItems.forEach((menuItem) =>
    menuItem.addEventListener("click", handleMenu)
  );
};

export default menu;
