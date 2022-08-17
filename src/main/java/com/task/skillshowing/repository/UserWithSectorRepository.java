package com.task.skillshowing.repository;

import com.task.skillshowing.model.UserWithSectorClassRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public class UserWithSectorRepository {

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;

    public List getAllUsersWithSectorNames() {
        String sql = "SELECT users.name, sectors.name FROM users INNER JOIN sectors ON sectors.id=users.sector_id";
        return jdbcTemplate.query(sql, new HashMap<>(), new UserWithSectorClassRowMapper());
    }
}
