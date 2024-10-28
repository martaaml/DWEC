class Lambdasian{
    constructor(name, age, location){
        this.name=name;
        this.age=age;
        this.location=location;
    }
    speak(){
        return 'hola mi nombre es '+this.name+', y soy de: '+this.location;
    }
}

const lambdasian = new Lambdasian({
  name: "John",
  age: 25,
  location: "New York"
});

console.log(lambdasian.speak());