package fr.milk.twisters.demo.repository;

import fr.milk.twisters.demo.entity.Resource;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ResourceRepository extends JpaRepository<Resource, UUID> {
}