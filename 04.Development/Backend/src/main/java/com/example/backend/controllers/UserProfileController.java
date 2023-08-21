package com.example.backend.controllers;

import com.example.backend.controllers.controller_requests.UpdateUserProfileRequest;
import com.example.backend.models.UserProfile;
import com.example.backend.services.interfaces.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1.0/user/user-profile/{userID}")
public class UserProfileController {
    @Autowired
    private UserProfileService userProfileService;
    @GetMapping
    public UserProfile getUserProfile(@PathVariable Long userID) {
        return userProfileService.getUserProfile(userID);
    }
    @PutMapping
    public String updateUserProfile(@PathVariable Long userID, @RequestBody UpdateUserProfileRequest updateUserProfileRequest) {
        return userProfileService.updateUserProfile(userID, updateUserProfileRequest);
    }
}
