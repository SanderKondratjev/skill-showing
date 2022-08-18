package com.task.skillshowing.repository;

import com.task.skillshowing.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {
}
