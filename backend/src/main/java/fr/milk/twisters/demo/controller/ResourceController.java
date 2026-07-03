package fr.milk.twisters.demo.controller;

import fr.milk.twisters.demo.entity.Resource;
import fr.milk.twisters.demo.repository.ResourceRepository;

import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {

    private final ResourceRepository resourceRepository;

    public ResourceController(ResourceRepository resourceRepositoryInjection) {
        this.resourceRepository = resourceRepositoryInjection;
    }

    @GetMapping("")
    public List<Resource> getAllResources() {

        return this.resourceRepository.findAll();
    }


    @GetMapping("/{id}")
    public Resource getResourceById(@PathVariable UUID id) {
        return resourceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Resource not found"));
    }
    @PostMapping("")
    public Resource createResource(@RequestBody Resource resource) {

        return resourceRepository.save(resource);
    }
}

