import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calc from "./modules/calc";
// import form from "./modules/form";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import swiper from "./modules/swiper";
import sendForm from "./modules/sendForm";
// import nothing from "./modules/nothing";

timer("21 april 2024, 21:36:00");
menu();
modal();
calc(100);
// form();
tabs();
slider();
swiper();
sendForm({
  formId: "form1", // Идентификатор первой формы
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});

sendForm({
  formId: "form2", // Идентификатор второй формы
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});

sendForm({
  formId: "form3", // Идентификатор третьей формы
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
// nothing();
