package com.task.skillshowing.controller;

import com.task.skillshowing.repository.UserWithSectorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/user-sector")
public class UserWithSectorController {

    @Autowired
    private UserWithSectorRepository userWithSectorRepository;

    @GetMapping
    public List getAllUsersWithSectorNames() {
        return userWithSectorRepository.getAllUsersWithSectorNames();
    }

}

