// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee");


// hey this is like react extends component
class Manager extends Employee {
    // super calls the parent (employee), just like react
    constructor(name, id, email, officeNumber) {
        //calls the constructor in the parent class which is employee
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber
    }

}

module.exports = Manager;