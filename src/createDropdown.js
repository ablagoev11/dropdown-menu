const createDropdown = function (node, args, button) {
  let toggle = true;
  args.map((arg) => {
    const dropdownItem = document.createElement("button");
    dropdownItem.textContent = arg.name;

    dropdownItem.addEventListener("click", () => {
      arg.executeCallback();
    });
    node.appendChild(dropdownItem);
  });
  button.addEventListener("click", () => {
    toggle = !toggle;
    if (toggle) node.classList.add("visible");
    else node.classList.remove("visible");
  });
};

export default createDropdown;
