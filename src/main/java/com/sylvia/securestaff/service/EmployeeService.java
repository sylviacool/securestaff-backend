package com.sylvia.securestaff.service;

import com.sylvia.securestaff.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {

    EmployeeDto createEmployee(EmployeeDto employeeDto); //POST
    EmployeeDto getEmployeeById(Long employeeId);  //GET
    List<EmployeeDto> getAllEmployees();
}
