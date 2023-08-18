package com.example.backend.services.classes;

import com.example.backend.controllers.controller_requests.BackgroundRequest;
import com.example.backend.controllers.controller_responses.FindFromUserResponse;
import com.example.backend.generics.Pagination;
import com.example.backend.models.Background;
import com.example.backend.models.MedicalRecord;
import com.example.backend.repositories.BackgroundRepository;
import com.example.backend.repositories.MedicalRecordRepository;
import com.example.backend.services.interfaces.BackgroundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class BackgroundServiceImpl implements BackgroundService {
    @Autowired
    private BackgroundRepository backgroundRepository;
    @Autowired
    private MedicalRecordRepository medicalRecordRepository;
    @Override
    public FindFromUserResponse<Background> getAllBackgrounds(Long userID, int pageNo, int pageSize) {
        List<Background> allBackGrounds = backgroundRepository.findAllByUserID(userID);
        //Phan trang
        Pagination<Background> pagination = new Pagination<>();
        List<Background> backgrounds = pagination.pagination(allBackGrounds, pageNo, pageSize);
        return new FindFromUserResponse<>(
                backgrounds,
                pageNo,
                pageSize,
                Math.floorDiv(allBackGrounds.size(), pageSize) + 1,
                allBackGrounds.size()
        );
    }

    @Override
    public Background getSingleBackground(Long userID, LocalDate bgDate) {
        return backgroundRepository.findByUserIDAndBackgroundDate(userID, bgDate);
    }

    @Override
    public String createBackground(Long userID, BackgroundRequest backgroundRequest) {
        MedicalRecord medicalRecord = medicalRecordRepository.findByUserID(userID);
        Background.BackgroundId id = new Background.BackgroundId(medicalRecord.getMedID(), LocalDate.now());
        backgroundRepository.save(new Background(id, medicalRecord, backgroundRequest.getBackgroundDescription()));
        return "create successfully!";
    }
}
