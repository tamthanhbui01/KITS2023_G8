package com.example.backend.services.classes;

import com.example.backend.controllers.controller_requests.CreateAppointmentRequest;
import com.example.backend.models.Appointment;
import com.example.backend.models.UserProfile;
import com.example.backend.repositories.AppointmentRepository;
import com.example.backend.services.interfaces.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class AppointmentServiceImpl implements AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;
    @Override
    public List<Appointment> getAllAppointments(Long userID, int pageNo, int pageSize, String appointmentStatus) {
        appointmentStatus = "%" + appointmentStatus;
        List<Appointment> allAppointments = appointmentRepository.findAllAppointmentOfThis(userID, appointmentStatus);
        int totalPage = Math.floorDiv(allAppointments.size(), pageSize) + 1;
        if(pageNo > totalPage) return null;
        //Phan trang cho danh sach appointments
        int startAppointment = (pageNo - 1) * pageSize;
        int endAppointment = pageNo * pageSize;
        List<Appointment> appointments = new ArrayList<>();
        for (int i = startAppointment; i < endAppointment; i++){
            appointments.add(allAppointments.get(i));
        }
        return appointments;
    }

    @Override
    public String createAppointment(Long userID, CreateAppointmentRequest createAppointmentRequest) {
        try{
            UserProfile userProfile = appointmentRepository.findUserProfileByUserID(userID).orElseThrow();
            Appointment appointment = new Appointment(createAppointmentRequest.getAppAddress(),
                    createAppointmentRequest.getAppDate(),
                    createAppointmentRequest.getAppTime(),
                    createAppointmentRequest.getAppInstitute(),
                    createAppointmentRequest.getAppDescription(),
                    createAppointmentRequest.getAppSpecialization(),
                    createAppointmentRequest.getAppDoctorName(),
                    createAppointmentRequest.getAppStatus(),
                    userProfile);
            appointmentRepository.save(appointment);
            return "Create an appointment successfully!";
        } catch (NoSuchElementException e){
            return "Account not exists!";
        }
    }

    @Override
    public String updateAppointment(Long appointmentID, CreateAppointmentRequest createAppointmentRequest) {
        Appointment appointment = appointmentRepository.findById(appointmentID).orElseThrow();
        appointment.setAppAddress(createAppointmentRequest.getAppAddress());
        appointment.setAppDate(createAppointmentRequest.getAppDate());
        appointment.setAppTime(createAppointmentRequest.getAppTime());
        appointment.setAppInstitute(createAppointmentRequest.getAppInstitute());
        appointment.setAppDescription(createAppointmentRequest.getAppDescription());
        appointment.setAppSpecialization(createAppointmentRequest.getAppSpecialization());
        appointment.setAppDoctorName(createAppointmentRequest.getAppDoctorName());
        appointmentRepository.save(appointment);
        return "Update an appointment successfully!";
    }

    @Override
    public String cancelAppointment(Long appointmentID) {
        Appointment appointment = appointmentRepository.findById(appointmentID).orElseThrow();
        appointment.setAppStatus("canceled");
        appointmentRepository.save(appointment);
        return "Canceled an appointment successfully!";
    }
}
