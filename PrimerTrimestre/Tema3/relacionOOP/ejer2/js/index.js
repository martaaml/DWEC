class car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank=0;
        this.odometer=0;
    }

fill(gallons) {
this.tank+=gallons;
    }
    drive(distance){
        const milesPossible=this.tank*this.milesPerGallon;
        if(distance<=milesPossible){
            this.odometer+=distance;
            this.tank-=distance;
        }else{
            this.odometer += milesPossible;  
            this.tank = 0;
            return `¡Me quedé sin combustible a ${this.odometer} millas!`;
          } 
        }
    }

    /*
    const miCarro = new Car("Kia", 25);
    miCarro.fill(10);  
    console.log(miCarro.drive(200)); */