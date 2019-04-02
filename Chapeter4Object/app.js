const Joseph = {
  name: 'joe',
  age : 36,
}

console.log(Joseph);

//Person Constructor
function Person(firstname, lastname, dob){
  this.firstname = firstname;
  this.lastname = lastname;
  this.birthday = new Date(dob);
  this.calculateAge = function(){//Can delete this for protype example
    const diff = Date.now() - this.birthday.getTime();//Can delete this for protype example
    const ageDate = new Date(diff);//Can delete this for protype example
    return Math.abs(ageDate.getUTCFullYear() - 1970);//Can delete this for protype example
  }
}

// Prototype
// Person.prototype.calculateAge = function(){
//   const diff = Date.now() - this.birthday.getTime();/
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

const mary = new Person('Jon','Doe','8-12-90');