package com.example.backend.repositories;

import com.example.backend.models.Reminder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReminderRepository extends JpaRepository<Reminder, Long> {
    @Query("""
        select r from Reminder r, RemindAppointment ra, Appointment a, User u
        where a.user.userID = u.userID and u.userID = :userID
            and a.appID = ra.appointment.appID
            and ra.remID = r.remID
        order by r.remDatetime desc
    """)
    List<Reminder> findAllByUserIDForRemindAppointment(Long userID);

    @Query("""
        select r from Reminder r, TakeMedicine tm, Prescription p
        where p.user.userID = :userID
            and p.preID = tm.prescription.preID
            and tm.remID = r.remID
        order by r.remDatetime desc
    """)
    List<Reminder> findAllByUserIDForTakeMedicine(Long userID);

    @Query("""
        select r from Reminder r, Other o
        where o.user.userID = :userID
            and o.remID = r.remID
        order by r.remDatetime desc
    """)
    List<Reminder> findAllByUserIDForOther(Long userID);
    @Query(" select r from Reminder r where r.remID =:remID")
    Optional<Reminder> findByRemID(Long remID);
}
