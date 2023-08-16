package com.example.backend.services.classes;

import com.example.backend.controllers.controller_requests.CreateAppointmentRequest;
import com.example.backend.generics.Pagination;
import com.example.backend.models.Appointment;
import com.example.backend.models.UserProfile;
import com.example.backend.repositories.AppointmentRepository;
import com.example.backend.services.interfaces.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
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

        //Phan trang cho danh sach appointments
        Pagination<Appointment> pagination = new Pagination<Appointment>();
        List<Appointment> appointments = pagination.pagination(allAppointments, pageNo, pageSize);
        return appointments;
    }
    // hàm xử lý chuỗi string thời gian sang LocalDatetime
    public LocalDateTime handleDatetime(String datetime) {
        //Xử lý appDatetime từ string thành LocalDateTime
        String[] datetimes = datetime.split(" ");

        // Xử lý date
        String[] dates = datetimes[0].split("/");
        int day = Integer.parseInt(dates[0]);
        int month = Integer.parseInt(dates[1]);
        int year = Integer.parseInt(dates[2]);

        // Xử lý time
        String[] times = datetimes[1].split("-");
        int hour = Integer.parseInt(times[0]);
        int minute = Integer.parseInt(times[1]);
        int second = Integer.parseInt(times[2]);

        return LocalDateTime.of(year, month, day, hour, minute, second);
    }

    @Override
    public String createAppointment(Long userID, CreateAppointmentRequest createAppointmentRequest) {
        try{
            UserProfile userProfile = appointmentRepository.findUserProfileByUserID(userID).orElseThrow();

            // Tạo Appointment
            Appointment appointment = new Appointment(createAppointmentRequest.getAppAddress(),
                    handleDatetime(createAppointmentRequest.getAppDatetime()),
                    createAppointmentRequest.getAppInstitute(),
                    createAppointmentRequest.getAppDescription(),
                    createAppointmentRequest.getAppSpecialization(),
                    createAppointmentRequest.getAppDoctorName(),
                    "ONGOING",
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
        handleDatetime(createAppointmentRequest.getAppDatetime());
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
        appointment.setAppStatus("CANCELED");
        appointmentRepository.save(appointment);
        return "Canceled an appointment successfully!";
    }
}
