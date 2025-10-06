// Coding Challenge 06
// Vincent Crooks

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department
  }

  describe() {
    return `Employee: ${this.name} (Dept: ${this.department})`
  }
}
//base class Employee

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  describe() {
    return `Manager: ${this.name} (Dept: ${this.department}, Team Size: ${this.teamSize})`;
  }
}

//subclass Manager, extends Employee

const e1 = new Employee("Vinny Crooks", "Finance");
const e2 = new Employee("Chloe Dee", "Accounting");

const m1 = new Manager("Anthony Lee", "Engineering", 8);
const m2 = new Manager("Travis Scott", "Sales", 5);

//sample employees & managers

class Company {
  constructor() {
    this.employees = []
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    this.employees.forEach(emp => {
      console.log(emp.describe());
    })
  }
}

//Class company and added methods for new employess and list employees