package com.example.kamatha.controller;

import com.example.kamatha.model.Category;
import com.example.kamatha.model.Topic;
import com.example.kamatha.model.User;
import com.example.kamatha.repository.AnswerRepository;
import com.example.kamatha.repository.CategoryRepository;
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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.view.RedirectView;

import javax.servlet.http.HttpServletRequest;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
/**
 *  2020-11-10
 * @author SHAN
 *
 */
@Controller
public class ProfileController {

    private final UserRepository userRepository;
    private final TopicRepository topicRepository;
    private final AnswerRepository answerRepository;
    private final CategoryRepository categoryRepository;

    @Autowired
    public ProfileController(UserRepository userRepository, TopicRepository topicRepository, AnswerRepository answerRepository, CategoryRepository categoryRepository) {
        this.userRepository = userRepository;
        this.topicRepository = topicRepository;
        this.answerRepository = answerRepository;
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("profile")
    public String displayMyProfile(Model model) {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = ((UserDetails)principal).getUsername();
        String avatar=userRepository.getUserByUsername(username).getPhotos();
        User user = userRepository.getUserByUsername(username);
        Long points = userRepository.getPoints(user.getId());

        Long numberOfTopics = topicRepository.countTopicsByUser_Id(user.getId());
        Long numberOfAnswers = answerRepository.countAnswersByUser_Id(user.getId());
        Long numberOfHelped = answerRepository.countAnswersByUser_IdAndUseful(user.getId(), true);
        List<Category> categories = categoryRepository.findAll(new Sort(Sort.Direction.DESC, "createdDate"));
        
        model.addAttribute("avatar",avatar);
        model.addAttribute("username",username);
        model.addAttribute("user", user);
        model.addAttribute("points", points);
        model.addAttribute("numberOfTopics", numberOfTopics);
        model.addAttribute("numberOfAnswers", numberOfAnswers);
        model.addAttribute("numberOfHelped", numberOfHelped);
        model.addAttribute("categories", categories);
        return "profile";
    }

    @GetMapping("profile/{id}")
    public String displayProfileById(@PathVariable Long id, Model model) {
        User user = userRepository.getUserById(id);
        Long points = userRepository.getPoints(user.getId());

        Long numberOfTopics = topicRepository.countTopicsByUser_Id(id);
        Long numberOfAnswers = answerRepository.countAnswersByUser_Id(id);
        Long numberOfHelped = answerRepository.countAnswersByUser_IdAndUseful(id, true);

        model.addAttribute("user", user);
        model.addAttribute("points", points);
        model.addAttribute("numberOfTopics", numberOfTopics);
        model.addAttribute("numberOfAnswers", numberOfAnswers);
        model.addAttribute("numberOfHelped", numberOfHelped);
        model.addAttribute("categoryRepository", categoryRepository);
        return "profile";
    }

    @PostMapping("profile")
    public View addTask(@RequestParam("category") String category, @RequestParam("title") String title,
                        @RequestParam("content") String content, @RequestParam("code") String code,
                        @RequestParam("id_user") String id_user, HttpServletRequest request) {
        Topic topic = new Topic();
        topic.setCategory(category);

        // I know that it can be blank field, but I did it on purpose to find out about Optionals:
        if (Objects.equals(code, ""))
            topic.setCode(null);
        else
            topic.setCode(code);

        topic.setContent(content);
        topic.setTitle(title);
        topic.setCreatedDate(LocalDateTime.now());
        topic.setUser(userRepository.getUserById(Long.parseLong(id_user)));

        topicRepository.save(topic);
        String contextPath = request.getContextPath();
        return new RedirectView(contextPath + "/profile");
    }
}