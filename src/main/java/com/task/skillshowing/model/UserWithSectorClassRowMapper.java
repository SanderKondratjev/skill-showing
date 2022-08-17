package com.task.skillshowing.model;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserWithSectorClassRowMapper implements RowMapper {

    @Override
    public UserNameWithSectorName mapRow(ResultSet resultSet, int i) throws SQLException {
        UserNameWithSectorName response = new UserNameWithSectorName();
        response.setSectorsName(resultSet.getString("name"));
        response.setUsersName(resultSet.getString("name"));
        return response;
    }
}
