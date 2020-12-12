package com.example.kamatha.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.kamatha.model.Category;
import com.example.kamatha.model.Topic;
import com.example.kamatha.model.Answer;
import com.example.kamatha.repository.AnswerRepository;
import com.example.kamatha.repository.CategoryRepository;
import com.example.kamatha.repository.TopicRepository;
import com.example.kamatha.repository.UserRepository;

@Controller
public class IndexController {

	    private final TopicRepository topicRepository;
	    private final AnswerRepository answerRepository;
	    private final CategoryRepository categoryRepository;
	    private final UserRepository userRepository;

	    @Autowired
	    public IndexController(UserRepository userRepository,TopicRepository topicRepository, AnswerRepository answerRepository, CategoryRepository categoryRepository) {
	    	this.userRepository = userRepository;
	    	this.topicRepository = topicRepository;
	        this.answerRepository = answerRepository;
	        this.categoryRepository = categoryRepository;
	    }
    @GetMapping("/")
    public String displayIndex(Model model) {
    	Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = ((UserDetails)principal).getUsername();
        String avatar=userRepository.getUserByUsername(username).getPhotos();
    	List<Topic> topics = topicRepository.findAll(new Sort(Sort.Direction.DESC, "createdDate"));
    	List<Answer> answer = answerRepository.findAll(new Sort(Sort.Direction.DESC, "createdDate"));
    	List<Category> categories = categoryRepository.findAll(new Sort(Sort.Direction.DESC, "createdDate"));
    	
    	model.addAttribute("avatar",avatar);
        model.addAttribute("username",username);
    	model.addAttribute("topics", topics);
    	model.addAttribute("answer", answer);
    	model.addAttribute("categories", categories);
    	return "index";
    }
    @GetMapping("/index")
    public String displayHome(Model model) {
    	Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = ((UserDetails)principal).getUsername();
        String avatar=userRepository.getUserByUsername(username).getPhotos();
    	List<Topic> topics = topicRepository.findAll(new Sort(Sort.Direction.DESC, "createdDate"));
    	List<Answer> answer = answerRepository.findAll(new Sort(Sort.Direction.DESC, "createdDate"));
    	List<Category> categories = categoryRepository.findAll(new Sort(Sort.Direction.DESC, "createdDate"));
    	
    	model.addAttribute("avatar",avatar);
        model.addAttribute("username",username);
    	model.addAttribute("topics", topics);
    	model.addAttribute("answer", answer);
    	model.addAttribute("categories", categories);
    	return "index";
    }
}
