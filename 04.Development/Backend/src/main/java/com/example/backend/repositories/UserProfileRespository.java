package com.example.backend.repositories;

import com.example.backend.models.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserProfileRespository extends JpaRepository<UserProfile, Long> {
    @Query(" select u from UserProfile u where u.user.userID = :userID")
    Optional<UserProfile> findByUserID(Long userID);
}
