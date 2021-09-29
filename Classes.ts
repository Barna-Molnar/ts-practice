abstract class Department {
  static fiscalYear = 2020;
  // private name: string; only accesible in this particular class  // private keyword only in the class is available
  // private readonly id : string
  protected employees: string[] = []; // protected field is available in other inherited classes

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }
  static createEmployee(name: string) {
    return { name: name };
  }
  abstract describe(this: Department): void;
  // console.log(`Department: ${this.id}: ${this.name}`);

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
  describe() {
    console.log(
      `DescribeMethod: Department: ${this.name}/ ID: ${this.id} ${Department.fiscalYear}`
    );
  }
}

class AccountingDepartment extends Department {
  private lastReport;
  private static instance: AccountingDepartment;
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting2');
    this.lastReport = reports[0];
  }

  // Singleton pattern to private constructor ...only 1 instance
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('D2', ['First report']);
    return this.instance;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("There isn't any....");
  }
  set mostRecentReport(value: string) {
    this.addReport(value);
  }
  describe() {
    console.log(`Accounting Department ID : ${this.id}`);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
  addEmployee(name: string) {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
}
// const accounting2 = new AccountingDepartment('d3', ['the first report']);
const accounting2 = AccountingDepartment.getInstance();
console.log('Last Report: ', accounting2.mostRecentReport);
accounting2.addReport('this is the second report');
accounting2.printReports();
accounting2.addEmployee('Max');
accounting2.addEmployee('Barni');
console.log(accounting2);
const itDepartment = new ITDepartment('d2', ['Max', 'Barni']);

// const accounting = new Department('D1', 'Accounting');
// console.log(accounting);

// accounting.addEmployee('Barni');
// accounting.addEmployee('Manu');

// accounting.describe();
// // accounting.name = 'NEW NAME'
// accounting.printEmployeeInformation();
// It Department
itDepartment.describe();
// const accountingCopy = { name: 'Barni', describe: accounting.describe };
// const obj = { name: 'Barni nagyon tud' };

// accountingCopy.describe();
const employee1 = Department.createEmployee('Barni');
console.log(employee1, Department.fiscalYear);
accounting2.describe();
