package fr.milk.twisters.demo.controller;

import fr.milk.twisters.demo.entity.Resource;
import fr.milk.twisters.demo.repository.ResourceRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/resources")
public class ResourceController {

    private ResourceRepository resourceRepository;
    public ResourceController(ResourceRepository resourceRepositoryInjection) {
        this.resourceRepository = resourceRepositoryInjection;
    }

    @GetMapping("")
    public List<Resource> getAllResources() {
        return this.resourceRepository.findAll();
    }

}
