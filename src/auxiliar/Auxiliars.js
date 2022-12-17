export function existStudent(listStudents, student){
    return (listStudents.find(element => element.NameStudent === student.NameStudent)!=undefined) ? true : false;
}
export function IsEmpty(parameter){
    return (parameter=='') ? true : false;
}
export function existCourse(listCourses, course){
    return (listCourses.find(element => element.Name === course.Name)!= undefined) ? true: false;
}