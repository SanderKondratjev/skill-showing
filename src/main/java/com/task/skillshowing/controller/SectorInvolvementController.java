package com.task.skillshowing.controller;

import com.task.skillshowing.model.Sector;
import com.task.skillshowing.repository.SectorInvolvementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/sectors")
public class SectorInvolvementController {

    @Autowired
    private SectorInvolvementRepository sectorInvolvementRepository;

    @GetMapping("/")
    public String info() {
        return "Test that back-end works";
    }

    @GetMapping
    public List<Sector> getAllSectors() {
        return sectorInvolvementRepository.findAll();
    }
}
