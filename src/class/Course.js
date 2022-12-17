export default class Course {
  #Name;
  #Note;
  constructor(name, note) {
    this.#Name = name;
    this.#Note = note;
  }

  set Name(name) {
    this.#Name = name;
  }
  get Name() {
    return this.#Name;
  }
  set Note(note) {
    this.#Name = note;
  }
  get Note() {
    return this.#Note;
  }
}
