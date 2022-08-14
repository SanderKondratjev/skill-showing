package com.task.skillshowing;

import com.task.skillshowing.model.Sector;
import com.task.skillshowing.repository.SectorInvolvementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SkillShowingApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SkillShowingApplication.class, args);
	}

	@Autowired
	private SectorInvolvementRepository sectorInvolvementRepository;

	@Override
	public void run(String... args) throws Exception {
		Sector sector1 = new Sector();
		sector1.setName("Manufacturing");
		sectorInvolvementRepository.save(sector1);

		Sector sector2 = new Sector();
		sector2.setName("Other");
		sectorInvolvementRepository.save(sector2);

		Sector sector3 = new Sector();
		sector3.setName("Service");
		sectorInvolvementRepository.save(sector3);
	}
}
