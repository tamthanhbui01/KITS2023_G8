package com.example.backend.services.classes;

import com.example.backend.controllers.controller_requests.ReminderRequest;
import com.example.backend.controllers.controller_responses.FindFromUserResponse;
import com.example.backend.enums.ReminderEnum;
import com.example.backend.generics.Pagination;
import com.example.backend.models.*;
import com.example.backend.repositories.*;
import com.example.backend.securities.user.User;
import com.example.backend.securities.user.UserRepository;
import com.example.backend.services.interfaces.ReminderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ReminderServiceImpl implements ReminderService {
    @Autowired
    private ReminderRepository reminderRepository;
    @Autowired
    private RemindAppointmentRepository remindAppointmentRepository;
    @Autowired
    private TakeMedicineRepository takeMedicineRepository;
    @Autowired
    private OtherRepository otherRepository;
    @Autowired
    private AppointmentRepository appointmentRepository;
    @Autowired
    private PrescriptionRepository prescriptionRepository;
    @Autowired
    private UserRepository userRepository;

    // Cac ham xu ly getAllreminders:
    private List<Reminder> remindAppointments (Long userID) {
        return reminderRepository.findAllByUserIDForRemindAppointment(userID);
    }
    private List<Reminder> takeMedicines (Long userID) {
        return reminderRepository.findAllByUserIDForTakeMedicine(userID);
    }
    private List<Reminder> others(Long userID) {
        return reminderRepository.findAllByUserIDForOther(userID);
    }
    @Override
    public FindFromUserResponse<Reminder> getAllReminders(Long userID, int pageNo, int pageSize, ReminderEnum reminderEnum) {
        List<Reminder> allReminders;
        if(reminderEnum == ReminderEnum.REMIND_APPOINTMENTS){
            allReminders = this.remindAppointments(userID);
        }
        else if(reminderEnum == ReminderEnum.TAKE_MEDICINES){
            allReminders = this.takeMedicines(userID);
        }
        else if(reminderEnum == ReminderEnum.OTHERS) {
            allReminders = this.others(userID);
        }
        else if(reminderEnum == null) {
            allReminders = new ArrayList<>();
            allReminders.addAll(this.remindAppointments(userID));
            allReminders.addAll(this.takeMedicines(userID));
            allReminders.addAll(this.others(userID));
            // Sap xep lai theo datetime
            Collections.sort(allReminders, new Comparator<Reminder>() {
                @Override
                public int compare(Reminder o1, Reminder o2) {
                    return o2.getRemDatetime().compareTo(o1.getRemDatetime());
                }
            });
        } else {
            return null;
        }

        Pagination<Reminder> pagination = new Pagination<>();
        List<Reminder> reminders = pagination.pagination(allReminders, pageNo, pageSize);
        return new FindFromUserResponse<>(
                reminders,
                pageNo,
                pageSize,
                Math.floorDiv(allReminders.size(), pageSize) + 1,
                allReminders.size());
    }

    @Override
    public Reminder getSingleReminder(Long remID) {
        return reminderRepository.findById(remID).orElseThrow();
    }

    @Override
    public String createReminder(Long userID, Long appID, Long preID, ReminderEnum reminderEnum, ReminderRequest reminderRequest) throws NoSuchElementException {
        Reminder reminder = new Reminder();
        reminder.setRemDatetime(reminderRequest.getDateTime());
        reminder.setRemMessage(reminderRequest.getMessage());
        reminder.setRemType(reminderEnum);

        reminderRepository.save(reminder);

        if(reminderEnum == ReminderEnum.REMIND_APPOINTMENTS) {
            Appointment appointment = appointmentRepository.findById(appID).orElseThrow();

            RemindAppointment remindAppointment = new RemindAppointment();
            remindAppointment.setReminder(reminder);
            remindAppointment.setAppointment(appointment);
            remindAppointmentRepository.save(remindAppointment);
            return "Successfully!";
        }
        if(reminderEnum == ReminderEnum.TAKE_MEDICINES) {
            Prescription prescription = prescriptionRepository.findById(preID).orElseThrow();

            TakeMedicine takeMedicine = new TakeMedicine();
            takeMedicine.setReminder(reminder);
            takeMedicine.setPrescription(prescription);
            takeMedicineRepository.save(takeMedicine);
            return "Successfully!";
        }
        if(reminderEnum == ReminderEnum.OTHERS) {
            User user = userRepository.findByUserID(userID).orElseThrow();

            Other other = new Other();
            other.setReminder(reminder);
            other.setUser(user);

            otherRepository.save(other);
            return "Successfully!";
        }
        return "You have some wrong!";
    }

    @Override
    public String updateReminder(Long remID, ReminderRequest reminderRequest) throws NoSuchElementException {
        Reminder reminder = reminderRepository.findByRemID(remID).orElseThrow();
        reminder.setRemDatetime(reminderRequest.getDateTime());
        reminder.setRemMessage(reminderRequest.getMessage());
        reminderRepository.save(reminder);
        return "Successfully!";
    }

    @Override
    public String deleteReminder(Long remID) {
        reminderRepository.deleteById(remID);
        return "Delete successfully!";
    }
}
