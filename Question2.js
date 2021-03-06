 
class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
      
    }

    static greet(){
        console.log("Hello There");
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
    
    getDetails(){
        console.log(`Name is ${this.name}, email is ${this.email}`);
        return this;
    }

}

class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }

    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    addCoins();{
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
        }
    }

}

class Admin extends Moderator{
    
    addCourse(user,course){
       user.courses.push(course);
       console.log(user);
       
   }
}


let user1 = new User('shwetha',25,'shwetha@gmail.com')
let user2 = new User('swathi',24,'swathi@gmai.com')
let mod = new Moderator('Ben',24,'ben@gmail.com','Moderator');
let admin = new Admin('nithin',25,'nithin@gmail.com');


User.greet();
Moderator.great();
Admin.greet();



