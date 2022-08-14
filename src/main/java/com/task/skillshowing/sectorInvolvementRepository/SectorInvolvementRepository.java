package com.task.skillshowing.sectorInvolvementRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class SectorInvolvementRepository {

    @Autowired
    private NamedParameterJdbcTemplate jdbcTemplate;
}
