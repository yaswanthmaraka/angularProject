package com.dmantznr.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dmantznr.model.Employee;
import com.dmantznr.repository.EmployeeRepository;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;

	@RequestMapping("/employees")
	public List<Employee> getAllEmployees() {
		return employeeRepository.findAll();

	}

	@RequestMapping("/addEmployee")
	public String addEmployee(Employee employee) {
		employeeRepository.save(employee);
		return "Employee Added Successfully";
	}

	@GetMapping("/employees/{id}")
	public Optional<Employee> getEmployeeById(@PathVariable int id) {
		return employeeRepository.findById(id);
		 
	}
	@DeleteMapping("/employee/{id}")
	public void deleteEmployee(@PathVariable int id,Employee employee) {
		 employeeRepository.deleteById(id);
		 
	}

	 /*@DeleteMapping("/employee/{id}")
	 public ResponseEntity<?> deleteNote(@PathVariable Integer id) {
	     Optional<Employee> employee = employeeRepository.findById(id);

	     employeeRepository.deleteById(employee);

	     return ResponseEntity.ok().build();
	 }*/
	@PutMapping("/updateEmployee/{id}")
	public String updateEmployee(@RequestBody Employee employee, @PathVariable int id) {
		Employee employeeUpdated =employeeRepository.save(employee);
		return "Employee Added Successfully";
	}
}
