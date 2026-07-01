package fr.milk.twisters.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "category")
public class Category {

    @ManyToOne
    @JoinColumn(name = "resource_id")
    private Resource resource;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 100,nullable = false)
    private String name;

    @Column(length = 100,nullable = false, columnDefinition = "TEXT")
    private String description;


    public Category() {
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
