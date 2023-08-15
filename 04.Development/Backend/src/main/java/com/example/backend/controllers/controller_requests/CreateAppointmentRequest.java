package com.example.backend.controllers.controller_requests;

import com.example.backend.models.UserProfile;
import jakarta.persistence.Column;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateAppointmentRequest {
    private String appAddress;
    private Date appDate;
    private String appTime;
    private String appInstitute;
    private String appDescription;
    private String appSpecialization;
    private String appDoctorName;
    private String appStatus;
}
