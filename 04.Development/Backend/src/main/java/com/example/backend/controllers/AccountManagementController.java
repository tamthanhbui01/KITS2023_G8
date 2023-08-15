package com.example.backend.controllers;

import com.example.backend.controllers.controller_requests.ChangePasswordRequest;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1.0/account-management")
public class AccountManagementController {
    @PostMapping("change-password")
    public String changePassword(@RequestBody ChangePasswordRequest changePasswordRequest){
        return "Change User Password";
    }
    @PutMapping("update-account/{userID}")
    public String updateAccount(@PathVariable Long userID){
        return "update account";
    }
    @DeleteMapping("delete-account/{userID}")
    public String deleteAccount(@PathVariable Long userID){
        return "delete account";
    }
}
