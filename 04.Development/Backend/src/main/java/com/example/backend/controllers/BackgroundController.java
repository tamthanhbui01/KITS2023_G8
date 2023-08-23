package com.example.backend.controllers;

import com.example.backend.controllers.controller_requests.BackgroundRequest;
import com.example.backend.controllers.controller_responses.FindFromUserResponse;
import com.example.backend.models.Background;
import com.example.backend.services.interfaces.BackgroundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("api/v1.0/user/background/{medID}")
public class BackgroundController {
    @Autowired
    private BackgroundService backgroundService;
    @GetMapping
    public FindFromUserResponse<Background> getAllBackgrounds(@PathVariable Long medID, @RequestParam int pageNo, @RequestParam int pageSize) {
        return backgroundService.getAllBackgrounds(medID, pageNo, pageSize);
    }
    @GetMapping("{bgDate}")
    public Background getSingleBackground(@PathVariable Long medID, @PathVariable LocalDate bgDate) {
        return backgroundService.getSingleBackground(medID, bgDate);
    }
    @PostMapping
    public String createBackground(@PathVariable Long medID, @RequestBody BackgroundRequest backgroundRequest) {
        return backgroundService.createBackground(medID, backgroundRequest);
    }
    @PutMapping
    public String updateBackground(@PathVariable Long medID, @RequestBody BackgroundRequest backgroundRequest) {
        return backgroundService.updateBackground(medID, backgroundRequest);
    }
}
