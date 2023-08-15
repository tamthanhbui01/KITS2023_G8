package com.example.backend.services.interfaces;

import com.example.backend.controllers.controller_requests.CreateAppointmentRequest;
import com.example.backend.models.Appointment;

import java.util.List;

public interface AppointmentService {
    List<Appointment> getAllAppointments(Long userID, int pageNo, int pageSize, String appointmentStatus);

    String createAppointment(Long userID, CreateAppointmentRequest createAppointmentRequest);

    String updateAppointment(Long appointmentID, CreateAppointmentRequest createAppointmentRequest);

    String cancelAppointment(Long appointmentID);
}
