package com.example.backend.models;

import com.example.backend.securities.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "prescriptions")
@NoArgsConstructor
@AllArgsConstructor
public class Prescription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pre_id")
    private Long preID;
    @Column(name = "pre_medicine")
    private String preMedicine;
    @Column(name = "pre_dosage")
    private Integer preDosage;
    @Column(name = "pre_duration")
    private String preDuration;
    @Column(name = "pre_notes")
    private String preNotes;
    @Column(name = "pre_doctor")
    private String preDoctor;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;
    // medicine, dosage, duration, notes, doctor
}
