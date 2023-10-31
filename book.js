class Book {
  constructor(
    // parameters
    name,
    pages,
    status,
    colorFront,
    colorBack
  ) {
    //properties
    this.name = name;
    this.pages = pages;
    this.status = status;
    this.color = {
      front: colorFront,
      back: colorBack,
    };
  }
  //methods
  toggleStatus(newStatus) {
    this.status = newStatus;
    console.info("Book status changed.");
  }
  outputProp(prop) {
    console.log(this[prop]);
  }
}

export default Book;
