package fr.milk.twisters.demo.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "category")
public class Category {

    @OneToMany(mappedBy = "category")
    private List<Resource> resources;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 100,nullable = false)
    private String name;

    @Column(length = 100,nullable = false, columnDefinition = "TEXT")
    private String description;

    public Category() {
    }

    public Category(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public List<Resource> getResources() {
        return resources;
    }

    public void setResources(List<Resource> resources) {
        this.resources = resources;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}