import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from 'src/app/list-employees/list-employees.component';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  constructor(
    private http:HttpClient
  ) { }

  retriveAllEmployees(){
    return this.http.get<Employee[]>('http://localhost:8090/employees'); 

  }
  deleteEmployee(id){
    return this.http.delete(`http://localhost:8090/employee/${id}`);

  }
  retrieveEmployee(id){
    return this.http.get<Employee>(`http://localhost:8090/employees/${id}`);
  }
  updateEmployee(id, employee){
    return this.http.put(`http://localhost:8090/updateEmployee/${id}`,employee);
  }
  postEmployee(employee){
    return this.http.post('http://localhost:8090/addEmployee/',employee);
  }
}
