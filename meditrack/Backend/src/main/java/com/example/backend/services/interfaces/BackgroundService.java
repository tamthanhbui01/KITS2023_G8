package com.example.backend.services.interfaces;

import com.example.backend.controllers.controller_requests.BackgroundRequest;
import com.example.backend.controllers.controller_responses.FindFromUserResponse;
import com.example.backend.models.Background;

import java.time.LocalDate;

public interface BackgroundService {
    FindFromUserResponse<Background> getAllBackgrounds(Long medID, int pageNo, int pageSize);

    Background getSingleBackground(Long medID, LocalDate bgDate);

    String createBackground(Long medID, BackgroundRequest backgroundRequest);

    String updateBackground(Long medID, BackgroundRequest backgroundRequest);
}
