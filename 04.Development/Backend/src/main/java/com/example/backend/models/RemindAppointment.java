package com.example.backend.models;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class RemindAppointment extends Reminder{
    @ManyToOne
    @JoinColumn(name = "app_id", referencedColumnName = "app_id")
    private Appointment appointment;
}
