//Ксения. я оставила это пока для себя, я удалю потом
// const menu = () => {
//   const menuBtn = document.querySelector(".menu");
//   const menu = document.querySelector("menu");
//   const closeBtn = menu.querySelector(".close-btn");
//   const menuItems = menu.querySelectorAll("ul>li>a");

//   const handleMenu = () => {
//     //   if (!menu.style.transform) {
//     //     menu.style.transform = "translateX(0)";
//     //   } else menu.style.transform = "";
//     // или так
//     menu.classList.toggle("active-menu");
//   };

//   menuBtn.addEventListener("click", handleMenu);

//   closeBtn.addEventListener("click", handleMenu);

//   // можно так
//   // for (let i = 0; i < menuItems.length; i++) {
//   //   console.log(menuItems[i]);
//   //   menuItems[i].addEventListener("click", handleMenu); // }

//   // а можно так
//   menuItems.forEach((menuItem) =>
//     menuItem.addEventListener("click", handleMenu)
//   );
// };

// export default menu;

const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul > li > a");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  const handleClick = (event) => {
    const target = event.target;

    if (target.closest(".menu") === menuBtn) {
      handleMenu();
    } else if (target === closeBtn) {
      handleMenu();
    } else if (
      target.closest("menu") &&
      Array.from(menuItems).includes(target)
    ) {
      handleMenu();
    } else if (!target.closest("menu")) {
      menu.classList.remove("active-menu");
    }
  };

  document.addEventListener("click", handleClick);
};

export default menu;
