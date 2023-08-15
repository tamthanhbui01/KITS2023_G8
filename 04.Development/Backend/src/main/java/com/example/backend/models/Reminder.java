package com.example.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Entity
@Table(name = "reminders")
@NoArgsConstructor
@AllArgsConstructor
public class Reminder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rem_id")
    private Long remID;
    @Column(name = "rem_type")
    private String remType;
    @Column(name = "rem_date")
    private Date remDate;
    @Column(name = "rem_time")
    private String remTime;
    @Column(name = "rem_message")
    private String remMessage;
    @ManyToOne
    @JoinColumn(name = "app_id", referencedColumnName = "app_id")
    private Appointment appointment;
    @ManyToOne
    @JoinColumn(name = "pre_id", referencedColumnName = "pre_id")
    private Prescription prescription;
    // type, datetime, message, app_id, pre_id
}
