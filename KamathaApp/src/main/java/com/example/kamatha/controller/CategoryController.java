package com.example.kamatha.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.RedirectView;

import com.example.kamatha.model.Answer;
import com.example.kamatha.model.Category;
import com.example.kamatha.repository.CategoryRepository;
import com.example.kamatha.repository.UserRepository;

@Controller
public class CategoryController {
	private final CategoryRepository categoryRepository;
	private final UserRepository userRepository;

  @Autowired
    public CategoryController(UserRepository userRepository,CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
    }

   @GetMapping("categories")
    public String displayAllCategories(Model model) {
	   	Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
       	String username = ((UserDetails)principal).getUsername();
       	String avatar=userRepository.getUserByUsername(username).getPhotos();
	   	List<Category> categories = categoryRepository.findAll(new Sort(Sort.Direction.DESC, "createdDate"));
        String header = setHeader("all");
        model.addAttribute("avatar",avatar);
        model.addAttribute("username",username);
        model.addAttribute("categories", categories);
        model.addAttribute("header", header);
        return "categories";
    }
   @GetMapping("managecategories")
   public String displayManageCategories(Model model) {
	   Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
       String username = ((UserDetails)principal).getUsername();
       String avatar=userRepository.getUserByUsername(username).getPhotos();
	   List<Category> categories = categoryRepository.findAll(new Sort(Sort.Direction.DESC, "createdDate"));
	   model.addAttribute("avatar",avatar);
       model.addAttribute("username",username);
	   model.addAttribute("categories", categories);
       return "managecategories";
   }
   @PostMapping("managecategories")
   public View addCategory(@RequestParam("category") String category,HttpServletRequest request) {
	   Category categories = new Category();
	   categories.setCategory(category);
       
	   categories.setCreatedDate(LocalDateTime.now());
	   categoryRepository.save(categories);
       String contextPath = request.getContextPath();
       return new RedirectView(contextPath + "/categories");
   }
    private String setHeader(String category) {
        switch (category) {
            case "se":
                return "Java Standard Edition";
            case "ee":
                return "Java Enterprise Edition";
            case "jpa":
                return "Java Persistence API and Hibernate";
            case "spring":
                return "Spring Framework";
            case "web":
                return "HTML/CSS/JavaScript";
            case "all":
                return "All topics";
            default:
                return "User's topics";
        }
    }
}
