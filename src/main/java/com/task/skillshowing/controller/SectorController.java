package com.task.skillshowing.controller;

import com.task.skillshowing.model.Sector;
import com.task.skillshowing.repository.SectorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("{id}")
    public ResponseEntity<Sector> getSectorById(@PathVariable long id) {
        Sector sector = sectorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Sector not exist with id:" + id));
        return ResponseEntity.ok(sector);
    }

    @PutMapping("{id}")
    public ResponseEntity<Sector> updateSector(@PathVariable long id,@RequestBody Sector sectorDetails) {
        Sector updateSector = sectorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Sector not exist with id:" + id));

        updateSector.setName(sectorDetails.getName());

        sectorRepository.save(updateSector);

        return ResponseEntity.ok(updateSector);
    }
}
