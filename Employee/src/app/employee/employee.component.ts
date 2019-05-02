import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../service/data/employee-data.service';
import { Employee } from '../list-employees/list-employees.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeDataService,
    private route : ActivatedRoute,
    private router: Router) { }


  id: number;
  employee: Employee;

  ngOnInit() {
    this.id= this.route.params[`id`];
    this.employee = new Employee(3,'Teja',50000,'Sr Developer',9704006703);
    this.employeeService.retrieveEmployee(this.id).subscribe(
      data => this.employee = data
    );
  }
 saveEmployee(){
    this.employeeService.updateEmployee(this.id,this.employee)
    .subscribe(
      data => {
         console.log(data)
         this.router.navigate(['employees'])
      }
    )
    }
    addEmployee(){
      this.router.navigate(['employees'])
    }
}
