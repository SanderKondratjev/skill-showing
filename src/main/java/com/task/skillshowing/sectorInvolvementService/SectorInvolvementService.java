package com.task.skillshowing.sectorInvolvementService;

import com.task.skillshowing.sectorInvolvementRepository.SectorInvolvementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SectorInvolvementService {

    @Autowired
    private SectorInvolvementRepository sectorInvolvementRepository;
}
