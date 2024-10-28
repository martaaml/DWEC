class Student extends Lambdasian {
    constructor({ name, age, location, previousBackground, className = 'CS132', favSubjects = ['HTML', 'CSS', 'JS'] }) {
        super({ name, age, location });
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    /**
     * 
     */
    listSubjet(subjects) {
        return `Loving`+this.favSubjects+`!`
    }
}
