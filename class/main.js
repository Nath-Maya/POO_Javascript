//CREANDO UNA CLASE
class Student {
  constructor(name,age,approvedCourses) {
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
  }

  //Metodo de la clase
  approvedCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

//CREAR UNA INSTANCIA
const miguel = new Student("Miguel Aguado", 35, [
  "Curso Backend",
  "Curso Node js",
]);

console.log(miguel)