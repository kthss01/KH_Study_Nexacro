package com.kh.employee.model.service;

import java.sql.Connection;
import java.util.List;
import java.util.Map;

import static com.kh.common.JDBCTemplate.*;

import com.kh.employee.model.dao.EmployeeDAO;

public class EmployeeService {

	private Connection con;
	private EmployeeDAO employeeDao = new EmployeeDAO();
	
	public List selectList(Map iMap) throws Exception {
		con = getConnection();
		
		List list = employeeDao.selectList(con, iMap);
		
		close(con);
		
		return list;
	}

	public int insertEmployee(Map newMap) throws Exception {
		con = getConnection();
		
		int result = employeeDao.insertEmployee(con, newMap);
		
		if (result > 0) {
			commit(con);
		} else {
			rollback(con);
		}
		
		close(con);
		
		return result;
	}

	public int updateEmployee(Map newMap) throws Exception {
		con = getConnection();
		
		int result = employeeDao.updateEmployee(con, newMap);
		
		if (result > 0) {
			commit(con);
		} else {
			rollback(con);
		}
		
		close(con);
		
		return result;
	}

	public int deleteEmployee(String del_id) {
		con = getConnection();
		
		int result = employeeDao.deleteEmployee(con, del_id);
		
		if (result > 0) {
			commit(con);
		} else {
			rollback(con);
		}
		
		close(con);
		
		return result;
	}

}
