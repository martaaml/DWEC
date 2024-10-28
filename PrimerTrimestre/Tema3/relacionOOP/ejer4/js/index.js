class Instructor extends Lambdasian {
    constructor({ name, age, location, specialty, favLanguage, catchPhrase }) {
      super({ name, age, location }); // Llamamos al constructor de la clase padre
      this.specialty = specialty;
      this.favLanguage = favLanguage;
      this.catchPhrase = catchPhrase;
    }
  
    demo(subject) {
      return `Hoy estamos aprendiendo sobre`+this.subject;
    }
  
    grade(student, subject) {
      return `${student.name} recibe una puntuación perfecta en ${subject}.`;
    }
  }