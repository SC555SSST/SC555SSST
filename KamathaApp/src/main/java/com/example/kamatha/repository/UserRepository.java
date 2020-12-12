package com.example.kamatha.repository;

import com.example.kamatha.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
/**
 *  2020-11-10
 * @author SHAN
 *
 */
public interface UserRepository extends JpaRepository<User, Long> {

	@Modifying
    @Transactional
    @Query ("UPDATE User a SET a.role = :string WHERE a.id = :id")
    void setAdminRole(@Param("string") String string, @Param("id") Long id);
	
	
	@Modifying
    @Transactional
    @Query ("UPDATE User a SET a.photos = :string WHERE a.id = :id")
    void updateUserDetails(@Param("string") String string, @Param("id") Long id);
	
    User getUserByUsername(String username);
    User getUserById(long Id);

    List<User> findAll();

    @Query (
        value = "(SELECT SUM(points) FROM (SELECT COUNT(topic.id_user) AS points FROM topic WHERE topic.id_user = :id" +
                " UNION ALL SELECT 2 * COUNT(answer.id_user) AS points FROM answer WHERE answer.id_user = :id UNION ALL " +
                "SELECT 3 * COUNT(answer.id_user) AS points FROM answer WHERE answer.id_user = :id AND answer.useful = TRUE) t)",
        nativeQuery = true
    )
    Long getPoints(@Param("id") Long id);
}
