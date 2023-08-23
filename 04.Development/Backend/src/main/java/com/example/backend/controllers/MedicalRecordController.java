package com.example.backend.controllers;

import com.example.backend.controllers.controller_requests.UpdateMedicalRequest;
import com.example.backend.models.MedicalRecord;
import com.example.backend.services.interfaces.MedicalRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1.0/user/medical-record/{upID}")
public class MedicalRecordController {
    @Autowired
    private MedicalRecordService medicalRecordService;
    @GetMapping
    public MedicalRecord getMedicalRecord(@PathVariable Long upID) {
        return medicalRecordService.getMedicalRecord(upID);
    }
    @PutMapping
    public String updateMedicalRecord(@PathVariable Long upID, @RequestBody UpdateMedicalRequest updateMedicalRequest) {
        return medicalRecordService.updateMedicalRecord(upID, updateMedicalRequest);
    }
}
