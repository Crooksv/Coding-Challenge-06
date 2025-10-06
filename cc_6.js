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

