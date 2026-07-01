package fr.milk.twisters.demo.entity;

import jakarta.persistence.*;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

@Entity
@Table(name = "resource")
public class Resource {

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category ;

    @Id
    @GeneratedValue
    @Column(name="Resource_id")
    private int id;

    @Column(length = 100,nullable = false)
    private String title;

    @Column(length = 100,nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(length = 100,nullable = false)
    private String url;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Type type;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    @Column(nullable = false)
    @CreationTimestamp
    private Instant createdAt;

    public Resource() {
    }

    public Resource(String title, String description, String url, Type type, Status status) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.type = type;
        this.status = status;
    }

    public Resource(Category category, String title, String description, String url, Type type, Status status) {
        this.category = category;
        this.title = title;
        this.description = description;
        this.url = url;
        this.type = type;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

}
