package com.sylvia.securestaff.mapper;

import com.sylvia.securestaff.dto.EmployeeDto;
import com.sylvia.securestaff.entity.Employee;
import com.sylvia.securestaff.entity.EmployeeStatus;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                employee.getStatus()

        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        EmployeeStatus status = employeeDto.getStatus() != null
                ? employeeDto.getStatus()
                : EmployeeStatus.ACTIVE;


        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail(),
                status
        );
    }
}
