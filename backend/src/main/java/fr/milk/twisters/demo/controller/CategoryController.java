package fr.milk.twisters.demo.controller;

import fr.milk.twisters.demo.entity.Category;
import fr.milk.twisters.demo.repository.CategoryRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/categories")
public class CategoryController {
    private CategoryRepository categoryRepository;
    public CategoryController(CategoryRepository categoryRepositoryInjection) {
        this.categoryRepository = categoryRepositoryInjection;
    }

    @GetMapping("")
    public List<Category> getAllCategories() { return this.categoryRepository.findAll();}

}
