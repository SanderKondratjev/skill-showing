package com.task.skillshowing.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Table;

@Getter
@Setter
@Table
public class UserNameWithSectorName {

    @Column(name = "name")
    private String sectorsName;

    @Column(name = "name")
    private String usersName;
}
