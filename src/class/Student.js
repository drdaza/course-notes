import { IsEmpty } from "../auxiliar/Auxiliars";
export default class Student {
  #NameStudent;
  #Courses;
  constructor() {
    this.#NameStudent = '';
    this.#Courses = new Array();
  }
  setNameStudent(nameStudent) {
    
    this.#NameStudent = nameStudent;
  }
  get NameStudent() {
    return this.#NameStudent;
  }
  set Courses(course) {
    this.#Courses = course;
  }
  get Courses() {
    return this.#Courses;
  }
  addCourse(course){
    this.#Courses.push(course);
  }
  modifyCourse(course, index){
    this.#Courses.splice(index, 1, course)
  }
}
