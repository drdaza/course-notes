<script setup>
import TableNotes from "./TableNotes.vue";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
import Student from "../class/Student";
import Course from "../class/Course";
import {existCourse, existStudent, IsEmpty} from "../auxiliar/Auxiliars.js";
let students = new Array();

const NameStudentImput = ref("");
const courseName = ref("");
const noteCourse = ref(0);
// methods
function eventSave(){
  return NameStudentImput.value;
}
function saveCuorseName(){
  return courseName.value;
}
function saveCourseNote(){
  return noteCourse.value;
}
function createStudent(){
  if (!IsEmpty(NameStudentImput.value)) {
    let student = new Student();
    student.setNameStudent(eventSave());
    if (existStudent(students, student)) {
      addCourseToStudent(students.find(element => element.NameStudent === student.NameStudent));
      return
    }
    if (!existStudent(students, student)) {
      students.push(student);
      addCourseToStudent(student);
      NameStudentImput.value = ''
    }
    return
  }
  if(IsEmpty(NameStudentImput.value)){
    alert("The name student ")
  }
}
function addCourseToStudent(student){
  if (!IsEmpty(courseName.value)){
    let course = new Course(saveCuorseName(),saveCourseNote());
    if(existCourse(student.Courses, course)){
      if(confirm('The course exist but you can overide the note')){
        let index = student.Courses.map(producto => producto.Name).indexOf(course.Name);
        student.modifyCourse(course, index);
        courseName.value = ''
        
        return
      }
      
      
    }
    if(!existCourse(student.Courses, course)){
      
      student.addCourse(course);
      courseName.value = ''
      return
    }
  }
  if(IsEmpty(courseName.value)){
    alert("The Course name is empty")
  }
  
}
function showStudents(){
  console.log(students);
  
}


</script>
<template>
  <section id="register-zone">
    <h1>Information of Student</h1>
    <input class="info-student" type="text" v-model="NameStudentImput"  placeholder="Enter a Student name"/>
    <input class="info-student" type="text" v-model="courseName" placeholder="Enter a Course name"/>
    <input class="info-student" type="number" v-model="noteCourse" minlength="1" maxlength="3" min="0" max="10" />
    <div class="buttons-apartate">
      <button class="button-action" @click="createStudent">Add</button>
      <button class="button-action" @click="showStudents">finish</button>
    </div>
  </section>
  <section id="table-zone">
    <table v-for="item in students">
      <tr>
        <th scope="row">student</th>
        <th>Course</th>
        <th>Note</th>
      </tr>
      
      <TableNotes v-for="element in item.Courses"
        :name="item.NameStudent"
        :courses="element.Name"
        :note="element.Note"
      />
      
    </table>
    
  </section>
</template>
<style lang="scss" scoped>
@use "../assets/sass/main" as *;
#register-zone {
  @include displayFlex(column, center, center);
  height: 100%;
  .info-student{
    width: 50%;
    height: 5%;
    background-color: $principal-color;
    color: $font-color;
    font-size: large;
    font-weight: bold;
    border: solid $font-color;
    margin: 1%;
  }
  .buttons-apartate{
    width: 100%;
    height: 5%;
    @include displayFlex(row, normal, center);
    .button-action{
      width: 22%;
      margin: 0 1%;
      background-color: $third-color;
      border: solid $font-color;
      color: $font-color;
      font-size: large;
      font-weight: bold;
    }
    .button-action:hover{
      border: solid $secondary-color;
      color: $secondary-color;
      font-size: large;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
#table-zone{

  @include displayFlex(column, normal, flex-start);
  table{
    
    margin: 2%;
    th{
      border: solid $third-color;
    }
  }
}
@media only screen and (max-width:600px){
  #register-zone {
  @include displayFlex(column, center, center);
  height: 100%;
  .info-student{
    width: 50%;
    height: 10%;
    background-color: $principal-color;
    color: $font-color;
    font-size: large;
    font-weight: bold;
    border: solid $font-color;
    margin: 1%;
  }
  .buttons-apartate{
    width: 100%;
    height: 10%;
    @include displayFlex(row, normal, center);
    .button-action{
      width: 22%;
      margin: 0 1%;
      background-color: $third-color;
      border: solid $font-color;
      color: $font-color;
      font-size: large;
      font-weight: bold;
    }
    .button-action:hover{
      border: solid $secondary-color;
      color: $secondary-color;
      font-size: large;
      font-weight: bold;
      cursor: pointer;
    }
  }
}
}
</style>
