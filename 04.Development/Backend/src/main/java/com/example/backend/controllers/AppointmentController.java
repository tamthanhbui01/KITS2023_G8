package com.example.backend.controllers;

import com.example.backend.controllers.controller_requests.CreateAppointmentRequest;
import com.example.backend.enums.AppointmentStatusEnum;
import com.example.backend.models.Appointment;
import com.example.backend.services.interfaces.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1.0/{userID}/appointment")
public class AppointmentController {
    private final AppointmentService appointmentService;
    //User lấy thông tin tất cả cuộc hẹn
    @GetMapping
    public List<Appointment> getAllAppointments(@PathVariable Long userID,
                                                @RequestParam int pageNo,
                                                @RequestParam int pageSize,
                                                @RequestParam(required = false) AppointmentStatusEnum appointmentStatus) {
        return appointmentService.getAllAppointments(userID, pageNo, pageSize, appointmentStatus);
    }
    @PostMapping("create-appointment")
    public String createAppointment(@PathVariable Long userID, @RequestBody CreateAppointmentRequest createAppointmentRequest) {
        return appointmentService.createAppointment(userID, createAppointmentRequest);
    }

    @PutMapping("update-appointment/{appointmentID}")
    public String updateAppointment(@PathVariable Long appointmentID, @RequestBody CreateAppointmentRequest createAppointmentRequest) {
        return appointmentService.updateAppointment(appointmentID, createAppointmentRequest);
    }

    @PutMapping("cancel-appointment/{appointmentID}")
    public String cancelAppointment(@PathVariable Long appointmentID){
        return appointmentService.cancelAppointment(appointmentID);
    }
}
