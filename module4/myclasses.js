// Defineing classes 
class Rectangle { 
  constructor (_width, _height, _color) { 
    console.log("The Rectangle is being created!")

    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  getArea () { 
    return this.width * this.height;
  }

}

let myRectangle = new Rectangle (5, 10, "Blue");

console.log(myRectangle.getArea());


// Another Class and oops Concept!!

class User { 
  constructor (username, email, password) { 

       this.username = username;
       this.email = email;
       this.password = password;

  }

  encryptPassword() { 
    return `${this.password}abc`
  }

  changeUsername () { 
    return `${this.username.toUpperCase()}`
  }
   
}

const chai = new User("Rider", "ride@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());