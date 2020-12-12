package com.example.kamatha.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import com.example.kamatha.repository.AnswerRepository;
import com.example.kamatha.repository.TopicRepository;
import com.example.kamatha.repository.UserRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.kamatha.model.Answer;
import com.example.kamatha.model.Topic;

@Controller
public class SearchController {
	
		private final TopicRepository topicRepository;
	    private final AnswerRepository answerRepository;
	    private final UserRepository userRepository;

	    @Autowired
	    public SearchController(UserRepository userRepository, TopicRepository topicRepository, AnswerRepository answerRepository) {
	    	this.userRepository = userRepository;
	    	this.topicRepository = topicRepository;
	        this.answerRepository = answerRepository;
	    }

	@PostMapping("search")
    public String displaySearch(@RequestParam("searchtext") String searchtext,  Model model) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = ((UserDetails)principal).getUsername();
        String avatar=userRepository.getUserByUsername(username).getPhotos();

        List<Topic> topic = topicRepository.findTopicByContent(searchtext);
        
        model.addAttribute("avatar",avatar);
        model.addAttribute("username",username);
        model.addAttribute("topic", topic);
        return "search";
    }
}
