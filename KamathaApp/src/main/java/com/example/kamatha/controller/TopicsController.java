package com.example.kamatha.controller;

import com.example.kamatha.model.Topic;
import com.example.kamatha.repository.AnswerRepository;
import com.example.kamatha.repository.TopicRepository;
import com.example.kamatha.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
/**
 *  2020-11-10
 * @author SHAN
 *
 */
@Controller
public class TopicsController {

    private final TopicRepository topicRepository;
    private final AnswerRepository answerRepository;
    private final UserRepository userRepository;

    @Autowired
    public TopicsController(UserRepository userRepository,TopicRepository topicRepository, AnswerRepository answerRepository) {
        this.topicRepository = topicRepository;
        this.answerRepository = answerRepository;
        this.userRepository = userRepository;
        
    }

    @GetMapping("topics")
    public String displayAllTopics(Model model) {
    	Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = ((UserDetails)principal).getUsername();
        String avatar=userRepository.getUserByUsername(username).getPhotos();
    	List<Topic> topics = topicRepository.findAll(new Sort(Sort.Direction.DESC, "createdDate"));
        String header = setHeader("all");
        model.addAttribute("avatar",avatar);
        model.addAttribute("username",username);
        model.addAttribute("topics", topics);
        model.addAttribute("header", header);
        model.addAttribute("answerRepository", answerRepository);
        return "topics";
    }

    @GetMapping("topics/{category}")
    public String displayTopicsByCategory(@PathVariable String category, Model model) {
    	Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = ((UserDetails)principal).getUsername();
        String avatar=userRepository.getUserByUsername(username).getPhotos();
    	List<Topic> topics = topicRepository.findTopicsByCategoryOrderByCreatedDateDesc(category);
        String header = setHeader(category);
        model.addAttribute("avatar",avatar);
        model.addAttribute("username",username);
        model.addAttribute("topics", topics);
        model.addAttribute("header", header);
        model.addAttribute("answerRepository", answerRepository);
        return "topics";
    }

    @GetMapping("topics/user/{id}")
    public String displayTopicsByUser(@PathVariable String id, Model model) {
    	Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = ((UserDetails)principal).getUsername();
        String avatar=userRepository.getUserByUsername(username).getPhotos();
    	List<Topic> topics = topicRepository.findTopicsByUser_IdOrderByCreatedDateDesc(Long.valueOf(id));
        String header = setHeader("user");
        model.addAttribute("avatar",avatar);
        model.addAttribute("username",username);
        model.addAttribute("topics", topics);
        model.addAttribute("header", header);
        model.addAttribute("answerRepository", answerRepository);
        return "topics";
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