package fr.milk.twisters.demo.entity;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "resource")
public class Resource {

    @OneToMany(mappedBy = "resource")
    private List<Category> categories ;


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

    @Column(nullable = false)
    private EnumType type;

    @Column(nullable = false)
    private EnumType status;

    @Column(nullable = false)
    @CreationTimestamp
    private Instant createdAt;


    public Resource() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public EnumType getType() {
        return type;
    }

    public void setType(EnumType type) {
        this.type = type;
    }

    public EnumType getStatus() {
        return status;
    }

    public void setStatus(EnumType status) {
        this.status = status;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

}
