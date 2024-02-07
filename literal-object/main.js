//OBJETO LITERAL

const nathalia = {
  name: "Nathalia",
  age: 20,
  approvedCourses: ["Curso HTMl y Css", "Curso de Backend"],

  approvedCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  },
};

//CREANDO UN PROTOTIPO

function Student(name, age, approvedCourses) {
  this.name = name;
  this.age = age;
  this.approvedCourses = approvedCourses;
}

//METODO DEL PROTOTIPO
Student.prototype.approvedCourse = function (newCourse) {
  this.approvedCourses.push(newCourse);
};

//CREAR UNA INSTANCIA

const juanita = new Student("Juanita Angelica", 15, [
  "Curso Backend",
  "Curso Node js",
]);



