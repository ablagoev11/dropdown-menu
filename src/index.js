import style from "./style.css";
import createDropdown from "./createDropdown";
import DropdownItem from "./dropdownItem";
const dropdown = function (...args) {
  const button = document.querySelector(".open");
  const dropdown = document.querySelector(".dropdown");
  createDropdown(dropdown, args, button);
};

dropdown(
  new DropdownItem("File", () => {
    console.log("File");
  }),
  new DropdownItem("Browse", () => {
    console.log("Browse");
  }),
  new DropdownItem("Search", () => {
    console.log("Search");
  })
);
