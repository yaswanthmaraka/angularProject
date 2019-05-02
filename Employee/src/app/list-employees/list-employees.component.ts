import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../service/data/employee-data.service';
import { Router } from '@angular/router';

export class Employee {
  constructor(
    public id: number,
    public empName: string,
    public empSal: number,
    public designation: String,
    public phoneNumber: number,
  ){

  }
}

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employee: Employee[];
  message: string

  //   new Employee(1,'Learn to Dance',false,new Date()),
  //   new Employee(2,'Learn to Angular',false,new Date()),
  //   new Employee(3,'Learn to ReactJs',false,new Date()),
  //   new Employee(4,'Learn to Modern Javascript',false,new Date()),
  //   new Employee(5,'Learn to SpringBoot',false,new Date()),
  //   new Employee(6,'Learn to Core Java',false,new Date()),
  //   new Employee(7,'Learn to Advanced Java',false,new Date()),
  //   // {id : 1, description: 'Learn to Dance'},
  //   // {id : 2, description: 'Learn to Angular'},
  //   // {id : 3, description: 'Learn to ReactJs'},
  //   // {id : 4, description: 'Learn to Modern Javascript'},
  //   // {id : 5, description: 'Learn to SpringBoot'},
  //   // {id : 6, description: 'Learn to Core Java'},
  //   // {id : 7, description: 'Learn to Advanced Java'},

  // ]



  constructor(
    private employeeservice:EmployeeDataService,
    private router : Router
  ) { }

  ngOnInit() {
   this.refreshEmployees();
  }
  refreshEmployees(){
    this.employeeservice.retriveAllEmployees().subscribe(
      response => {
        console.log(response);
        this.employee = response;
      }
    )
  }
  deleteEmployee(id){
    console.log(`delete employee ${id}`)
    this.employeeservice.deleteEmployee(id).subscribe(
      response =>{
      console.log(response);
      this.message=`Delete of Employee ${id} Successful!`
      this.refreshEmployees();
    }
    )
  }
  updateEmployee(id){
    console.log(`update ${id}`)
    this.router.navigate(['employee',id])
  }
}
