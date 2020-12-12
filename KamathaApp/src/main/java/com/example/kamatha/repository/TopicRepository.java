package com.example.kamatha.repository;

import com.example.kamatha.model.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
/**
 *  2020-11-10
 * @author SHAN
 *
 */
public interface TopicRepository extends JpaRepository<Topic, Long> {

    Long countTopicsByUser_Id(Long id);

    Topic findTopicById(Long id);

    List<Topic> findTopicsByCategoryOrderByCreatedDateDesc(String category);
    List<Topic> findTopicsByUser_IdOrderByCreatedDateDesc(Long id);
    @Query (
            value = "SELECT * FROM topic WHERE Content like :searchtext%",
            nativeQuery = true
        )
    List<Topic> findTopicByContent(String searchtext);
}
