console.log("********************* Object - Create 1 **********************");

function createPerson1() {

    var person = new Object();

    person.name = "Lucy";
    person.designation = "Boss";
    person.phone = 9049814721;

    return person;
}

var lucy = createPerson1();
console.log(lucy);
console.log("Name :", lucy.name, "\nDesignation : ", lucy.designation, "\nPhone Number :", lucy.phone);

console.log("********************* Object - Create 2 **********************");

function createPerson2() {

    var person = {}; // this is an Object :)

    person.name = "Vishal";
    person.designation = "Trainee";
    person.phone = 7875017508;

    return person;
}

var myName1 = createPerson2();
console.log(myName1);
console.log("Name :", myName1.name, "\nDesignation : ", myName1.designation, "\nPhone Number :", myName1.phone);

console.log("********************* Object - Create 3 **********************");

function createPerson3() {

    var person = {};

    person['name'] = "Lonika Mahajan";
    person['designation'] = "Boss";
    person['phone'] = 9049814721;

    return person;
}

var lucy1 = createPerson3();
console.log(lucy1);
console.log("Name :", lucy1.name, "\nDesignation : ", lucy1.designation, "\nPhone Number :", lucy1.phone);

console.log("********************* Object - Create 4 **********************");

function createPerson4() {

    var person = {
        name: "Vishal Arora",
        designation: "Trainee",
        phone: 7875017508
    }; // this is an Object :)

    return person;
}

var myName2 = createPerson4();
console.log(myName2);
console.log("Name :", myName2.name, "\nDesignation : ", myName2.designation, "\nPhone Number :", myName2.phone);

console.log("********************* Object - Create 5 **********************");

function createPerson5() {

    this.name = "LMN";
    this.designation = "Boss";
    this.phone = 9049814721;
    this.isActive = true;
}

var lucy2 = new createPerson5();
console.log(lucy2);
console.log("Name :", lucy2.name, "\nDesignation : ", lucy2.designation, "\nPhone Number :", lucy2.phone, "\nIs Active :", lucy2.isActive);

console.log("********************* Object - Create 6 **********************");
var Person = {
    name: "name",
    designation: "Default Designation",
    phone: 1234567890,
    isActive: false,

    displayPerson: function () {
        console.log("Name :", this.name, "\nDesignation : ", this.designation, "\nPhone Number :", this.phone, "\nIs Active :", this.isActive);

    }
}
var vishal = Object.create(Person);
vishal.name = "Vishal A.";
vishal.phone = 7875017508;
vishal.isActive = false;

vishal.displayPerson();

//Delete the attribute value
delete vishal.phone;
vishal.displayPerson();

var attributeList = "";
for (attribute in vishal) {
    attributeList += "\n\t\t" + attribute;
}
console.log("Before Deletetion :", attributeList);

// Delete the Attribute Object  
delete Person.designation;


attributeList = "";
for (attribute in vishal) {
    attributeList += "\n\t\t" + attribute;
}
console.log("After Deletetion :", attributeList);
vishal.displayPerson();