package com.example.backend.services.classes;

import com.example.backend.controllers.controller_requests.UpdateUserProfileRequest;
import com.example.backend.models.UserProfile;
import com.example.backend.repositories.UserProfileRespository;
import com.example.backend.securities.user.User;
import com.example.backend.services.interfaces.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserProfileServiceImpl implements UserProfileService {
    @Autowired
    private UserProfileRespository userProfileRespository;
    @Override
    public UserProfile getUserProfile(Long userID) {
        return userProfileRespository.findByUserID(userID).orElseThrow();
    }

    @Override
    public void createUserProfile(User user) {
        UserProfile userProfile = new UserProfile();
        userProfile.setUser(user);
        userProfileRespository.save(userProfile);
    }

    @Override
    public String updateUserProfile(Long userID, UpdateUserProfileRequest updateUserProfileRequest) {
        UserProfile userProfile = userProfileRespository.findByUserID(userID).orElseThrow();

        userProfile.setUpName(updateUserProfileRequest.getName());
        userProfile.setUpDoB(updateUserProfileRequest.getDob());
        userProfile.setUpPhone(updateUserProfileRequest.getPhone());
        userProfile.setUpGender(updateUserProfileRequest.getGender());
        userProfile.setUpIDCode(updateUserProfileRequest.getIdcode());

        userProfileRespository.save(userProfile);
        return "Update successfully";
    }
}
