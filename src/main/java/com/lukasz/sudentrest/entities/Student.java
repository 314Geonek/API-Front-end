/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.lukasz.sudentrest.entities;

import com.fasterxml.jackson.annotation.JsonView;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

/**
 *
 * @author geon
 */
@Entity
@Table(name = "Students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter
    @Setter
    private Integer id;
    @JsonView
    @Getter
    @Setter
    private String name;
    @JsonView
    @Getter
    @Setter
    private String surname;
    @JsonView
    @Getter
    @Setter
    @GeneratedValue(strategy = GenerationType.AUTO)
    private float avarage;

    public Student() {
    }

    public Student(String name) {
        this.name = name;
    }

    public Student(String name, String surname, float avarage) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.avarage = avarage;
    }

}
