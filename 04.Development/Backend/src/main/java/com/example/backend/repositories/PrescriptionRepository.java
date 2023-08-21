package com.example.backend.repositories;

import com.example.backend.models.Prescription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {
    @Query("""
        select p from Prescription p
        where p.user.userID = :userID
        order by p.preMedicine
    """)
    List<Prescription> findAllPrescriptions(Long userID);
    @Query("select p from Prescription p where p.user.userID = :userID and p.preID =:preID")
    Optional<Prescription> findByUserIDAndPrescriptionID(Long userID, Long preID);
}
