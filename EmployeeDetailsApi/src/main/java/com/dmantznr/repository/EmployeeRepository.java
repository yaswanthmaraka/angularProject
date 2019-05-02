package com.dmantznr.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dmantznr.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Integer>{

	void deleteById(Optional<Employee> employee);

}
