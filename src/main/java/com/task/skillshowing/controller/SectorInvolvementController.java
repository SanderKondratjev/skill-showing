package com.task.skillshowing.controller;

import com.task.skillshowing.model.Sector;
import com.task.skillshowing.repository.SectorInvolvementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/sectors")
public class SectorInvolvementController {

    @Autowired
    private SectorInvolvementRepository sectorInvolvementRepository;

    @GetMapping
    public List<Sector> getAllSectors() {
        return sectorInvolvementRepository.findAll();
    }

    // TODO change it later to filler name, currently just check that everything works
    // TODO for sectors u dont need to use "/sectors after postmapping as it is already in line 12
    @PostMapping
    public Sector createSector(@RequestBody Sector sector) {
        return sectorInvolvementRepository.save(sector);
    }

    // TODO change it later to filled data, currently just check that everything works
    @GetMapping("{id}")
    public ResponseEntity<Sector> getSectorById(@PathVariable long id) {
        Sector sector = sectorInvolvementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Sector not exist with id:" + id));
        return ResponseEntity.ok(sector);
    }
}
