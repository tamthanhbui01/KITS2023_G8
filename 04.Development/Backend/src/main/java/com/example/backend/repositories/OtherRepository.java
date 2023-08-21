package com.example.backend.repositories;

import com.example.backend.models.Other;
import com.example.backend.securities.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OtherRepository extends JpaRepository<Other, Long> {

}
