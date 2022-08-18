package com.task.skillshowing.controller;

import com.task.skillshowing.model.Sector;
import com.task.skillshowing.repository.SectorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/sectors")
public class SectorController {

    @Autowired
    private SectorRepository sectorRepository;

    @GetMapping
    public List<Sector> getAllSectors() {
        return sectorRepository.findAll();
    }
}
