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
        if(this.categoryRepository.count() == 0) {
            categoryRepository.save(new Category("ARTICLE", "Article de presse ou blog sur une information donnée"));
            categoryRepository.save(new Category("VIDEO", "Vidéo de formation sur une technologie"));
            categoryRepository.save(new Category("DOCUMENTATION", "Accès à la documentation officielle ou pertinente"));
            categoryRepository.save(new Category("COURSE", "Tutoriel en ligne"));
            categoryRepository.save(new Category("OTHER", "Tout ce qui ne rentre pas dans les 4 cas précédents"));
        }

        if(this.resourceRepository.count() == 0) {
            resourceRepository.save(new Resource("Les JPA en JAVA", "Réviser les JPA", "www.baeldung.com", DOCUMENTATION, IN_PROGRESS ));
            resourceRepository.save(new Resource("Les joies du CSS", "Réviser le CSS", "www.youtube.com/Grafikart", VIDEO, TODO ));
            resourceRepository.save(new Resource("Le JS c'est nul", "Pourquoi le JS c'est moins bien que le HTML", "", ARTICLE, DONE));
        }

    }
}
