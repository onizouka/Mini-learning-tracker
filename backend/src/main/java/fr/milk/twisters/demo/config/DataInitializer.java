package fr.milk.twisters.demo.config;

import fr.milk.twisters.demo.entity.Category;
import fr.milk.twisters.demo.entity.Resource;
import fr.milk.twisters.demo.repository.CategoryRepository;
import fr.milk.twisters.demo.repository.ResourceRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import static fr.milk.twisters.demo.entity.Status.*;
import static fr.milk.twisters.demo.entity.Type.*;

@Component
public class DataInitializer implements CommandLineRunner {

    private final CategoryRepository categoryRepository;
    private final ResourceRepository resourceRepository;

    public DataInitializer(
            CategoryRepository categoryRepositoryInjection,
            ResourceRepository resourceRepositoryInjection ) {
        this.categoryRepository = categoryRepositoryInjection;
        this.resourceRepository = resourceRepositoryInjection;
    }

    @Override
    public void run(String... args) throws Exception {
        if(this.categoryRepository.count() == 0 && this.resourceRepository.count() == 0) {
            Category blog = categoryRepository.save(new Category("Blog", "Lorem ipsum"));
            resourceRepository.save(new Resource(blog, "Titre", "Une belle description", "http://www.google.fr", ARTICLE, TODO));
        }

    }
}
