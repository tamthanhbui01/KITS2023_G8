package com.example.backend.services.interfaces;

import com.example.backend.controllers.controller_requests.ReminderRequest;
import com.example.backend.controllers.controller_responses.FindFromUserResponse;
import com.example.backend.enums.ReminderEnum;
import com.example.backend.models.Reminder;

public interface ReminderService {
    FindFromUserResponse<Reminder> getAllReminders(Long userID, int pageNo, int pageSize, ReminderEnum reminderEnum);

    Reminder getSingleReminder(Long remID);

    String createReminder(Long userID, Long appID, Long preID, ReminderEnum reminderEnum, ReminderRequest reminderRequest);

    String updateReminder(Long remID, ReminderRequest reminderRequest);

    String deleteReminder(Long remID);
}
