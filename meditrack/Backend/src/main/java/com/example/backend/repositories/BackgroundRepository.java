package com.example.backend.repositories;

import com.example.backend.models.Background;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface BackgroundRepository extends JpaRepository<Background, Long> {

    @Query("select b from Background b")
    List<Background> findBackgroundByAll();

    @Query("""
        select b from Background b where b.bgDate = :now and b.medicalRecord.medID=:medID
    """)
    Optional<Background> findBackgroundByBgDate(Long medID, LocalDate now);
    @Query("select b from Background b where b.medicalRecord.medID =:medID order by b.bgDate desc")
    List<Background> findAllByMedID(Long medID);
    @Query("select b from Background b where b.medicalRecord.medID = :medID and b.bgDate = :bgDate")
    Optional<Background> findByMedIDAndBackgroundDate(Long medID, LocalDate bgDate);
}
