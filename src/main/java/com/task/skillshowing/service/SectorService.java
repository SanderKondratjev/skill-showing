package com.task.skillshowing.service;

import com.task.skillshowing.repository.SectorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SectorService {

    @Autowired
    private SectorRepository sectorRepository;
}
