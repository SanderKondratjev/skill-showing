package com.task.skillshowing.service;

import com.task.skillshowing.repository.SectorInvolvementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SectorInvolvementService {

    @Autowired
    private SectorInvolvementRepository sectorInvolvementRepository;
}
