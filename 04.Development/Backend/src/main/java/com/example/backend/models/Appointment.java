package com.example.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@Entity
@Table(name = "appointments")
@NoArgsConstructor
@AllArgsConstructor
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "app_id")
    private Long appID;
    @Column(name = "app_address")
    private String appAddress;
    @Column(name = "app_datetime")
    private LocalDateTime appDatetime;
    @Column(name = "app_institute")
    private String appInstitute;
    @Column(name = "app_description")
    private String appDescription;
    @Column(name = "app_specialization")
    private String appSpecialization;
    @Column(name = "app_doctorname")
    private String appDoctorName;
    @Column(name = "app_status")
    private String appStatus;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "up_id", referencedColumnName = "up_id")
    private UserProfile userProfile;

    public Appointment(String appAddress, LocalDateTime appDatetime,
                       String appInstitute, String appDescription, String appSpecialization,
                       String appDoctorName, String appStatus, UserProfile userProfile) {
        this.appAddress = appAddress;
        this.appDatetime = appDatetime;
        this.appInstitute = appInstitute;
        this.appDescription = appDescription;
        this.appSpecialization = appSpecialization;
        this.appDoctorName = appDoctorName;
        this.appStatus = appStatus;
        this.userProfile = userProfile;
    }

    // address, date, time, institute, description, specialization, doctor name
}
