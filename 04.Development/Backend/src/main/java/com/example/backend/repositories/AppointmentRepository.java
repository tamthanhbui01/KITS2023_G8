package com.example.backend.repositories;

import com.example.backend.models.Appointment;
import com.example.backend.models.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
    @Query("""
        select a from Appointment a 
        inner join UserProfile up on a.userProfile.upID = up.upID
        where up.user.userID = :userID
            and a.appStatus like :appointmentStatus 
        order by a.appDate, a.appTime desc 
    """)
    List<Appointment> findAllAppointmentOfThis(Long userID, String appointmentStatus);

    @Query("""
        select up from UserProfile up where up.user.userID = :userID
    """)
    Optional<UserProfile> findUserProfileByUserID(Long userID);
}
