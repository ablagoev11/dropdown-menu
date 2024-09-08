class DropdownItem {
  constructor(name, callback) {
    this.name = name;
    this.callback = callback;
  }
  executeCallback() {
    return this.callback();
  }
}

export default DropdownItem;
