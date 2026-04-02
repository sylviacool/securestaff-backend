package com.sylvia.securestaff.service.impl;

import com.sylvia.securestaff.dto.EmployeeDto;
import com.sylvia.securestaff.entity.Employee;
import com.sylvia.securestaff.mapper.EmployeeMapper;
import com.sylvia.securestaff.repository.EmployeeRepository;
import com.sylvia.securestaff.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceimpl implements EmployeeService  {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
