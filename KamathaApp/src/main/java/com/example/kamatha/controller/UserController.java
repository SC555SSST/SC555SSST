package com.example.kamatha.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.RedirectView;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.kamatha.model.Answer;
import com.example.kamatha.model.Topic;
import com.example.kamatha.model.User;
import com.example.kamatha.repository.UserRepository;
import com.example.kamatha.util.FileUploadUtil;

@Controller
public class UserController {
	private final UserRepository userRepository;

	  @Autowired
	    public UserController(UserRepository userRepository) {
	        this.userRepository = userRepository;
	    }

	   @GetMapping("users")
	    public String displayAllUsers(Model model) {
		   	Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	        String username = ((UserDetails)principal).getUsername();
	        String avatar=userRepository.getUserByUsername(username).getPhotos();
	        List<User> users = userRepository.findAll();
	        String header = "All Users";
	        
	        model.addAttribute("avatar",avatar);
	        model.addAttribute("username",username);
	        model.addAttribute("users", users);
	        model.addAttribute("header", header);
	        return "users";
	    }

	    @PostMapping("users/{id}")
	    public View updateUser(@RequestParam String id_user, @RequestParam String action,
	                             @RequestParam(required = false) String state, HttpServletRequest request) {
	        switch (action) {
	            case "useful" :
	            	userRepository.setAdminRole(String.valueOf("ADMIN"), Long.valueOf(id_user));
	                break;
	    
	        }
	        String contextPath = request.getContextPath();
	        //return new RedirectView(contextPath + "/users/" + id_user);
	        return new RedirectView(contextPath + "/users");
	    }
	    
	    @PostMapping("/users/save")
	    public RedirectView saveUser(@RequestParam String id_user,
	            @RequestParam("image") MultipartFile multipartFile,HttpServletRequest request) throws IOException {
	         
	        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
	        //user.setPhotos(fileName);
	         
	        //User savedUser = userRepository.save(user);
	        userRepository.updateUserDetails(String.valueOf(fileName), Long.valueOf(id_user));
	        String uploadDir = "user-photos/" + id_user;
	 
	        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
	        String contextPath = request.getContextPath();
	        return new RedirectView(contextPath + "/users");
	        //return new RedirectView("/users", true);
	    }
}
