package com.example.backend.services.interfaces;


import com.example.backend.controllers.controller_requests.UpdateUserProfileRequest;
import com.example.backend.models.UserProfile;
import com.example.backend.securities.user.User;

public interface UserProfileService {
    UserProfile getUserProfile(Long userID);

    void createUserProfile(User user);

    String updateUserProfile(Long userID, UpdateUserProfileRequest updateUserProfileRequest);

}
