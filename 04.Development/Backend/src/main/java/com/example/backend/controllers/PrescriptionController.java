package com.example.backend.controllers;

import com.example.backend.controllers.controller_requests.CreateOrUpdatePrescriptionRequest;
import com.example.backend.controllers.controller_responses.FindFromUserResponse;
import com.example.backend.models.Prescription;
import com.example.backend.services.interfaces.PrescriptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1.0/prescription/{userID}")
public class PrescriptionController {
    @Autowired
    private PrescriptionService prescriptionService;
    @GetMapping
    public FindFromUserResponse<Prescription> getAllPrescriptions(
            @PathVariable Long userID,
            @RequestParam int pageNo,
            @RequestParam int pageSize
    ){
        return prescriptionService.getAllPrescriptions(userID, pageNo, pageSize);
    }
    @GetMapping("{preID}")
    public Prescription getSinglePrescription(@PathVariable Long preID) {
        return prescriptionService.getSinglePrescription(preID);
    }
    @PostMapping
    public String createPrescription(@PathVariable Long userID, @RequestBody CreateOrUpdatePrescriptionRequest createPrescriptionRequest) {
        return prescriptionService.createPrescription(userID, createPrescriptionRequest);
    }
    @PutMapping("{preID}")
    public String updatePrescription(@PathVariable Long preID, @RequestBody CreateOrUpdatePrescriptionRequest updatePrescriptionRequest) {
        return prescriptionService.updatePrescription(preID, updatePrescriptionRequest);
    }
    @DeleteMapping("{preID}")
    public String deletePrescription(@PathVariable Long preID) {
        return prescriptionService.deletePrescription(preID);
    }
}
