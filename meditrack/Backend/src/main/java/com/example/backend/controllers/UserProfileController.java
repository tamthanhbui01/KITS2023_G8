package com.example.backend.controllers;

import com.example.backend.controllers.controller_requests.UserProfileRequest;
import com.example.backend.models.UserProfile;
import com.example.backend.services.interfaces.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1.0/user/user-profile")
public class UserProfileController {
    @Autowired
    private UserProfileService userProfileService;
    @GetMapping("get-all/{userID}")
    public List<UserProfile> getUserProfile(@PathVariable Long userID) {
        return userProfileService.getUserProfile(userID);
    }
    @GetMapping("get-single/{upID}")
    public UserProfile getSingleUserProfile(@PathVariable Long upID){
        return userProfileService.getSingleUserProfile(upID);
    }
    @PostMapping("{userID}")
    public String createUserProfile(@PathVariable Long userID, @RequestBody UserProfileRequest userProfileRequest) {
        return userProfileService.createUserProfile(userID, userProfileRequest);
    }
    @PutMapping("{upID}")
    public String updateUserProfile(@PathVariable Long upID, @RequestBody UserProfileRequest userProfileRequest) {
        return userProfileService.updateUserProfile(upID, userProfileRequest);
    }
    @DeleteMapping("{upID}")
    public String deleteUserProfile(@PathVariable Long upID) {
        return userProfileService.deleteUserProfile(upID);
    }
}
