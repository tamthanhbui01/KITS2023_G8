package com.example.backend.repositories;

import com.example.backend.models.MedicalRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MedicalRecordRepository extends JpaRepository<MedicalRecord, Long> {
    @Query(" select mr from MedicalRecord mr where mr.userProfile.upID = :upID")
    Optional<MedicalRecord> findByUserProfileID(Long upID);
}
