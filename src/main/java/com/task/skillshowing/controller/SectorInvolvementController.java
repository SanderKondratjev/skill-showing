package com.task.skillshowing.controller;

import com.task.skillshowing.service.SectorInvolvementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class SectorInvolvementController {

    @Autowired
    private SectorInvolvementService sectorInvolvementService;

    @GetMapping("/")
    public String info() {
        return "Test that back-end works";
    }
}
